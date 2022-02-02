import PropTypes from "prop-types";
export default function Statistics ({title, stats}){
    return (<section className="statistics">
    {title && <h2 className="title">{title}</h2>}
  
    <ul className="stat-list">
        {stats.map((item) => (
          <li key={item.id} className={stats.item}>
            <span className={stats.label}>{item.label}</span>
            <span className={stats.percentage}>{item.percentage}%</span>
          </li>
        ))
        }
    </ul>
  </section>)
};

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