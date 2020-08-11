var val_amt_med_strength = 0.025;
var val_amt_med_per_weight = 0.005;
var val_total_water_mixture = 100;
var val_animal_count = 0;
var val_total_weight = 0;
var val_total_medicine = 0;
var dosageToPillPercentage = 0;

var animal_count = [];
var animal_avg_weight = [0,0,0,0,0,0];
var dosage = [0,0,0,0,0,0];
var mixture = [0,0,0,0,0,0];

var total_num_pills = 0;
// var processing_pills = false;
// var processing_fluid = false;
// var medicine_form_option = "powder";
// var medicine_form_options = ["powder", "fluid", "pill"];

function calcResults() {
  console.log("#####################");
  console.log("#####################");
  console.log("clicked calcResults()");
  console.log("#####################");
  get_entered_amounts();
  get_entered_detail_amounts();
  compute_totals();
  compute_row_details();
  show_totals();
  show_row_details();
}

function removeAnyDecimal(num) {
  return num.replace(",", "").replace(".", "");
}
function changeCommaToDecimal(num) {
  return num.replace(",", ".");
}

function get_entered_amounts() {
  val_amt_med_strength = document.getElementById('amt_med_strength').value;
  console.log("Test val_amt_med_strength: " + val_amt_med_strength);
  val_amt_med_per_weight = document.getElementById('amt_med_per_weight').value;
  console.log("Test val_amt_med_per_weight: " + val_amt_med_per_weight);
  val_total_water_mixture = document.getElementById('amt_water').value;
  console.log("Test val_total_water_mixture: " + val_total_water_mixture);
}

function get_entered_detail_amounts() {
  get_row_1_details();
  get_row_2_details();
  get_row_3_details();
  get_row_4_details();
  get_row_5_details();
  get_row_6_details();
}
function get_row_1_details() {
  animal_count[0] = document.getElementById('row_1_animal_count').value;
  // console.log("Test animal_count 1: " + animal_count[0]);
  animal_avg_weight[0] = document.getElementById('row_1_animal_avg_weight').value;
  // console.log("Test animal_avg_weight 1: " + animal_avg_weight[0]);
}
function get_row_2_details() {
  animal_count[1] = document.getElementById('row_2_animal_count').value;
  animal_avg_weight[1] = document.getElementById('row_2_animal_avg_weight').value;
}
function get_row_3_details() {
  animal_count[2] = document.getElementById('row_3_animal_count').value;
  animal_avg_weight[2] = document.getElementById('row_3_animal_avg_weight').value;
}
function get_row_4_details() {
  animal_count[3] = document.getElementById('row_4_animal_count').value;
  animal_avg_weight[3] = document.getElementById('row_4_animal_avg_weight').value;
}
function get_row_5_details() {
  animal_count[4] = document.getElementById('row_5_animal_count').value;
  animal_avg_weight[4] = document.getElementById('row_5_animal_avg_weight').value;
}
function get_row_6_details() {
  animal_count[5] = document.getElementById('row_6_animal_count').value;
  animal_avg_weight[5] = document.getElementById('row_6_animal_avg_weight').value;
}

function compute_totals() {
  val_animal_count = 0;
  val_total_weight = 0;
  val_total_medicine = 0;
  total_num_pills = 0;
  // console.log("--- Test compute_totals val_total_weight: " + val_total_weight);

  for (var i = 0; i < animal_count.length; i++) {
    if (isNaN(1 + animal_count[i])) {
      // ignore this entry.
    } else {
      val_animal_count = val_animal_count + (animal_count[i] * 1);
      val_total_weight = val_total_weight + (animal_avg_weight[i] * animal_count[i]);
      // console.log("--- Test compute_totals val_total_weight: " + val_total_weight);
    }
  }
  val_total_medicine = 1 * val_total_weight * val_amt_med_per_weight;
  computeNumberPillsMedicationAmount();
  console.log("Test compute_totals val_animal_count: " + val_animal_count);
  console.log("Test compute_totals val_total_weight: " + val_total_weight);
  console.log("Test compute_totals val_total_medicine: " + val_total_medicine);
  console.log("Test compute_totals val_total_pills/medication amount: " + total_num_pills);
}


// function computeDosageToPillPercentage() {
//   dosageToPillPercentage = 0;
//   dosageToPillPercentage = val_amt_med_per_weight / val_amt_med_strength;
//   console.log("Test computeDosageToPillPercentage: " + dosageToPillPercentage);
// }

function computeNumberPillsMedicationAmount() {
  // computeDosageToPillPercentage();
  total_num_pills = 0;
  total_num_pills = val_total_medicine / val_amt_med_strength;
}

function compute_row_details() {
  for (var i = 0; i < animal_count.length; i++) {
    if (isNaN(1 + animal_count[i])) {
      // ignore this entry.
    } else {
      percentage = ((animal_avg_weight[i] * animal_count[i]) / val_total_weight);
      dosage[i] = percentage * val_total_medicine;
      mixture[i] = percentage * val_total_water_mixture;
    }
  }
}

function show_totals() {
  $('#result_animal_count').html(val_animal_count);
  $('#result_animal_weight').html(val_total_weight.toFixed(2));
  $('#result_total_medication').html(val_total_medicine.toFixed(2));
  $('#result_pill_count').html(total_num_pills.toFixed(2));
  $('#result_medication_amount').html(total_num_pills.toFixed(2));
}

function show_row_details() {
  show_row_1_details();
  show_row_2_details();
  show_row_3_details();
  show_row_4_details();
  show_row_5_details();
  show_row_6_details();
}
function show_row_1_details() {
  $("#row_1_ml_medicine").html(dosage[0].toFixed(2));
  $('#row_1_ml_water_mixture').html(mixture[0].toFixed(2));
}
function show_row_2_details() {
  $('#row_2_ml_medicine').html(dosage[1].toFixed(2));
  $('#row_2_ml_water_mixture').html(mixture[1].toFixed(2));
}
function show_row_3_details() {
  $('#row_3_ml_medicine').html(dosage[2].toFixed(2));
  $('#row_3_ml_water_mixture').html(mixture[2].toFixed(2));
}
function show_row_4_details() {
  $('#row_4_ml_medicine').html(dosage[3].toFixed(2));
  $('#row_4_ml_water_mixture').html(mixture[3].toFixed(2));
}
function show_row_5_details() {
  $('#row_5_ml_medicine').html(dosage[4].toFixed(2));
  $('#row_5_ml_water_mixture').html(mixture[4].toFixed(2));
}
function show_row_6_details() {
  $('#row_6_ml_medicine').html(dosage[5].toFixed(2));
  $('#row_6_ml_water_mixture').html(mixture[5].toFixed(2));
}
