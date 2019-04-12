import moment from "moment";
export default [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 100,
    type: "charity",
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "Grocery Store",
    note: "",
    amount: 200,
    type: "basic-needs",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Headphone",
    note: "20% discount",
    amount: 300,
    type: "miscellaneous",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
