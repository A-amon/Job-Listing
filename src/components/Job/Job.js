import "./css/Job.css"

export default function Job({ isNew, isFeatured, imageSrc, company, title, postDate, conditions, tags, onFilter }) {
    return (
        <li className="job">
            <img src={imageSrc} alt={title} />
            <div className="job__content">
                <div className="col col--left">
                    <div className="job__header">
                        <span className="job__company">
                            {company}
                        </span>
                        {
                            isNew ?
                                <span className="job__status job__status--new">New!</span> : null
                        }
                        {
                            isFeatured ?
                                <span className="job__status job__status--featured">Featured</span> : null
                        }
                    </div>
                    <h2 className="job__title">
                        <a href="#">
                            {title}
                        </a>
                    </h2>
                    <ul className="job__conditions">
                        <li className="job__condition job__condition--date">
                            <span className="aria__text">
                                Posted on
                            </span>
                            <span>
                                {postDate}
                            </span>
                        </li>
                        {
                            conditions.map((condition, ind) => (
                                <li className="job__condition" key={ind}>
                                    {condition}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <ul className="job__tags col col--right">
                    {
                        tags.map((tag, ind) => (
                            <li className="job__tag" key={ind}>
                                <button aria-label={`Filter by ${tag}`} onClick={e => onFilter(tag)}>
                                    {tag}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </li>
    )
}