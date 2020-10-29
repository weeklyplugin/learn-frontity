import React from 'react';
import {connect} from 'frontity';


const Post = ({state})=>{

    const data = state.source.get(state.router.link)
    const post = state.source.post[data.id];
    const postAuthor = state.source.author[post.author];

   
    
        return(
            <div>
               <h2 dangerouslySetInnerHTML={{__html:post.title.rendered}}></h2>  
               <strong dangerouslySetInnerHTML={{__html:postAuthor.name}}></strong>  

               <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>             

            </div>
        )

}
export default connect(Post);