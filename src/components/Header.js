import React from 'react';
import classes from './Header.module.css';/* clases is just name used to refer header.module.css and we use the name classes as classname  */

import mealsimage from '../components/img/meals.jpg';/* ../means ging up in folder /means going inside */
export default function Header() {
  return <React.Fragment >
    <header classname={classes.header}>special foods</header>
    <div className={classes['main-image']}>{/* here classes [''] to use classname in css file */}
      <img src={mealsimage} />{/* its how you add localimage if url direcly paste it */}
    </div>
  </React.Fragment>
}
