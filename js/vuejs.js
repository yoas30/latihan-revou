const member ={
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
el: '#app',
data: member,
methods: 
    {
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
