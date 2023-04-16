class certificate extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=  <div class="container">

<h3 class="w3-padding-24">Certificate</h3>
   
   <p><span class="w3-large w3-text-black w3-margin-right">LibreOffice Suite</span><a href="LibreOffice.jpeg"></a> </p>

   <p>certificate for completion of LibreOffice suite writer Training</p><br>
  
  <a href="python.jpeg">
   <p><span class="w3-large w3-text-black w3-margin-right">python</span></a></p>
   <p>certificate for completion of python Training.</p><br>
        </div>

    }
};


customElements.define('app-certificate', certificate);