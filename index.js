let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let cartItemsContainerEl = document.getElementById("cartItemsContainer");

function onAddCartItem() {
  let cartitmelist = cartItemTextInputEl.value;
  let listitem = document.createElement("li");
  listitem.textContent = cartitmelist;

  cartItemTextInputEl.value = "";
  cartItemsContainerEl.appendChild(listitem);
}
