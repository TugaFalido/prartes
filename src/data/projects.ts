// Replace image paths with your real thumbnails in /public/images
export type Project = {
    title: string;
    thumb: string;
    tags?: string[];
  };
  
  export const projects: Project[] = [
    { title: "Project One", thumb: "/images/p1.jpg", tags: ["3D", "Animation"] },
    { title: "Project Two", thumb: "/images/p2.jpg", tags: ["Concept", "Creatures"] },
    { title: "Project Three", thumb: "/images/p3.jpg", tags: ["360º", "VR"] },
    { title: "Project Four", thumb: "/images/p4.jpg", tags: ["WebGL", "Optimization"] },
  ];
  