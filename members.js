const showTotal = () => {
  const total = document.querySelectorAll(".col").length;
  const myText = document.getElementById("showTotal");
  myText.innerText = total;
} 
showTotal()

