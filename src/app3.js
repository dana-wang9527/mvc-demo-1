import $ from "jquery";
import "./app3.css";
const $square = $("#app3 .square");
$square.on("click", () => {
  $square.toggleClass("active"); //toggle是如果active存在就删除，如果没有就添加
});
