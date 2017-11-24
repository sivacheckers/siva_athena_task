json.extract! transaction, :id, :txnid, :username, :product_zone, :product, :brand, :model, :quantity, :amount, :date, :created_at, :updated_at
json.url transaction_url(transaction, format: :json)
