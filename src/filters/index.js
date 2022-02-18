import Vue from "vue";

Vue.filter("formatMoney", function (value) {
  let formattedNumber;
  if (value === null || value === undefined) {
    formattedNumber = 0;
  } else {
    formattedNumber = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      currencyDisplay: "symbol",
    })
      .format(value)
      .replace(/(\.|,)00$/g, "");
  }

  return formattedNumber;
});

Vue.filter("truncate", function (text, length, clamp) {
  clamp = clamp || "...";
  var node = document.createElement("div");
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
});
