import { SmileyNervous, SmileySad, SmileyMeh, Smiley } from 'phosphor-react'
import thanks from "./thanks.css"

const emojiData = {
  unsatisfied: <SmileyNervous />,
  neutral: <SmileySad />,
  satisfied: <SmileyMeh/>,
  verySatisfied: <Smiley/>,
}

export const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
      <h2>falta pouco...</h2>
      <p>A sua opinião é muito importante , em breve você receberá um cupom de 10% de desconto para a sua próxima compra. </p>
      <p>Para concluir a avaliação clique no botão de enviar abaixo.</p>
      <h3>Aqui está um resumo da sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto:
          {emojiData[data.review]}
          {data.review}
        </span>
      </p>
      <p className="review-data">
        <span>Comentário:{data.comment}</span>
      </p>
    </div>
  )
}
