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
>
> "orderId":5
>
> }

    - You will need to send access token in header

## Data Shapes

#### Product

- id
- name
- price
- category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
