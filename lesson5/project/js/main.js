const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        searchLine: '',
        filtered: [],
        isVisibleCart: true,
        cardList: [],
        quantity: 1,
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            this.cardList.push(product);
            this.isVisibleCart = false;
        },
        removeProduct(product){
            document.querySelector(`.cart-item[data-id="${product.id_product}"]`).remove();


        },
        filterGoods(){
            const regexp = new RegExp(this.searchLine, 'i'); // /ноут/i
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            this.products.forEach(el => {
                const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
                if (!this.filtered.includes(el)) {
                    block.classList.add('invisible');
                } else {
                    block.classList.remove('invisible');
                }
            })
        },
    },
    computed: {

    },
    beforeCreate() {
        // console.log('beforeCreate');
    },
    created() {
        // console.log('created');
    },
    beforeMount() {
        // console.log('beforeMount');
    },
    mounted(){
        // console.log('mounted');
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
    },
    beforeUpdate() {
        // console.log('beforeUpdate');
    },
    updated() {
        // console.log('updated');
    },
    beforeDestroy() {
        // console.log('beforeDestroy');
    },
    destroyed() {
        // console.log('destroyed');
    }
});
