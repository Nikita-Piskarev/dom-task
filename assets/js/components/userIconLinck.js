function userIconLinck(data) {
  const hostLinck = new URL(data);

  const iconLink = createElement("img", { className: "linkPic" });

  const link = createElement("a", { className: "link" }, iconLink);
  for (const [key, value] of icon) {
    if (key === hostLinck.host) {
      console.log(key);
      link.setAttribute("href", hostLinck);
      iconLink.setAttribute("src", value);
    }
  }

  return createElement("li", { className: "linkItem" }, link);
}
