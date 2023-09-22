function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  const data = {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status,
  };
  return data;
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function isNumber(zipCode) {
  return !isNaN(zipCode);
}

function validateFormData(data) {
  if (data != null && isNumber(data.zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  const data = handleGetFormData();
  const validate = validateFormData(data);

  if (validate == false) {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi";
    alert("Periksa form anda sekali lagi");
  } else {
    document.getElementById("warning").textContent = "";
    alert("Berhasil");
  }
}

const btn = document.getElementById("submit-form");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  submit();
});
