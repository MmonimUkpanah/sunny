<template>
    <div>
        <div class="nav" ref="set21" v-if="act">
            <div class="nav1" ref="set22">
                <font-awesome-icon class="icon" :icon="['fas', 'sliders-h']" @click="showNav" />
                <div class="nav2">
                <nuxt-link class="link" to="/"><h2>HOME</h2></nuxt-link>
                <nuxt-link class="link" to="products"><h2>PRODUCTS</h2></nuxt-link>
                <nuxt-link class="link" to="production"><h2>PRODUCTION</h2></nuxt-link>
                <nuxt-link class="link" to="partners"><h2>FOR PARTNERS AND INVESTORS</h2></nuxt-link>
                <nuxt-link class="link" to="team"><h2>OUR TEAM</h2></nuxt-link>
                <nuxt-link class="link" to="about"><h2>ABOUT OUR COMPANY</h2></nuxt-link>
                </div>
                
            </div>
        </div>
    <div class="index">
      <div class="index0">
        <div>
          <font-awesome-icon class="icon2" :icon="['fas', 'sliders-h']" @click="showNav" />
        </div>
        <div class="index1">
          <h2>Sunny</h2>
        </div>
      </div>
      <div class="index2">
          
          
        <h2>ABOUT OUR COMPANY</h2>
      </div>
      
     
    </div>
    <div class="pro">
      <div class="pro0">
        <h2>THE SECRET OF A <span class="pro4">PREMIUM PRODUCT</span>  IS SO SIMPLE:</h2>
      </div>
      
      <div class="pro1">
        <div class="pro2"
        da
        >
          <h2>HEAVY CROP OF  <span class="pro4">WORLD-FAMOUS</span> UKRAINIAN SUNFLOWERS </h2>
        </div>
        <div class="pro3"
        
        >
          <h2>HIGH <span class="pro4">QUALITY</span>  STANDARDS</h2> 
        </div>
      </div>
      <div class="pro1">
        <div class="pro2"
        da
        >
          <h2>MANUFACTURING ON <span class="pro4">MODERN</span> LINES</h2>
        </div>
        <div class="pro3"
        
        >
          <h2>EVERYDAY<span class="pro4"> WORK</span >  THAT WE ENJOY</h2> 
        </div>
      </div>
    </div>
    <div class="cele">
      <div class="cele1">
      </div>
      <div class="cele2" 
      
        >
        <p>Sunny is the leading brand of the Ukrainian company Sunny Seed Oil (a private joint-stock company). It is a major Ukrainian sunflower seeds
              processing company that has been producing a large range of products for over 
              30 years.</p>
          <p>The high quality of the products is accomplished through the combination 
              of modern and effective production and bountiful harvest of well-known 
              Ukrainian sunflowers. Sunny sunflower oil is an abundance of carefully picked 
              and processed sunflowers.</p>
          <p>Our company produces refined and unrefined sunflower oil. We also offer an 
              extensive range of sunflower seeds products and raw material processing services.</p>
          <p>We have experience in manufacturing products for hot climates with the 
            possibility of storage and distribution in high temperature conditions.</p>
      </div>
    </div>
    <div class="img">
      <div class="img1"
      da
      >
        <img src="/img/boot.svg" alt="">
      </div>
      <div class="img2"
      
        >
        <div class="img3">
          <img src="/img/borot.svg" alt="">
        </div>
        <div class="img3">
          <img src="/img/boro.svg" alt="">
        </div>
      </div>
      <div class="img1"
      
        >
        <img src="/img/borobot.svg" alt="">
      </div>
    </div>
    <div class="ad">
      <h2>SUNNY VALUES</h2>
      <div class="ad1">
        <div class="ad2">
          <img src="/img/pt.jpg" alt="">
          <p>We value a straightforward partnership since simple and clear cooperation mechanisms allow saving the most important business resource, time.</p>
        </div>
        <div class="ad2">
          <img src="/img/oil.jpg" alt="">
          <p>We are open to partnership and provide an opportunity to create a private label using our own formulas and technological tasks.</p>
        </div>
        <div class="ad2">
          <img src="/img/tr.jpg" alt="">
          <p>We are expanding the horizons of our abilities by offering shipping to any country in the world.</p>
        </div>
        
      </div>
    </div>
    <div class="cele">
      <div class="cele2"
      
        >
        <h2> SUSTAINABLE DEVELOPMENT</h2>
        <p><span class="cele5">RESPONSIBILITY TOWARDS NATURAL RESOURCES OF UKRAINE </span> </p>
        <p>A complex approach to environmental protection is a very important part of the company's work. It involves the optimal usage of the resources and implementation of measures for the preservation of the environment.</p>
        <p><span class="cele5">PRODUCT SAFETY </span> </p>
          <p>Our company produces refined and unrefined sunflower oil. We also offer an 
              extensive range of sunflower seeds products and raw material processing services.</p>
          <p>We have experience in manufacturing products for hot climates with the 
            possibility of storage and distribution in high temperature conditions.</p>
        <p><span class="cele5">RESPONSIBLE EMPLOYER </span></p>
        <p>Our company's main priority is to create a comfortable and safe work environment. This is the reason why the company improves production processes, organizes trainings, and creates convenient working conditions for its employees.</p>
      </div>
      <div class="cele1">
      </div>
    </div>
    <back-to-top />
    <script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/607873c3067c2605c0c2cc88/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
    <footer-sections/>
    </div>
</template>
<style scoped>
    @font-face {
    font-family: DMSans;
    src: url("/font/DMSans-Regular.ttf");
    }
    *{
        font-family: 'DM Sans', sans-serif  !important;
        padding: 0;
        margin: 0;
    }
    .nav{
        width: 30%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: #ffbe3c;
    }
    .nav1{
        margin-left: 3rem;
        margin-right: 3rem;
        padding-top: 2rem;
    }
    .nav1 img{
        border:1px solid white;
        width: 5rem;
        background: white;
        border-radius: 50%;
    }
    .nav2{
      margin-top: 3rem;
      color: white;
    }
    .link{
      color: white;
    }
    .nav2 h2{
      margin-bottom: 2rem;
    }
    .icon{
        color: black;
     
      padding: 1rem;
      font-size: 4rem;
      border-radius: 50%;
      border: 2px solid black;
    }
    .icon2{     
      color: white;
      margin-left: 3rem;
      margin-top: 2rem;
      padding: 1rem;
      font-size: 4rem;
      border-radius: 50%;
      background: #ffbe3c;
    }
  .index{
    background: linear-gradient(
            to right,
            rgba(0, 4, 23, 0.58),
            rgba(0, 4, 23, 0.58)
        ), url(/img/me.jpg) center center/cover;
    height: 100vh;
    
  }
  .index0{
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    width: 100%;
    margin-bottom: 10rem;
  }
  .index1{
    text-align: right;
    margin-top: 2rem;
    margin-right: 7rem;
    color: #ffbe3c;
  }
  .index1 h2{
    font-size: 70px;
  }
  .index2{
    text-align: center;
  }
  .index2 h1{
      color: #ffbe3c;
    font-size: 100px;
   padding-top: 5rem;
  }
  
  .index2 h2{
    color: #ffbe3c;
    font-size: 100px;
    padding-top: 15rem;
  }
  .cele{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 15%;
    margin-right: 15%;
    grid-column-gap: 2rem;
  }
  
  .cele1{
    background: url("/img/olia.jpg") center center/cover ;
  }
  .cele2{
    padding: 5rem 2rem;
  }
  .cele2 h2{
    font-size: 30px;
    margin-bottom: 1rem;
  }
  .cele2 p{
    font-size: 20px;
    margin-bottom: 1.5rem;
  
  }
.cele5{
  font-weight: bold;
  color: #ffbe3c;
}
.img{
  margin-top: 3rem;
  text-align: center;
  margin-left: 15%;
  margin-right: 15%;
}
.img1 img{
  width: 35%;
}
.img2{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
}
.img3 img{
  width: 70%;
}
.pro{
  margin-top: 4rem;
  margin-bottom: 2rem;
}
.pro0{
  text-align: center;
  margin-left: 15%;
  margin-right: 15%;
}
.pro0 h2{
  font-size: 45px;
}
.pro1{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 3rem;
  text-align: center;
}
.pro1 h2{
  font-size: 40px;
  
}
.pro2{
   background: url("/img/drop.svg") no-repeat;
  background-size: 200px;
  background-position: right;
}
.pro3{
  margin-top: 7rem;
   background: url("/img/drop.svg") no-repeat;
  background-size: 200px;
  background-position: right;
  padding-top: 2rem;
padding-bottom: 2rem;         

}
.pro4{
  color: #ffbe3c;
}
.ad{
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
}
.ad h2{
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 1rem;
}
.ad1{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-column-gap: 2rem;
  margin-left: 10%;
  margin-right: 10%;
}
.ad2{
  text-align: center;
}
.ad2 p{
  font-size: 20px;
  margin-top: 1.5rem;
  border-top: 1px solid #ffbe3c ;
  padding-top: 1rem;
}
.ad2 img{
  width: 100%;
  height: 20rem;
}







@media(max-width:567px){
    .nav{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: #ffbe3c;
    }
    .nav1{
        margin-left: 10px;
        margin-right: 10px;
        padding-top: 2rem;
    }
    .nav1 img{
        border:1px solid white;
        width: 5rem;
        background: white;
        border-radius: 50%;
    }
    .icon{
        color: #ffbe3c;
     
      padding: 1rem;
      font-size: 4rem;
      border-radius: 50%;
      background: black;
    }
    .icon2{     
      color: white;
      margin-left: 10px;
      margin-top: 2rem;
      padding: 1rem;
      font-size: 4rem;
      border-radius: 50%;
      background: #ffbe3c;
    }
  .index{
    background:linear-gradient(
            to right,
            rgba(0, 4, 23, 0.58),
            rgba(0, 4, 23, 0.58)
        ), url(/img/ju.jpg) center center/cover;
    height: 100vh;
    
  }
  .index0{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .index1{
    text-align: right;
    margin-top: 2rem;
    margin-right: 10px;
    color: #ffbe3c;
  }
  .index1 h2{
    font-size: 70px;
  }
  .index2{
    text-align: center;
  }
  .index2 h2{
    color: #ffbe3c;
    font-size: 50px;
    padding-top: 15rem;
  }
  .cele{
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
  }
  .cele1{
    height: 50vh;
    background: url("/img/olia.jpg") center center/cover ;
  }
  .cele2{
    padding: 1rem 10px;
  }
  .cele2 p{
    font-size: 20px;
    margin-bottom: 1.5rem;
  
  }
  .cele2 ul{
    list-style: none;
    margin-left: 1rem;
    margin-bottom: 1.5rem;
  }
  .cele2 ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #ffbe3c; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
.cele2 ul li{
  font-size: 20px;
}
.pro{
  margin-top: 4rem;
  margin-bottom: 2rem;
}
.pro0{
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}
.pro0 h2{
  font-size: 40px;
}
.pro1{
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3rem;
  text-align: center;
}
.pro1 h2{
  font-size: 30px;
  
}
.pro2{
   background: url("/img/drop.svg") no-repeat;
  background-size: 200px;
  background-position: center;
}
.pro3{
  margin-top: 7rem;
  
  background-size: 200px;
  background-position: center;
                     

}
.pro4{
  color: #ffbe3c;
}
.ad1{
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  margin-left: 10px;
  margin-right: 10px;
}
.img{
  margin-top: 3rem;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}
.img1 img{
  width: 80%;
  margin-bottom: 2rem;
}
.img2{
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
}
.img3 img{
  width: 80%;
  margin-bottom: 2rem;
}
.ad2 p{
  font-size: 20px;
  margin-top: 1.5rem;
  border-top: 1px solid #ffbe3c ;
  padding-top: 1rem;
  margin-bottom: 2rem;
}
}


@media(min-width:568px) and (max-width: 768px){
  .pro0{
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
}
  .pro1{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3rem;
  text-align: center;
}
.cele{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 10%;
    margin-right: 10%;
    grid-column-gap: 1rem;
  }
  .cele2{
    padding: 5rem 10px;
  }
  .nav{
        width: 40%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: #ffbe3c;
    }
}
</style>






<script>
export default {
    data(){
        return{
            act:false,
            
        }
    },
    methods:{
        showNav(){
            if (this.act==true){
                this.act=false;
            }else{
                this.act=true;
               
            }
        },
    }
}
</script>