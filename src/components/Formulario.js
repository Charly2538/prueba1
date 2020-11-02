import React, {Component} from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: ""
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
    }
    // this.setState ({})


    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }


    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text" 
                                onChange={this.cambiarNombre}
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo Electronico</label>
                            <input type="text" 
                                onChange={this.cambiarCorreo}
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre} `} </h2>
                    <spam>{`Tu correo es ${this.state.correo} `}</spam>
                </div>
            </div>
        )
    }
}


export default Formulario;