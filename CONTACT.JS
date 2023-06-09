class contact extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=  <div class="container">
            <div class="w3-padding-32 w3-content w3-text-grey" id="contact" style="margin-bottom:64px">
    <h2>Contact Me</h2>
    <hr class="w3-opacity">

    <div class="w3-section">
      <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>Jaipur, RJ</p>
      <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +91 9460343731</p>
      <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: arpitagoyal2822002@gmail.com</p>
    </div>
    
    <!-- Image of location/map -->
    <!--<img src="/w3images/map.jpg" class="w3-image w3-greyscale" style="width:100%;margin:32px 0"> -->

     <br>
    <p>Lets get in touch. Send me a message:</p>
    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" required name="Subject"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message"></p>
      <p>
        <button class="w3-button w3-light-grey w3-padding-large" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
  <!-- End Contact Section -->
  </div>  

        </div>
    }
};


customElements.define('app-contact', contact);