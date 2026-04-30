import { useState } from 'react'
import { projects } from '@/features/projects/model/projects.data'

const ITENS_PER_PAGE = 6

export function useProjectsViewModel() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(projects.length / ITENS_PER_PAGE)

  const paginatedProjects = projects.slice(
    (currentPage - 1) * ITENS_PER_PAGE,
    currentPage * ITENS_PER_PAGE
  )

  return {
    projects: paginatedProjects,
    currentPage,
    totalPages,
    setCurrentPage,
  }
}
