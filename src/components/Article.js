import React from 'react'

function Article() {
  return (
    <div>
         <article>
            <h3><time datetime="2023-10-01">October 1, 2023</time></h3>
            <h2>On the Street in Brooklyn</h2>
            <img src={process.env.PUBLIC_URL + '/imgs/blog-image-1.jpg'} alt="Image 1"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Ullam asperiores cupiditate dolorum, provident quam rem velit 
               magni eligendi temporibus odio? Eligendi ea necessitatibus voluptatem? 
               Dolores consequuntur nisi perferendis illum consectetur.</p>
               <a href="#">Continues ...</a>
         </article>
         <article>
            <h3><time datetime="2023-10-02">October 2, 2023</time></h3>
            <h2>Vintage in Vogue</h2>
            <img src={process.env.PUBLIC_URL + '/imgs/blog-image-2.jpg'}  alt="Image 2"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Cupiditate repellat at exercitationem numquam nam dolores a 
               voluptatum nemo, libero voluptas nostrum doloribus omnis nulla 
               eaque blanditiis veritatis aperiam et dolor?</p>
            <a href="#">Continues ...</a>
         </article>

    </div>
  )
}

export default Article