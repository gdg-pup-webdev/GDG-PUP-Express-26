// Single validation middleware for create (POST) and update (PATCH)
// - POST: requires `task` present and non-empty
// - PATCH: if `task` is present, it must be non-empty
export default function validateTask(req, res, next) {
  if (req.method === "POST") {
    // Check if empty

    // Normalize
    return next();
  }

  if (req.method === "PATCH") {
    if (req.body.task !== undefined) {
      // Check if empty
      // Normalize
    }
    return next();
  }

  return next();
}
