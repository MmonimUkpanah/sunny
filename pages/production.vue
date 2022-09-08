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
          
          
        <h2>PRODUCTION</h2>
      </div>
      
     
    </div>
    <div class="pl">
        <div class="pl1">
            <p>The modern oil extraction plant Sunny is situated in Svyatoshynska Street 28 A, Vyshneve, Ukraine.

The plant is fitted with highly effective equipment and all the technological processes comply with international standards as well as environmental laws.</p>
        </div>
        <div class="pl2">
            
        </div>
        
    </div>
    <div class="pl3">
            <h2>OUR ADVANTAGE LIES IN EFFECTIVE PRODUCTION</h2>
    </div>
    <div class="stage">
        <div class="stage1">
            <h2>MAIN STAGES OF SEEDS PROCESSING</h2>
            <p class="number rounded-circle">1</p>
        </div>
        <div class="stage2"

        >
            <h3>INCOMING CONTROL</h3>
            <p>The laboratory selects seeds of the highest quality.</p>
            <hr width="1" size="500">
        </div>
        <div class="stage2"
        
        >
            <p class="number rounded-circle">2</p>
            <h3>SEED CLEANING</h3>
            <p>Elevator equipment allows us to separate seeds from various impurities. Fully clean seeds are stored and further processed.</p>
            <hr width="1" size="500">
        </div>
        <div class="stage2"

        >
            <p class="number rounded-circle">3</p>
            <h3>INCOMING CONTROL</h3>
            <p>The laboratory selects seeds of the highest quality.</p>
            <hr width="1" size="500">
        </div>
        <div class="stage2"
        
        >
            <p class="number rounded-circle">4</p>
            <h3>ROASTING PROCESS</h3>
            <p>The seeds are roasted at 100-110° С using customized roasting machines. Specific roasting technology allows the most effective squeezing of the pressed oil and obtaining sunflower oil cake of high quality.</p>
            <hr width="1" size="500">
        </div>
        <div class="stage2"

        >
            <p class="number rounded-circle">5</p>
            <h3>PRESSING</h3>
            <p>Virgin sunflower oil and sunflower oil cake, used for further extraction are produced using modern pressing machines.</p>
            <hr width="1" size="500">
        </div>
        <div class="stage2"
        
    >
            <p class="number rounded-circle">6</p>
            <h3>SUNFLOWER OIL CAKE EXTRACTION</h3>
            <p>Sunflower meal, which is one of the most valuable fodder components is produced at this stage.</p>
            
        </div>
    </div>
        <div class="qua5">
            <h2>QUALITY CONTROL STAGES</h2>
        </div>
    <div class="qua">
        
        <div class="qua1">

        </div>
        <div class="qua2"
        
        >
            <div class="qua4">
                <p><span class="qua3">RAW MATERIAL TESTING</span></p>
                <p>We use sunflower seeds with organoleptic, physico-chemical and safety indices that meet DSTU 
                4694 and DSTU 7011 (Ukrainian government standards) criteria for oil production. Our lab 
                technicians select a sample of sunflower seeds to conduct analysis according to DSTU 4601 
                criteria on the basis of our certified laboratory before the raw material is used in 
                the production.</p>
            </div>
            <div class="qua4">
                <p><span class="qua3">RETESTING OF RAW MATERIAL</span></p>
                <p>In case the sample does not comply with DSTU criteria, seed samples from each transportation unit are retested.</p>
            </div>
            <div class="qua4">
                <p><span class="qua3">ANALYSIS OF THE REFERENCE SAMPLES</span></p>
                <p>Selected samples are kept in the laboratory for 3 months.</p>
            </div>
            <div class="qua4">
                <p><span class="qua3">CONTROL OF ALL THE PRODUCTION STAGES</span></p>
            </div>
            <div class="qua4">
                <p><span class="qua3">FINISHED PRODUCT CONTROL</span></p>
                <p>We conduct analysis of organoleptic, physico-chemical and microbiological indices according to DSTU 22000 and НАССР (Hazard Analysis and Critical Control Point) standards.</p>
            </div>
            <div class="qua4">
                <p><span class="qua3">LABORATORY TESTS</span></p>
            </div>
        </div>
    </div>
    <div class="cer">
        <div class="cer1">
            <h2>CERTIFICATES</h2>
            <p>We guarantee the highest production quality that meets all international standards.

The quality control stages include raw material, intermediate and finished product monitoring conducted by our certified laboratory.</p>
        </div>
        <div class="cer2">
            <div class="cer3">
                <img src="/img/serto.svg" alt="">
            </div>
            <div class="cer3">
                <img src="/img/sertcon.svg" alt="">
            </div>
            <div class="cer3">
                <img src="/img/sertqua.svg" alt="">
            </div>
            <div class="cer3">
                <img src="/img/sertre.svg" alt="">
            </div>
            <div class="cer3">
                <img src="/img/serteuro.svg" alt="">
            </div>
        </div>
        <div class="cer4">
            <div class="cer5">
                <img src="/img/iso1.svg" alt="">
            </div>
            <div class="cer5">
                <img src="/img/iso2.svg" alt="">
            </div>
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
        ), url(/img/ba.svg) center center/cover;
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
  
  
  .index2 h2{
    color: #ffbe3c;
    font-size: 100px;
    padding-top: 15rem;
  }
    .pl{
        margin-top: 5rem;
        margin-left: 15%;
        margin-right: 15%;
        display: grid;
        grid-column-gap: 2rem;
        grid-template-columns: 1fr 1fr;
    }
    .pl1{
        text-align: right;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .pl1 p{
        font-size: 20px;
    }
    .pl2 {
        background: url("/img/ph.jpe") center center/cover;
    }
    .pl3{
        text-align: center;
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 3rem;
    }
    .pl3 h2{
        color:#ffbe3c ;
    }
    .stage{
        margin-top: 3rem;
        text-align: center;
        margin-left: 25%;
        margin-right: 25%;
    }
    .stage1 h2{
        font-size: 40px;
    }
    .number{
        background:#ffbe3c ;
       padding-top: 1.5rem;
        width: 5rem;
        height: 5rem;
        color: white;
        font-size: 20px;
        position: relative;
        left: 44%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        
    }
    hr{
        content: "";
    position: relative;
    left: 50%;
    height: 300px;
    width: 2px;
    background-color: #ffbe3c;
    display: block;
    z-index: 10;
    }
    .stage2 h3{
        font-size: 40px;
        color:#ffbe3c ;
    }
    .stage2 p{
        font-size: 20px;
        margin-bottom: 2rem;
    }
    .qua{
        margin-top: 2rem;
        margin-left: 15%;
        margin-right: 15%;
        display: grid;
        grid-column-gap: 5rem;
        grid-template-columns: 1fr 1fr;
    }
    .qua1{
        background: url("/img/na.jpg") center center/cover;
    }
    .qua2{
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .qua3{
        font-weight: bold;
        color:#ffbe3c ;
    }
    .qua4{
        margin-bottom: 1rem;
    }
    .qua4 p{
        font-size: 20px;
    }
    .qua5{
        text-align: center;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
    .qua5 h2{
        font-size: 50px;
    }
    .cer{
        margin-top: 3rem;
        text-align: center;
        margin-left: 10%;
        margin-right: 10%;
    }
    .cer1{
        padding-left: 15%;
        padding-right: 15%;
    }
    .cer1 h2{
        font-size: 50px;
        color:#ffbe3c ;
        margin-bottom: 1rem;
    }
    .cer1 p{
        font-size: 20px;
    }
    .cer2{
        margin-top: 2rem;
        display: grid;
        grid-column-gap: 2rem;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    .cer3 img{
        width:100%;
    }
    .cer4{
        margin-top: 2rem;
        display: grid;
        grid-column-gap: 2rem;
        grid-template-columns: 1fr 1fr;
        margin-left: 20%;
        margin-right: 20%;
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
        ), url(/img/ba.svg) center center/cover;
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
    font-size: 40px;
    padding-top: 15rem;
  }
  .pl{
        margin-top: 5rem;
        margin-left: 10px;
        margin-right: 10px;
        display: grid;
        grid-column-gap: 2rem;
        grid-template-columns: 1fr ;
    }
    .pl1{
        text-align: center;
        padding-top: 4rem;
    }
    .pl1 p{
        font-size: 20px;
    }
    .pl2 {
        background: url("/img/ph.jpe") center center/cover;
        height: 50vh;
    }
    .pl3{
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 3rem;
    }
    .pl3 h2{
        color:#ffbe3c ;
    }
    .stage{
        margin-top: 3rem;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
    }
    .stage1 h2{
        font-size: 40px;
    }
    .number{
        background:#ffbe3c ;
       padding-top: 1.5rem;
        width: 5rem;
        height: 5rem;
        color: white;
        font-size: 20px;
        position: relative;
        left: 37%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        
    }
    hr{
        content: "";
    position: relative;
    left: 50%;
    height: 300px;
    width: 2px;
    background-color: #ffbe3c;
    display: block;
    z-index: 10;
    }
    .stage2 h3{
        font-size: 40px;
        color:#ffbe3c ;
    }
    .stage2 p{
        font-size: 20px;
        margin-bottom: 2rem;
    }
    .qua{
        margin-top: 2rem;
        margin-left: 10px;
        margin-right: 10px;
        display: grid;
        text-align: center;
        grid-column-gap: 2rem;
        grid-template-columns:  1fr;
    }
    .qua1{
        background: url("/img/na.jpg") center center/cover;
        height: 50vh;
   }
    .qua2{
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .qua3{
        font-weight: bold;
        color:#ffbe3c ;
    }
    .qua4{
        margin-bottom: 1rem;
    }
    .qua4 p{
        font-size: 20px;
    }
    .qua5{
        text-align: center;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
    .qua5 h2{
        font-size: 50px;
    }
    .cer{
        margin-top: 3rem;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
    }
    .cer1{
        padding-left: 0%;
        padding-right: 0%;
    }
    .cer1 h2{
        font-size: 40px;
        color:#ffbe3c ;
        margin-bottom: 1rem;
    }
    .cer1 p{
        font-size: 20px;
    }
    .cer2{
        margin-top: 2rem;
        display: grid;
        grid-column-gap: 2rem;
        grid-template-columns: 1fr;
    }
    .cer3 img{
        width:100%;
    }
    .cer4{
        margin-top: 2rem;
        display: grid;
        grid-column-gap: 2rem;
        grid-template-columns: 1fr ;
        margin-left: 0%;
        margin-right: 0%;
    }



  }





  @media(min-width:568px) and (max-width:768px){
      .number{
        background:#ffbe3c ;
       padding-top: 1.5rem;
        width: 5rem;
        height: 5rem;
        color: white;
        font-size: 20px;
        position: relative;
        left: 40%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        
    }
    .qua{
        margin-top: 2rem;
        margin-left: 10%;
        margin-right: 10%;
        display: grid;
        text-align: left;
        grid-column-gap: 2rem;
        grid-template-columns:  1fr 1fr;
    }
    .qua1{
        background: url("/img/na.jpg") center center/cover;
        
    }
    .qua2{
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .qua3{
        font-weight: bold;
        color:#ffbe3c ;
    }
    .qua4{
        margin-bottom: 1rem;
    }
    .qua4 p{
        font-size: 20px;
    }
    .qua5{
        text-align: center;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
    .qua5 h2{
        font-size: 50px;
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
  @media(min-width:769px) and (max-width:1200px){
      .number{
        background:#ffbe3c ;
       padding-top: 1.5rem;
        width: 5rem;
        height: 5rem;
        color: white;
        font-size: 20px;
        position: relative;
        left: 41%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        
    }
  }
</style>
<script>
import FooterSection from '../components/FooterSection.vue';
export default {
  components: { FooterSection },
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