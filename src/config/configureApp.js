/* Configurations for the app */
import moment from "moment";
import numeral from "numeral";

const configureApp = () => {
  const SET_DATE_LOCALE = ((region = "pt") => moment.locale(region))();
  const SET_CURRENCY_LOCALE = (() => {
    /* Configure locale */
    numeral.register("locale", "pt", {
      delimiters: {
        thousands: ".",
        decimal: ","
      },
      abbreviations: {
        thousand: "mil",
        million: "milhões",
        billion: "b",
        trillion: "t"
      },
      ordinal: () => "º",
      currency: {
        symbol: "€"
      }
    });

    // switch between locales
    numeral.locale("pt");
  })();
};

export default configureApp;
