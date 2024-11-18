import * as $ from "jquery";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  onSnapshot,
  where,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function showAllAlbums(genres) {
  $(".showAlbums").empty();
  try {
    const querySnapshot = await getDocs(collection(db, "albums"));
    let albumstring = "";
    querySnapshot.forEach((doc) => {
      // console.log("genre " + genres);
      if (doc.data().genre == genres) {
        albumstring += `<div class="album">`;
        albumstring += `<h3>${doc.data().title}</h3>`;
        albumstring += `<div class="albumImg"><img src="${
          doc.data().imageURL
        }"/></div>`;
        albumstring += `<p>${doc.data().artist}</p>`;
        albumstring += `<p>${doc.data().genre}</p>`;
        albumstring += `</div>`;
        //   console.log(`${doc.id} => ${doc.data()}`);
      } else if (genres == undefined) {
        albumstring += `<div class="album">`;
        albumstring += `<h3>${doc.data().title}</h3>`;
        albumstring += `<div class="albumImg"><img src="${
          doc.data().imageURL
        }"/></div>`;
        albumstring += `<p>${doc.data().artist}</p>`;
        albumstring += `<p>${doc.data().genre}</p>`;
        albumstring += `</div>`;
      }
    });
    $(".showAlbums").append(albumstring);
  } catch (e) {
    console.error("Error getting documents ", e.message);
  }
}
