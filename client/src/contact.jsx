export default function Contact() {
     return (
     <>
     <div class="Form">
          <form class="Page" > 
               <div class="Info">
                    <h2>Contact Form</h2>
                    <fieldset>
                         <legend>
                              Personal Information
                         </legend>

                         <br/>

                         <label for="firstname">
                              First Name:
                         </label>
                         <input id="firstnameInput" type="text" placeholder="First" required/>

                         <label id="lastname" for="lastname">
                              Last Name:
                         </label>
                         <input id="lastnameInput" type="text" placeholder="Last" required/>

                         <br/>
                         <br/>

                         <label for="email">
                              Email:
                         </label>
                         <input id="emailInput" type="text" placeholder="Address@url.com" required/>

                         <label id="number" for="number">
                              Phone Number:
                         </label>
                         <input id="numberInput" type="text" placeholder="(123)123-123" required/>

                         <br/>
                         <br/>

                    </fieldset>
               </div>

               <div class="Message">
                    <fieldset>
                         <legend>
                              Inquiry
                         </legend>

                         <br></br>

                         <label for="commentInput">
                              Message
                         </label>
                         <br/>
                         <textarea id="MessageInput" rows="7" cols="80" placeholder="Enter here" required></textarea>

                         <br/>
                         <br/>

                         <input type="submit" value="Send" />
                         <input type="reset" value="Clear"/>
                    </fieldset>
               </div>
          </form>
     </div>
     
     </>
     );
     }
    