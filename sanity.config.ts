import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure"; 
import StudioHeader from "@/components/StudioHeader";
import { schemaTypes } from "@/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
    basePath: "/studio",
    name: "LOGONs_Shopping",
    title: "LOGONs online shopping",
    projectId,
    dataset,
    plugins: [structureTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
    studio: {
        components: {
            navbar: StudioHeader,
        },
    },
});
