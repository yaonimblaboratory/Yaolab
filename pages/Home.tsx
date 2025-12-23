import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { siteConfig, researchAreas, news } from '../lib/content';
import { MediaDisplay } from '../components/MediaDisplay';

export const Home: React.FC = () => {
  // Sort news by date descending (newest first)
  const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MediaDisplay
            src={siteConfig.hero.image}
            alt="Lab Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              {siteConfig.hero.titleHeadline} <span className="text-primary-400">{siteConfig.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl">
              {siteConfig.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/research"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-neutral-900 bg-white hover:bg-neutral-100 transition-colors"
              >
                Our Research
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center px-6 py-3 border border-neutral-500 text-base font-medium rounded-md text-white hover:bg-neutral-800 transition-colors"
              >
                Join the Lab
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Tiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">Research Areas</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-500">
              We develop technologies toward non-invasive medicine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.slice(0, 3).map((area) => (
              <div key={area.id} className="group flex flex-col h-full bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* 
                   Updated container to h-56.
                   Added flex items-center justify-center to center the image vertically and horizontally.
                */}
                <div className="h-56 overflow-hidden bg-neutral-50 border-b border-neutral-100 relative flex items-center justify-center">
                  <MediaDisplay
                    src={area.image}
                    alt={area.title}
                    className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{area.title}</h3>
                  <p className="text-neutral-600 mb-4 flex-grow text-sm leading-relaxed">
                    {area.shortDescription}
                  </p>
                  <Link
                    to={`/research#${area.id}`}
                    className="inline-flex items-center text-primary-600 font-semibold text-sm hover:text-primary-800 transition-colors"
                  >
                    Read more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">Lab News</h2>
            <Link to="/news" className="hidden sm:inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors">
              Archive &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sortedNews.slice(0, 3).map((item) => (
              <article key={item.id} className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center text-sm text-neutral-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1.5" />
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                  {item.tags.length > 0 && (
                    <span className="bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      {item.tags[0]}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                  <Link to="/news" className="hover:text-primary-600 transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.excerpt}
                </p>
                <Link to="/news" className="text-sm font-semibold text-primary-600 mt-2 hover:text-primary-800">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};