import * as $ from "jquery";
import { showAllAlbums } from "./model";
import * as MODEL from "./model";

function initListeners() {
  $("#search").on("click", (e) => {
    let genres = $("#genres").val();
    if (genres != "") {
      MODEL.showAllAlbums(genres);
    } else {
      alert("Please select a genre");
    }
  });
}

$(document).ready(function () {
  initListeners();
  showAllAlbums();
});
