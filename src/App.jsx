
import { ArrowLeft, ArrowRight,PaperPlaneTilt } from 'phosphor-react'
import { UserForm } from './components/userForm'
import { ReviewForm } from './components/reviewForm'
import { Thanks } from './components/thanks'
import {Steps} from './components/steps'


// hooks
import { useForm } from './components/hooks/useForm'
import{useState} from "react"

import './App.css'


  const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
  }


function App() {



  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return{...prev, [key]:value}
    })
  }

  const formComponents = [
    <UserForm data={data}
      updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data}
    updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data}
   />]
  
  const{currentStep, currentComponent, changeStep, isLastStep , isFirstStep}=useForm(formComponents)
  

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra . utilize o formulario abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep +1 , e)}>
          <div className="inputs-container">
           <h2> {currentComponent}</h2>
          </div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1,)}>
                <span>
                  <ArrowLeft size={16} />
                  voltar
                </span>
              </button>
            )}
            {!isLastStep ? (
            <button type="submit">
            <span>
              Avançar
              <ArrowRight size={16}/>
            </span>
          </button>
            ) : (
              <button type="button">
              <span>
                Enviar
                <PaperPlaneTilt size={16} /> 
              </span>
            </button>
           )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
