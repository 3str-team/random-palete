import React from "react";
import Layout from "./components/Layout/Layout";
import Palete from "./components/Palete/Palete";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Palete />
      </Layout>
    </div>
  );
}

export default App;
