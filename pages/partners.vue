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
        <h2>FOR PARTNERS AND INVESTORS</h2>
      </div>
      
     
    </div>
    <div class="can">
        <div class="can1">
            <h3>SUNNY CONSTANTLY CHANGES AND EXPANDS</h3>
            <p>The stable financial performance of the company provides us with opportunities for future growth. Development of highly technical and effective production and ensuring the high quality of the products are our main priorities.</p>
        </div>
        <div class="can2">

        </div>
    </div>
    <div class="cer">
        <h2>WE ARE CERTAIN THAT INVESTMENT IN DEVELOPMENT TODAY IS THE KEY TO SUCCESS OF THE COMPANY IN FUTURE.</h2>
    </div>
    <div class="vol">
        <div class="vol1">

        </div>
        <div class="vol2">
            <div class="vol3">
                <img src="/img/2017_en.svg" alt="">
                <img src="/img/2018_en.svg" alt="">
            </div>
            <img src="/img/2019_en.svg" alt="">
        </div>
    </div>
    <div class="cer">
        <h2>OUR ADVANTAGE LIES IN SIMPLE COOPERATION</h2>
        <p>We are open to partnership and we have created simple and effective cooperation mechanisms that allow us to respond to our partner's needs very quickly. Each project has a well-structured plan, thus it is very easy for our partners to monitor the order.</p>
    </div>
    <div class="per0">
        <h2>COOPERATION STAGES</h2>
        <div class="per">
            <div class="per1">
                <img src="/img/zustrich-01.svg" alt="">
                <p>Meeting</p>
            </div>
            <div class="per1">
                <img src="/img/pidpisannya-kontraktu-01.svg" alt="">
                <p>Signing of the contract</p>
            </div>
            <div class="per1">
                <img src="/img/otrimannya-peredoplati-01.svg" alt="">
                <p>Advance Payment</p>
            </div>
            <div class="per1">
                <img src="/img/peredacha-na-virobnicztvo-01.svg" alt="">
                <p>Production Order</p>
            </div>
            <div class="per1">
                <img src="/img/virobnicztvo-01.svg" alt="">
                <p>Production</p>
            </div>
        </div>
        <div class="per">
            <div class="per1">
                <img src="/img/peredacha-dokumentiv-01.svg" alt="">
                <p>Transfer of Cargo Documents</p>
            </div>
            <div class="per1">
                <img src="/img/vidvantazhennya-01.svg" alt="">
                <p>Shipment</p>
            </div>
            <div class="per1">
                <img src="/img/zavantazhennya-01.svg" alt="">
                <p>Loading of the vessel</p>
            </div>
            <div class="per1">
                <img src="/img/dostavka-do-portu-01.svg" alt="">
                <p>Delivery to port of destination</p>
            </div>
            <div class="per1">
                <img src="/img/dostavka-do-skladu-01.svg" alt="">
                <p>Delivery to Customer's warehouse</p>
            </div>
        </div>
    </div>
    <div class="can">
        
        <div class="can21">

        </div>
        <div class="can1">
            
            <p>Olivia adheres to the principle of simple cooperation that regulates production stages and worldwide shipping. Our main goal is to ensure effective cooperation through efficient and prompt shipping of the product from the plant to the port. We provide our customers with the most cost effective and fastest shipping options.</p>
        </div>
    </div>
    <div class="part2">
        <img src="/img/map.svg" alt="">
    </div>
    <div class="our">
        <h2>OUR PARTNERS</h2>
        <div class="our1">
            <div class="our2">
                <img src="/img/maersk.png" alt="">
            </div>
            <div class="our2">
                <img src="/img/zim.png" alt="">
            </div>
            <div class="our2">
                <img src="/img/msc.png" alt="">
            </div>
            <div class="our2">
                <img src="/img/alpha.png" alt="">
            </div>
            <div class="our2">
                <img src="/img/cma.png" alt="">
            </div>
            <div class="our2">
                <img src="/img/cosco.png" alt="">
            </div>
        </div>
        <p>We work with trusted partners when it comes to container cargo transportation. They provide shipping to any port in the world. We also offer road or railway transportation within Europe.</p>
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
        ),url(/img/hw.jpg) center center/cover;
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
  .can{
      margin-top: 3rem;
      margin-right: 15%;
      margin-left: 15%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
  }
  .can1{
      padding:3rem 0 ;
  }
  .can1 h3{
      color: #ffbe3c;
  }
  .can1 p{
      font-size: 20px;
  }
  .can2{
      background: url("/img/ant.jpg") center center/cover;
  }
  .can21{
      background: url("/img/chut.jpg") center center/cover;
  }
  .cer{
      text-align: center;
      margin-top: 3rem;
    margin-left: 15%;
    margin-right: 15%;
  }
  .cer h2{
      color: #ffbe3c;
  }
  .cer p{
      font-size: 20px;
  }
  .vol{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 2rem;
  }
  .vol1{
      background: url("/img/13.jpg") center center/cover;
  }
  .vol2{
      background:  #ffbe3c;
      text-align: center;
      padding: 2rem 0;
  }
  .vol2 img{
      width: 15rem;
  }
  .vol3{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      text-align: center;
      padding-left: 3rem;
  }
  .per0{
      background: #ffbe3c;
      text-align: center;
      padding: 5rem 15%;
      margin-top: 3rem;
  }
  .per0 h2{
      color: white;
      font-size: 50px;
  }
  .per{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 2rem;
      margin-top: 2rem;
      color: white;
  }
  .per img{
      width: 100%;
  }
  .part2{
  background: url("/img/world.jpg") center center/cover;
  height: 100vh;
  margin-top: 2rem;
}
.part2 img{
  width: 100%;
  margin-top: -5rem;
}
.our{
    margin-top: 3rem;
    margin-left: 15%;
    margin-right: 15%;
    text-align: center;
}
.our h2{
    font-size: 50px;
}
.our1{
    margin-top: 2rem;
    display: grid;
    grid-row-gap: 3rem;
    grid-template-columns: 1fr 1fr 1fr;
}
.our p{
    margin-top: 2rem;
    font-size: 20px;
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
        ),url(/img/hw.jpg) center center/cover;
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
  .can{
      margin-top: 3rem;
      margin-right: 10px;
      margin-left: 10px;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
  }
  .can1{
      padding:2rem 0 ;
  }
  .can1 h3{
      color: #ffbe3c;
  }
  .can1 p{
      font-size: 20px;
  }
  .can2{
      background: url("/img/ant.jpg") center center/cover;
      height: 50vh;
  }
  .can21{
      background: url("/img/chut.jpg") center center/cover;
      height: 50vh;
  }

  .cer{
      text-align: center;
      margin-top: 3rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .vol{
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 2rem;
      text-align: center;
      
  }
  .vol1{
      background: url("/img/13.jpg") center center/cover;
      height: 50vh;
  }
  .vol2{
      background:  #ffbe3c;
      text-align: center;
      padding: 2rem 0;
      padding-left: 10px;
      padding-right: 10px;
  }
  .vol2 img{
      width: 100%;
  }
  .vol3{
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 0rem;
      text-align: center;
      padding-left: 0rem;
  }
  .per0{
      background: #ffbe3c;
      text-align: center;
      padding: 3rem 10px;
      margin-top: 3rem;
  }
  .per0 h2{
      color: white;
      font-size: 40px;
  }
  .per{
      display: grid;
      grid-template-columns: 1fr ;
      grid-gap: 1rem;
      margin-top: 2rem;
      color: white;
  }
  .part2 img{
  width: 100%;
  margin-top: 0rem;
}
.part2{
  background: url("/img/world.jpg") center center/cover;
  height: 30vh;
  margin-top: 2rem;
}
.our{
    margin-top: 3rem;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
}
.our h2{
    font-size: 40px;
}
.our1{
    margin-top: 2rem;
    display: grid;
    grid-row-gap: 2rem;
    grid-template-columns: 1fr;
}
.our p{
    margin-top: 2rem;
    font-size: 20px;
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
    .part2{
  background: url("/img/world.jpg") center center/cover;
  height: 50vh;
  margin-top: 2rem;
}
.part2 img{
  width: 100%;
  margin-top: -1rem;
}
.our img{
    width: 100%;
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


