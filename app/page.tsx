import { getProjects } from "@/sanity/sanity-utils";
import { PortableTextBlock } from "sanity";

export default async function Home() {

  type PortableTextBlock = {
    _key: string;
    _type: string;
    children: Array<{
      text: string;
    }>;
  };

  type Project = {
     _id: string;
     _createdAt: Date;
     name: string;
     slug: string;
     image: string;
     url: string;
     content: PortableTextBlock[];
    }

  const projects: Project[] = await getProjects()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {projects.map((project) => (
          <div key={project._id}>
            <h3>{project.name}</h3>
            <p> {/* Map over the content array and display each block */}
            {project.content.map((block) => (
              <p key={block._key}>{block.children[0].text}</p>
            ))}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
