class home extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=  <div class="container">

<header class="w3-container w3-center" style="padding:128px 16px" id="home">
    <h1 class="w3-jumbo"><b>Arpita Jain</b></h1>
    <p>web developer</p>
    <img src="arpi.jpg" class="w3-image w3-hide-large w3-hide-small w3-round" style="display:block;width:60%;margin:auto;">
    <img src="arpi.jpg" class="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333">
    <button class="w3-button w3-light-grey w3-padding-large w3-margin-top">
    <a href="Arpita Jain R.pdf">
      <i class="fa fa-download"></i> Download Resume</a>
    </button>
  </header>
        </div>
    }
};


customElements.define('app-home', home);