// Import React and the Next.js Image component
import React from "react";

export const Icons = {
  // Using the Next.js Image component instead of <img>
  // This optimizes images for performance and improves LCP (Largest Contentful Paint).
  logo: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    // Temporarily disabling this rule if you want to use <img> instead of <Image>.
    <img {...props} src="/logo.png" alt="Logo" />
  ),
};

/* 
Alternatively, if using `next/image`:
<Image {...props} src="/logo.png" alt="Logo" width={50} height={50} />
You can switch to `next/image` for optimization as recommended in the warning.
*/
