import { createClient } from "next-sanity"

export default createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_ID}`,
  dataset:`${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion: `${process.env.NEXT_PUBLIC_SANITY_API_VERSION}`,
  useCdn: false,
})