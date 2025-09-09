export type EventItem = {
    title: string;
    date: string; // ISO or plain text
    location?: string;
    description?: string;
    link?: string;
  };
  
  export const events: EventItem[] = [
    {
      title: "Solo Exhibition",
      date: "2025-10-01",
      location: "Lisbon",
      description: "VR pieces & 3D explorations.",
    },
    {
      title: "Festival Demo",
      date: "2025-11-12",
      location: "Porto",
      description: "Live 360º render pipeline showcase.",
    },
  ];
  