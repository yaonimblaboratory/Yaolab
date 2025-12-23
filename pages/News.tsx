import React from 'react';
import { news } from '../lib/content';
import { MediaDisplay } from '../components/MediaDisplay';
import { Calendar, Tag } from 'lucide-react';

export const News: React.FC = () => {
  // Sort news by date descending
  const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-neutral-900 mb-4">Lab News</h1>
          <p className="text-xl text-neutral-600">
            Latest updates, publications, and events from our group.
          </p>
        </div>

        <div className="space-y-24">
          {sortedNews.map((item) => (
            <article key={item.id} className="flex flex-col border-b border-neutral-100 pb-16 last:border-0">
              {/* Header Info */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-3">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                  </div>
                  {item.tags.map(tag => (
                    <span key={tag} className="flex items-center bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      <Tag size={12} className="mr-1.5" />
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 leading-tight">
                  {item.title}
                </h2>
              </div>

              {/* Main Image */}
              {item.image && (
                <div className="rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-sm mb-8 w-full max-h-[500px] flex items-center justify-center">
                  <MediaDisplay
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content - Enabled HTML rendering */}
              <div 
                className="prose prose-lg max-w-none text-neutral-700 leading-relaxed whitespace-pre-line mb-8"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              {/* Additional Images Gallery */}
              {item.additionalImages && item.additionalImages.length > 0 && (
                <div className={`grid gap-6 ${item.additionalImages.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  {item.additionalImages.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-sm aspect-video">
                      <MediaDisplay
                        src={img}
                        alt={`${item.title} - Image ${idx + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};