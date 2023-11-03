const header = React.createElement(
  "h1",
  {
    id: "title",
    style: { color: "#fff", backgroundColor: "#a39d9d", textAlign: "center" },
  },
  "Header"
);

const listItem1 = React.createElement("li", null, "Item 1");
const listItem2 = React.createElement("li", null, "Item 2");
const listItem3 = React.createElement("li", null, "Item 3");

const ul = React.createElement("ul", null, [listItem1, listItem2, listItem3]);

const listItems = React.createElement("div", {}, ul);


const footer = React.createElement(
  "h1",
  {
    id: "title",
    style: { color: "#fff", backgroundColor: " red" },
  },
  "Footer"
);

const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [header, listItems, footer]
  );

const component = React.createElement("div", {}, container);

console.log(component);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(component);
