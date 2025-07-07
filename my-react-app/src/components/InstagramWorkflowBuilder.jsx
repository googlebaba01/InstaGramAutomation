import React, { useState, useEffect } from 'react';

const InstagramDMAutomation = () => {
  // Mock data
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
    }
  ];

  // State
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLive, setIsLive] = useState(false);
  const [triggerKeyword, setTriggerKeyword] = useState('');
  const [dmMessage, setDmMessage] = useState('');

  const selectPost = (post) => {
    setSelectedPost(post);
    setCurrentStep(2);
  };

  const nextStep = () => {
    if (currentStep === 2 && triggerKeyword.trim()) {
      setCurrentStep(3);
    } else if (currentStep === 3 && dmMessage.trim()) {
      // Ready to go live
    }
  };

  const resetWorkflow = () => {
    setCurrentStep(1);
    setSelectedPost(null);
    setTriggerKeyword('');
    setDmMessage('');
    setIsLive(false);
  };

  const goLive = () => {
    setIsLive(true);
  };

  const PostCard = ({ post }) => (
    <div 
      className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer border-2 hover:transform hover:-translate-y-1 hover:shadow-xl ${
        selectedPost?.id === post.id ? 'border-indigo-500 -translate-y-1' : 'border-transparent'
      }`}
      onClick={() => selectPost(post)}
    >
      <div className="relative">
        <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
        {post.type === 'reel' && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-xl text-xs">
            🎬 Reel
          </div>
        )}
      </div>
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img src={post.avatar} alt={post.username} className="w-8 h-8 rounded-full object-cover" />
          <div>
            <div className="font-semibold text-sm text-gray-800">
              {post.username} {post.isVerified && <span className="text-blue-500">✓</span>}
            </div>
            <div className="text-xs text-gray-400">{post.timeAgo}</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-600 line-height-1.4 mb-3">{post.caption}</div>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">❤️ {post.likes.toLocaleString()}</div>
            <div className="flex items-center gap-1">💬 {post.comments}</div>
          </div>
          <div className={`px-2 py-1 rounded-xl text-xs font-medium ${
            post.type === 'reel' 
              ? 'bg-pink-100 text-pink-700' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            {post.type === 'reel' ? 'Reel' : 'Post'}
          </div>
        </div>
      </div>
    </div>
  );

  const PhonePreview = () => (
    <div className="w-80 h-160 bg-black rounded-3xl p-2 shadow-2xl">
      <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
        <div className="px-5 py-4 bg-white border-b border-gray-100 flex items-center justify-between">
          <div className="font-semibold text-sm">9:41</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md flex items-center justify-center text-white text-xs font-bold">📷</div>
            <span className="font-bold text-base">Instagram</span>
          </div>
          <div>•••</div>
        </div>
        
        <div className="h-96 overflow-y-auto p-5">
          {selectedPost ? (
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={selectedPost.avatar} alt={selectedPost.username} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-sm">
                      {selectedPost.username} {selectedPost.isVerified && '✓'}
                    </div>
                    <div className="text-xs text-gray-400">{selectedPost.timeAgo}</div>
                  </div>
                </div>
                <div>⋯</div>
              </div>
              <img src={selectedPost.image} alt="Post" className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-4 mb-3">
                  <div>❤️</div>
                  <div>💬</div>
                  <div>📤</div>
                </div>
                <div className="text-sm text-gray-600">{selectedPost.caption}</div>
                
                {(triggerKeyword || dmMessage) && (
                  <div className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-xl">
                    <div className="text-xs font-semibold mb-2 opacity-90">AUTOMATION PREVIEW</div>
                    <div className="bg-white bg-opacity-10 p-3 rounded-lg text-xs leading-relaxed">
                      {triggerKeyword && (
                        <div className="mb-2">
                          Trigger: <span className="bg-white bg-opacity-20 px-2 py-1 rounded font-semibold">{triggerKeyword}</span>
                        </div>
                      )}
                      {dmMessage && (
                        <div>Auto-DM: "{dmMessage}"</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center text-gray-400">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">📱</div>
                <div className="text-lg font-semibold text-gray-600 mb-1">Select a post to preview</div>
                <div className="text-sm">Choose from the grid on the left</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 flex justify-between items-center">
          <div className="w-6 h-6 text-gray-800">🏠</div>
          <div className="w-6 h-6 text-gray-400">🔍</div>
          <div className="w-6 h-6 text-gray-400">➕</div>
          <div className="w-6 h-6 text-gray-400">❤️</div>
          <div className="w-6 h-6 text-gray-400">👤</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-gray-800">
      <div className="max-w-7xl mx-auto p-5">
        {/* Header */}
        <header className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">📱</div>
            <h1 className="text-3xl font-bold text-gray-800">Comment-to-DM Automation</h1>
          </div>
          <div className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
            isLive 
              ? 'bg-green-100 text-green-700 animate-pulse' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {isLive ? 'Live' : 'Draft'}
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-150">
          {/* Left Panel */}
          <div className="lg:col-span-2 bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 shadow-xl overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">Select Post or Reel</h2>
            
            {/* Progress Steps */}
            <div className="flex items-center gap-5 mb-10">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  currentStep >= 1 ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>1</div>
                <span className="text-sm font-medium text-gray-600">Select Content</span>
              </div>
              <div className="w-5 h-0.5 bg-gray-200 relative">
                <div className="absolute right-0 top-0 w-0 h-0 border-l-2 border-l-gray-200 border-t border-t-transparent border-b border-b-transparent"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>2</div>
                <span className="text-sm font-medium text-gray-600">Set Trigger</span>
              </div>
              <div className="w-5 h-0.5 bg-gray-200 relative">
                <div className="absolute right-0 top-0 w-0 h-0 border-l-2 border-l-gray-200 border-t border-t-transparent border-b border-b-transparent"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  currentStep >= 3 ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>3</div>
                <span className="text-sm font-medium text-gray-600">Configure DM</span>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
              {mockPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Workflow Setup */}
            {selectedPost && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Automation Setup</h3>
                
                <div className="mb-6">
                  <label className="block font-semibold text-gray-800 mb-2 text-sm">Comment Trigger Keyword</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm transition-all duration-300 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:shadow-lg"
                    placeholder="e.g., 'DM me', 'interested', 'info'"
                    value={triggerKeyword}
                    onChange={(e) => setTriggerKeyword(e.target.value)}
                  />
                </div>
                
                {currentStep >= 3 && (
                  <div className="mb-6">
                    <label className="block font-semibold text-gray-800 mb-2 text-sm">Auto-DM Message</label>
                    <textarea 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm transition-all duration-300 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:shadow-lg resize-vertical min-h-24"
                      placeholder="Hi! Thanks for your interest. Here's the information you requested..."
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                    />
                  </div>
                )}
                
                <div className="flex gap-4">
                  {currentStep < 3 && (
                    <button 
                      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2"
                      onClick={nextStep}
                      disabled={currentStep === 2 && !triggerKeyword.trim()}
                    >
                      Next
                    </button>
                  )}
                  
                  {currentStep === 3 && !isLive && (
                    <button 
                      className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2"
                      onClick={goLive}
                      disabled={!dmMessage.trim()}
                    >
                      🚀 Go Live
                    </button>
                  )}
                  
                  {isLive && (
                    <button 
                      className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold text-base animate-pulse"
                      disabled
                    >
                      🔴 Automation is Live!
                    </button>
                  )}
                  
                  <button 
                    className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-gray-200"
                    onClick={resetWorkflow}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Phone Mockup */}
          <div className="flex items-center justify-center bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <PhonePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramDMAutomation;