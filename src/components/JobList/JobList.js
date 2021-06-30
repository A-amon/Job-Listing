import { useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Job from "../Job/Job"
import "./css/JobList.css"

export default function JobList({ jobs, onFilter }) {
    return (
        jobs.length > 0 ?
            <ul className="jobs" aria-live="assertive">
                <TransitionGroup component={null}>
                    {
                        jobs.map(job => (
                            <CSSTransition key={job.company + job.position} timeout={1000} classNames="job">
                                <Job
                                    isNew={job.new}
                                    isFeatured={job.featured}
                                    imageSrc={job.logo}
                                    company={job.company}
                                    title={job.position}
                                    postDate={job.postedAt}
                                    conditions={[job.contract, job.location]}
                                    tags={[job.role, job.level, ...job.languages, ...job.tools]}
                                    onFilter={onFilter}
                                />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
            </ul> :
            <div className="jobs" aria-live="assertive">
                <span className="jobs__zero">No results</span>
            </div>
    )
}