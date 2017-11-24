json.data(@transactions) do |transaction|
  json.extract!transaction, :txnid, :username, :product_zone, :product, :brand, :model, :quantity, :amount, :date
end

