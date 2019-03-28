update product 
set name = $2
set description = $3
set price = $4
set image_url = $5
where product_id = $1