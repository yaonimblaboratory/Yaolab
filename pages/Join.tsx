import React from 'react';
import { siteConfig } from '../lib/content';
import { Mail, ArrowRight } from 'lucide-react';

export const Join: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-neutral-900 mb-6">Join the Lab</h1>
          <p className="text-xl text-neutral-600">
            We are always looking for motivated scientists to join our team.
          </p>
        </div>

        {/* Values Section */}
        <div className="prose prose-neutral max-w-none mb-16">
          <h3>What we value</h3>
          <p>
            Our lab embraces a multidisciplinary approach and welcomes researchers from diverse backgrounds, including chemistry, engineering, physics, biology, computer science, and related fields. We value collaboration, rigorous thinking, and a supportive research environment.
          </p>
        </div>

        {/* Positions */}
        <div className="space-y-8 mb-16">
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Postdoctoral Fellows and Graduate Students</h3>
            <p className="text-neutral-700 mb-4">
              We have open positions for postdocs with experience in ultrasound physics and synthetic biology. 
            </p>
            <p className="text-neutral-700 mb-6">
              We also welcome graduate students with diverse background, including but not limited to: chemistry, materials engineering, biotechnology, ultrasound.
            </p>
            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">How to apply:</h4>
              <p className="text-sm text-neutral-600 mb-4">
                Please email {siteConfig.footer.email} with:
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1 mb-4">
                <li>CV / Resume</li>
                <li>Cover letter describing research interests</li>
                <li>Contact information for 2 references</li>
              </ul>
              <a 
                href={`mailto:${siteConfig.footer.email}?subject=Postdoc Application`} 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
              >
                Apply via Email <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>

           <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Undergraduates</h3>
            <p className="text-neutral-700 mb-4">
              We welcome undergraduates who can commit to at least 10 hours per week during the semester.
            </p>
            <a 
                href={`mailto:${siteConfig.footer.email}?subject=Undergrad Research Inquiry`} 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
              >
                Inquire via Email <ArrowRight size={16} className="ml-2" />
              </a>
          </div>
        </div>

      </div>
    </div>
  );
};