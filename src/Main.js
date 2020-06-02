import React from 'react';

import './App.css';
import Address from './profile/Address'
import FullName from './profile/FullName'
import ProfilPhoto from './profile/ProfilPhoto'

function Main() {
  return (
    <div className="App card">
    
  <ProfilPhoto/>
  <FullName/>
  <p class="title"><Address/></p>
    <i class="fa fa-dribbble"></i>
  <i class="fa fa-twitter"></i>
  <i class="fa fa-linkedin"></i>
  <i class="fa fa-facebook"></i>
  <p><button>Contact</button></p>

     


     
    </div>
  );
}

export default Main;
