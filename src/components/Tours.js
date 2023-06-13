import Title from './Title'
import { tours } from '../Data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((item) => {
          const { id } = item
          return <Tour key={id} {...item} />
        })}
      </div>
    </section>
  )
}
export default Tours
