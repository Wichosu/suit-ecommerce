import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: 'default',
  title: 'Suit-E-commerce',
  basePath: '/studio',

  projectId: process.env.SANITY_ID,
  dataset: process.env.SANITY_DATASET,

  plugins: [deskTool(), visionTool()],

  //add schemas
})