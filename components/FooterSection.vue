<template>
    <div class="footer">
        <div class="foot1">
            <div class="foot2">
                <h2>Sunny</h2>
            </div>
            <div class="foot3">
                <font-awesome-icon class="ico" :icon="['fab', 'facebook']"/>
                <font-awesome-icon class="ico" :icon="['fab', 'instagram']"/>
                <font-awesome-icon class="ico" :icon="['fab', 'youtube']"/>
            </div>
        </div>
        <div class="goal">
            <div class="goal1">
                <nuxt-link to="about" class="link"><p><span class="goal4">ABOUT COMPANY</span> </p></nuxt-link>
                <nuxt-link to="production" class="link"><p>PRODUCTION</p></nuxt-link>
            
            </div>
            <div class="goal2">
                <nuxt-link to="products" class="link"><p><span class="goal4">PRODUCTS</span> </p></nuxt-link>
                
            </div>
            <div class="goal3">
                <p><span class="goal4">HEAD OFFICE</span> </p>
                <p>Hermana Tytova Ave, 67, Donetsk, Donetsk Oblast, 83000</p>
                <p>Phone Numbers: +380 0 (66) 771 00 83, +380 (66) 771 00 83, +380 (63) 325 07 493</p>
                <p>Email: info@sunnyseedoil.com</p>
            </div>
        </div>
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
    .footer{
        margin-top: 3rem;
        background-color: #ffbe3c;
    }
    .foot1{
        padding-top: 2rem;
        margin-left: 5rem;
        margin-right: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .foot2 h2{
        font-size: 70px;
        color: white;
        font-weight: bold;
    }
    .foot3{
        text-align: right;
    }
    .foot3 .ico{
        font-size: 4rem;
        color: white;
        margin-left: 2rem;
        margin-top: 0.5rem;
    }
    .goal{
        padding-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-left: 5rem;
        margin-right: 5rem;
        color: white;
        padding-bottom: 3rem;
        text-align: center;
    }
    .goal p{
        font-size: 20px;
        margin-bottom: 1rem;
    }
    .goal4{
        font-weight: bold;
    }
    .link{
        color: white;
    }



    @media(max-width:567px){
        .foot1{
        padding-top: 2rem;
        margin-left: 10px;
        margin-right: 10px;
        display: grid;
        grid-template-columns: 1fr;
    }
    .foot2{
        text-align: center;
        margin-bottom: 1rem;
    }
    .foot2 h2{
        font-size: 50px;
        color: white;
        font-weight: bold;
    }
    .foot3{
        text-align: center;
    }
    .foot3 .ico{
        font-size: 3rem;
        color: white;
        margin-left: 1rem;
    }
    .goal{
        padding-top: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        margin-left: 10px;
        margin-right: 10px;
        color: white;
        padding-bottom: 3rem;
        text-align: center;
    }

    }

    
</style>