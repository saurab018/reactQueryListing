export async function fetchItems(items, page) {
  const result = await fetch(
    `https://swapi.dev/api/${items}/?page=${page}`
  ).then((res) => res.json());
  return result;
}

export function buttonClick(page, count, sign) {
  console.log("page", page);
  let total = 0;

  if (sign == "add") {
    if (count > page * 10) {
      total = page + 1;
    } else {
      total = page;
    }
  }
  if (sign == "sub") {
    if (page >= 2) total = page - 1;
    if (page == 1) total = 1;
  }

  console.log("total", total, "sign", sign == "add", "page", page, count);
  return total;
}
