import { useEffect } from "react"
import Searchbar from './components/Searchbar/Searchbar'
import JobList from "./components/JobList/JobList"
import { initJobs, addFilter, removeFilter, clearFilters } from './redux/actions'
import './styles/css/app.css'
import { useSelector, useDispatch } from "react-redux"

function App() {
  const jobs = useSelector(state => state.jobs)
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initJobs())
  }, [])

  return (
    <div className="App">
      <header>
        <div className="header__container">
          <Searchbar
            filters={filters}
            onSubmit={search => dispatch(addFilter(search))}
            onRemove={filter => dispatch(removeFilter(filter))}
            onClear={e => dispatch(clearFilters())}
          />
        </div>
      </header>
      <main>
        <JobList jobs={jobs} onFilter={tag => dispatch(addFilter(tag))} />
      </main>
    </div>
  );
}

export default App;
