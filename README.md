# Shopify Product Fetcher

This Node.js script fetches products from a Shopify store using Shopify's GraphQL API based on a provided product name and lists the product variants sorted by price.

## Setup

1. Ensure you have the following
    - a Shopify Store with GraphQL Api Access
    - an Admin Api access token

2. Install the necessary dependancies
```npm install```

3. Create a .env file with your stores credentials
    - `SHOPIFY_STORE` The myshopify.com handle associated with your store for.  For example, the handle for `example-store.myshopify.com` would be `example-store`
    - `SHOPIFY_ACCESS_TOKEN`  An Admin api access token from the store.  Ensure you have `product-read` access for the token.


4. Run the script with the following command: 
```node app.js --name <product-name>```

5. Your output will be sorted by price and display as:

 ```
 <product-title> - <variant-title> - <variant-price>
```



