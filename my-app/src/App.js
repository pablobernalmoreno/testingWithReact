import React from "react";
import "./app.scss";
import Header from "./component/header";
import Headline from "./component/headline";

const tempArr = [{
  fName: "Joe",
  lName: "Bloggs",
  email: "joeblogss@gmail.com",
  age: 25,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          description="Click the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
