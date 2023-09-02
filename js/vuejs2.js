
const Home = {
    template: '<div style="text-align: center">Home</div>'
}

Vue.component('header-component', {
    props:['nama','gambar'],
    template: `
    <header>
        <div style="text-align:center">
            <img :src="gambar" width="150">
            <p v-text="pesan"></p>
            <p>{{ 'Hello, ' + nama }}</p>
        </div>
    </header>
    `,
    data:function(){
        return{
            pesan:'Hello, Component!'
        }
    }
})

Vue.component('footer-component',{
    template:`
    <footer id="footer">
        <p>copyright 2023</p>
    </footer>
    `
})

Vue.component('kelas',{
    template:`
    <div>
        <p>
            <h3>Daftar Kelas ({{ kelas.length }})</h3>
            <ul v-if="kelas.length >= 1">
                <li v-for="item of kelas" v-text="item"></li>
                <br>
                <li v-for="(item , index) of kelas" >{{ index+1 }} - {{ item }}</li>

                <a href="" v-on:click.prevent="$emit('hapuskelas', index)">hapus</a>

                <li style="font-weight: bolder;">Kelas Tersedia</li>
            </ul>
            <li style="font-weight: bolder;" v-else>Kelas Belum Tersedia</li>
        </p>
    </div>
    `
})

const member2 ={
    //string "", number, boolean, array[], object{}
    //method :
    name:'Doremi Fasilasido',
    pesan: "Hello World!",
    isActive: true,
    qty: 1,
    namaDepan:'Yoas ',
    namaBelakang:'Albert Rinatan',
    bilangan: 6,
    link:'<a href="home/coba.html">coba</a>',
    gambar: 'img/logo.png',
    tekan: 'ditekan',
    menu:'home',
    kelas:['Golang','PHP'],
    numbers:[ 1, 2, 3, 4, 5],
    kelasbaru:""
}

const vm = new Vue({
el: '#app2',
data: member2,
components:
    {
    'home': Home
    },
computed: 
{
   
},
methods: 
    {
        hapuskelas: function(){
            console.log('testing..')
        },

        getname:function(){
            return 'Hello, ' +this.name
        },
        ubahNama:function(namaBaru){
            this.name = namaBaru
            return this.getname()
        },
        handleclick:function(){
            this.bilangan++
            this.gambar ='img/img.jpg'
        },
        caribilangangenap: function (data) { //javascript modern function bisa diganti dengan arrow (=>)
            return data.filter(angka => {
                return angka % 2 == 0
            })
        },
        gantimenu: function(data) {
            this.menu = data
        },
        submit: function (event)  {
            let text = event.target.value
            this.kelas.unshift(text)
            event.target.value=""
        },
        submit2: function (event)  {
            let text = event.target.value
            this.kelas.unshift(this.kelasbaru)
            this.kelasbaru=""
        }
    },
computed: 
    {
        totalBayar: function(){
            return this.qty*10000
        },
        namaLengkap: function(){
            return this.namaDepan + this.namaBelakang
        },
        infoBilangan:function(){
            return this.bilangan%2 === 0 ? 'Genap' : 'Ganjil' 
        }
    }
})
