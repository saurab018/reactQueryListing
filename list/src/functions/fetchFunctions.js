export async function fetchItems(items, page) {
  const result = await fetch(
    `https://swapi.dev/api/${items}/?page=${page}`
  ).then((res) => res.json());
  return result;
}

export function AddClick(page, count) {
  console.log("page", page);
  let total = 0;

  if (count > page * 10) {
    total = page + 1;
  } else {
    total = page;
  }

  console.log("total", total, "page", page, count);
  return total;
}

export function SubClick(state1, state2) {
  if (state1 < state2) return state1;
  if (state1 >= state2) return state1 - 1;
}
