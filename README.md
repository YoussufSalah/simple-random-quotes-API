﻿# Light-Weight Random Qoutes API

## How to use:

-   First, in the terminal of your system run `git clone https://github.com/YoussufSalah/simple-random-qoutes-API.git`
-   Then, add the `Website URL` the you want to access the API from, and the `Port` in the enviroment variable ( I'll explain it later )
-   Run `cd simple-random-qoutes-API`.
-   Finally run `node index.js`, and we're done!

## Environment variables:

-   `USER_SITE` : Should have the url of your website that you will fetch the API in.
-   `PORT` : Should have the port of your host ( it's `3000` by default )

## Routes:

-   `/api/qoute` => Returns a random qoute.
    -   Example of returned object:
        ```json
        // http://localhost:3000/api/qoute

        {
            "status": "success",
            "data": {
                "randomQoute": {
                    "text": "In the end, it's not the years in your life that count, it's the life in your years.",
                    "author": "Abraham Lincoln",
                    "category": "life"
                }
            }
        }
        ```
-   `/api/qoute?category=` => Returns a random qoute in a specific category.
    -   Example of returned object:
        ```json
        // http://localhost:3000/api/qoute?category=humor

        {
            "status": "success",
            "data": {
                "randomQoute": {
                    "text": "Get your facts first, then you can distort them as you please.",
                    "author": "Mark Twain",
                    "category": "humor"
                }
            }
        }
        ```
    -   Current available categories: motivational, humor, life, love, inspirational.

---

### Wanna support me ?

[Buy me a coffee!](https://ko-fi.com/youssufsalah)

---

# Tags:

#javascript #js #node #nodejs #node_js #node-js #node.js #api #REST #rest #RESTFUL #restful #qoute_generator #qoutegenerator #random #random_generator #randomgenerator
