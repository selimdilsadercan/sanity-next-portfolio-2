import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text drop-shadow">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 font-bold text-gray-500 transition bg-gray-100 rounded-lg whitespace-nowrap hover:bg-pink-500 hover:text-pink-100"
        >
          View Project
        </a>
      </header>

      <div className="mt-5 text-lg text-gray-700">
        <PortableText value={project.content} />
      </div>

      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="object-cover mt-10 border-2 border-gray-700 rounded-xl"
      />
    </div>
  );
}
