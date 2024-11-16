// src/utils/paginationDataCalc.js
export const paginationDataCalc = (count, perPage, page) => {
  const totalPages = Math.ceil(count / perPage);

  return {
    page,
    perPage,
    totalItems: parseInt(count),
    totalPages,
    hasNextPage: Boolean(totalPages - page > 0),
    hasPreviousPage: Boolean(page !== 1)
  };
};
