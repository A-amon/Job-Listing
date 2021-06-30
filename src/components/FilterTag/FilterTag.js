import "./css/FilterTag.css"

export default function FilterTag({ text, onRemove }) {
    return (
        <li className="filter__tag">
            <span>{text}</span>
            <button aria-label={`Remove ${text} filter`} onClick={e => onRemove()}></button>
        </li>
    )
}