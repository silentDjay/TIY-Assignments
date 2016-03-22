#How do I make API requests?#
###What is the base URL for all requests?###

_the base URL for all requests is 'https://openapi.etsy.com/v2'. 'v2' is the current live version of the API._

###Are there any headers or query parameters required?###

_Yes! For example, ID parameters for items must be present in the request URL. In addition, the name of the type of thing you're looking to target, like 'users' or 'listings' must also be present in your request URL._

###What kind of response should I expect?###

_You should expect a response in either JSON or JSONP format depending on which type of request you've made. The result of your query will be listed in the array under key value "results" at the root level of the returned object. You should also expect standard HTTP request codes, like 200 for Ok or 404 for 'not found'._

#How does the API handle authentication?#

_There are public endpoints within the API that only require an API key, but for those portions that do require authentication, the Etsy API uses OAuth._

###Do I need to authenticate with user credentials?###

_Only if you are fetching information about a particular user's etsy account_
###What can I do with an unauthenticated request?###

_You can GET information from any public API endpoint, for example this request URL, which fetches all users: https://openapi.etsy.com/v2/users/etsystore?api_key=your_api_key and must include your API key in the request_

###How can I authenticate my request? (what methods)###

_First, you will get temporary credentials to make the initial call. When the call is returned, you will exchange your temporary credentials with permanent ones (including the access key you were given when registering your app)_

#What Resource in the API represents...#

###an individual product?###

_listing_

###a group or collection of products?###

_listings_

###images associated with a product?###

_images_

###sizes and colors for a product?###
##What actions and endpoints exist for each of these Resources?##
##What parameters do each endpoint require or accept?##
##What fields are returned for each Resource, specifically:##
###an individual product?###
###a group or collection of products?###
##What additional fields can be requested for each?##
