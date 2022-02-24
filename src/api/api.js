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
      console.log("lyrics_data", lyrics_data);
      lyrics_data.forEach((element) => {
        let lyrics_data = {};
        for (let key in element) {
          if (key === "Data") {
            // console.log("json", element[key], typeof element[key]);
            // console.log(JSON.parse(element[key]));
            // console.log("SONF", element[key], typeof element[key]);
            // const obj = JSON.parse(element.key);
            // console.log("OBJ", obj);
            // console.log(typeof element[key]);
            let a = JSON.stringify(element[key]);
            console.log(JSON.parse(a));
            lyrics_data[key] = element[key];
          } else {
            lyrics_data[key] = element[key];
          }
        }
        if (lyrics_data) {
          resp.push(lyrics_data);
        }
      });
      songLyricsController(resp);
    });
  // .catch((e) => console.log(e));
};
