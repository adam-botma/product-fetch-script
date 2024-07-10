const {displayProductInfo} = require('./utils/index')

const args = process.argv.slice(2)
const nameArgIndex = args.indexOf("--name")

//check for --name flag and search criteria then display results
if (nameArgIndex !== -1 && args[nameArgIndex + 1]) {
  const productName = args[nameArgIndex + 1]
  displayProductInfo(productName)
} else {
  console.log(`Use --name <product-name> to search`)
}




