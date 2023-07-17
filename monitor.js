const powerConsumptionDisplay = document.getElementById('power-consumption');
const energyConsumptionDisplay = document.getElementById('energy-consumption');
const costConsumptionDisplay = document.getElementById('cost-consumption');

const socketSelect = document.getElementById('socket');

const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
  console.log('WebSocket connection established.');
};

socket.onmessage = (event) => {
  const { topic, message } = JSON.parse(event.data);

  if (topic === 'socket1' && socketSelect.value === 'socket1') {
    const { power_consumption, energy_consumption } = JSON.parse(message);
    displayValues(power_consumption, energy_consumption);
  } else if (topic === 'socket2' && socketSelect.value === 'socket2') {
    const { power_consumption, energy_consumption } = JSON.parse(message);
    displayValues(power_consumption, energy_consumption);
  }
};

socket.onclose = () => {
  console.log('WebSocket connection closed.');
};

socketSelect.addEventListener('change', () => {
  powerConsumptionDisplay.textContent = '';
  energyConsumptionDisplay.textContent = '';
  costConsumptionDisplay.textContent = '';
});

function displayValues(power, energy) {
  powerConsumptionDisplay.textContent = power;
  energyConsumptionDisplay.textContent = energy;
  const tariff = getTariff(energy);
  const cost = calculateCost(energy, tariff);
  costConsumptionDisplay.textContent = cost;
}

function getTariff(energy) {
  if (energy <= 50) {
    return 32.6060;
  } else if (energy <= 300) {
    return 65.4161;
  } else if (energy <= 600) {
    return 84.8974;
  } else {
    return 94.3304;
  }
}

function calculateCost(energy, tariff) {
  const serviceCharge = 745.694;

  if (energy <= 50) {
    return (energy * tariff + serviceCharge).toFixed(2);
  } else {
    return (energy * tariff).toFixed(2);
  }
}

function goBack() {
  window.history.back();
}
