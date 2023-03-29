import { createClient } from "next-sanity"

export default client = createClient({
  projectId: "s97z0o8g",
  dataset: "production",
  apiVersion: "2023-03-28",
  useCdn: false,
})