# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

# API Endpoints

## Products

**POST request "/newproduct" : to create new product in database**

    - You will send json object in post request like this:

> {
> "name":"Samsung A51",
> "price":5500,
> "category":1
> }

    - You will need to send also access token in header

**GET request "/allproduct": to get all product in database**

    - You will need to send access token in header

**GET request "/specificproduct/:id" : to get specific product**

     - You will replace :id param by adding number of product
     - You will need to send access token in header

## Users

**POST request "/newuser" : to create new user in database**

    - You will send json object in post request like this:

> {
>
> "firstName":"Mohammed",
>
> "lastName":"Salah",
>
> "password":"Mohammed123#"
>
> }

**POST request "/authuser": to authorization the user and get access token**

     - You will send json object in post request like this:

> {
>
> "id":1,
>
> "password":"Mohammed123#"
>
> }

**GET request "/showalluser" : to get all user**

     - You will need to send access token in header

**GET request "/showspecuser/:id" : to get specific user**

     - You will replace :id param by adding number of user
     - You will need to send access token in header

## Orders

**POST request "/tocard": to add product to shopping card**

    - You will send json object in post request like this:

> {
>
> "product_ID":1,
>
> "user_ID":1,
>
> "quantity":2,
>
> "status":"Active"
>
> }

    - You will need to send access token in header

**POST request "/makeorder": to confirm your order and change status from database**

    - You will send json object in post request like this:

> {
> "userID":2,
> "orderId":5
> }

    - You will need to send access token in header

**GET request "/allorderproduct": to display all order product**

    - You will need to send access token in header

## Data Shapes

![Database schema](https://i.ibb.co/KsJZWRh/Untitled-3.png)

#### Product

                            | Table "public.product" |

| Column   | Type                   | Collation | Nullable | Default                             |
| -------- | ---------------------- | --------- | -------- | ----------------------------------- |
| id       | integer                |           | not null | nextval('product_id_seq'::regclass) |
| name     | character varying(100) |           | not null |
| price    | integer                |           | not null |
| category | character varying(50)  |           | not null |

Indexes:
"product_pkey" PRIMARY KEY, btree (id)
Referenced by:
TABLE "orders" CONSTRAINT "orders_product_ID_fkey" FOREIGN KEY ("product_ID") REFERENCES product(id)

#### User

                        | Table "public.username" |

| Column    | Type                  | Collation | Nullable | Default                              |
| --------- | --------------------- | --------- | -------- | ------------------------------------ |
| id        | integer               |           | not null | nextval('username_id_seq'::regclass) |
| firstname | character varying(50) |           | not null |
| lastname  | character varying(50) |           | not null |
| password  | text                  |           | not null |

Indexes:
"username_pkey" PRIMARY KEY, btree (id)
Referenced by:
TABLE "orders" CONSTRAINT "orders_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES username(id)

#### Orders

                        | Table "public.orders" |

| Column     | Type                  | Collation | Nullable | Default |
| ---------- | --------------------- | --------- | -------- | ------- |
| id         | integer               |           | not null |
| product_ID | integer               |           | not null |
| user_ID    | integer               |           | not null |
| quantity   | integer               |           | not null |
| status     | character varying(50) |           | not null |

Foreign-key constraints:
"orders_product_ID_fkey" FOREIGN KEY ("product_ID") REFERENCES product(id)
"orders_user_ID_fkey" FOREIGN KEY ("user_ID") REFERENCES username(id)

#### Order_Product

                        | Table "public.order_product" |

| Column    | Type    | Collation | Nullable | Default |
| --------- | ------- | --------- | -------- | ------- |
| userid    | integer |           | not null |
| productid | integer |           | not null |

Foreign-key constraints:
"order_product_productid_fkey" FOREIGN KEY (productid) REFERENCES product(id)
"order_product_userid_fkey" FOREIGN KEY (userid) REFERENCES username(id)
