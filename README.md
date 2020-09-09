# UbiApi

An all-in-one Uplay/Ubisoft API wrapper written for NodeJS

# Features

* Get Ubisoft news data
* That's basically it so far

# Usage
~~`npm install ubiapi`~~

^ not published yet :P

## Ubisoft Class
The `Ubisoft` class is used for basic requests as well as authentication. You'll notice that you need to provide an "appid" in the constructor. The easiest way to get this is to:

1. Open the developer tools on your web browser
2. If possible, filter URLs by the word "public" (we're looking for the URL "https://public-ubiservices.ubi.com")
3. Find an `iplocation` GET request (look out for OPTIONS requests, they won't have what you're looking for)
4. Find "Ubi-AppId" in the request headers

Here's an example of how it works:
```js
const uapi = require('ubiapi')
const ubi = new uapi.Ubisoft('yourappid')

async function getUbiNews() {
 return await ubi.getFeaturedNews()
}

getUbiNews()
```

# Todo

* Better news stuff (learning the filters and other params)
* User/profile specific data
* Game specific data (R6, For Honor, Division, etc.)
  * The goal is to support as many games as possible
* Forum stuff maybe?
