import React from 'react';
import { resources } from '../lib/content';
import { Download, ExternalLink, FileCode } from 'lucide-react';

export const Resources: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-neutral-900 mb-4">Resources</h1>
          <p className="text-xl text-neutral-600">
            Tools, plasmids, and software developed by our lab for the community.
          </p>
        </div>

        <div className="space-y-16">
          {resources.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b border-neutral-200 flex items-center">
                {section.title}
              </h2>
              <div className="grid gap-6">
                {section.items.map((item) => (
                  <div key={item.title} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">{item.title}</h3>
                      {item.description && (
                        <p className="text-neutral-700 mb-2">{item.description}</p>
                      )}
                      {item.citation && (
                        <p className="text-sm text-neutral-500 italic">Ref: {item.citation}</p>
                      )}
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shrink-0"
                    >
                      {section.title === 'Software' ? <FileCode size={16} className="mr-2"/> : <ExternalLink size={16} className="mr-2"/>}
                      Access
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};