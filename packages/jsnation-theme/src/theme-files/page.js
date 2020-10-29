import React from 'react';
import {connect} from 'frontity';

const Page = ({state})=>{

    const data = state.source.get(state.router.link)
    const page = state.source.page[data.id];
    
        return(
            <div>
               <h2 dangerouslySetInnerHTML={{__html:page.title.rendered}}></h2>
               <div dangerouslySetInnerHTML={{__html:page.content.rendered}}></div>             

            </div>
        )
 
}
export default connect(Page);