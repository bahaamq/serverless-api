# serverless-api


Root URL:
https://xrxr793smh.execute-api.us-east-1.amazonaws.com/people/

- What are the routes? , what Input do they require , what output is expected ?
*- https://xrxr793smh.execute-api.us-east-1.amazonaws.com/people/

for All http methods , put,remove methods expect params in the URL , also get method can take with id to return a specific record or without to return All records , if you give delete a correct id it will return json object ({“done”:“Deleted!”}) , the update will update the record in db and return the updated one , the post,put expect body so for the post to be added and put , the updated text that will be used for the id that sent in the params.*