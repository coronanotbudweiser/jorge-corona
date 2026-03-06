import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  type: "youtube" | "vimeo";
  id: string;
  title: string;
  className?: string;
}

export function VideoEmbed({ type, id, title, className }: VideoEmbedProps) {
  const src =
    type === "youtube"
      ? `https://www.youtube.com/embed/${id}?rel=0`
      : `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`;

  return (
    <div className={cn("relative aspect-video rounded-lg overflow-hidden bg-dark", className)}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
