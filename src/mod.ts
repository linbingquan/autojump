function get_jump_url(arr: string | string[], href = "") {
  const searchParams = new URL(href).searchParams;
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      const ele = arr[i];
      const res = searchParams.get(ele);
      if (res) {
        return res;
      }
    }
  } else {
    const res = searchParams.get(arr);
    if (res) {
      return res;
    }
  }
  return undefined;
}

if (location?.href) {
  const url = get_jump_url([
    "url",
    "target",
  ], location?.href);

  if (url) location.href = url;
}

export { get_jump_url };
