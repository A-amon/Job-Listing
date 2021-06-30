import {
    INIT_JOBS,
    ADD_FILTER,
    REMOVE_FILTER,
    CLEAR_FILTERS
} from "./action__types"

const initialState = {
    jobs: [],
    filters: []
}

const filterJobs = (jobs, filters) => {
    if (filters.length > 0) {
        return jobs.filter(job => {
            let tags = [...job.languages, ...job.tools, job.role, job.level]
            tags = tags.map(tag => tag.toLowerCase())
            return filters.every(filter => tags.includes(filter.toLowerCase()))
        }
        )
    }
    else
        return jobs
}

var jobs = []
const LIMIT_FILTER = 3

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INIT_JOBS:
            jobs = [...action.payload]
            return {
                ...state,
                jobs: [...action.payload]
            }
        case ADD_FILTER:
            if (state.filters.length === LIMIT_FILTER)
                return { ...state }
            else {
                let addedFilters = [...state.filters, action.payload]
                return {
                    ...state,
                    jobs: filterJobs(jobs, addedFilters),
                    filters: addedFilters
                }
            }
        case REMOVE_FILTER:
            let removedFilters = [...state.filters]
            removedFilters.splice(action.payload, 1)
            return {
                ...state,
                jobs: filterJobs(jobs, removedFilters),
                filters: removedFilters
            }
        case CLEAR_FILTERS:
            return {
                ...state,
                jobs: filterJobs(jobs, []),
                filters: []
            }
        default:
            return state
    }
}