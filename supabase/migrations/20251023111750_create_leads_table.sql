/*
  # Create leads table for real estate contact forms

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Full name of the potential client
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number (optional)
      - `message` (text) - Inquiry message from the lead
      - `created_at` (timestamptz) - Timestamp when lead was submitted
  
  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting leads (allows anyone to submit)
    - No read policies (leads are private to admin only)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  property_config text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a lead (for contact form)
CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);