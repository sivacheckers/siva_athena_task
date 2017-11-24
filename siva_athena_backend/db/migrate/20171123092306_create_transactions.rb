class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :txnid
      t.string :username
      t.string :product_zone
      t.string :product
      t.string :brand
      t.integer :model
      t.integer :quantity
      t.integer :amount
      t.date :date

      t.timestamps null: false
    end
  end
end
