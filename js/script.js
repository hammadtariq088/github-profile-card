const getData = async () => {
  // fetching the data from the github api
  const response = await fetch("https://api.github.com/users/hammadtariq088");
  const data = await response.json();
  console.log(data);
  var profileTitle = document.getElementById("profileTitle");
  var profileDsgn = document.getElementById("profileDsgn");
  var profileImg = document.getElementById("profileImg");
  var profileLink = document.getElementById("profileLink");
  profileTitle.innerHTML = data.name;
  profileDsgn.innerHTML = data.bio;
  profileImg.src = data.avatar_url;
  profileLink.href = data.html_url;
};

window.onload = getData;
