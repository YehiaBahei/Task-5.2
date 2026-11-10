import DOMPurify from 'dompurify';

// Reviews are rendered as HTML so people can use light formatting (bold, links).
// This helper is the single place review HTML passes through before it is handed
// to React's dangerouslySetInnerHTML, so it must strip anything dangerous.
const REVIEW_CONFIG = {
  // Allow-list: only light formatting. Everything else (script, img, svg, iframe...) is removed.
  ALLOWED_TAGS: ['b', 'strong', 'i', 'em', 'u', 'p', 'br', 'ul', 'ol', 'li', 'a'],
  // Only href survives, so every on* event handler (onerror, onload...) is stripped.
  // DOMPurify also drops javascript: URLs from href automatically.
  ALLOWED_ATTR: ['href'],
};

export const sanitizeHtml = (dirty) => DOMPurify.sanitize(dirty ?? '', REVIEW_CONFIG);
