-- Comments in SQL Start with dash-dash --
INSERT INTO products (name, price, can_be_returned) VALUES ('chair', 44.00, False);
INSERT INTO products (name, price, can_be_returned) VALUES ('stool', 25.99, True);
INSERT INTO products (name, price, can_be_returned) VALUES ('table', 124.00, False);
SELECT * FROM products;
SELECT name FROM products;
SELECT name, price FROM products;
INSERT INTO products (name, price, can_be_returned) VALUES ('vase', 65.00, False);
SELECT * FROM products WHERE can_be_returned = 't';
SELECT * FROM products WHERE price < 44.00;
SELECT * FROM products WHERE price IS BETWEEN 22.50 AND 99.99;
UPDATE products SET price = price - 20;
DELETE FROM products WHERE price < 25;
UPDATE products SET price = price + 20;
UPDATE products SET can_be_returned = 't';