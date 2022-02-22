// https://tamilchristiansongbook.easifyer.com/database/post/add_lyrics.php
// /database/post/add_lyrics.php

/* <div className={`add-form-container ${showForm ? "" : "hidden"} `}>
        <AddSong settings={settings} showFormController={showFormController} />
      </div>  */
export const addData = () => {
  fetch(
    "https://tamilchristiansongbook.easifyer.com/database/post/add_lyrics.php",
    {
      method: "POST",
      body: {},
    }
  );
};
