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
        <h2>PRODUCTS</h2>
      </div>
      
     
    </div>
    <div class="du"
            >
      <div class="du1">
        <div class="du2">
          <img src="/img/refined-oil.svg" alt="">
          <p>Refined Oil</p>
        </div>
        <div class="du2">
          <img src="/img/unrefined-oil.svg" alt="">
          <p>Unrefined Oil</p>
        </div>
        <div class="du2">
          <img src="/img/meal.svg" alt="">
          <p>Sunflower Meal</p>
        </div>
        <div class="du2">
          <img src="/img/fuel.svg" alt="">
          <p>Biofuel Sunflower Husk Pellets</p>
        </div>
      </div>
      <div class="du1"
      
        >
        <div class="du2">
          <img src="/img/mayo.svg" alt="">
          <p>Mayonnaise</p>
        </div>
        <div class="du2">
          <img src="/img/mustard.svg" alt="">
          <p>Mustard</p>
        </div>
        <div class="du2">
          <img src="/img/tomato-paste.svg" alt="">
          <p>Tomato Paste Ketchup</p>
        </div>
        <div class="du2">
          <img src="/img/up.svg" alt="">
          <p>Vinegar</p>
        </div>
      </div>
    </div>
    <div class="lab">
        <div class="lab1">
            <h2>TM SUNNY SEED OIL</h2>
            <p>Sunny seed oil is a well-known Ukrainian sunflower seeds processing company that produces a large range of products under its own brand, Sunny.</p>
            <img src="/img/priv.jpg" alt="">
        </div>
        <div class="lab2">
            <h2>PRIVATE LABEL</h2>
            <p>We provide an opportunity for production under a private label using our time-tested formulas or change those according to the client’s needs.</p>
            <img src="/img/priv.jpg" alt="">
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
    <footer-section/>
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
        color: #ffbe3c;
     background: black;
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
        ),url(/img/matt.jpg) center center/cover;
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
    font-size: 50px;
  }
  .index2{
    text-align: center;
  }
  .index2 h2{
    color: #ffbe3c;
    font-size: 80px;
    padding-top: 15rem;
  }
  .lab{
      margin-top: 3rem;
      margin-left: 10%;
      margin-right: 10%;
      display: grid;
      grid-column-gap: 2rem;
      grid-template-columns: 1fr 1fr;
  }
  .lab img{
      width: 100%;
  }
  .lab1{
      text-align: right;
      padding-right: 2rem;
      border-right: 2px solid #ffbe3c;
  }
  .lab1 h2{
      font-size: 40px;
      color: #ffbe3c;
      margin-bottom: 1rem;
  }
  .lab1 p{
      font-size: 20px;
  }
  .lab2 h2{
      font-size: 40px;
      color: #ffbe3c;
      margin-bottom: 1rem;
  }
  .lab2 p{
      font-size: 20px;
  }
   .du{
  background: #ffbe3c;
  padding: 5rem 15%;
  text-align: center;
}
.du1{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

}
.du2{
  
  margin-bottom: 2rem;
}
.du2 p{
  color: white;
  font-size: 20px;
  margin-top: 1rem;
  text-transform: uppercase;
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
    background: linear-gradient(
            to right,
            rgba(0, 4, 23, 0.58),
            rgba(0, 4, 23, 0.58)
        ),url(/img/matt.jpg) center center/cover;
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
    font-size: 50px;
  }
  .index2{
    text-align: center;
  }
  .index2 h2{
    color: #ffbe3c;
    font-size: 50px;
    padding-top: 15rem;
  }
  .lab{
      margin-top: 3rem;
      margin-left: 10px;
      margin-right: 10px;
      display: grid;
      grid-column-gap: 2rem;
      grid-template-columns: 1fr;
      text-align: center;
  }
  .lab1{
      text-align: center;
      padding-right: 2rem;
      border-right: none;
  }
  .lab1 h2{
      font-size: 40px;
      color: #ffbe3c;
      margin-bottom: 1rem;
  }
  .lab1 p{
      font-size: 20px;
  }
  .lab2 h2{
      font-size: 40px;
      color: #ffbe3c;
      margin-bottom: 1rem;
  }
  .lab2 p{
      font-size: 20px;
  }
  .lab img{
      width: 100%;
  }
 
.du{
  background: #ffbe3c;
  padding: 3rem 10px;
  text-align: center;
}
.du1{
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: 2rem;

}
.du2{
  
  margin-bottom: 2rem;
}
.du2 p{
  color: white;
  font-size: 20px;
  margin-top: 1rem;
  text-transform: uppercase;
}


  }

  @media(min-width:568px) and (max-width: 768px){
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


