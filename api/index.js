const axios = require("axios")
require("dotenv").config()

const shop = process.env.SHOPIFY_STORE
const access_token = process.env.SHOPIFY_ACCESS_TOKEN

const shopifyCall = async ({ query, variables }) => {
  try {
    const res = await axios.post(
      `https://${shop}.myshopify.com/admin/api/2024-07/graphql.json`,
      { query, variables },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": access_token,
        },
      }
    )
    return res.data.data
  } catch (error) {
    console.error(error)
  }
}

const fetchProductsByName = async productName => {
  try {
    const query = `
    query ($query: String!) {
      products(first: 25, query: $query) {
        edges {
          node {
            title
            variants(first: 100) {
              edges {
                node {
                  title
                  price
                }
              }
            }
          }
        }
      }
    }
    `
    const variables = {
      query: productName,
    }
    const res = await shopifyCall({ query, variables })
    return res.products.edges
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  shopifyCall,
  fetchProductsByName
}
