 export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case "GET":
        res.status(200).json({ message: "GET" });
        break;
      case "POST":
        res.status(200).json({ message: "POST" });
        break;
      case "PATCH":
        res.status(200).json({ message: "PATCH" });
        break;
      case "PUT":
        res.status(200).json({ message: "PUT" });
        break;
      case "DELETE":
        res.status(200).json({ message: "DELETE" });
        break;
      default:
        res.status(404).json({ message: "Not found" });
    }
  } 
