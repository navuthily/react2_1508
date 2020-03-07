import React, { Component } from 'react';

class Handle extends Component {
   constructor(){
      super()
      this.hande=this.hande.bind(this);
   }
   nana(){
      alert('oke to click.finish test')
   }
     hande() {
        alert('oke to click.finish test')
     }
   render() {
      return (
         <>
            Handle
            <p>nana chan</p>
            <button onClick={()=>this.nana()}>click try</button>
            <p>button nuawx nef na</p>
                        <button onClick={this.hande}>click 2</button>
         </>
      );
   }
}

export default Handle;