import { useState } from "react"
import FilterTag from "../FilterTag/FilterTag"
import "./css/Searchbar.css"

export default function Searchbar({ filters, onSubmit, onRemove, onClear }) {
    const [search, setSearch] = useState("")

    const submitForm = (event) => {
        event.preventDefault()
        onSubmit(search)
        setSearch("")
    }

    return (
        <div className="searchbar">
            <form onSubmit={submitForm}>
                <input type="text" name="searchInput" id="searchInput" placeholder="Enter your search" aria-label="Search jobs" value={search} onChange={e => setSearch(e.target.value)} />
            </form>
            {filters.length > 0 ?
                <div className="searchbar__filters">
                    <ul className="filter__tags">
                        {
                            filters.map((filter, ind) => (
                                <FilterTag text={filter} key={ind} onRemove={e => onRemove(ind)} />
                            ))
                        }
                    </ul>
                    <button className="filters__clear" aria-label="Clear all filters" onClick={onClear}>Clear</button>
                </div> : null
            }
        </div>
    )
}