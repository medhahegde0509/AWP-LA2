<template>
   <div>
<!-- Banner -->
<div class="img">
   <h1 class="text-center text-black"> GET SET TRAVEL</h1>
</div>

<!-- Products -->
<b-container class="mt-5">
    <h1>PACKAGES</h1>
<b-row>
   <ProductItem v-for="(product,index) in products" :key="index"
     :name="product.name" 
     :price="product.price"
     :img="product.image"
     :productIndex="index"
    />
    

</b-row>
</b-container>



   </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';

export default {
    data(){
        return{ 
            products:[
                {
                name:'KARNATAKA',
                price:12000,
                image:"https://cdn.theculturetrip.com/wp-content/uploads/2017/10/karnataka-pattadakal.jpg?image=26"
                },
                 {
                name:'KERALA',
                price:15500,
                image:"https://static.toiimg.com/photo/msid-78100845,width-96,height-65.cms?image=25"
                },
                 {
                name:'TAMIL NADU',
                price:9800,
                image:"https://gos3.ibcdn.com/india-tamil-nadu-149339162619o.jpeg?image=28"
                },
                {
                name:'UTTAR PRADESH',
                price:20000,
                image:"https://www.tourmyindia.com/socialimg/uttarpradesh-tourism.jpg?image=27"
                },
                {
                name:'SIKKIM',
                price:32500,
                image:"https://www.nomadicweekends.com/wp-content/uploads/2019/02/North-Sikkim-Package-Tour.jpg?image=26"
                },
                {
                name:'HIMALAYAS',
                price:48760,
                image:"https://i.pinimg.com/originals/88/3d/5e/883d5e4ed7c756176932d5012038c54f.jpg?image=35"
                },
                
            ]
        }
    },
    components:{
        ProductItem
    }
}
</script>

<style   scoped>
.img{ 
    padding-bottom: 30vh;
    padding-top: 30vh;
    background-image: url(https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500?image=41);
    background-repeat: no-repeat;
    background-size:cover;
}
 
</style>