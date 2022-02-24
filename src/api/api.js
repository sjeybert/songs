export const addData = (data) => {
  console.log("DATA", data);
  console.log("JSON DATA", JSON.stringify(data));
  fetch(
    "https://tamilchristiansongbook.easifyer.com/database/post/add_lyrics.php",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.text())
    .then((data) => console.log(data));
};

export const getAllData = (songLyricsController) => {
  let resp = [];
  fetch(
    "https://tamilchristiansongbook.easifyer.com/database/get/get_all_lyrics.php",
    {
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((lyrics_data) => {
      // lyrics_data.forEach((element) => {
      //   let lyrics_data = {};
      //   for (let key in element) {
      //     if (key === "Data") {
      //       console.log(JSON.parse(element[key]));
      //       lyrics_data[key] = element[key];
      //     } else {
      //       lyrics_data[key] = element[key];
      //     }
      //   }
      //   if (lyrics_data) {
      //     resp.push(lyrics_data);
      //   }
      // });
      songLyricsController(lyrics_data);
    });
  // .catch((e) => console.log(e));
};

export const getDataByID = (id, currentSongController) => {
  let resp = [];
  fetch(
    `https://tamilchristiansongbook.easifyer.com/database/get/get_lyrics_by_id.php?id=${id}`
  )
    .then((response) => response.json())
    .then((lyrics_data) => {
      // lyrics_data.forEach((element) => {
      //   let lyrics_data = {};
      //   for (let key in element) {
      //     if (key === "Data") {
      //       console.log(JSON.parse(element[key]));
      //       lyrics_data[key] = element[key];
      //     } else {
      //       lyrics_data[key] = element[key];
      //     }
      //   }
      //   if (lyrics_data) {
      //     resp.push(lyrics_data);
      //   }
      // });
      currentSongController(lyrics_data);
    });
  // .catch((e) => console.log(e));
};
