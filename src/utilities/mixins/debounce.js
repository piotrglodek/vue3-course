export default  {
    data(){
        return{
            timeout: '',
        }
    },
    methods:{
    debounce(callback, wait = 1000) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(callback, wait);
        },
    }
}