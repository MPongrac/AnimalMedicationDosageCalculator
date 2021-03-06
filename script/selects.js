var sel_amt_med_strength_unit;
var sel_amt_med_strength_unit_val;
var sel_amt_med_strength_unit_options = {
  mg : 'mg',
  g : 'g'
}

var sel_amt_med_unit;
var sel_amt_med_unit_val;
var sel_amt_med_unit_options = {
  mg : 'mg',
  g : 'g',
  ml : 'ml'
}

var sel_weight_unit;
var sel_weight_unit_val;
var sel_weight_unit_options = {
  kg : 'kg',
  oz : 'oz',
  lbs : 'lbs'
}


function set_amt_med_unit() {
  console.log("set_amt_med_unit - sel_amt_med_unit.value: " + sel_amt_med_unit.value );
  sel_amt_med_unit_val = sel_amt_med_unit.value;
  document.getElementById("med_unit").textContent=sel_amt_med_unit_val;
  $('#med_unit').html(sel_amt_med_unit_val);
  $('#total_medication_unit').html(sel_amt_med_unit_val);
}
function set_weight_unit() {
  console.log("set_weight_unit - sel_weight_unit.value: " + sel_weight_unit.value );
  sel_weight_unit_val = sel_weight_unit.value;
  document.getElementById("total_weight_unit").textContent=sel_weight_unit_val;
}

function init_selects() {
  sel_amt_med_unit = document.getElementById("sel_amt_med_unit");
  sel_weight_unit = document.getElementById("sel_weight_unit");
  sel_amt_med_strength_unit = document.getElementById("sel_amt_med_strength_unit");

  init_select_options_sel_amt_med_unit();
  init_select_options_sel_weight_unit();
  init_select_options_sel_amt_med_strength_unit();
}
function init_select_options_sel_amt_med_strength_unit(){
  // console.log("--- init_select_options_sel_amt_med_strength_unit select: " + sel_amt_med_strength_unit.id);
  sel_amt_med_strength_unit.options.length = 0;
  var cnt = 0;
  for(index in sel_amt_med_strength_unit_options) {
      sel_amt_med_strength_unit.options[sel_amt_med_strength_unit.options.length] = new Option(sel_amt_med_strength_unit_options[index], index);
      // console.log("--- init_select_options cnt: " + cnt);
      // console.log("--- init_select_options index: " + index);
      if (cnt == 0) {
        sel_amt_med_strength_unit.options[sel_amt_med_strength_unit.options.length -1].selected = true;
        sel_amt_med_strength_unit_val = index;
      }
      cnt++;
  }
}
function init_select_options_sel_amt_med_unit(){
  // console.log("--- init_select_options_sel_amt_med_unit select: " + sel_amt_med_unit.id);
  sel_amt_med_unit.options.length = 0;
  var cnt = 0;
  for(index in sel_amt_med_unit_options) {
      sel_amt_med_unit.options[sel_amt_med_unit.options.length] = new Option(sel_amt_med_unit_options[index], index);
      // console.log("--- init_select_options cnt: " + cnt);
      // console.log("--- init_select_options index: " + index);
      if (cnt == 0) {
        sel_amt_med_unit.options[sel_amt_med_unit.options.length -1].selected = true;
        sel_amt_med_unit_val = index;
        $('#med_unit').html(sel_amt_med_unit_val);
        $('#total_medication_unit').html(sel_amt_med_unit_val);
      }
      cnt++;
  }
}
function init_select_options_sel_weight_unit(){
  // console.log("--- init_select_options_sel_weight_unit select: " + sel_weight_unit.id);
  sel_weight_unit.options.length = 0;
  var cnt = 0;
  for(index in sel_weight_unit_options) {
      sel_weight_unit.options[sel_weight_unit.options.length] = new Option(sel_weight_unit_options[index], index);
      // console.log("--- init_select_options cnt: " + cnt);
      // console.log("--- init_select_options index: " + index);
      if (cnt == 0) {
        sel_weight_unit.options[sel_weight_unit.options.length -1].selected = true;
        sel_weight_unit_val = index;
      }
      cnt++;
  }
}
