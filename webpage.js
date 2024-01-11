import React from 'react';
import './webpage.css'; 

function WebPage() {
  return (
    <div className="container">
      <header>
        <h1> Welcome to My Basic Webpage </h1>
      </header>
      <main>
        <p>This is a simple webpage built using HTML and CSS within React.</p>
        <div className="content">
          <p>Here's some content in a styled box.</p>
        </div>
      </main>
      <footer>
        <p>© 2023 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default WebPage;
