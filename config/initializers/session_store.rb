# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_git-cheatsheet_session',
  :secret      => '8db6e2b77f221aca936b8075a723a376f59dbadfff4d5dc740400f82336a9e66b4793e7f1f8c1d5763c72dbbe7646370468dd37a2b9cd4756e78c7ed1bcc895a'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
