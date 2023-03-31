import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { schemaTypes } from "@/schemas";

export default defineConfig({
  name: 'default',
  title: 'Suit-E-commerce',
  basePath: '/studio',

  projectId: `${process.env.NEXT_PUBLIC_SANITY_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,

  plugins: [deskTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})