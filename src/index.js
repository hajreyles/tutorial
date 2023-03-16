import React from "react";
import ReactDom from "react-dom";

//stateless functional component
//always return JSX
//JSX rules___________________________
// return single element (use React.Fragment for multiple entries)
// div / section / article or Fragment
// use camelCase for html attribute (onclick -> onClick)
// className instead of class (class="" -> className="")
// close every element (<div> </div>)
// formatting

function Greeting(){
  return (
    <React.Fragment>
      <h4>This is Hajr and this is my first component.</h4>
      <h6>And I am learning React.</h6>
    </React.Fragment>
  ); 
}

//For "<React.Fragment> </React.Fragment> " you can use " <> - </> " as a short cut

ReactDom.render(<Greeting/>, document.getElementById("root"));