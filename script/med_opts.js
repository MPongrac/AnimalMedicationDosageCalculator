var medicine_form_option = "powder";
var medicine_form_options = ["powder", "fluid", "pill"];

var btn_powder = document.getElementById('btn_powder');
var btn_fluid = document.getElementById('btn_fluid');
var btn_pill = document.getElementById('btn_pill');

var med_strength_info = document.getElementById('med_strength_info');
var lbl_pills = document.getElementById('lbl_pills');
var value_pills = document.getElementById('value_pills');
var strength_exist = false;
var pills_exist = false;


function setMedicineFormOptionPowder() {
  medicine_form_option = medicine_form_options[0];
  setTopControlVisibilityBasedUponMedicineFormOption();
}
function setMedicineFormOptionFluid() {
  medicine_form_option = medicine_form_options[1];
  setTopControlVisibilityBasedUponMedicineFormOption();
}
function setMedicineFormOptionPill() {
  medicine_form_option = medicine_form_options[2];
  setTopControlVisibilityBasedUponMedicineFormOption();
}

function setTopControlVisibilityBasedUponMedicineFormOption() {
  enableAllMedicationOptionButtons();
  ensureMedicationOptionElementsExist();
  switch (medicine_form_option) {
    case medicine_form_options[2]:
      // show pill options
      console.log("clicked pills");
      showPillControls();
      break;
    case medicine_form_options[1]:
      // show fluid options
      console.log("clicked fluid");
      showFluidControls();
      break;
    case medicine_form_options[0]:
    default:
    // show powder options (default)
    console.log("clicked powder");
    hidePillControls();
  }
}

function showFluidControls() {
  console.log("show fluid");
  hidePillControls();
  med_strength_info.hidden = false;
  btn_fluid.disabled = true;
  btn_powder.disabled = false;
}

function showPillControls() {
  console.log("show pills");
  lbl_pills.hidden = false;
  value_pills.hidden = false;
  med_strength_info.hidden = false;
  btn_pill.disabled = true;
}

function hidePillControls() {
  console.log("hide pills");
  lbl_pills.hidden = true;
  value_pills.hidden = true;
  med_strength_info.hidden = true;
  btn_powder.disabled = true;
}

/* Medication Form Option Buttons */
function enableAllMedicationOptionButtons() {
  ensureBtnsExist();
  btn_powder.disabled = false;
  btn_fluid.disabled = false;
  btn_pill.disabled = false;
}
function ensureBtnsExist() {
  if (bts_exist == true) { return; }
  if (btn_powder == null) {
    btn_powder = document.getElementById('btn_powder');
    if (btn_powder == null) {
      return;
    }
  }
  if (btn_fluid == null) {
    btn_fluid = document.getElementById('btn_fluid');
    if (btn_fluid == null) {
      return;
    }
  }
  if (btn_pill == null) {
    btn_pill = document.getElementById('btn_pill');
    if (btn_pill == null) {
      return;
    }
  }
  bts_exist = true;
}

/* All Remaining UI Medication Option Elements */
function ensureMedicationOptionElementsExist() {
  ensureMedicationStrengthExist();
  ensurePillsExist();
}
function ensureMedicationStrengthExist() {
  if (strength_exist == true) { return; }

  // Selections
  if (med_strength_info == null) {
    med_strength_info = document.getElementById('med_strength_info');
    if (med_strength_info == null) {
      return;
    }
  }
  strength_exist = true
}
function ensurePillsExist() {
  if (pills_exist == true) { return; }

  if (lbl_pills == null) {
    lbl_pills = document.getElementById('lbl_pills');
    if (lbl_pills == null) {
      return;
    }
  }
  if (value_pills == null) {
    value_pills = document.getElementById('value_pills');
    if (value_pills == null) {
      return;
    }
  }
  pills_exist = true
}
