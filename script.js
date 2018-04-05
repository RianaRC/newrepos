
function functionShow() {
  document.getElementById('tap').style.display='none';
  document.getElementById('invis').style.display='block';
}
function recherche() {
  let value = document.getElementById("recherche").value;
  let x = value.replace(" ", "+")
  document.location.href=`https://www.google.com/#q=${x}`;
}
