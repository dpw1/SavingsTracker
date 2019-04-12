import numeral from "numeral";

export const formatPrice = amount => numeral(amount / 100).format("$0,0.00");
