var posts=["2024/12/22/LeetCodeWeek/","2024/12/17/hello-world/","2024/12/23/OS/","2024/12/17/PostPages/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };