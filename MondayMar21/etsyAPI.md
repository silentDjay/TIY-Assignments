#How do I make API requests?#
###What is the base URL for all requests?###

_the base URL for all requests is `https://openapi.etsy.com/v2`. 'v2' is the current live version of the API._

###Are there any headers or query parameters required?###

_Yes! For example, ID parameters for items must be present in the request URL. In addition, the name of the type of thing you're looking to target, like 'users' or 'listings' must also be present in your request URL._

###What kind of response should I expect?###

_You should expect a response in either JSON or JSONP format depending on which type of request you've made. The result of your query will be listed in the array under key value "results" at the root level of the returned object. You should also expect standard HTTP request codes, like 200 for Ok or 404 for 'not found'._

#How does the API handle authentication?#

_There are public endpoints within the API that only require an API key, but for those portions that do require authentication, the Etsy API uses OAuth._

###Do I need to authenticate with user credentials?###

_Only if you are fetching information about a particular user's etsy account_
###What can I do with an unauthenticated request?###

_You can GET information from any public API endpoint, for example this request URL, which fetches all users: `https://openapi.etsy.com/v2/users/etsystore?api_key=your_api_key` and must include your API key in the request_

###How can I authenticate my request? (what methods)###

_First, you will get temporary credentials to make the initial call. When the call is returned, you will exchange your temporary credentials with permanent ones (including the access key you were given when registering your app)_

#What Resource in the API represents...#

###an individual product?###

_listings_

###a group or collection of products?###

_shops_

###images associated with a product?###

_images_

###sizes and colors for a product?###
##What actions and endpoints exist for each of these Resources?##

_You can specify that you only want active listings returned with the 'active' scope method, included in a URL like so: `.../v2/listings/active`._

_The endpoint for all requests begins with the base URL `https://openapi.etsy.com/v2` and the request is narrowed RESTfully_

_You can also specify associations to further narrow your requested

_Some examples:_

_`/v2/listings/active?includes=Images` will return active listings only if they have an associated image_

_`/v2/listings/active?includes=Images:1:0` will return only the first image of listings_

_And here is the general syntax for scope and associations included in request URLs, where elements in square brackets are optional:_

_`?includes=Association[(fieldname[,fieldname...])][:scope][:limit[:offset]][,Assocation...]`_

##What parameters do each endpoint require or accept?##

_For images, you can specify the size and color of the image returned with parameters in the URL, such as in this example: `/v2/listings/active?includes=Images(url_75x75,hex_code)`_

##What fields are returned for each Resource, specifically:##

###an individual product?###

_For listings, the fields which you specify in your request are the fields that are returned. For example, th request `.../v2/listings/active?fields=listing_id,title,price`
would return the listing_id, title, and price of each listing._

###a group or collection of products?###



##What additional fields can be requested for each?##
