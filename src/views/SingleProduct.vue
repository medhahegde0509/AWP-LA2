<template>
<div>
<b-container>
   <h1>
        Package {{productId  }}

    </h1>
    <b-card
                :title="product.name"
                :img-src="product.img" 
                img-top
                tag="article"
                style="max-width: 40rem; margin:auto"
                class="mb-4"
            >
                <b-card-text>
                Rs{{product.price}} 
                </b-card-text>

                <b-button variant="primary">Book Now</b-button>
            </b-card>

</b-container>
 </div>
    
</template>

<script>
export default {
    data(){
        return{
            productId:this.$route.params.productId,

            products:[
               {
                name:'Mysore',
                price:'2,300',
                img:'https://lp-cms-production.imgix.net/2019-06/5419167.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800?image=8'
                },
                {
                name:'Palakkad',
                price:'5,000',
                img:'https://www.keralabackwater.com/pictures/travel/palakkad-fort337_b.jpeg?image=42'
                },
                {
                name:'Madurai',
                price:'7,800',
                img:'https://triptimes.in/wp-content/uploads/2021/07/madurai-thumbnail.jpg?image=78'
                },
                {
                name:'Agra',
                price:'10,300',
                img:'https://static.toiimg.com/photo/31346158.cms?image=68'
                },
                {
                name:'Gangtok',
                price:'20,000',
                img:'https://img.traveltriangle.com/blog/wp-content/uploads/2019/07/cover-for-Sikkim-Travel-Tips.jpg?image=38'
                },
                {
                name:'Himalaya',
                price:'25,000',
                img:'https://cdn.forevervacation.com/uploads/blog/what-a-trip-trekking-the-himalayas-actually-looks-like-the-vacationer-by-forevervacation-3451.jpeg?image=78'
                },
                {
                name:'Mangalore',
                price:'2,900',
                img:'https://www.revv.co.in/blogs/wp-content/uploads/2020/05/Maravanthe.jpg?image=4'
                },
                {
                name:'Munnar',
                price:'6,050',
                img:'https://www.visittnt.com/blog/wp-content/uploads/2019/04/Munnar.jpg?image=48'
                },
                {
                name:'Red Fort',
                price:'12,000',
                img:'https://media-cdn.tripadvisor.com/media/photo-s/10/3c/4a/42/fb-img-1502472371491.jpg?image=28'
                },

                {
                name:'Jaipur',
                price:'13,200',
                img:'https://www.tourmyindia.com/socialimg/jaipur-tourism-rajasthan.jpg?image=48'
                },
                {
                name:'Coorg',
                price:'3,600',
                img:'https://seoimgak.mmtcdn.com/blog/sites/default/files/coorg-travel-guide-view.jpg?image=48'
                },
                {
                name:'Hyderabad',
                price:'2,800',
                img:'https://i2.wp.com/travelblog.expedia.co.in/wp-content/uploads/2017/09/7-A-Guide-to-Hyderabad.jpg?fit=1200%2C800&ssl=1?image=48'
                }

            ]
        }
    },
    computed:{
        product(){
            return this.products[this.productId];
        }
    }
}
</script>