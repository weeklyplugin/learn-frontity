import React from 'react';
import {connect} from 'frontity'; /* import connect */
import Link from './Link';
import List from './list';
import Post from './post';
import Page from './page';




const Root = ({state}) => {
    const data = state.source.get(state.router.link)
    return (
      <>
  
       <h1>Frontity Workshop  </h1>
    <p> We are on page : {state.router.link}</p>
       <nav>
            <Link href="/"> Contact</Link>
            <Link href="/courier-cargo/"> Courier Cargo</Link>
            <Link href="/commercial-cargo/"> Commercial Cargo</Link>
            <Link href="/haiti-blog/"> Blog</Link>           
       </nav>
       <main>
    {data.isPage && <Page></Page>}
    {data.isPost && <Post></Post> }
    {data.isArchive && <List></List>}  

       </main>
       
      </>
    );
  };

export default connect(Root);  /* export connect */