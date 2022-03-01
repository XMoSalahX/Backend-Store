CREATE TABLE order_product(userID integer REFERENCES Username(id) NOT NULL,ProductID integer REFERENCES Product(id) NOT NULL)
