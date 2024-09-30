// MarkdownRenderer.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import "./markdown-content.css";

const MarkdownRenderer = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Fetch the Markdown file content
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filePath]);

  return (
    <div className="markdown-content">
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
