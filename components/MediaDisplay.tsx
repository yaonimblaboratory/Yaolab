import React from 'react';
import clsx from 'clsx';

interface MediaDisplayProps {
  src: string;
  alt: string;
  className?: string;
}

// The base URL for your dedicated images repository
// Using raw.githubusercontent.com allows us to serve images directly
const EXTERNAL_REPO_BASE = 'https://raw.githubusercontent.com/yaonimblaboratory/Images/main/';

export const MediaDisplay: React.FC<MediaDisplayProps> = ({ src, alt, className }) => {
  // 1. Check if it's already a full URL (e.g. https://google.com/img.png or data:image...)
  const isExternal = src.startsWith('http') || src.startsWith('https') || src.startsWith('data:');
  
  // 2. Construct final source
  // If it's a full URL, use it as is.
  // If it's just a filename (e.g. "my-photo.jpg"), append it to your Images repo URL.
  const finalSrc = isExternal 
    ? src 
    : `${EXTERNAL_REPO_BASE}${src.startsWith('/') ? src.slice(1) : src}`;

  // 3. Detect Video
  // We check the file extension or if it's a data URI for video
  const isVideo = finalSrc.toLowerCase().match(/\.(mp4|webm|mov)(\?|$)/) || finalSrc.startsWith('data:video');

  const handleError = () => {
    // Helpful warning for debugging 404s
    if (finalSrc.includes(EXTERNAL_REPO_BASE)) {
      console.warn(`[MediaDisplay] Could not load image from your Images repo: ${finalSrc}. \nDouble check that the filename matches exactly (case-sensitive) and that the file is in the 'main' branch.`);
    }
  };

  if (isVideo) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className={clsx("block", className)}
        title={alt}
        onError={handleError}
      >
        <source src={finalSrc} />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};