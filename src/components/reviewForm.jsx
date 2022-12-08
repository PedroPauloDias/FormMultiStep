import { SmileyNervous, SmileySad, SmileyMeh, Smiley } from 'phosphor-react'
import reviewForm from './reviewForm.css'

export const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className="review-form">
      <div className="form-control  score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name='review' required
              checked={data.review ==="unsatisfied"}
              onChange={(e)=> updateFieldHandler("review",e.target.value)}/>
          <SmileyNervous  color="#929090" weight="fill"/>
          <p>insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutral" name='review' required
             checked={data.review ==="neutral"}
             onChange={(e)=> updateFieldHandler("review",e.target.value)}/>
          <SmileySad   color="#929090"  weight="fill"/>
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name='review' required
             checked={data.review ==="satisfied"}
             onChange={(e)=> updateFieldHandler("review",e.target.value)}/>
          <SmileyMeh  color="#929090"  weight="fill" />
          <p>satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="verySatisfied" name='review' required
             checked={data.review ==="verySatisfied"}
             onChange={(e)=> updateFieldHandler("review",e.target.value)}/>
          <Smiley  color="#929090"  weight="fill"/>
          <p>Muito satisfeito</p>
        </label>
      </div>
 
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder="conte como foi a sua experiência com o produto " required
          value={data.comment || ""}
          onChange={(e)=> updateFieldHandler("comment",e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}
