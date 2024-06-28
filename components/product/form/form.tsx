import styles from "./form.module.scss"
import classNames  from "classnames"
import RootLayout from "@/app/layout";


const Form = () => {
    return(
        <div className={"p-5"}>
            <form>
                <div className="mb-3" >
                    <label htmlFor="inputID" hidden className="form-label">ID</label>
                    <input type="number" hidden disabled className="form-control" id="inputID"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="iName" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="iName" aria-describedby="nameHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="iPrice" className="form-label">Preço</label>
                    <input type="number" className="form-control" id="iPrice"/>
                </div>
                <div className="form-check form-switch">
                    <input type="checkbox" className="form-check-input" id="iCheck"/>
                    <label className="form-check-label" htmlFor="iCheck">Adicionado no Catálogo</label>

                    
                </div>
                <div  className="mb-3">
                    <label className="form-label" htmlFor="iFile">Adicione uma foto do Produto</label>
                    <input type="file" className="form-label" id="iFile"/>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
}
export default Form