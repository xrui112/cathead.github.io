var posts=["2024/12/22/LeetCodeWeek/","2024/12/25/OSTest/","2024/12/23/OS/","2024/12/17/PostPages/","2024/12/17/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };