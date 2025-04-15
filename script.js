// Función para validar si el input es un número válido
function esNumero(valor) {
  return !isNaN(valor) && valor.trim() !== "";
}

function calcularDatosLaborales() {
  const horasPorDia = document.getElementById("horasPorDia").value;
  const diasPorSemana = document.getElementById("diasPorSemana").value;
  const salarioMensual = document.getElementById("salarioMensual").value;
  const salarioHora = document.getElementById("salarioHora").value;

  let resultadoHTML = "";
  
  const horasDia = esNumero(horasPorDia) ? parseFloat(horasPorDia) : null;
  const diasSemana = esNumero(diasPorSemana) ? parseFloat(diasPorSemana) : null;
  const sueldoMensual = esNumero(salarioMensual) ? parseFloat(salarioMensual) : null;
  const valorHora = esNumero(salarioHora) ? parseFloat(salarioHora) : null;

  const horasSemanales = (horasDia && diasSemana) ? horasDia * diasSemana : null;
  const horasMensuales = (horasSemanales) ? horasSemanales * 4.33 : null;

  // Mostrar horas si se puede
  if (horasSemanales) {
    resultadoHTML += `<p>🕒 Horas semanales: <strong>${horasSemanales}</strong></p>`;
  }

  if (horasMensuales) {
    resultadoHTML += `<p>🗓️ Horas mensuales: <strong>${horasMensuales.toFixed(2)}</strong></p>`;
  }

  // Mostrar sueldo por hora si se puede calcular desde sueldo mensual
  if (sueldoMensual && horasMensuales) {
    const sueldoCalculadoPorHora = (sueldoMensual / horasMensuales).toFixed(2);
    resultadoHTML += `<p>💰 Salario real por hora (basado en sueldo mensual): <strong>$${sueldoCalculadoPorHora}</strong></p>`;
  }

  // Mostrar sueldo mensual estimado si se tiene valorHora
  if (valorHora && horasMensuales) {
    const sueldoEstimadoMensual = (valorHora * horasMensuales).toFixed(2);
    resultadoHTML += `<p>📆 Estimación de salario mensual según valor hora: <strong>$${sueldoEstimadoMensual}</strong></p>`;
  }

  // Mostrar sueldo semanal estimado si se tiene valorHora
  if (valorHora && horasSemanales) {
    const sueldoEstimadoSemanal = (valorHora * horasSemanales).toFixed(2);
    resultadoHTML += `<p>📅 Estimación de salario semanal según valor hora: <strong>$${sueldoEstimadoSemanal}</strong></p>`;
  }

  // Si no se puede hacer ningún cálculo
  if (resultadoHTML === "") {
    resultadoHTML = `<p style="color: #FF8C00;">⚠️ Faltan datos para realizar cálculos. Completá al menos dos campos.</p>`;
  }

  document.getElementById("resultado").innerHTML = resultadoHTML;
}
