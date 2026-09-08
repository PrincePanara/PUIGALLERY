import React, { useState } from 'react';
import { projectBySlug } from '../../data/projects';

/**
 * Screens are now loaded dynamically as images.
 * The path for each screen is explicitly defined in projects.ts.
 */
export function ScreenRender({ slug, screenId }: {slug: string;screenId: string;}) {
  const project = projectBySlug(slug);
  const screen = project?.screens.find(s => s.id === screenId);
  const imageSrc = screen?.image || `/Screens/${slug}/${screenId}.png`;
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div 
      className="relative h-full w-full overflow-y-auto overflow-x-hidden bg-white"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {status === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-off gap-4">
           <span className="rt-meta text-mid animate-pulse">LOADING UI...</span>
        </div>
      )}

      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-off p-4">
           <span className="rt-meta text-mid text-center">
             NO IMAGE FOUND<br/><br/>
             <span className="text-xs opacity-50">{imageSrc}</span>
           </span>
        </div>
      )}

      <img 
        src={imageSrc} 
        alt={`${slug} - ${screenId}`}
        className="block w-full h-auto transition-opacity duration-300"
        style={{ opacity: status === 'loaded' ? 1 : 0 }}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </div>
  );
}

export function hasScreen(slug: string, screenId: string) {
  // Assuming true for now since it's driven by data, and errors handle gracefully.
  return true;
}