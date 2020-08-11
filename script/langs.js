const DE_DE = "de_de";
const EN_US = "en_us";

var btn_powder = document.getElementById('btn_powder');
var btn_fluid = document.getElementById('btn_fluid');
var btn_pill = document.getElementById('btn_pill');

var btn_lbl_powder = document.getElementById('btn_lbl_powder');
var btn_lbl_fluid = document.getElementById('btn_lbl_fluid');
var btn_lbl_pill = document.getElementById('btn_lbl_pill');

var tooltiptext_powder = document.getElementById('tooltiptext_powder');
var tooltiptext_fluid = document.getElementById('tooltiptext_fluid');
var tooltiptext_pill = document.getElementById('tooltiptext_pill');

var btn_en_us = document.getElementById('btn_en_us');
var btn_de_de = document.getElementById('btn_de_de');

var tooltiptext_en_us = document.getElementById('tooltiptext_en_us');
var tooltiptext_de_de = document.getElementById('tooltiptext_de_de');

var heading_title_tab = document.getElementById('heading_title_tab');
var heading_title_page = document.getElementById('heading_title_page');

var lbl_strength = document.getElementById('lbl_strength');
var tooltiptext_strength = document.getElementById('lbl_strength');
var lbl_pill_unit = document.getElementById('lbl_pill_unit');

var lbl_dosage = document.getElementById('lbl_dosage');
var lbl_amt_water = document.getElementById('lbl_amt_water');

var heading_animal_details = document.getElementById('heading_animal_details');
var functional_description = document.getElementById('functional_description');

var lbl_stall = document.getElementById('lbl_stall');

var lbl_num_animals = document.getElementById('lbl_num_animals');
var tooltiptext_num_animals = document.getElementById('tooltiptext_num_animals');

var lbl_avg_weight = document.getElementById('lbl_avg_weight');
var tooltiptext_avg_weight = document.getElementById('tooltiptext_avg_weight');

var lbl_medicine = document.getElementById('lbl_medicine');
var tooltiptext_medicine = document.getElementById('tooltiptext_medicine');

var lbl_water_mixture = document.getElementById('lbl_water_mixture');
var tooltiptext_water_mixture = document.getElementById('tooltiptext_water_mixture');

var lbl_total_animal_count = document.getElementById('lbl_total_animal_count');
var tooltiptext_total_animal_count = document.getElementById('tooltiptext_total_animal_count');

var lbl_total_medication = document.getElementById('lbl_total_medication');
var tooltiptext_total_medication = document.getElementById('tooltiptext_total_medication');

var lbl_total_medication_dosage = document.getElementById('lbl_total_medication_dosage');

var lbl_total_weight = document.getElementById('lbl_total_weight');
var tooltiptext_total_weight = document.getElementById('tooltiptext_total_weight');

var lbl_total_pills = document.getElementById('lbl_total_pills');
var total_pill_unit = document.getElementById('total_pill_unit');
var tooltiptext_total_pills = document.getElementById('tooltiptext_total_weight');

var lbl_total_medication_total = document.getElementById('lbl_total_medication_total');
var tooltiptext_total_medication = document.getElementById('tooltiptext_total_weight');

var tooltiptext_calculate_results = document.getElementById('tooltiptext_calculate_results');

var default_lang = EN_US;
var lang = DE_DE;
var tab_title = "";

var btns_lang_exist = false;
var btns_opts_exist = false;
var lbls_exist = false;
var tooltiptexts_exist = false;
var headings_exist = false;
var functional_description_exists = false;

var languageTextSource = null;

var langKeys = [
  "title",
  "lbl_dosage",
  "tooltiptext_dosage",
  "lbl_amt_water",
  "tooltiptext_amt_water_mixture",
  "heading_animal_details",
  "functional_description",
  "lbl_stall",
  "lbl_num_animals",
  "tooltiptext_num_animals",
  "lbl_avg_weight",
  "tooltiptext_avg_weight",
  "lbl_medicine",
  "tooltiptext_medicine",
  "lbl_water_mixture",
  "tooltiptext_water_mixture",
  "lbl_total_animal_count",
  "tooltiptext_total_animal_count",
  "lbl_total_medication",
  "tooltiptext_total_medication",
  "lbl_total_weight",
  "tooltiptext_total_weight",
  "tooltiptext_calculate_results",
  "btn_lbl_powder",
  "btn_lbl_fluid",
  "btn_lbl_pill",
  "tooltiptext_powder",
  "tooltiptext_fluid",
  "tooltiptext_pill",
  "lbl_strength",
  "tooltiptext_strength",
  "lbl_pill_unit",
  "lbl_total_medication_dosage",
  "tooltiptext_total_medication_dosage",
  "lbl_total_pills",
  "tooltiptext_total_pills",
  "total_pill_unit",
  "lbl_total_medication_total",
  "tooltiptext_total_medication"
 ];


// This was used for initial structure testing before adding a file.
// var langs = '{"en_us": {"title": "Animal Medication Dosage Calculator", "value": "val en", "cheese": "gouda" } , "de_de": { "title": "Tierische Medizin Dosierungsrechner", "value": "val de" }} ';
var currLangTexts = null;
var newLangTexts;
var defaultLangTexts = null;


/* Handle Language Button Events */
function setTextDeDe() {
  setLang(DE_DE);
}
function setTextEnUs() {
  setLang(EN_US);
}
function setLang(newLang) {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  console.log("clicked setLang: " + newLang);
  lang = newLang;
  enableAllLangButtons();
  switch(newLang) {
  case DE_DE:
    btn_de_de.disabled = true;
    break;
  case EN_US:
  default:
    btn_en_us.disabled = true;
  }
  enableAllMedicineFormOptionButtons();
  setNewLang(newLang);
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
}

/* Set UI Text Values */
function setControlTexts() {
  ensureLangElementsExist();

  setTitle();
  setMedicineFormOptionLabelAndTooltips();
  setInputLabelsAndTooltips();
  setFunctionalDescriptionWithHeading();
  setColumnHeadingLabelsAndTooltips();
  setColumnTotalLabelsAndTooltips();
  setComputeButtonTooltip();
}
function setTitle() {
  document.title = currLangTexts["title"];
  $("#heading_title_page").text(currLangTexts["title"]);
}

function generateLblToolTipText(lbl_name, tooltiptext_name) {
  $(("#" + lbl_name)).html(currLangTexts[lbl_name] + '<span id="' + tooltiptext_name + '" class="tooltiptext">' +
    currLangTexts[tooltiptext_name] +
  '</span>');
}
function generateLblBottomToolTipText(lbl_name, tooltiptext_name) {
  $(("#" + lbl_name)).html(currLangTexts[lbl_name] + '<span id="' + tooltiptext_name + '" class="tooltiptext_bottom">' +
    currLangTexts[tooltiptext_name] +
  '</span>');
}

function setMedicineFormOptionLabelAndTooltips() {
  $("#btn_lbl_powder").text(currLangTexts["btn_lbl_powder"]);
  $("#tooltiptext_powder").text(currLangTexts["tooltiptext_powder"]);
  $("#btn_lbl_fluid").text(currLangTexts["btn_lbl_fluid"]);
  $("#tooltiptext_fluid").text(currLangTexts["tooltiptext_fluid"]);
  $("#btn_lbl_pill").text(currLangTexts["btn_lbl_pill"]);
  $("#tooltiptext_pill").text(currLangTexts["tooltiptext_pill"]);
}
function setInputLabelsAndTooltips() {
  generateLblBottomToolTipText("lbl_strength", "tooltiptext_strength");
  generateLblBottomToolTipText("lbl_dosage", "tooltiptext_dosage");
  generateLblBottomToolTipText("lbl_amt_water", "tooltiptext_amt_water_mixture");

  $("#lbl_pill_unit").text(currLangTexts["lbl_pill_unit"]);
}
function setFunctionalDescriptionWithHeading() {
  $("#heading_animal_details").html(currLangTexts["heading_animal_details"]);
  $("#functional_description").html(currLangTexts["functional_description"]);
}
function setColumnHeadingLabelsAndTooltips() {
  $("#lbl_stall").text(currLangTexts["lbl_stall"]);
  generateLblToolTipText("lbl_num_animals", "tooltiptext_num_animals");
  generateLblToolTipText("lbl_avg_weight", "tooltiptext_avg_weight");
  generateLblToolTipText("lbl_medicine", "tooltiptext_medicine");
  generateLblToolTipText("lbl_water_mixture", "tooltiptext_water_mixture");
}
function setColumnTotalLabelsAndTooltips() {
  generateLblToolTipText("lbl_total_animal_count", "tooltiptext_total_animal_count");
  generateLblToolTipText("lbl_total_medication", "tooltiptext_total_medication");
  generateLblToolTipText("lbl_total_medication_dosage", "tooltiptext_total_medication_dosage");
  generateLblToolTipText("lbl_total_weight", "tooltiptext_total_weight");
  generateLblToolTipText("lbl_total_pills", "tooltiptext_total_pills");
  generateLblToolTipText("lbl_total_medication_total", "tooltiptext_total_medication");

  $("#total_pill_unit").text(currLangTexts["total_pill_unit"]);
}
function setComputeButtonTooltip() {
  $("#tooltiptext_calculate_results").text(currLangTexts["tooltiptext_calculate_results"]);
}

/* Set the proper language text values. */
function setNewLang(newLang) {
  loadLanguages();
  if (languageTextSource != null) {
    // debugLanguageTexts(default_lang);
    if (defaultLangTexts === null) {
      defaultLangTexts = copy(languageTextSource[default_lang]);
    }
    lang = newLang;
    currLangTexts = copy(languageTextSource[default_lang]);
    console.log("setting lang..." + default_lang + " - " + lang);
    newLangTexts = copy(languageTextSource[newLang]);
    if (newLang != default_lang) {
      setNewLangEntriesInCurrLangText();
    }
    // debugCurrentLanguageTexts();
    // debugDefaultLanguageTexts();
    setControlTexts();
  }
}
function debugCurrentLanguageTexts() {
  console.log("\toooooooooooooooooooooooooooooooooooooooooooooooo");
  console.log("\t\t\tcurrLangTexts: lang " + lang);
  console.log("\toooooooooooooooooooooooooooooooooooooooooooooooo");
  for (var key in langKeys) {
    var tmpKey = langKeys[key];
    console.log("\t" +
    tmpKey + " = " + currLangTexts[tmpKey]);
  }
  console.log("\toooooooooooooooooooooooooooooooooooooooooooooooo");
}
function debugDefaultLanguageTexts() {
  console.log("\toooooooooooooooooooooooooooooooooooooooooooooooo");
  console.log("\t\t\tdefaultLangTexts: lang " + default_lang);
  console.log("\toooooooooooooooooooooooooooooooooooooooooooooooo");
  for (var key in langKeys) {
    var tmpKey = langKeys[key];
    console.log("\t" +
    tmpKey + " = " + defaultLangTexts[tmpKey]);
  }
  console.log("\toooooooooooooooooooooooooooooooooooooooooooooooo");
}
function debugLanguageTexts(someLang) {
  console.log("\tzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  console.log("\t\t\tallLangTexts: lang " + someLang);
  console.log("\tzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  var someLangTexts = languageTextSource[someLang];
  for (var key in langKeys) {
    var tmpKey = langKeys[key];
    console.log("\t" +
    tmpKey + " = " + someLangTexts[tmpKey]);
  }
  console.log("\tzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
}
function setNewLangEntriesInCurrLangText() {
  for (var key in langKeys) {
    var tmpKey = langKeys[key];
    // console.log("setNewLangEntriesInCurrLangText (checking newLang value) - " +
    // lang + " " + tmpKey + " = " + currLangTexts[tmpKey]);
    if (newLangTexts[tmpKey] != null) {
      currLangTexts[tmpKey] = newLangTexts[tmpKey];
      console.log("setNewLangEntriesInCurrLangText (setting newLang value) - " +
      lang + " " + tmpKey + " = " + currLangTexts[tmpKey]);
    }
  }
}
function copy(mainObj) {
  let objCopy = {}; // objCopy will store a copy of the mainObj
  let key;

  for (key in mainObj) {
    objCopy[key] = mainObj[key]; // copies each property to the objCopy object
  }
  return objCopy;
}
function loadLanguages() {
  if (languageTextSource === null) {
    languageTextSource = JSON.parse(langs);
  }
}

/* Language Buttons */
function enableAllLangButtons() {
  ensureBtnsLangExist();
  if (btns_lang_exist === true) {
    btn_en_us.disabled = false;
    btn_de_de.disabled = false;
  }
}
function ensureBtnsLangExist() {
  if (btns_lang_exist === true) { return; }
  if (btn_en_us == null) {
    btn_en_us = document.getElementById('btn_en_us');
    if (btn_en_us == null) {
      return;
    }
  }
  if (btn_de_de == null) {
    btn_de_de = document.getElementById('btn_de_de');
    if (btn_de_de == null) {
      return;
    }
  }

  btns_lang_exist = true;
}
function enableAllMedicineFormOptionButtons() {
  ensureBtnsOptsExist();
  if (btns_opts_exist === true) {
    btn_powder.disabled = true;
    btn_fluid.disabled = false;
    btn_pill.disabled = false;
  }
}
function ensureBtnsOptsExist() {
  if (btns_opts_exist === true) { return; }
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

  btns_opts_exist = true;
}

/* All Remaining UI Language Elements */
function ensureLangElementsExist() {
  ensureLblsExist();
  ensureToolTipTextsExist();
  ensureHeadingsExist();
  ensureDescriptionExists();
}
function ensureLblsExist() {
  if (lbls_exist == true) { return; }

  // Button Labels
  if (btn_lbl_powder == null) {
    btn_lbl_powder = document.getElementById('btn_lbl_powder');
    if (btn_lbl_powder == null) {
      return;
    }
  }
  if (btn_lbl_fluid == null) {
    btn_lbl_fluid = document.getElementById('btn_lbl_fluid');
    if (btn_lbl_fluid == null) {
      return;
    }
  }
  if (btn_lbl_pill == null) {
    btn_lbl_pill = document.getElementById('btn_lbl_pill');
    if (btn_lbl_pill == null) {
      return;
    }
  }

  // Selections
  if (lbl_pill_unit == null) {
    lbl_pill_unit = document.getElementById('lbl_pill_unit');
    if (lbl_pill_unit == null) {
      return;
    }
  }
  if (lbl_strength == null) {
    lbl_strength = document.getElementById('lbl_strength');
    if (lbl_strength == null) {
      return;
    }
  }
  if (lbl_dosage == null) {
    lbl_dosage = document.getElementById('lbl_dosage');
    if (lbl_dosage == null) {
      return;
    }
  }
  if (lbl_amt_water == null) {
    lbl_amt_water = document.getElementById('lbl_amt_water');
    if (lbl_amt_water == null) {
      return;
    }
  }

  // Column Heading
  if (lbl_stall == null) {
    lbl_stall = document.getElementById('lbl_stall');
    if (lbl_stall == null) {
      return;
    }
  }
  if (lbl_num_animals == null) {
    lbl_num_animals = document.getElementById('lbl_num_animals');
    if (lbl_num_animals == null) {
      return;
    }
  }
  if (lbl_avg_weight == null) {
    lbl_avg_weight = document.getElementById('lbl_avg_weight');
    if (lbl_avg_weight == null) {
      return;
    }
  }
  if (lbl_medicine == null) {
    lbl_medicine = document.getElementById('lbl_medicine');
    if (lbl_medicine == null) {
      return;
    }
  }
  if (lbl_water_mixture == null) {
    lbl_water_mixture = document.getElementById('lbl_water_mixture');
    if (lbl_water_mixture == null) {
      return;
    }
  }

  // Totals
  if (lbl_total_animal_count == null) {
    lbl_total_animal_count = document.getElementById('lbl_total_animal_count');
    if (lbl_total_animal_count == null) {
      return;
    }
  }
  if (lbl_total_medication == null) {
    lbl_total_medication = document.getElementById('lbl_total_medication');
    if (lbl_total_medication == null) {
      return;
    }
  }
  if (lbl_total_medication_dosage == null) {
    lbl_total_medication_dosage = document.getElementById('lbl_total_medication_dosage');
    if (lbl_total_medication_dosage == null) {
      return;
    }
  }
  if (lbl_total_medication_total == null) {
    lbl_total_medication_total = document.getElementById('lbl_total_medication_total');
    if (lbl_total_medication_total == null) {
      return;
    }
  }
  if (lbl_total_weight == null) {
    lbl_total_weight = document.getElementById('lbl_total_weight');
    if (lbl_total_weight == null) {
      return;
    }
  }
  if (lbl_total_pills == null) {
    lbl_total_pills = document.getElementById('lbl_total_pills');
    if (lbl_total_pills == null) {
      return;
    }
  }
  if (total_pill_unit == null) {
    total_pill_unit = document.getElementById('total_pill_unit');
    if (total_pill_unit == null) {
      return;
    }
  }

  lbls_exist = true;
}
function ensureToolTipTextsExist() {
  if (tooltiptexts_exist == true) { return; }

  // Buttons
  if (tooltiptext_powder == null) {
    tooltiptext_powder = document.getElementById('tooltiptext_powder');
    if (tooltiptext_powder == null) {
      return;
    }
  }
  if (tooltiptext_fluid == null) {
    tooltiptext_fluid = document.getElementById('tooltiptext_fluid');
    if (tooltiptext_fluid == null) {
      return;
    }
  }
  if (tooltiptext_pill == null) {
    tooltiptext_pill = document.getElementById('tooltiptext_pill');
    if (tooltiptext_pill == null) {
      return;
    }
  }
  if (tooltiptext_en_us == null) {
    tooltiptext_en_us = document.getElementById('tooltiptext_en_us');
    if (tooltiptext_en_us == null) {
      return;
    }
  }
  if (tooltiptext_de_de == null) {
    tooltiptext_de_de = document.getElementById('tooltiptext_de_de');
    if (tooltiptext_de_de == null) {
      return;
    }
  }


  if (tooltiptext_strength == null) {
    tooltiptext_strength = document.getElementById('tooltiptext_strength');
    if (tooltiptext_strength == null) {
      return;
    }
  }

  // TODO: These don't exist yet!
  // Selections (@TODO: These don't exist yet!)
  // if (tooltiptext_dosage == null) {
  //   tooltiptext_amt_med_per_weight = document.getElementById('tooltiptext_amt_med_per_weight');
  //   if (tooltiptext_amt_med_per_weight == null) {
  //     return;
  //   }
  // }
  // if (tooltiptext_amt_water == null) {
  //   tooltiptext_amt_water = document.getElementById('tooltiptext_amt_water');
  //   if (tooltiptext_amt_water == null) {
  //     return;
  //   }
  // }

  // Column Heading
  if (tooltiptext_num_animals == null) {
    tooltiptext_num_animals = document.getElementById('tooltiptext_num_animals');
    if (tooltiptext_num_animals == null) {
      return;
    }
  }
  if (tooltiptext_avg_weight == null) {
    tooltiptext_avg_weight = document.getElementById('tooltiptext_avg_weight');
    if (tooltiptext_avg_weight == null) {
      return;
    }
  }
  if (tooltiptext_medicine == null) {
    tooltiptext_medicine = document.getElementById('tooltiptext_medicine');
    if (tooltiptext_medicine == null) {
      return;
    }
  }
  if (tooltiptext_water_mixture == null) {
    tooltiptext_water_mixture = document.getElementById('tooltiptext_water_mixture');
    if (tooltiptext_water_mixture == null) {
      return;
    }
  }


  // Totals
  if (tooltiptext_total_animal_count == null) {
    tooltiptext_total_animal_count = document.getElementById('tooltiptext_total_animal_count');
    if (tooltiptext_total_animal_count == null) {
      return;
    }
  }
  if (tooltiptext_total_medication == null) {
    tooltiptext_total_medication = document.getElementById('tooltiptext_total_medication');
    if (tooltiptext_total_medication == null) {
      return;
    }
  }
  if (tooltiptext_total_medication_dosage == null) {
    tooltiptext_total_medication_dosage = document.getElementById('tooltiptext_total_medication_dosage');
    if (tooltiptext_total_medication_dosage == null) {
      return;
    }
  }
  if (tooltiptext_total_weight == null) {
    tooltiptext_total_weight = document.getElementById('tooltiptext_total_weight');
    if (tooltiptext_total_weight == null) {
      return;
    }
  }
  if (tooltiptext_total_pills == null) {
    tooltiptext_total_pills = document.getElementById('tooltiptext_total_pills');
    if (tooltiptext_total_pills == null) {
      return;
    }
  }
  if (tooltiptext_total_medication == null) {
    tooltiptext_total_medication = document.getElementById('tooltiptext_total_medication');
    if (tooltiptext_total_medication == null) {
      return;
    }
  }




  tooltiptexts_exist = true;
}
function ensureHeadingsExist() {
  if (headings_exist == true) { return; }
  if (heading_title_page == null) {
    heading_title_page = document.getElementById('heading_title_page');
    if (heading_title_page == null) {
      return;
    }
  }
  if (heading_animal_details == null) {
    heading_animal_details = document.getElementById('heading_animal_details');
    if (heading_animal_details == null) {
      return;
    }
  }
  if (heading_title_tab == null) {
    heading_title_tab = document.getElementById('heading_title_tab');
    if (heading_title_tab == null) {
      return;
    }
  }
  headings_exist = true;
}
function ensureDescriptionExists() {
  if (functional_description_exists == true) { return; }
  if (functional_description == null) {
    functional_description = document.getElementById('functional_description');
    if (functional_description == null) {
      return;
    }
  }
  functional_description_exists = true;
}
