import React from 'react';
import { researchAreas } from '../lib/content';
import { MediaDisplay } from '../components/MediaDisplay';

export const Research: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-5xl mb-6">Research Directions</h1>
          <p className="text-xl text-neutral-600">
          </p>
        </div>

        <div className="space-y-24">
          {researchAreas.map((area, index) => (
            <div key={area.id} id={area.id} className="scroll-mt-24 group">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
                {/* Image Container */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-100 bg-white">
                    <MediaDisplay
                      src={area.image}
                      alt={area.title}
                      className="w-full h-auto block" 
                    />
                  </div>
                </div>
                {/* Text Container */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4 flex items-center">
                    {area.title}
                  </h2>
                  <div className="w-16 h-1 bg-primary-500 mb-6 rounded-full"></div>
                  
                  {/* Full Description - HTML Enabled */}
                  <div 
                    className="text-neutral-700 text-lg leading-relaxed mb-6 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: area.fullDescription }}
                  />
                  
                  {(area.collaborators || area.funding) && (
                    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 text-sm">
                      {area.funding && (
                        <p className="mb-2"><span className="font-semibold text-neutral-900">Supported by:</span> <span className="text-neutral-600">{area.funding}</span></p>
                      )}
                      {area.collaborators && (
                        <p><span className="font-semibold text-neutral-900">In collaboration with:</span> <span className="text-neutral-600">{area.collaborators}</span></p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};