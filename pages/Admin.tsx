import React, { useState } from 'react';
import { Upload, Copy, Check, AlertCircle, Lock, BookOpen, Image as ImageIcon, ExternalLink, RefreshCw, Globe, ArrowRight } from 'lucide-react';
import { MediaDisplay } from '../components/MediaDisplay';

export const Admin: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'images' | 'pubs'>('images');

  // Image Tool State
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [base64String, setBase64String] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [fileName, setFileName] = useState<string>('');
  
  // External Repo Tool State
  const [repoFilename, setRepoFilename] = useState('');

  // Publication Tool State
  const [bibtexInput, setBibtexInput] = useState('');
  const [generatedPubs, setGeneratedPubs] = useState('');
  const [pubsCopied, setPubsCopied] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'lab2024') { 
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024 * 1.5) { 
        alert("Warning: This file is quite large. Converting it to code (Base64) is not recommended. Please use Method 1 (External Repo) instead.");
        return;
      }
      
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedFile(result);
        setBase64String(result);
        setCopied(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(base64String);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const parseBibtex = () => {
    try {
        // Simple regex-based BibTeX parser
        const entries = bibtexInput.split(/@\w+\s*\{/g).filter(entry => entry.trim().length > 0);
        
        const parsed = entries.map((entry, index) => {
            const getField = (field: string) => {
                const match = entry.match(new RegExp(`${field}\\s*=\\s*[{"'](.+?)[}"']`, 'i')) || 
                              entry.match(new RegExp(`${field}\\s*=\\s*(\\d+)`, 'i'));
                let val = match ? match[1] : '';
                return val.replace(/[{}]/g, '').trim();
            };

            const title = getField('title');
            const authorRaw = getField('author');
            const authors = authorRaw.split(' and ')
                .map(a => {
                    const parts = a.trim().split(',');
                    if (parts.length === 2) {
                        return `${parts[1].trim()} ${parts[0].trim()}`;
                    }
                    return a.trim();
                })
                .filter(a => a.toLowerCase() !== 'others' && a.length > 0);

            const year = parseInt(getField('year')) || new Date().getFullYear();
            const venue = getField('journal') || getField('booktitle') || getField('publisher') || 'Preprint';
            
            const directUrl = getField('url');
            const doi = getField('doi');
            
            let finalUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
            if (directUrl) {
                finalUrl = directUrl;
            } else if (doi) {
                finalUrl = `https://doi.org/${doi}`;
            }

            return `  {
    id: "pub-${year}-${index}",
    title: "${title.replace(/"/g, '\\"')}",
    authors: ${JSON.stringify(authors)},
    year: ${year},
    venue: "${venue}",
    links: [{ label: "Article", url: "${finalUrl}" }],
    tags: []
  }`;
        });

        const output = `export const publications: Publication[] = [\n${parsed.join(',\n')}\n];`;
        setGeneratedPubs(output);
    } catch (e) {
        alert("Error parsing BibTeX. Please ensure it is valid.");
    }
  };

  const handlePubsCopy = () => {
    navigator.clipboard.writeText(generatedPubs);
    setPubsCopied(true);
    setTimeout(() => setPubsCopied(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
          <div className="text-center mb-6">
            <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-neutral-500" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900">Admin Access</h1>
            <p className="text-neutral-500 mt-2">Enter password to manage site content.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                placeholder="Enter Password"
                autoFocus
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
            >
              Unlock Tools
            </button>
            <p className="text-xs text-center text-neutral-400 mt-4">
              Default password is <code>lab2024</code>.
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-neutral-900">Admin Dashboard</h1>
            <p className="text-neutral-600 mt-1">
                Tools to generate content code for <code className="bg-neutral-100 px-1 rounded text-sm font-mono">lib/content.ts</code>.
            </p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)} 
            className="text-sm font-medium text-neutral-500 hover:text-red-600 px-4 py-2 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            Log Out
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-neutral-100 p-1 rounded-xl mb-8 w-fit">
            <button
                onClick={() => setActiveTab('images')}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'images' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
            >
                <ImageIcon size={18} className="mr-2" />
                Media Helper
            </button>
            <button
                onClick={() => setActiveTab('pubs')}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'pubs' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
            >
                <BookOpen size={18} className="mr-2" />
                Publication Sync
            </button>
        </div>

        {activeTab === 'images' ? (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                
                {/* METHOD 1: External Repo (Recommended) */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                        <Globe size={20} className="mr-2 text-blue-600" />
                        Method 1: External Image Repo (Recommended)
                    </h2>
                    <p className="text-sm text-blue-800 mb-6 max-w-2xl">
                        Store your images in your dedicated <strong>yaonimblaboratory/Images</strong> repository. 
                        The website is configured to automatically look there if you provide just a filename.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Steps */}
                        <div className="space-y-4">
                           <div className="flex items-start">
                              <div className="bg-blue-200 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mt-0.5 mr-3 shrink-0">1</div>
                              <p className="text-sm text-blue-900">
                                Upload your image/video to your <a href="https://github.com/yaonimblaboratory/Images" target="_blank" className="underline font-semibold hover:text-blue-600">GitHub Images Repo <ExternalLink size={10} className="inline"/></a>.
                              </p>
                           </div>
                           <div className="flex items-start">
                              <div className="bg-blue-200 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mt-0.5 mr-3 shrink-0">2</div>
                              <div className="text-sm text-blue-900">
                                <p className="mb-2">Enter the exact filename below to verify it works:</p>
                                <input 
                                  type="text" 
                                  value={repoFilename}
                                  onChange={(e) => setRepoFilename(e.target.value)}
                                  placeholder="e.g. team-photo.jpg"
                                  className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                              </div>
                           </div>
                           <div className="flex items-start">
                              <div className="bg-blue-200 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mt-0.5 mr-3 shrink-0">3</div>
                              <p className="text-sm text-blue-900">
                                If the preview appears, update <code>lib/content.ts</code>:
                                <br />
                                <code className="bg-white/50 px-2 py-1 rounded mt-2 inline-block text-xs font-mono select-all">image: "{repoFilename || 'filename.jpg'}"</code>
                              </p>
                           </div>
                        </div>

                        {/* Preview */}
                        <div className="bg-white rounded-lg border border-blue-100 p-4 shadow-sm flex flex-col items-center justify-center min-h-[200px]">
                            {repoFilename ? (
                              <>
                                <p className="text-xs text-neutral-400 mb-2 uppercase font-semibold tracking-wider">Live Preview from GitHub</p>
                                <div className="relative w-full h-full flex items-center justify-center">
                                  <MediaDisplay 
                                    src={repoFilename} 
                                    alt="Preview" 
                                    className="max-h-48 object-contain rounded shadow-sm"
                                  />
                                </div>
                              </>
                            ) : (
                              <div className="text-center text-neutral-400">
                                <ImageIcon size={32} className="mx-auto mb-2 opacity-50" />
                                <p className="text-sm">Enter a filename to preview</p>
                              </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 py-4 text-sm text-neutral-500 font-medium">
                    <div className="h-px bg-neutral-200 flex-grow"></div>
                    OR
                    <div className="h-px bg-neutral-200 flex-grow"></div>
                </div>

                {/* METHOD 2: BASE 64 */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 mb-10">
                    <h2 className="text-lg font-bold text-neutral-900 mb-2 flex items-center">
                        <AlertCircle size={20} className="mr-2 text-neutral-600" />
                        Method 2: Base64 Embed (Small Icons Only)
                    </h2>
                    <p className="text-sm text-neutral-600 mb-4">
                        Good for tiny icons. <strong>Do not use</strong> for photos, it will crash your editor.
                    </p>

                    <div className="grid gap-8">
                        {/* Upload Section */}
                        <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center hover:bg-white transition-colors relative">
                            <input
                                type="file"
                                accept="image/*,.gif"
                                onChange={handleFileUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex flex-col items-center pointer-events-none">
                                <Upload size={24} className="text-neutral-400 mb-2" />
                                <p className="font-medium text-neutral-900">
                                    {fileName ? fileName : "Click to convert small image to code"}
                                </p>
                            </div>
                        </div>

                        {/* Result Section */}
                        {selectedFile && (
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Preview</h3>
                                    <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200 shadow-sm flex items-center justify-center">
                                        <MediaDisplay src={selectedFile} alt="Preview" className="w-full h-full object-contain" />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Code to Copy</h3>
                                    <div className="relative flex-grow">
                                        <textarea
                                            readOnly
                                            value={base64String}
                                            className="w-full h-40 md:h-full p-4 text-xs font-mono text-green-400 bg-neutral-900 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 border border-neutral-800"
                                        />
                                        <button
                                            onClick={handleCopy}
                                            className="absolute top-2 right-2 bg-white text-neutral-900 px-3 py-1.5 rounded-md text-xs font-bold shadow-sm flex items-center hover:bg-neutral-100 transition-colors border border-neutral-200"
                                        >
                                            {copied ? <Check size={14} className="mr-1.5 text-green-600" /> : <Copy size={14} className="mr-1.5" />}
                                            {copied ? "Copied" : "Copy"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
                    <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                        <RefreshCw size={20} className="mr-2 text-blue-600" />
                        Import from Google Scholar
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
                        <li>
                            Go to your <a href="https://scholar.google.com/citations?user=VFpWupoAAAAJ&hl=en" target="_blank" rel="noreferrer" className="underline font-semibold hover:text-blue-600">Google Scholar Profile <ExternalLink size={12} className="inline"/></a>.
                        </li>
                        <li>Select the articles you want to sync (or select all).</li>
                        <li>Click <strong>Export</strong> and choose <strong>BibTeX</strong>.</li>
                        <li>Copy the text from the page that opens and paste it below.</li>
                        <li>Click <strong>Generate Code</strong> and paste the result into <code>lib/content.ts</code> replacing the existing <code>publications</code> array.</li>
                    </ol>
                    <div className="mt-4 p-3 bg-white/50 rounded-lg text-xs text-blue-800">
                        <strong>Note:</strong> The generator attempts to find a DOI or direct URL. If not found, it defaults to a Google Scholar search link.
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">1. Paste BibTeX Here</h3>
                        <textarea
                            value={bibtexInput}
                            onChange={(e) => setBibtexInput(e.target.value)}
                            placeholder="@article{...}"
                            className="w-full h-96 p-4 text-xs font-mono text-neutral-900 bg-white border border-neutral-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <button
                            onClick={parseBibtex}
                            className="mt-4 w-full bg-neutral-900 text-white font-semibold py-3 rounded-lg hover:bg-neutral-800 transition-colors shadow-sm"
                        >
                            Generate Typescript Code
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">2. Generated Code</h3>
                        <div className="relative flex-grow">
                            <textarea
                                readOnly
                                value={generatedPubs}
                                placeholder="// Generated code will appear here..."
                                className="w-full h-96 p-4 text-xs font-mono text-blue-300 bg-neutral-900 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 border border-neutral-800"
                            />
                            {generatedPubs && (
                                <button
                                    onClick={handlePubsCopy}
                                    className="absolute top-2 right-2 bg-white text-neutral-900 px-3 py-1.5 rounded-md text-xs font-bold shadow-sm flex items-center hover:bg-neutral-100 transition-colors border border-neutral-200"
                                >
                                    {pubsCopied ? <Check size={14} className="mr-1.5 text-green-600" /> : <Copy size={14} className="mr-1.5" />}
                                    {pubsCopied ? "Copied" : "Copy"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};