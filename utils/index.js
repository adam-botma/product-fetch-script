const { fetchProductsByName } = require("../api/index")

const sortVariantsByPrice = variants => {
  return variants.sort(
    (a, b) => a.price - b.price
  )
}

const displayProductInfo = async productName => {
  try {
    const products = await fetchProductsByName(productName)

    if (products.length > 0) {
      let allVariants = []

      products.forEach(product => {
        const { title, variants } = product.node
        variants.edges.forEach(variant => {
          allVariants.push({
            productTitle: title,
            variantTitle: variant.node.title,
            price: Number(variant.node.price),
          })
        })
      })

      const sortedVariants = sortVariantsByPrice(allVariants)

      sortedVariants.forEach(variant => {
        console.log(
          `${variant.productTitle} - ${variant.variantTitle} - $${variant.price}`
        )
      })

    } else {
      console.log(`No products named: ${productName}`)
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  displayProductInfo,
}
