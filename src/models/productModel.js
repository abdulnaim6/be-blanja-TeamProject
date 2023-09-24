const db = require("../configs/db.js");

const selectAllProducts = (search, sort, limit, offset) => {
	return db.query(`
	SELECT * FROM product 
	WHERE product.name LIKE '%${search}%'
	ORDER BY product.name ${sort}
	LIMIT ${limit}
	OFFSET ${offset}; 
	`);
};

const selectProduct = (id) => {
	return db.query(`SELECT * FROM product WHERE id=${id}`);
};

const insertProduct = (data) => {
	const {
		name,
		image,
		price,
		color,
		size,
		stock,
		rating,
		condition,
		description,
		seller_id,
		category_id,
	} = data;

	return db.query(
		`INSERT INTO product (
      name,	
      image,
      price,
      color,
      size,
      stock,
      rating,
      condition,
      description,
      seller_id,
      category_id
    ) VALUES( '${name}', '${image}', ${price}, '${color}', '${size}', ${stock},'${rating}', '${condition}', '${description}', ${seller_id}, ${category_id})`,
	);
};

const updateProduct = (data) => {
	const {
		id,
		name,
		image,
		price,
		color,
		size,
		stock,
		rating,
		condition,
		description,
		category_id,
	} = data;

	return db.query(
		`UPDATE 
			product 
		SET  
			name = '${name}',
			image = '${image}', 
			price = ${price},
			color = '${color}',
			size = '${size}',
			stock = ${stock},
			rating = ${rating},
			condition = '${condition}',
			description = '${description}',
			category_id = ${category_id} 
		WHERE 
			id=${id}`,
	);
};

const deleteProduct = (id) => {
	return db.query(`DELETE FROM product WHERE id=${id}`);
};

const countDataProduct = () => {
	return db.query("SELECT COUNT(*) FROM product");
};

module.exports = {
	selectAllProducts,
	selectProduct,
	insertProduct,
	updateProduct,
	deleteProduct,
	countDataProduct,
};