export default{
    data(){
        return{
            sedes:['Medellin',
            'Bogota',
            'Bucaramanga',
            'Mexico'],
    
            campus:[],
            selecCiudad:'',
            roles:['Estudiante','Profesor']

        }
    },
    methods:{
        buttonEnviar() {
            this.campus.push({
                nomCampus: this.selecCiudad,
                telefono: this.telefonoSede,
                direccion: this.direcCampus})
        }
    },
     
}