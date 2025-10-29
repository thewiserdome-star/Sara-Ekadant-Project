/*
  # Add property_config column to leads table

  1. Changes
    - Add `property_config` column to `leads` table
      - Type: text
      - Required field to capture property configuration from contact form
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'property_config'
  ) THEN
    ALTER TABLE leads ADD COLUMN property_config text NOT NULL DEFAULT '';
  END IF;
END $$;