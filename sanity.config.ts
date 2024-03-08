import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'w7jdwjzh',
    dataset: 'production',
    title: 'studio',
    apiVersion: "2024-03-08",
    basePath: "/admin",
    plugins:[structureTool()],
    schema: {types: schemas}

})

export default config;