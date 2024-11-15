﻿# Light-Weight Random Qoutes API

## How to use:

1.  **Clone The Repo:**
    -   Run in your terminal:
        ```bash
          git clone https://github.com/YoussufSalah/simple-random-qoutes-API.git
        ```
2.  **Adding Environment Variable:**
    -   Add the `USER_SITE` and `PORT` variables in a .env file (explained below).
3.  **Running The API Locally:**
    -   Run `cd simple-random-qoutes-API`.
    -   Run `node index.js`, and we're done!

Now you're ready to make requests to the API!

## Environment Variables:

-   `USER_SITE` : Set this to the URL of your website that will fetch the API.
-   `PORT` : Define the server port (default is `3000`).

## Routes:

-   `/api/quote` **- Returns a random quote.**

    -   **Example** Response:

        ```json
        // http://localhost:3000/api/qoute

        {
            "status": "success",
            "data": {
                "randomQuote": {
                    "text": "In the end, it's not the years in your life that count, it's the life in your years.",
                    "author": "Abraham Lincoln",
                    "category": "life"
                }
            }
        }
        ```

-   `/api/quote?category=` **- Returns a random quote within a specific category.**

    -   **Example:** `http://localhost:3000/api/qoute?category=humor`
    -   **Available Categories:** motivational, humor, life, love, inspirational.
    -   **Example Response:**

        ```json
        // http://localhost:3000/api/qoute?category=humor

        {
            "status": "success",
            "data": {
                "randomQuote": {
                    "text": "Get your facts first, then you can distort them as you please.",
                    "author": "Mark Twain",
                    "category": "humor"
                }
            }
        }
        ```

---

### Wanna support me ?

[Buy me a coffee!](https://ko-fi.com/youssufsalah)

---

#### Tags:

#javascript #js #node #nodejs #node_js #node-js #node.js #api #REST #rest #RESTFUL #restful #qoute_generator #qoutegenerator #random #random_generator #randomgenerator
