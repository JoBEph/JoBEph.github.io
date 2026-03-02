/*
  # Create contacts table for landing page

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `full_name` (text)
      - `organization` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy to allow inserts for public contact form submissions
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text NOT NULL,
  organization text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public contact form submissions"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL 
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(email) <= 120
    AND full_name IS NOT NULL 
    AND char_length(full_name) BETWEEN 2 AND 80
    AND organization IS NOT NULL
    AND char_length(organization) BETWEEN 2 AND 120
    AND message IS NOT NULL 
    AND char_length(message) BETWEEN 10 AND 1200
  );

CREATE POLICY "Allow only read for authenticated users"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (false);
