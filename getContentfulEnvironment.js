const dotenv = require('dotenv')
const contentfulManagement = require('contentful-management')

dotenv.config({ path: '.env.local' })

module.exports = function getContentfulEnvironment() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
}
