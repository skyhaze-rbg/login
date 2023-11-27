var x = document.getElementById("login");
var z = document.getElementById("btn");

function login() {
  x.style.left = "27px";
  y.style.right = "-350px";
  z.style.left = "0px";
}

// View Password codes

function myNewPassword() {
  var a = document.getElementById("logPassword");
  var b = document.getElementById("eye");
  var c = document.getElementById("eye-slash");

  if (a.type === "password") {
    a.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
  } else {
    a.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
  }
}
function myRetypePassword() {
  var a = document.getElementById("logPassword");
  var b = document.getElementById("eye");
  var c = document.getElementById("eye-slash");

  if (a.type === "password") {
    a.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
  } else {
    a.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
  }
}
function toggleNewPasswordVisibility() {
  var x = document.getElementById("newPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function toggleRetypePasswordVisibility() {
  var x = document.getElementById("retypePassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function moveToNext(currentInput, nextInputId) {
  if (currentInput.value.length === currentInput.maxLength) {
    document.getElementById(nextInputId).focus();
  }
}

// Array of country phone codes and flags
const countryCodes = [
  { code: "533", name: "AW" },
  { code: "004", name: "AF" },
  { code: "024", name: "AO" },
  { code: "660", name: "AI" },
  { code: "248", name: "AX" },
  { code: "008", name: "AL" },
  { code: "020", name: "AD" },
  { code: "784", name: "AE" },
  { code: "032", name: "AR" },
  { code: "051", name: "AM" },
  { code: "016", name: "AS" },
  { code: "010", name: "AQ" },
  { code: "260", name: "TF" },
  { code: "028", name: "AG" },
  { code: "036", name: "AU" },
  { code: "040", name: "AT" },
  { code: "031", name: "AZ" },
  { code: "108", name: "BI" },
  { code: "056", name: "BE" },
  { code: "204", name: "BJ" },
  { code: "535", name: "BQ" },
  { code: "854", name: "BF" },
  { code: "050", name: "BD" },
  { code: "100", name: "BG" },
  { code: "048", name: "BH" },
  { code: "044", name: "BS" },
  { code: "070", name: "BA" },
  { code: "652", name: "BL" },
  { code: "112", name: "BY" },
  { code: "084", name: "BZ" },
  { code: "060", name: "BM" },
  { code: "068", name: "BO" },
  { code: "076", name: "BR" },
  { code: "052", name: "BB" },
  { code: "096", name: "BN" },
  { code: "064", name: "BT" },
  { code: "074", name: "BV" },
  { code: "072", name: "BW" },
  { code: "140", name: "CF" },
  { code: "124", name: "CA" },
  { code: "166", name: "CC" },
  { code: "756", name: "CH" },
  { code: "152", name: "CL" },
  { code: "156", name: "CN" },
  { code: "384", name: "CI" },
  { code: "120", name: "CM" },
  { code: "180", name: "CD" },
  { code: "178", name: "CG" },
  { code: "184", name: "CK" },
  { code: "170", name: "CO" },
  { code: "174", name: "KM" },
  { code: "132", name: "CV" },
  { code: "188", name: "CR" },
  { code: "192", name: "CU" },
  { code: "531", name: "CW" },
  { code: "162", name: "CX" },
  { code: "136", name: "KY" },
  { code: "196", name: "CY" },
  { code: "203", name: "CZ" },
  { code: "276", name: "DE" },
  { code: "262", name: "DJ" },
  { code: "212", name: "DM" },
  { code: "208", name: "DK" },
  { code: "214", name: "DO" },
  { code: "012", name: "DZ" },
  { code: "218", name: "EC" },
  { code: "818", name: "EG" },
  { code: "232", name: "ER" },
  { code: "732", name: "EH" },
  { code: "724", name: "ES" },
  { code: "233", name: "EE" },
  { code: "231", name: "ET" },
  { code: "246", name: "FI" },
  { code: "242", name: "FJ" },
  { code: "238", name: "FK" },
  { code: "250", name: "FR" },
  { code: "234", name: "FO" },
  { code: "583", name: "FM" },
  { code: "266", name: "GA" },
  { code: "826", name: "GB" },
  { code: "268", name: "GE" },
  { code: "831", name: "GG" },
  { code: "288", name: "GH" },
  { code: "292", name: "GI" },
  { code: "324", name: "GN" },
  { code: "312", name: "GP" },
  { code: "270", name: "GM" },
  { code: "624", name: "GW" },
  { code: "226", name: "GQ" },
  { code: "300", name: "GR" },
  { code: "308", name: "GD" },
  { code: "304", name: "GL" },
  { code: "320", name: "GT" },
  { code: "254", name: "GF" },
  { code: "316", name: "GU" },
  { code: "328", name: "GY" },
  { code: "344", name: "HK" },
  { code: "334", name: "HM" },
  { code: "340", name: "HN" },
  { code: "191", name: "HR" },
  { code: "332", name: "HT" },
  { code: "348", name: "HU" },
  { code: "360", name: "ID" },
  { code: "833", name: "IM" },
  { code: "356", name: "IN" },
  { code: "086", name: "IO" },
  { code: "372", name: "IE" },
  { code: "364", name: "IR" },
  { code: "368", name: "IQ" },
  { code: "352", name: "IS" },
  { code: "376", name: "IL" },
  { code: "380", name: "IT" },
  { code: "388", name: "JM" },
  { code: "832", name: "JE" },
  { code: "400", name: "JO" },
  { code: "392", name: "JP" },
  { code: "398", name: "KZ" },
  { code: "404", name: "KE" },
  { code: "417", name: "KG" },
  { code: "116", name: "KH" },
  { code: "296", name: "KI" },
  { code: "659", name: "KN" },
  { code: "410", name: "KR" },
  { code: "414", name: "KW" },
  { code: "418", name: "LA" },
  { code: "422", name: "LB" },
  { code: "430", name: "LR" },
  { code: "434", name: "LY" },
  { code: "662", name: "LC" },
  { code: "438", name: "LI" },
  { code: "144", name: "LK" },
  { code: "426", name: "LS" },
  { code: "440", name: "LT" },
  { code: "442", name: "LU" },
  { code: "428", name: "LV" },
  { code: "446", name: "MO" },
  { code: "663", name: "MF" },
  { code: "504", name: "MA" },
  { code: "492", name: "MC" },
  { code: "498", name: "MD" },
  { code: "450", name: "MG" },
  { code: "462", name: "MV" },
  { code: "484", name: "MX" },
  { code: "584", name: "MH" },
  { code: "807", name: "MK" },
  { code: "466", name: "ML" },
  { code: "470", name: "MT" },
  { code: "104", name: "MM" },
  { code: "499", name: "ME" },
  { code: "496", name: "MN" },
  { code: "580", name: "MP" },
  { code: "508", name: "MZ" },
  { code: "478", name: "MR" },
  { code: "500", name: "MS" },
  { code: "474", name: "MQ" },
  { code: "480", name: "MU" },
  { code: "454", name: "MW" },
  { code: "458", name: "MY" },
  { code: "175", name: "YT" },
  { code: "516", name: "NA" },
  { code: "540", name: "NC" },
  { code: "562", name: "NE" },
  { code: "574", name: "NF" },
  { code: "566", name: "NG" },
  { code: "558", name: "NI" },
  { code: "570", name: "NU" },
  { code: "528", name: "NL" },
  { code: "578", name: "NO" },
  { code: "524", name: "NP" },
  { code: "520", name: "NR" },
  { code: "554", name: "NZ" },
  { code: "512", name: "OM" },
  { code: "586", name: "PK" },
  { code: "591", name: "PA" },
  { code: "612", name: "PN" },
  { code: "604", name: "PE" },
  { code: "608", name: "PH" },
  { code: "585", name: "PW" },
  { code: "598", name: "PG" },
  { code: "616", name: "PL" },
  { code: "630", name: "PR" },
  { code: "408", name: "KP" },
  { code: "620", name: "PT" },
  { code: "600", name: "PY" },
  { code: "275", name: "PS" },
  { code: "258", name: "PF" },
  { code: "634", name: "QA" },
  { code: "638", name: "RE" },
  { code: "642", name: "RO" },
  { code: "643", name: "RU" },
  { code: "646", name: "RW" },
  { code: "682", name: "SA" },
  { code: "729", name: "SD" },
  { code: "686", name: "SN" },
  { code: "702", name: "SG" },
  { code: "239", name: "GS" },
  { code: "654", name: "SH" },
  { code: "744", name: "SJ" },
  { code: "090", name: "SB" },
  { code: "694", name: "SL" },
  { code: "222", name: "SV" },
  { code: "674", name: "SM" },
  { code: "706", name: "SO" },
  { code: "666", name: "PM" },
  { code: "688", name: "RS" },
  { code: "728", name: "SS" },
  { code: "678", name: "ST" },
  { code: "740", name: "SR" },
  { code: "703", name: "SK" },
  { code: "705", name: "SI" },
  { code: "752", name: "SE" },
  { code: "748", name: "SZ" },
  { code: "534", name: "SX" },
  { code: "690", name: "SC" },
  { code: "760", name: "SY" },
  { code: "796", name: "TC" },
  { code: "148", name: "TD" },
  { code: "768", name: "TG" },
  { code: "764", name: "TH" },
  { code: "762", name: "TJ" },
  { code: "772", name: "TK" },
  { code: "795", name: "TM" },
  { code: "626", name: "TL" },
  { code: "776", name: "TO" },
  { code: "780", name: "TT" },
  { code: "788", name: "TN" },
  { code: "792", name: "TR" },
  { code: "798", name: "TV" },
  { code: "158", name: "TW" },
  { code: "834", name: "TZ" },
  { code: "800", name: "UG" },
  { code: "804", name: "UA" },
  { code: "581", name: "UM" },
  { code: "858", name: "UY" },
  { code: "840", name: "US" },
  { code: "860", name: "UZ" },
  { code: "336", name: "VA" },
  { code: "670", name: "VC" },
  { code: "862", name: "VE" },
  { code: "092", name: "VG" },
  { code: "850", name: "VI" },
  { code: "704", name: "VN" },
  { code: "548", name: "VU" },
  { code: "876", name: "WF" },
  { code: "882", name: "WS" },
  { code: "887", name: "YE" },
  { code: "710", name: "ZA" },
  { code: "894", name: "ZM" },
  { code: "716", name: "ZW" },
];

// Populate the select dropdown with country codes and flags
const countryCodeSelect = document.getElementById("country-code");
countryCodes.forEach((country) => {
  const option = document.createElement("option");
  option.value = country.code;
  option.text = country.name + " " + country.code;
  countryCodeSelect.appendChild(option);
});

const phoneInput = document.getElementById("phone");
const errorDiv = document.getElementById("phone-error");

phoneInput.addEventListener("input", function () {
  if (phoneInput.validity.patternMismatch) {
    errorDiv.style.display = "block";
  } else {
    errorDiv.style.display = "none";
  }
});

function showButton(value) {
  const sendCodeButton = document.getElementById("send-code");

  if (value.trim() !== "") {
    sendCodeButton.style.display = "inline";
  } else {
    sendCodeButton.style.display = "none";
  }
}

function checkCode(value) {
  const showError = document.getElementById("code-error");

  if (value == 4) {
    showError.style.display = "inline";
  } else {
    showError.style.display = "none";
  }
}
