import { INIT_JOBS, ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from "./action__types"
import jobs from "../data/data.json"
import images from "../data/images"

export function initJobs() {
    jobs.forEach((job, ind) => {
        job.logo = images[ind]
    })
    return { type: INIT_JOBS, payload: jobs }
}

export function addFilter(payload) {
    return { type: ADD_FILTER, payload }
}

export function removeFilter(payload) {
    return { type: REMOVE_FILTER, payload }
}

export function clearFilters() {
    return { type: CLEAR_FILTERS }
}