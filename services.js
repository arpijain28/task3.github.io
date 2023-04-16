class services extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=  <div class="container">
            <footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge" style="margin:-24px">
    <a href="https://www.linkedin.com/in/arpita-jain-124a99233">
    <i class="fa fa-linkedin w3-hover-opacity" > </i></a>
    <p center>Linkedin</p>
  <!-- End footer -->
  </footer>
  
        </div>

}
};


customElements.define('app-services', services);