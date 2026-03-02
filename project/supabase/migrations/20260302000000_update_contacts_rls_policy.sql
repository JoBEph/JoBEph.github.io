/*
  # Update contacts table RLS policy with stricter validation

  This migration replaces the overly permissive RLS policy with proper validation constraints.
*/

DROP POLICY IF EXISTS "Allow public contact form submissions" ON contacts;

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
