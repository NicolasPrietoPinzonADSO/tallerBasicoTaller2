export default{
    data(){
        return{
            sedes:['Medellin',
            'Bogota',
            'Bucaramanga',
            'Mexico'],
            selecCiudad:'',
            roles:['Estudiante'
            ,'Profesor'],
            selecRol:'',
            rol:null,
            tecnoglogias:['ADSO','Electricidad','Mecanica'],
            campus:{
                Sedes:
                {ciudCampus:'',
                telefono:'',
                direccion:''
            },
                estudiante:{
                    nombre:'',
                    apellido:'',
                    telefono:'',
                    fecha:'',
                    hora:'',
                    piso:'',
                    salon:'',
                    email:''
                },
                profesor:{
                    nombre:'',
                    apellido:'',
                    telefono:'',
                    fecha:'',
                    hora:'',
                    piso:'',
                    salon:'',
                    email:''
                },
            }
        }
    },
    methods:{
        buttonEnviar() {
            console.log(this.campus)
        }
    },
     
}