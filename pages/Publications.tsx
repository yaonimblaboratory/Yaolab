import React, { useState, useMemo } from 'react';
import { publications } from '../lib/content';
import { FileText, Search, ExternalLink } from 'lucide-react';
import clsx from 'clsx';

export const Publications: React.FC = () => {
  const [filter, setFilter] = useState('');
  
  // Group publications by year
  const groupedPubs = useMemo(() => {
    const filtered = publications.filter(pub => 
      pub.title.toLowerCase().includes(filter.toLowerCase()) ||
      pub.authors.some(a => a.toLowerCase().includes(filter.toLowerCase()) ||
      pub.venue.toLowerCase().includes(filter.toLowerCase())
    );

    const groups: Record<string, typeof publications> = {};
    filtered.forEach(pub => {
      if (!groups[pub.year]) groups[pub.year] = [];
      groups[pub.year].push(pub);
    });

    // Sort years descending
    return Object.keys(groups)
      .sort((a, b) => Number(b) - Number(a))
      .map(year => ({ 
        year, 
        // Reverse the order so items at the bottom of the list in content.ts appear first
        pubs: groups[year].reverse() 
      }));
  }, [filter]);

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-neutral-900 mb-4">Publications</h1>
            <p className="text-neutral-600 max-w-xl">
              Selected peer-reviewed articles and conference proceedings.
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search author, title, year..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="space-y-16">
          {groupedPubs.length > 0 ? (
            groupedPubs.map(({ year, pubs }) => (
              <section key={year}>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-6">
                  {year}
                </h2>
                <div className="space-y-8">
                  {pubs.map(pub => (
                    <div key={pub.id} className="flex flex-col sm:flex-row gap-6">
                      {/* Optional Thumbnail could go here */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-tight">
                          {pub.links && pub.links.length > 0 ? (
                            <a 
                              href={pub.links[0].url} 
                              target="_blank" 
                              rel="noreferrer"
                              className="hover:text-primary-600 transition-colors hover:underline"
                            >
                              {pub.title}
                            </a>
                          ) : (
                            <span>{pub.title}</span>
                          )}
                        </h3>
                        <p className="text-neutral-700 mb-2">
                          {pub.authors.join(", ")}
                        </p>
                        <p className="text-neutral-500 italic text-sm mb-3">
                          {pub.venue}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {pub.links.map(link => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center px-3 py-1 rounded-full border border-neutral-300 bg-white text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
                            >
                              {link.label} <ExternalLink size={12} className="ml-1.5 opacity-50" />
                            </a>
                          ))}
                          {pub.tags?.map(tag => (
                            <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="text-center py-20 text-neutral-500">
              No publications found matching "{filter}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};