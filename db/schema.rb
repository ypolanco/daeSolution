
ActiveRecord::Schema.define(version: 20_200_609_185_256) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'portfolios', force: :cascade do |t|
    t.string 'name'
    t.bigint 'user_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['user_id'], name: 'index_portfolios_on_user_id'
  end

  create_table 'securities', force: :cascade do |t|
    t.bigint 'portfolio_id', null: false
    t.string 'ticker'
    t.integer 'price'
    t.integer 'ftWH'
    t.integer 'ftWL'
    t.integer 'purchase_price'
    t.integer 'position_size'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['portfolio_id'], name: 'index_securities_on_portfolio_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'username'
    t.string 'email'
    t.string 'password_digest'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  add_foreign_key 'portfolios', 'users'
  add_foreign_key 'securities', 'portfolios'
end
