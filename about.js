class about extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=  <div class="container">
            <!-- About Section -->
            <div class="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
    <h2>About</h2>
    <hr class="w3-opacity">
    <p>I'm Arpita Jain currently MCA pursuing in AI & ML from JECRC university I want to succeed in a challenging
environment that encourages
continuous learning and exposure
to new ideas and stimulate personal
and professional growth.
    </p>
    <h3 class="w3-padding-16">My Skills</h3>
    <p class="w3-wide">Java</p>
    <div class="w3-light-grey">
      <div class="w3-container w3-center w3-padding-small w3-dark-grey" style="width:60%">60%</div>
    </div>
    <p class="w3-wide">Html & CSS</p>
    <div class="w3-light-grey">
      <div class="w3-container w3-center w3-padding-small w3-dark-grey" style="width:70%">70%</div>
    </div>
     <p class="w3-wide">javascript</p>
    <div class="w3-light-grey">
      <div class="w3-container w3-center w3-padding-small w3-dark-grey" style="width:70%">50%</div>
    </div>
     <p class="w3-wide">python</p>
    <div class="w3-light-grey">
      <div class="w3-container w3-center w3-padding-small w3-dark-grey" style="width:70%">50%</div>
    </div>
    <p class="w3-wide">SQL</p>
    <div class="w3-light-grey">
      <div class="w3-container w3-center w3-padding-small w3-dark-grey" style="width:60%">60%</div>
    </div><br>

    <div class="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
      
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">2+</span><br>
        Projects 
      </div>
      
    </div>

        </div>

         }
};


customElements.define('app-about', about);
