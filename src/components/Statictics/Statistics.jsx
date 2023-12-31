import PropTypes from 'prop-types';
import css from "./Statistics.module.css"


export default function Statistics({ title, stats }) {
    return (
  <section className={css.statistics}>
      <div className={css.statisticsContainer}>
        {title && (<h2 className={css.title}>{title}</h2>)}
        <ul className={css.statList}>
          {stats.map(stat => (
            <li className={css.item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}> {stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
    )
} 

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
