export const addData = (data) => {
  console.log("DATA", data);
  console.log("JSON DATA", JSON.stringify(data));
  fetch(
    "https://tamilchristiansongbook.easifyer.com/database/post/add_lyrics.php",
    {
      method: "POST",
      body: data,
    }
  )
    .then((response) => response.text())
    .then((data) => console.log(data));
};

export const getAllData = async () => {
  let resp = await fetch(
    "https://tamilchristiansongbook.easifyer.com/database/get/get_all_lyrics.php"
  );

  return await resp.text();
};
