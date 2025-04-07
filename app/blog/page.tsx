'use client'
import { PostCard } from "@/components/post-card"
import { posts, PostCategory, PostLanguage } from "@/content/posts"
import { useState } from "react"

export default function BlogPage() {
  // Set up state for filters
  const [categoryFilter, setCategoryFilter] = useState<PostCategory | 'all'>('all');
  const [languageFilter, setLanguageFilter] = useState<PostLanguage | 'all'>('all');
  
  // Get filtered posts
  const filteredPosts = posts.filter(post => {
    // Filter by category
    if (categoryFilter !== 'all' && !post.categories.includes(categoryFilter)) {
      return false;
    }
    
    // Filter by language
    if (languageFilter !== 'all' && post.language !== languageFilter) {
      return false;
    }
    
    return true;
  });

  // Helper function to render posts or empty message
  const renderPosts = (postsList: typeof posts) => {
    if (postsList.length === 0) {
      return (
        <div className="col-span-full py-10 text-center">
          <p className="font-mono text-muted-foreground">No posts match your filters. Try adjusting your selection.</p>
        </div>
      );
    }

    return postsList.map((post) => (
      <PostCard 
        key={post.id} 
        post={post} 
        isGlitchy
      />
    ));
  };

  return (
    <div className="w-full px-4 md:px-6 py-10 md:py-16 space-y-8 noise">
      <div className="space-y-4 max-w-[1400px] mx-auto">
        <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl glitch-item" data-text="Blog">
          Blog
        </h1>
        <p className="font-mono text-xl text-muted-foreground max-w-[700px] distort">
          Long-form explorations at the intersection of technology, philosophy, and human experience.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1 font-mono text-sm rounded-md transition-colors ${
                  categoryFilter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-primary/20'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setCategoryFilter('Technology')}
                className={`px-3 py-1 font-mono text-sm rounded-md transition-colors ${
                  categoryFilter === 'Technology' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-primary/20'
                }`}
              >
                Technology
              </button>
              <button 
                onClick={() => setCategoryFilter('Thinking')}
                className={`px-3 py-1 font-mono text-sm rounded-md transition-colors ${
                  categoryFilter === 'Thinking' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-primary/20'
                }`}
              >
                Thinking
              </button>
              <button 
                onClick={() => setCategoryFilter('Literature')}
                className={`px-3 py-1 font-mono text-sm rounded-md transition-colors ${
                  categoryFilter === 'Literature' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-primary/20'
                }`}
              >
                Literature
              </button>
              <button 
                onClick={() => setCategoryFilter('Lifestyle')}
                className={`px-3 py-1 font-mono text-sm rounded-md transition-colors ${
                  categoryFilter === 'Lifestyle' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-primary/20'
                }`}
              >
                Lifestyle
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold">Filter by Language</h2>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setLanguageFilter('all')}
                className={`px-3 py-1 font-mono text-sm rounded-md transition-colors ${
                  languageFilter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-primary/20'
                }`}
              >
                All Languages
              </button>
              <button 
                onClick={() => setLanguageFilter('en')}
                className={`px-3 py-1 font-mono text-sm rounded-md transition-colors ${
                  languageFilter === 'en' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-primary/20'
                }`}
              >
                🇺🇸 English
              </button>
              <button 
                onClick={() => setLanguageFilter('es')}
                className={`px-3 py-1 font-mono text-sm rounded-md transition-colors ${
                  languageFilter === 'es' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-primary/20'
                }`}
              >
                🇪🇸 Spanish
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        <div className="font-mono text-sm text-muted-foreground">
          {categoryFilter !== 'all' || languageFilter !== 'all' ? (
            <div className="flex items-center gap-2">
              <span>Active filters:</span>
              {categoryFilter !== 'all' && (
                <span className="bg-muted px-2 py-1 rounded">Category: {categoryFilter}</span>
              )}
              {languageFilter !== 'all' && (
                <span className="bg-muted px-2 py-1 rounded">
                  Language: {languageFilter === 'en' ? '🇺🇸 English' : '🇪🇸 Spanish'}
                </span>
              )}
              <button 
                onClick={() => {
                  setCategoryFilter('all');
                  setLanguageFilter('all');
                }}
                className="underline ml-2"
              >
                Clear all
              </button>
            </div>
          ) : (
            <span>Showing all posts</span>
          )}
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {renderPosts(filteredPosts)}
        </div>
      </div>
    </div>
  )
}

