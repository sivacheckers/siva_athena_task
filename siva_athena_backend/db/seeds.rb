# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'transactions.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Transaction.new
  t.txnid = row['txnid']
  t.username = row['username']
  t.product_zone = row['product_zone']
  t.product = row['product']
  t.brand = row['brand']
  t.model = row['model']
  t.quantity = row['quantity']
  t.amount = row['amount']
  t.date = row['date']
  t.save
end

puts "There are now #{Transaction.count} rows in the transactions table"


