// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from 'nextjs-cors';

const links = [
    {
        modo: {
            id: 1,
            name: "Tailus",
            url: "https://tailus.io",
            }
    },
/*     {
        "modo": {
          id: 1,
          name: "MoDo",
          links: {
            interno:{
                modulo: "posadmin",
                url: "https://tailus.io",
            },
            externo:{
                modulo: "suite pos",
                url: "https://tailus.io",
            }
      }
    },
        salumeria: {
          id: 2,
          name: "External Link",
          links: {
            interno:{
                modulo: "posadmin",
                url: "https://tailus.io",
            },
            externo:{
                modulo: "suite pos",
                url: "https://tailus.io",
            }
      }
        },
        "concept-store" : {
            id: 3,
            name: "External Link",
            links: {
                interno:{
                    modulo: "posadmin",
                    url: "https://tailus.io",
                },
                externo:{
                    modulo: "suite pos",
                    url: "https://tailus.io",
                }
          }
        },
        "modo-express": {
            id: 4,
            name: "External Link",
            links: {
                interno:{
                    modulo: "posadmin",
                    url: "https://tailus.io",
                },
                externo:{
                    modulo: "suite pos",
                    url: "https://tailus.io",
                }
          }
        },  
    } */
]
  
/*     export default function handler(req, res) {
      if (req.method === 'GET') {
        res.status(200).json(links)
      } else if (req.method === 'POST') {
        // Process a POST request
        res.status(200).json(links)
      }else if (req.method === 'PUT') {
        // Process a PUT request
        res.status(200).json(links)
      }else if (req.method === 'DELETE') {
        // Process a DELETE request
        res.status(200).json(links)
      }
    } */



async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   })
   
   if (req.method === 'GET') {
    res.status(200).json(links)
  } else if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json(links)
  }else if (req.method === 'PUT') {
    // Process a PUT request
    res.status(200).json(links)
  }else if (req.method === 'DELETE') {
    // Process a DELETE request
    res.status(200).json(links)
  }

   // Rest of the API logic
}
export default handler