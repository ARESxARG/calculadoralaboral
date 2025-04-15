// Función para validar si el input es un número
function esNumero(valor) {
  return !isNaN(valor) && valor.trim() !== "";
}

function calcularDatosLaborales() {
  const horasPorDia = document.getElementById("horasPorDia").value;
  const diasPorSemana = document.getElementById("diasPorSemana").value;
  const salarioMensual = document.getElementById("salarioMensual").value;
  const salarioHora = document.getElementById("salarioHora").value;

  if (!esNumero(horasPorDia) || !esNumero(diasPorSemana) || !esNumero(salarioMensual) || !esNumero(salarioHora)) {
    alert("Por favor, ingresá todos los datos correctamente (números solamente).");
    return;
  }

  const horasDia = parseFloat(horasPorDia);
  const diasSemana = parseFloat(diasPorSemana);
  const sueldoMensual = parseFloat(salarioMensual);
  const valorHora = parseFloat(salarioHora);

  const horasSemanales = horasDia * diasSemana;
  const horasMensuales = horasSemanales * 4.33;
  const sueldoCalculadoPorHora = (sueldoMensual / horasMensuales).toFixed(2);
  const sueldoEstimadoMensual = (valorHora * horasMensuales).toFixed(2);
  const sueldoEstimadoSemanal = (valorHora * horasSemanales).toFixed(2);

  document.getElementById("resultado").innerHTML = `
    <p>🕒 Horas semanales: <strong>${horasSemanales}</strong></p>
    <p>🗓️ Horas mensuales: <strong>${horasMensuales.toFixed(2)}</strong></p>
    <p>💰 Salario real por hora (basado en sueldo mensual): <strong>$${sueldoCalculadoPorHora}</strong></p>
    <p>📆 Estimación de salario mensual según valor hora: <strong>$${sueldoEstimadoMensual}</strong></p>
    <p>📅 Estimación de salario semanal según valor hora: <strong>$${sueldoEstimadoSemanal}</strong></p>
  `;
}
