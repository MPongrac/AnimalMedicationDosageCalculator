var medicine_form_option = "powder";
var medicine_form_options = ["powder", "fluid", "pill"];

var btn_powder = document.getElementById('btn_powder');
var btn_fluid = document.getElementById('btn_fluid');
var btn_pill = document.getElementById('btn_pill');

var med_strength_info = document.getElementById('med_strength_info');
var lbl_pills = document.getElementById('lbl_pills');
var lbl_pill_unit = document.getElementById('lbl_pill_unit');
var lbl_powder_total_medication = document.getElementById('lbl_powder_total_medication');
var total_dosage = document.getElementById('total_dosage');
var value_pills = document.getElementById('value_pills');
var lbl_med_strength_fluid_unit = document.getElementById('lbl_med_strength_fluid_unit');
var value_medication_total = document.getElementById('value_medication_total');
var lbl_medication_total = document.getElementById('lbl_medication_total');

var strength_exist = false;
var pills_exist = false;
var fluids_exist = false;
var btns_med_options_exist = false;


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
  hidePillControls();
  med_strength_info.hidden = false;
  // sel_med_strength_fluid_unit.hidden = false;
  lbl_med_strength_fluid_unit.hidden = false;
  value_medication_total.hidden = false;
  lbl_medication_total.hidden = false;
  lbl_powder_total_medication.hidden = true;
  total_dosage.hidden = false;

  btn_fluid.disabled = true;
  btn_powder.disabled = false;
}
function showPillControls() {
  lbl_pills.hidden = false;
  value_pills.hidden = false;
  med_strength_info.hidden = false;
  lbl_pill_unit.hidden = false;
  // sel_med_strength_fluid_unit.hidden = true;
  lbl_med_strength_fluid_unit.hidden = true;
  value_medication_total.hidden = true;
  lbl_medication_total.hidden = true;
  lbl_powder_total_medication.hidden = true;
  total_dosage.hidden = false;

  btn_pill.disabled = true;
}
function hidePillControls() {
  lbl_pills.hidden = true;
  value_pills.hidden = true;
  med_strength_info.hidden = true;
  lbl_pill_unit.hidden = true;
  // sel_med_strength_fluid_unit.hidden = true;
  lbl_med_strength_fluid_unit.hidden = true;
  value_medication_total.hidden = true;
  lbl_medication_total.hidden = true;
  lbl_powder_total_medication.hidden = false;
  total_dosage.hidden = true;

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
  if (btns_med_options_exist == true) { return; }
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
  btns_med_options_exist = true;
}

/* All Remaining UI Medication Option Elements */
function ensureMedicationOptionElementsExist() {
  ensureMedicationStrengthExist();
  ensurePillsExist();
  ensureFluidsExist();
}
function ensureMedicationStrengthExist() {
  if (strength_exist == true) { return; }

  if (med_strength_info == null) {
    med_strength_info = document.getElementById('med_strength_info');
    if (med_strength_info == null) {
      return;
    }
  }
  if (lbl_pill_unit == null) {
    lbl_pill_unit = document.getElementById('lbl_pill_unit');
    if (lbl_pill_unit == null) {
      return;
    }
  }
  if (lbl_med_strength_fluid_unit == null) {
    lbl_med_strength_fluid_unit = document.getElementById('lbl_med_strength_fluid_unit');
    if (lbl_med_strength_fluid_unit == null) {
      return;
    }
  }

  strength_exist = true
}
function ensurePillsExist() {
  if (pills_exist == true) { return; }

  if (lbl_powder_total_medication == null) {
    lbl_powder_total_medication = document.getElementById('lbl_powder_total_medication');
    if (lbl_powder_total_medication == null) {
      return;
    }
  }
  if (total_dosage == null) {
    total_dosage = document.getElementById('total_dosage');
    if (total_dosage == null) {
      return;
    }
  }
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
function ensureFluidsExist() {
  if (fluids_exist == true) { return; }

  if (value_medication_total == null) {
    value_medication_total = document.getElementById('value_medication_total');
    if (value_medication_total == null) {
      return;
    }
  }
  if (lbl_medication_total == null) {
    lbl_medication_total = document.getElementById('lbl_medication_total');
    if (lbl_medication_total == null) {
      return;
    }
  }
  fluids_exist = true
}
