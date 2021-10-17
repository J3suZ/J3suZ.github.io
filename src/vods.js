$(document).ready(function () {
  getVods();
});

$("#formNewVod").submit(function (e) {
  e.preventDefault();
  var data = new FormData($(this)[0]);
  addVod(data);
});

const addVod = async (data) => {
  try {
    const res = await fetch("php/add_vods.php", {
      method: "POST",
      body: data,
    });
    const info = await res.json();
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};

const getVods = async () => {
  const res = await fetch("php/get_vods.php");
  const data = await res.json();
  console.log(data);
  data.forEach((vodsData) => {
    var vods = document.createElement('div');
    $(vods).addClass([]);
    $(vods).attr({class: "col-md-6 col-lg-6 shadow card p-0", "data-vodID": vodsData["vods_id"], style: "height:250px"});
    $(vods).html(vodsData["vods_element"]);
    $(".container_vods").append(vods);
  });
};