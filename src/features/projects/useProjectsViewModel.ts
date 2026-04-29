import { useState } from 'react';
import { projects } from '@/features/projects/model/projects.data';

const ITENS_PER_PAGE = 6;

export function useProjectsViewModel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.ceil(projects.length / ITENS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setIsLoading(true);
  };

  const paginatedProjects = projects.slice(
    (currentPage - 1) * ITENS_PER_PAGE,
    currentPage * ITENS_PER_PAGE
  );

  return {
    projects: paginatedProjects,
    currentPage,
    totalPages,
    setCurrentPage: handlePageChange,
    isLoading,
  };
}