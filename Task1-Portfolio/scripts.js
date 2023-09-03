var tablinks = document.getElementsByClassName("tab");
var contents = document.getElementsByClassName("contents");
function openTab(tabName) {
  for (tab of tablinks) {
    tab.classList.remove("active");
  }
  for (content of contents) {
    content.classList.remove("activeTab");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(tabName).classList.add("activeTab");
}
