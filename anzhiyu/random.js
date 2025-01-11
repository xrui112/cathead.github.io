var posts=["2024/12/23/OS/","2024/12/17/PostPages/","2024/12/25/OSTest/","2025/01/10/redis/","2024/12/31/计算机网络/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };