#Gihub API questions#

How does the API handle authentication?

  _There are three ways that the GitHub API handles authentication: Basic, with an OAuth2 Token, or with an OAuth2 Key/Secret. Basic requires a curl command of https://api.github.com with -u "[yourusername]". An OAuth2 Token can be provided with a curl command either as a header (curl -H "Authorization: token OAUTH-TOKEN") or as a parameter (curl https://api.github.com/?access_token=OAUTH-TOKEN). An OAuth2 Key/Secret is provided as a parameter as well (curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy')._

  Do I need to authenticate?

    _
  What can I do with an unauthenticated request?
  How can I authenticate my request? (3 ways)
How do I ask the API for...
  The profile information for a specific user?
  The repository listing for a specific user?
  The recent, public activity for a specific user?
Is there a limit to the number of requests I can make?
  Is there a way of extending that limit?
  What happens when I hit the limit?
What if there is a lot of data returned?
  How can I ask for more (or less) data from a request?
  How do I know that there is more data available?
What are the endpoints for fetching...
  the profile data for a user?
  the organizations a user belongs to?
  the repositories a user has created?
  a filtered list of repositories?
  a sorted list of repositories?
  public events for a user?
When fetching public events for a user...
  How many results are returned by default?
  What limitations exist on fetching more results?
  What is the basic structure of the results?
  What fields are included in each result?
  What are the data types for each field?
  What are some of the different values for the type field?
