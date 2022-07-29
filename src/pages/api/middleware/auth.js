function handler(req, res) {
    res.status(200).json({ name: "OK" });
  }
  
  export function withAuth(fn) {
    return function (req, res) {
      if (!req.headers.authentication) {
        res.status(401).json({ name: "Error" });
      }
      return fn(req, res);
    };
  }
  
  export default withAuth(handler);