export default {
    data() {
        return {
            sedes: ['Medellin',
                'Bogota',
                'Bucaramanga',
                'Mexico'],

            roles: ['Estudiante'
                , 'Profesor'],
            selecRol: '',
            rol: null,
            tecnologiaPer: '',
            tecnologias: ['ADSO'
                , 'Electricidad'
                , 'Mecanica'],
            selecFormacion: '',
            eleccionFormacion: ['ELECTIVA',
                'OBLIGATORIA'
            ],
            tipoFormacion:['Remota',
            'Presencial'],
            mapeo:[],
            consulta:{},
            bool:false,

            campus: {
                Sedes:
                {
                    ciudCampus: '',
                    telefono: '',
                    direccion: ''
                },
                estudiante: {
                    nombreEstu: '',
                    apellidoEstu: '',
                    telefonoEstu: '',
                    fechaEstu: '',
                    horaEstu: '',
                    pisoEstu: '',
                    salonEstu: '',
                    emailEstu: '',
                    transporteEstu: '',
                    barrioEstu: ''
                },
                profesor: {
                    nombreProf: '',
                    apellidoProf: '',
                    telefonoProf: '',
                    fechaProf: '',
                    horaProf: '',
                    pisoProf: '',
                    salonProf: '',
                    emailProf: ''
                },
                tecnologia: {
                        nombreADSO: 'ADSO',
                        preRequisitoADSO: 'SI',
                        requisitoADSO:'Titulo: Tecnico en sistemas',
                        eleccionFormacionADSO: '',
                        pruebaPreSelecADSO: 'NO',
                        numCreditosADSO: '',
                        numAsignaturaADSO: '',
                        tipoFormacionADSO:'',
                    
                        nombreElec: 'Electricidad',
                        preRequisitoElec: 'NO',
                        eleccionFormacionElec: '',
                        pruebaPreSelecElec: 'NO',
                        numCreditosElec: '',
                        numAsignaturaElec: '',
                        tipoFormacionElec:'',
                    
                        nombreMec: 'Mecanica',
                        preRequisitoMec: 'NO',
                        eleccionFormacionMec: '',
                        pruebaPreSelecMec: 'NO',
                        numCreditosMec: '',
                        numAsignaturaMec: '',
                        tipoFormacionMec:'',
                }
        }
    }
},
methods: {
    buttonEnviar() {
        this.mapeo = {...this.campus}
        
    },
    consultaDestructuring(){
        this.bool = !this.bool
    }

}

}