import PropTypes from "prop-types";
import style from './Statistics.module.css'
export default function Statistics ({title, stats}){
    return (<section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}
  
    <ul className={style.stat_list}>
        {stats.map((item) => (
          <li key={item.id} className={style.item} style={{
            backgroundColor: getRandomHexColor(),
          }}> 
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}%</span>
          </li>
        ))
        }
    </ul>
  </section>)
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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