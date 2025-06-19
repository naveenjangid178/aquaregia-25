import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ blog }) => {
  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {blog.title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {blog.excerpt}
        </p>
        
        <Link
          to={`/blog/${blog.id}`}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group/link"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;