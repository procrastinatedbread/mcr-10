const filterByDepartment = (data, filters) => {
  return filters.department !== "all"
    ? data.filter((product) => product.department === filters.department)
    : data;
};

const filterByLowStock = (data, filters) => {
  return filters.lowStockItems
    ? data.filter((product) => product.stock <= 10)
    : data;
};

const sortBy = (data, filters) => {
  return [...data].sort((a, b) => {
    const first = a[filters.sortBy];
    const second = b[filters.sortBy];
    if (first > second) {
      return 1;
    }
    if (first < second) {
      return -1;
    }
    return 0;
  });
};

export const getFilteredProducts = (data, filters) => {
  const filterFunctions = [filterByDepartment, filterByLowStock, sortBy];

  // This will make sure that data passes through each filter.
  return filterFunctions.reduce((acc, func) => func(acc, filters), data);
};
