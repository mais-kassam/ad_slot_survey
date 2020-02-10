- How would you go about investigating the issue?

The first step that I would probably take is to make sure that the developer tools are up on the incognito browser to ensure that there is no mistake in calling the addon or PageView event. Although simple, the implementation may be incorrect. For example ensuring that the API is called after the Document has loaded so that the data from the page that has loaded can be parsed into the Permutive server request. Secondly I would replicate what a user is doing, check the Permutive response and ensure that the requests are being accepted by the API.

It will then be important to check to make sure that there were no blips at the time preventing the API call from sending out. This will involve checking the following.

1) Check the Hosting
2) Check the web server
3) Check the database to make sure that the data pulled through


- What factors could cause Permutive to load more slowly than DFP ads?

1) Permutive server issues.
2) Network issues on the client (browser).
3) Rare conditions whereby the Permutive script in some cases can load after the DFP ads script.


- Are there things the publisher may be able to change with their website/deployment, to improve the situation?

1) Ensure the Permutive script is loaded in the <head> of the HTML
2) Yes, for example they could add a 'defer' attribute to the DFP ads script so it loads later and an 'async' attribute to the Permutive snippet, which could ensure that the Permutive snippet loads beforehand. Could also be done by using Promises so that Permutive loads first, then use .then() to load the DFP script.


- Are there things we may be able to change on our end, to make Permutive load faster?

1) Yes, such as using a CDN to serve the content that goes into the page, so that the best server is providing content to the browser.
2) Minify and compress the code to reduce the download speed
