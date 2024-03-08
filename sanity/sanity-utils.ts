import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: 'w7jdwjzh',
        dataset: 'production',
        apiVersion: "2024-03-08",
    })
    
    return client.fetch(
        groq`*[_type == "project"]{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset -> url,
            url,
            content
        }`
    )
}
