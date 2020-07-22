class CreateSecurities < ActiveRecord::Migration[6.0]
  def change
    create_table :securities do |t|
      t.references :portfolio, null: false, foreign_key: true
      t.string :ticker
      t.integer :price
      t.integer :ftWH
      t.integer :ftWL
      t.integer :purchase_price
      t.integer :position_size

      t.timestamps
    end
  end
end
