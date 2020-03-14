import React, { Component } from 'react';//imrc creation import
class User extends Component {//cc creation de classe
    state = {  }//na3mlou beha declaration de variable 
   
    render() { 
        return ( 
            <div>
                <h1 style={{color:"red",fontSize:"100px"}}>
                    hello word 

                </h1>
                <form>
                  <label>
                         Nom :
                         <input type="text" name="name" />
                   </label><br/>
                   <label>
                         prenom :
                         <input type="text" name="name" />
                   </label><br/>
                   <label>
                         email :
                         <input type="text" name="name" />
                   </label><br/>
                   <label>
                         password :
                         <input type="text" name="name" />
                   </label><br/>
                
                <label>
                    description :
                    <textarea>
                         **** Bonjour Malek ****
                    </textarea>
                </label><br/>
                <label>
                  Choisissez votre parfum favori :
                <select>
                  <option selected value="coconut">Noix de coco</option>
                  <option value="grapefruit">Pamplemousse</option>
                  <option value="lime">Citron vert</option>
                  <option value="mango">Mangue</option>
                </select>
                </label><br/>
                <input type="submit" value="Envoyer" />

                </form>
            </div>
         );
    }
}
 
export default User ;