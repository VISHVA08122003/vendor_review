import React from "react";
import NavBar from "./Navbar";
import './home.css';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <NavBar/>
      <div className="container mx-auto p-6">
           <main>
        <section className="hero">
          <h1>WELCOME TO EVENT MANAGEMENT</h1>
          <p>“Make your event stand out from the rest”</p>
         
        </section>
        
        <section className="featured-games">
          <h2>It's Show Time</h2>
          <ul>
            <li>
              <img src="https://tse3.mm.bing.net/th?id=OIP.xaKzArhRfmyV_SIfLoQ11AHaEo&pid=Api&P=0&h=180"></img>
              <h3><strong>isai puyal</strong></h3>
              <p> when life says no more win more</p>
              <p> event place:codisia</p>
              <p> Date:09.09.2023</p>
            </li>
            <li>
              <img src="https://tse4.mm.bing.net/th?id=OIP.Al7cEDDvdfPlEACfxMaXzgHaEK&pid=Api&P=0&h=180"></img>
              <h3>Rock star</h3>
              <p>Nothing is right!nothing is wrong. only our confidence speak.</p>
              <p> event place:codisia</p>
              <p> Date:09.10.2023</p>
              </li>
            <li>
              <img src="https://tse1.mm.bing.net/th?id=OIP.E4-e2r2F6-k_tPxb14CDnwHaFj&pid=Api&P=0&h=180"></img>
              <h3>always melody</h3>
              <p>is your mind upset. relax and chill</p>
              <p> event place:codisia</p>
              <p> Date:09.10.2023</p>
              
            </li>
          </ul>
        </section>
      </main>
      </div>
    </div>
  );
}

export default Home;
