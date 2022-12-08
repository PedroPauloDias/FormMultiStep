import { PaperPlaneTilt, Star, User } from "phosphor-react"
import "./steps.css"

export const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <User weight="fill" />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
      <div className="line-1"></div>
        <Star weight="fill" />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <div className="line-2"></div>
        <PaperPlaneTilt weight="fill" />
        <p>Envio </p>
      </div>
    </div>
  )
}
