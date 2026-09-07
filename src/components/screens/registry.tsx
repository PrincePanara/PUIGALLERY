import React from 'react';

/**
 * Screens are now loaded dynamically as images from the public/Screens folder.
 * Make sure you drop the corresponding images (e.g. public/Screens/adswar/splash.png)
 * for each project and screen.
 */
export function ScreenRender({ slug, screenId }: {slug: string;screenId: string;}) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-ink overflow-hidden">
      <img 
        src={`/Screens/${slug}/${screenId}.png`} 
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