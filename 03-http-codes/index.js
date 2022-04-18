const express = require('express')
const app = express()
const routes = require('./routes')

//routes
app.use(('/'), routes)

//catching all and sending status codes
app.use((req, res, next) => {

    //only a part of the request has been received by the server, but as long as it has not been rejected, the client should continue with the request
    if (req = 'get request from /100/100')
    {
        res.sendStatus(100)
    }

    //the server switches protocol
    else if (req = 'get request from /100/101')
    {
        res.sendStatus(101)
    }

    //the request is OK
    else if (req = 'get request from /200/200')
    {
        res.sendStatus(200)
    }

    //the request is complete, and a new resource is created
    else if (req = 'get request from /200/201')
    {
        res.sendStatus(201)
    }

    //the request is accepted for processing, but the processing is not complete
    else if (req = 'get request from /200/202')
    {
        res.sendStatus(202)
    }

    //the information in the entity header is from a local or third-party copy, not from the original server
    else if (req = 'get request from /200/203')
    {
        res.sendStatus(203)
    }

    //a status code and a header are given in the response, but there is no entity-body in the reply
    else if (req = 'get request from /200/204')
    {
        res.sendStatus(204)
    }

    //the browser should clear the form used for this transaction for additional input
    else if (req = 'get request from /200/205')
    {
        res.sendStatus(205)
    }

    //the server is returning partial data of the size requested. Used in response to a request specifying a Range header; the server must specify the range included in the response with the Content-Range header
    else if (req = 'get request from /200/206')
    {
        res.sendStatus(206)
    }

    //a link list; the user can select a link and go to that location; maximum five addresses
    else if (req = 'get request from /300/300')
    {
        res.sendStatus(300)
    }

    //the requested page has moved to a new url
    else if (req = 'get request from /300/301')
    {
        res.sendStatus(301)
    }

    //the requested page has moved temporarily to a new url
    else if (req = 'get request from /300/302')
    {
        res.sendStatus(302)
    }

    //the requested page can be found under a different url
    else if (req = 'get request from /300/303')
    {
        res.sendStatus(303)
    }

    //this is the response code to an If-Modified-Since or If-None-Match header, where the URL has not been modified since the specified date
    else if (req = 'get request from /300/304')
    {
        res.sendStatus(304)
    }

    //the requested URL must be accessed through the proxy mentioned in the Location header
    else if (req = 'get request from /300/305')
    {
        res.sendStatus(305)
    }

    //this code was used in a previous version. It is no longer used, but the code is reserved
    else if (req = 'get request from /300/306')
    {
        res.sendStatus(306)
    }

    //the requested page has moved temporarily to a new url
    else if (req = 'get request from /300/307')
    {
        res.sendStatus(307)
    }

    //the server did not understand the request
    else if (req = 'get request from /400/400')
    {
        res.sendStatus(400)
    }

    //the requested page needs a username and a password
    else if (req = 'get request from /400/401')
    {
        res.sendStatus(401)
    }

    //payment required; no standard use convention exists
    else if (req = 'get request from /400/402')
    {
        res.sendStatus(402)
    }

    //access is forbidden to the requested page
    else if (req = 'get request from /400/403')
    {
        res.sendStatus(403)
    }

    //the server can not find the requested page
    else if (req = 'get request from /400/404')
    {
        res.sendStatus(404)
    }

    //the method specified in the request is not allowed
    else if (req = 'get request from /400/405')
    {
        res.sendStatus(405)
    }

    //the server can only generate a response that is not accepted by the client
    else if (req = 'get request from /400/406')
    {
        res.sendStatus(406)
    }

    //you must authenticate with a proxy server before this request can be served
    else if (req = 'get request from /400/407')
    {
        res.sendStatus(407)
    }

    //the request took longer than the server was prepared to wait
    else if (req = 'get request from /400/408')
    {
        res.sendStatus(408)
    }

    //the request could not be completed because of a conflict
    else if (req = 'get request from /400/409')
    {
        res.sendStatus(409)
    }

    //the requested page is no longer available
    else if (req = 'get request from /400/410')
    {
        res.sendStatus(410)
    }

    //the "Content-Length" is not defined; the server will not accept the request without it
    else if (req = 'get request from /400/411')
    {
        res.sendStatus(411)
    }

    //the precondition given in the request evaluated to false by the server
    else if (req = 'get request from /400/412')
    {
        res.sendStatus(412)
    }

    //the server will not accept the request, because the request entity is too large
    else if (req = 'get request from /400/413')
    {
        res.sendStatus(413)
    }

    //the server will not accept the request, because the url is too long
    else if (req = 'get request from /400/414')
    {
        res.sendStatus(414)
    }

    //the server will not accept the request, because the mediatype is not supported
    else if (req = 'get request from /400/415')
    {
        res.sendStatus(415)
    }

    //the requested byte range is not available and is out of bounds
    else if (req = 'get request from /400/416')
    {
        res.sendStatus(416)
    }

    //the expectation given in an Expect request-header field could not be met by this server
    else if (req = 'get request from /400/417')
    {
        res.sendStatus(417)
    }

    //the request was not completed; the server met an unexpected condition
    else if (req = 'get request from /500/500')
    {
        res.sendStatus(500)
    }

    //the request was not completed; the server did not support the functionality required
    else if (req = 'get request from /500/501')
    {
        res.sendStatus(501)
    }

    //the request was not completed; the server received an invalid response from the upstream server
    else if (req = 'get request from /500/502')
    {
        res.sendStatus(502)
    }

    //the request was not completed; the server is temporarily overloading or down
    else if (req = 'get request from /500/503')
    {
        res.sendStatus(503)
    }

    //the gateway has timed out
    else if (req = 'get request from /500/504')
    {
        res.sendStatus(504)
    }

    //the server does not support the "http protocol" version
    else if (req = 'get request from /500/505')
    {
        res.sendStatus(505)
    }
})

//starting server
app.listen(3000, () => {
    console.log("Server running.")
})