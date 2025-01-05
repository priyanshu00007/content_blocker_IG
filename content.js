chrome.storage.local.get('blockerEnabled', (data) => {
    if (data.blockerEnabled) {
      const keywords = ['18+', 'nsfw', 'explicit', 'porn', 'nude', 'sex'];
  
      // Function to hide posts
      function hideExplicitPosts() {
        const posts = document.querySelectorAll('article');
  
        posts.forEach((post) => {
          const text = post.innerText.toLowerCase();
  
          if (keywords.some((keyword) => text.includes(keyword))) {
            post.style.display = 'none';
          }
        });
      }
  
      // Run the function initially and on DOM changes
      hideExplicitPosts();
      const observer = new MutationObserver(hideExplicitPosts);
      observer.observe(document.body, { childList: true, subtree: true });
    }
  });
  