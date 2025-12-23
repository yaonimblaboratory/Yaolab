import React from 'react';
import { people } from '../lib/content';
import { Role } from '../lib/types';
import clsx from 'clsx';
import { MediaDisplay } from '../components/MediaDisplay';

const ROLE_ORDER: Role[] = ['PI', 'Postdoc', 'PhD Student', 'MPhil Student', 'Staff', 'Undergrad', 'Alumni'];

export const People: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-neutral-900 mb-4">Our Team</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A diverse group of researchers passionate about synthetic biology.
          </p>
        </div>

        <div className="space-y-20">
          {ROLE_ORDER.map((role) => {
            const group = people.filter(p => p.role === role);
            if (group.length === 0) return null;

            // Special layout for Principal Investigator
            if (role === 'PI') {
              return (
                <section key={role}>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-8 pb-2 border-b border-neutral-100">
                    Principal Investigator
                  </h2>
                  {/* Container: 2/3 width on large screens, aligned left */}
                  <div className="w-full lg:w-2/3">
                    {group.map(person => (
                      <div key={person.id} className="bg-white rounded-xl overflow-hidden border border-neutral-100 shadow-sm p-8 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          {/* Left Side: Photo Only */}
                          <div className="w-full md:w-1/3 shrink-0">
                            <div className="w-48 md:w-full mx-auto md:mx-0 aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 shadow-inner">
                              <MediaDisplay
                                src={person.image}
                                alt={person.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Right Side: All Text (Name, Details, Bio) */}
                          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-2xl font-bold text-neutral-900 mb-1">{person.name}</h3>
                            <p className="text-primary-600 font-medium text-lg mb-4">{person.role}</p>
                            
                            {person.email && (
                              <div className="mb-4">
                                <a href={`mailto:${person.email}`} className="text-neutral-600 hover:text-primary-600 transition-colors block">
                                  {person.email}
                                </a>
                              </div>
                            )}
                            
                            {person.education && (
                              <div className="text-sm text-neutral-500 space-y-1 mb-6">
                                {person.education.map((edu, i) => (
                                  <p key={i}>{edu}</p>
                                ))}
                              </div>
                            )}

                            {person.bio && (
                              <div 
                                className="text-neutral-700 leading-relaxed space-y-4 text-justify md:text-left whitespace-pre-line w-full"
                                dangerouslySetInnerHTML={{ __html: person.bio }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            }

            // Standard Grid Layout for other roles
            return (
              <section key={role}>
                <h2 className="text-2xl font-bold text-neutral-900 mb-8 pb-2 border-b border-neutral-100">
                  {role === 'Alumni' ? 'Alumni' : `${role}s`}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.map(person => (
                    <div key={person.id} className="group flex flex-col bg-white rounded-lg overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                      {/* 
                          Shrunk photo to w-1/2 (50% width). 
                          Centered with mx-auto.
                      */}
                      <div className="w-1/2 mx-auto aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 mb-4 mt-6 shadow-inner">
                        <MediaDisplay
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="flex-grow px-6 pb-6">
                        {/* Centered Name and Role */}
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-bold text-neutral-900">{person.name}</h3>
                          <p className="text-primary-600 font-medium text-sm">{person.role}</p>
                        </div>
                        
                        {person.bio && (
                          <div 
                            className="text-neutral-600 text-sm mb-4 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: person.bio }}
                          />
                        )}
                        
                        {person.education && (
                          <div className="text-xs text-neutral-500 space-y-1 mb-4 text-center">
                            {person.education.map((edu, i) => (
                              <p key={i}>{edu}</p>
                            ))}
                          </div>
                        )}
                        
                        {person.email && (
                          <div className="text-center">
                            <a href={`mailto:${person.email}`} className="text-sm text-neutral-400 hover:text-primary-600 transition-colors">
                              {person.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};