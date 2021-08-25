const items = fetch("actors.json")
  .then((response) => response.json())
  .then((json) => handleActorList(json));
function handleActorList(json) {
  json.forEach(showActor);
}
// items.forEach(showActor(person));

function showActor(item) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".actor_name").textContent = item.fullname;
  clone.querySelector(".actor_name").addEventListener("click", function () {
    alert(item.movie);
  });
  const parent = document.querySelector(".wrapper");
  parent.appendChild(clone);
}
