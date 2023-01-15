'use client'

// import Script from 'next/script';
// import { DiscussionEmbed } from "disqus-react"

/* type CommentsProps = {
  url: string;
  id: string;
  title: string;
} */

const Comments = (/* { url, id, title }: CommentsProps */) => {
  /* const disqusShortname = `blog ${title}`
  const disqusConfig = {
    url: url,
    identifier: id,
    title: title
  } */

  return (
    <div> 
      <div id="disqus_thread"></div> 
      <script>
        {
         `(function() { // DON'T EDIT BELOW THIS LINE
          var d = document, s = d.createElement('script');
          s.src = 'https://https-unbit-vercel-app.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
          })();` 
        }
      </script>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
  )
}
export default Comments;
