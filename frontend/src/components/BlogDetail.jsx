import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('/blogs.json');
        const blogs = await response.json();
        const currentBlog = blogs.find(b => b.id === parseInt(id));
        setBlog(currentBlog);

        // Get related blogs (same tags, excluding current blog)
        if (currentBlog) {
          const related = blogs
            .filter(b => 
              b.id !== currentBlog.id && 
              b.tags.some(tag => currentBlog.tags.includes(tag))
            )
            .slice(0, 3);
          setRelatedBlogs(related);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Article not found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-100">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full border border-blue-100"
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                >
                  <img
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                      <span>{relatedBlog.author}</span>
                      <span>{relatedBlog.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default BlogDetail;