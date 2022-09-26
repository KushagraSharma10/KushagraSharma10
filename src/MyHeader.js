import React from 'react';
//import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyHeader() {
  return (
    <section class="navbar-dark bg-dark header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12">
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand text-black" href="#">Gammy Tours</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item ">
                    <a class="nav-link " href="#about">About<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#destinations">Destinations<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link" href="#places">Places<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#tourist">Tourists Detail<span class="sr-only">(current)</span></a>
                  </li>
                </ul>

              </div>
             </nav>
            </div>
          </div>
        </div>
    </section>
  );
}
export default MyHeader;