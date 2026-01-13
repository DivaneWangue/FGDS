import React, { useState } from 'react'
import { ChevronUp, ChevronDown, Search } from 'lucide-react'
import './DataTable.scss'

const DataTable = ({
  data = [],
  columns = [],
  sortable = true,
  searchable = true,
  paginated = true,
  itemsPerPage = 10,
  onRowClick = null,
  actions = null
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter data
  let filteredData = data
  if (searchTerm && searchable) {
    filteredData = data.filter(item =>
      columns.some(col =>
        String(item[col.key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }

  // Sort data
  if (sortConfig.key && sortable) {
    filteredData = [...filteredData].sort((a, b) => {
      const aVal = a[sortConfig.key]
      const bVal = b[sortConfig.key]

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    })
  }

  // Paginate
  let displayData = filteredData
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  if (paginated) {
    const startIdx = (currentPage - 1) * itemsPerPage
    displayData = filteredData.slice(startIdx, startIdx + itemsPerPage)
  }

  const handleSort = (key) => {
    if (!sortable) return
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  return (
    <div className="data-table-wrapper">
      {searchable && (
        <div className="table-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
          />
        </div>
      )}

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} onClick={() => handleSort(col.key)}>
                  <div className="th-content">
                    {col.label}
                    {sortable && col.sortable !== false && (
                      <span className="sort-icon">
                        {sortConfig.key === col.key ? (
                          sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                        ) : (
                          <ChevronUp size={16} style={{ opacity: 0.3 }} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              {actions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {displayData.length > 0 ? (
              displayData.map((row, idx) => (
                <tr
                  key={idx}
                  onClick={() => onRowClick && onRowClick(row)}
                  className={onRowClick ? 'clickable' : ''}
                >
                  {columns.map(col => (
                    <td key={col.key}>
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                  {actions && (
                    <td className="table-actions">
                      {actions(row)}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + (actions ? 1 : 0)} className="no-data">
                  Aucune donnée trouvée
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {paginated && totalPages > 1 && (
        <div className="table-pagination">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  )
}

export default DataTable
