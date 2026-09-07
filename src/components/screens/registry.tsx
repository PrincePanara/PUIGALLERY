import React from 'react';
import { projectBySlug } from '../../data/projects';

/**
 * Screens are now loaded dynamically as images.
 * The path for each screen is explicitly defined in projects.ts.
 */
export function ScreenRender({ slug, screenId }: {slug: string;screenId: string;}) {
  const project = projectBySlug(slug);
  const screen = project?.screens.find(s => s.id === screenId);
  const imageSrc = screen?.image || `/Screens/${slug}/${screenId}.png`;

  return (
    <div className="flex h-full w-full items-center justify-center bg-ink overflow-hidden">
      <img 
        src={imageSrc} 
        alt={`${slug} - ${screenId}`}
        className="h-full w-full object-cover"
        onError={(e) => {
          // Fallback if the image doesn't exist yet
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="rt-meta text-mid">NO IMAGE FOUND<br/>/Screens/${slug}/${screenId}.png</span>`;
          }
        }}
      />
    </div>
  );
}

export function hasScreen(slug: string, screenId: string) {
  // Assuming true for now since it's driven by data, and errors handle gracefully.
  return true;
}