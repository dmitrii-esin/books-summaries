-- Draft Schema for Supabase

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE frameworks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL, -- e.g., 'Dual-Systems', 'Antifragility'
  description TEXT,
  base_mermaid_syntax TEXT, -- The default visual map
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE daily_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  framework_id UUID REFERENCES frameworks(id) ON DELETE CASCADE,
  log_date DATE NOT NULL,
  cognitive_state JSONB, -- Tracks custom user inputs
  updated_mermaid_syntax TEXT, -- Any personal modifications to the map
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
