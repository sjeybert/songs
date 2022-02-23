// https://tamilchristiansongbook.easifyer.com/database/post/add_lyrics.php
// /database/post/add_lyrics.php

/* <div className={`add-form-container ${showForm ? "" : "hidden"} `}>
        <AddSong settings={settings} showFormController={showFormController} />
      </div>  */
export const addData = (data) => {
  let form_data = new FormData();

  for (let key in data) {
    if (key == data) {
      form_data.append(key, JSON.stringify(data[key]));
    } else {
      form_data.append(key, data[key]);
    }
  }
  console.log("DATA", data);
  console.log("FORMDATA", form_data);
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
