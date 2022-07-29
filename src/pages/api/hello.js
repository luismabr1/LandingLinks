// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const links = {
  "/api/hello": {
    id: 1,
    name: "Tailus",
    url: "https://tailus.io",
},
  "/api/links/1": {
    id: 2,
    name: "External Link",
    url: "https://tailus.io",
  }

}

  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.json(links)
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
  }
