function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    email,
    city,
    zipCode,
    status,
  };
}

function isNumber(zipCode) {
  return !isNaN(zipCode);
}

function isChecked() {
  return handleGetFormData().status.checked;
}

function validateFormData(data) {
  let isNotNumberZip = isNumber(data.zipCode);

  if (data != null && isNotNumberZip == true && isChecked()) {
    return false;
  } else {
    true;
  }
}

window.onload = function () {
  const btn = document.getElementById("submit-form");
  btn.addEventListener("click", submit);
};

function submit(event) {
  event.preventDefault();
  const data = handleGetFormData();
  const validateForm = validateFormData(data);
  if (validateForm == true) {
    document.getElementById("warning").textContent = "";
  } else {
    document.getElementById("warning").textContent =
      "isi data dengan benar (tidak boleh kosong, zip code harus angka, dan klik centang)";
    alert(
      "isi data dengan benar (tidak boleh kosong, zip code harus angka, dan klik centang)"
    );
  }
}
