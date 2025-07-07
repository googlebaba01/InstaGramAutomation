import React, { useState } from 'react';
import { Play, MessageCircle, Send, Instagram, ArrowRight, Check, Settings, Heart, MoreHorizontal, Bookmark, Share, Home, Search, PlusSquare, User, Film } from 'lucide-react';

const InstagramWorkflowBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [commentKeyword, setCommentKeyword] = useState('');
  const [dmMessage, setDmMessage] = useState('');
  const [isLive, setIsLive] = useState(false);

  // Mock Instagram posts data
  const mockPosts = [
    {
      id: 1,
      type: 'post',
      image: 'https://picsum.photos/400/500?random=1',
      avatar: 'https://picsum.photos/50/50?random=11',
      username: 'travel_adventures',
      caption: 'Amazing sunset today! 🌅 Perfect ending to a beautiful day. What\'s your favorite time to take photos?',
      likes: 1234,
      comments: 45,
      timeAgo: '2h',
      isVerified: true
    },
    {
      id: 2,
      type: 'reel',
      image: 'https://picsum.photos/400/500?random=2',
      avatar: 'https://picsum.photos/50/50?random=12',
      username: 'fitness_guru',
      caption: 'Quick morning workout routine 💪 Try this 5-minute session! Comment "WORKOUT" for the full guide.',
      likes: 2567,
      comments: 89,
      timeAgo: '4h',
      isVerified: false
    },
    {
      id: 3,
      type: 'post',
      image: 'https://picsum.photos/400/500?random=3',
      avatar: 'https://picsum.photos/50/50?random=13',
      username: 'foodie_delights',
      caption: 'Delicious homemade pasta 🍝 Recipe in bio! Who wants the ingredients list?',
      likes: 892,
      comments: 23,
      timeAgo: '6h',
      isVerified: true
    },
    {
      id: 4,
      type: 'reel',
      image: 'https://picsum.photos/400/500?random=4',
      avatar: 'https://picsum.photos/50/50?random=14',
      username: 'tech_reviews',
      caption: 'Latest gadget review! 📱 This changed everything. Comment "TECH" for detailed specs.',
      likes: 3421,
      comments: 156,
      timeAgo: '8h',
      isVerified: true
    },
    {
      id: 5,
      type: 'post',
      image: 'https://picsum.photos/400/500?random=5',
      avatar: 'https://picsum.photos/50/50?random=15',
      username: 'style_inspiration',
      caption: 'Today\'s outfit inspiration ✨ Links in bio! What do you think of this look?',
      likes: 1876,
      comments: 67,
      timeAgo: '10h',
      isVerified: false
    },
    {
      id: 6,
      type: 'reel',
      image: 'https://picsum.photos/400/500?random=6',
      avatar: 'https://picsum.photos/50/50?random=16',
      username: 'music_vibes',
      caption: 'New song drop! 🎵 What do you think? Comment "MUSIC" for the full track.',
      likes: 5432,
      comments: 234,
      timeAgo: '12h',
      isVerified: true
    },
    {
      id: 7,
      type: 'post',
      image: 'https://picsum.photos/400/500?random=7',
      avatar: 'https://picsum.photos/50/50?random=17',
      username: 'nature_lover',
      caption: 'Beautiful mountain view! 🏔️ Nature never fails to amaze me. Where\'s your favorite hiking spot?',
      likes: 967,
      comments: 34,
      timeAgo: '14h',
      isVerified: false
    },
    {
      id: 8,
      type: 'reel',
      image: 'https://picsum.photos/400/500?random=8',
      avatar: 'https://picsum.photos/50/50?random=18',
      username: 'art_studio',
      caption: 'Creating magic with colors! 🎨 Time-lapse of my latest painting. Comment "ART" for tutorials.',
      likes: 2890,
      comments: 112,
      timeAgo: '16h',
      isVerified: true
    }
  ];

  const handlePostSelect = (post) => {
    setSelectedPost(post);
    setCurrentStep(2);
  };

  const handleCommentSetup = () => {
    if (commentKeyword.trim()) {
      setCurrentStep(3);
    }
  };

  const handleDMSetup = () => {
    if (dmMessage.trim()) {
      setCurrentStep(4);
    }
  };

  const goLive = () => {
    setIsLive(true);
  };

  const resetWorkflow = () => {
    setCurrentStep(1);
    setSelectedPost(null);
    setCommentKeyword('');
    setDmMessage('');
    setIsLive(false);
  };

  const PostCard = ({ post, isSelected }) => (
    <div 
      onClick={() => handlePostSelect(post)}
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-2 ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="relative">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {post.type === 'reel' && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Film className="w-3 h-3" />
            <span>Reel</span>
          </div>
        )}
        {isSelected && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white rounded-full p-1">
            <Check className="w-4 h-4" />
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <img
            src={post.avatar}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-sm">{post.username}</span>
            {post.isVerified && (
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            )}
          </div>
          <span className="text-xs text-gray-500">• {post.timeAgo}</span>
        </div>
        
        <p className="text-sm text-gray-700 mb-2 line-clamp-2">{post.caption}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Heart className="w-4 h-4" />
              <span>{post.likes.toLocaleString()}</span>
            </span>
            <span className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments}</span>
            </span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs ${
            post.type === 'reel' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {post.type === 'reel' ? 'Reel' : 'Post'}
          </span>
        </div>
      </div>
    </div>
  );

  const InstagramPost = ({ post }) => (
    <div className="bg-white">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <img
            src={post.avatar}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex items-center space-x-1">
            <p className="font-semibold text-sm">{post.username}</p>
            {post.isVerified && (
              <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            )}
          </div>
          <span className="text-xs text-gray-500">• {post.timeAgo}</span>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-600" />
      </div>

      {/* Post Image */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-64 object-cover"
        />
        {post.type === 'reel' && (
          <div className="absolute bottom-2 left-2">
            <Film className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer" />
            <MessageCircle className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
            <Share className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>

        <p className="font-semibold text-sm mb-1">{post.likes.toLocaleString()} likes</p>
        <p className="text-sm">
          <span className="font-semibold">{post.username}</span> {post.caption}
        </p>
        <p className="text-sm text-gray-500 mt-1 cursor-pointer hover:text-gray-700">View all {post.comments} comments</p>
        
        {/* Add Comment Input */}
        <div className="mt-2 pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 text-sm bg-transparent focus:outline-none"
            />
            <button className="text-blue-500 text-sm font-semibold hover:text-blue-600">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Instagram className="w-8 h-8 text-pink-600" />
            <h1 className="text-2xl font-bold text-gray-900">Comment-to-DM Automation</h1>
          </div>
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
            isLive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
          }`}>
            {isLive ? 'Live' : 'Draft'}
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Left Section - Post/Reel Selection Grid */}
        <div className="w-2/3 p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Select Post or Reel</h2>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > 1 ? <Check className="w-4 h-4" /> : '1'}
                </div>
                <span className="text-sm font-medium">Select Content</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > 2 ? <Check className="w-4 h-4" /> : '2'}
                </div>
                <span className="text-sm font-medium">Set Trigger</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > 3 ? <Check className="w-4 h-4" /> : '3'}
                </div>
                <span className="text-sm font-medium">Configure DM</span>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} isSelected={selectedPost?.id === post.id} />
            ))}
          </div>

          {/* Workflow Setup */}
          {currentStep >= 2 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Automation Setup</h3>
              
              <div className="space-y-6">
                {/* Step 2: Comment Trigger */}
                {currentStep >= 2 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900">Comment Trigger Keyword</h4>
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        value={commentKeyword}
                        onChange={(e) => setCommentKeyword(e.target.value)}
                        placeholder="e.g., 'DM me', 'interested', 'info'"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {currentStep === 2 && (
                        <button
                          onClick={handleCommentSetup}
                          disabled={!commentKeyword.trim()}
                          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: DM Message */}
                {currentStep >= 3 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900">Auto-DM Message</h4>
                    <textarea
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Hi! Thanks for your interest. Here's the information you requested..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {currentStep === 3 && (
                      <div className="flex space-x-3">
                        <button
                          onClick={handleDMSetup}
                          disabled={!dmMessage.trim()}
                          className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
                        >
                          Preview & Go Live
                        </button>
                        <button
                          onClick={resetWorkflow}
                          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                        >
                          Reset
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Go Live */}
                {currentStep >= 4 && !isLive && (
                  <div className="text-center py-4">
                    <button
                      onClick={goLive}
                      className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-lg flex items-center space-x-2 mx-auto"
                    >
                      <Play className="w-5 h-5" />
                      <span>Go Live</span>
                    </button>
                  </div>
                )}

                {isLive && (
                  <div className="text-center py-4">
                    <div className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium text-lg flex items-center space-x-2 mx-auto w-fit">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <span>Automation is Live!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Phone UI */}
        <div className="w-1/3 bg-gray-100 p-6 flex items-center justify-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-80 h-[600px] bg-black rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                {/* Phone Status Bar */}
                <div className="bg-white px-6 py-3 flex justify-between items-center text-sm font-medium border-b border-gray-100">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <Instagram className="w-5 h-5 text-gray-900" />
                    <span className="font-bold text-lg">Instagram</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                </div>

                {/* Instagram Content */}
                <div className="h-full overflow-y-auto">
                  {selectedPost ? (
                    <div className="pb-16">
                      <InstagramPost post={selectedPost} />
                      
                      {/* Workflow Status */}
                      {currentStep >= 2 && (
                        <div className="p-4 bg-blue-50 border-t border-blue-200 mx-4 my-4 rounded-lg">
                          <div className="text-sm space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="font-medium text-blue-900">Trigger: "{commentKeyword}"</span>
                            </div>
                            {currentStep >= 3 && (
                              <div className="bg-white p-3 rounded-lg border border-blue-200">
                                <p className="text-xs font-medium text-blue-600 mb-1">Auto-DM Preview:</p>
                                <p className="text-sm text-gray-700">{dmMessage}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500 p-8">
                      <div className="text-center">
                        <Instagram className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                        <p className="text-lg font-medium text-gray-700">Select a post to preview</p>
                        <p className="text-sm text-gray-500">Choose from the grid on the left</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
                  <div className="flex justify-between items-center">
                    <Home className="w-6 h-6 text-gray-900" />
                    <Search className="w-6 h-6 text-gray-600" />
                    <PlusSquare className="w-6 h-6 text-gray-600" />
                    <Heart className="w-6 h-6 text-gray-600" />
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramWorkflowBuilder;