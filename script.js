function setResult(id, message) {
  document.getElementById(id).textContent = message;
}

function calculateAge() {
  const value = document.getElementById('birthDate').value;
  if (!value) return setResult('ageResult', 'Please select your date of birth.');
  const birth = new Date(value + 'T00:00:00');
  const today = new Date();
  if (birth > today) return setResult('ageResult', 'Date of birth cannot be in the future.');

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) { years--; months += 12; }

  setResult('ageResult', `You are ${years} years, ${months} months and ${days} days old.`);
}

function calculatePercentage() {
  const part = parseFloat(document.getElementById('part').value);
  const total = parseFloat(document.getElementById('total').value);
  if (!Number.isFinite(part) || !Number.isFinite(total)) return setResult('percentageResult', 'Please enter both numbers.');
  if (total === 0) return setResult('percentageResult', 'Total cannot be zero.');
  const percent = (part / total) * 100;
  setResult('percentageResult', `${part} is ${percent.toFixed(2)}% of ${total}.`);
}

function calculateDays() {
  const startValue = document.getElementById('startDate').value;
  const endValue = document.getElementById('endDate').value;
  if (!startValue || !endValue) return setResult('daysResult', 'Please choose both dates.');
  const start = new Date(startValue + 'T00:00:00');
  const end = new Date(endValue + 'T00:00:00');
  const diff = Math.abs(end - start);
  const days = Math.round(diff / 86400000);
  setResult('daysResult', `There are ${days.toLocaleString()} day(s) between these dates.`);
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);
  if (!Number.isFinite(weight) || !Number.isFinite(heightCm) || weight <= 0 || heightCm <= 0)
    return setResult('bmiResult', 'Please enter valid weight and height.');

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  let category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal range' : bmi < 30 ? 'Overweight' : 'Obesity range';
  setResult('bmiResult', `Your BMI is ${bmi.toFixed(1)} (${category}).`);
}
