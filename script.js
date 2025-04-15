// 🧠 Validación: chequea si el input es un número válido
function esNumero(valor) {
  return !isNaN(valor) && valor.trim() !== "";
}

// 💼 Función principal: Calcula los datos laborales
function calcularDatosLaborales() {
  const horasPorDia = document.getElementById("horasPorDia").value;
  const diasPorSemana = document.getElementById("diasPorSemana").value;
  const salarioMensual = document.getElementById("salarioMensual").value;
  const salarioHora = document.getElementById("salarioHora").value;

  let resultadoHTML = "";

  // 🧮 Parseo y validación
  const horasDia = esNumero(horasPorDia) ? parseFloat(horasPorDia) : null;
  const diasSemana = esNumero(diasPorSemana) ? parseFloat(diasPorSemana) : null;
  const sueldoMensual = esNumero(salarioMensual) ? parseFloat(salarioMensual) : null;
  const valorHora = esNumero(salarioHora) ? parseFloat(salarioHora) : null;

  const horasSemanales = (horasDia && diasSemana) ? horasDia * diasSemana : null;
  const horasMensuales = (horasSemanales) ? horasSemanales * 4.33 : null;

  // ⏱️ Mostrar horas trabajadas
  if (horasSemanales) {
    resultadoHTML += `<p>🕒 Horas semanales: <strong>${horasSemanales}</strong></p>`;
  }

  if (horasMensuales) {
    resultadoHTML += `<p>🗓️ Horas mensuales: <strong>${horasMensuales.toFixed(2)}</strong></p>`;
  }

  // 💸 Calcular salario por hora a partir del mensual
  if (sueldoMensual && horasMensuales) {
    const sueldoCalculadoPorHora = (sueldoMensual / horasMensuales).toFixed(2);
    resultadoHTML += `<p>💰 Salario real por hora (basado en sueldo mensual): <strong>$${sueldoCalculadoPorHora}</strong></p>`;
  }

  // 📆 Estimar salario mensual desde valor por hora
  if (valorHora && horasMensuales) {
    const sueldoEstimadoMensual = (valorHora * horasMensuales).toFixed(2);
    resultadoHTML += `<p>📆 Estimación de salario mensual según valor hora: <strong>$${sueldoEstimadoMensual}</strong></p>`;
  }

  // 📅 Estimar salario semanal desde valor por hora
  if (valorHora && horasSemanales) {
    const sueldoEstimadoSemanal = (valorHora * horasSemanales).toFixed(2);
    resultadoHTML += `<p>📅 Estimación de salario semanal según valor hora: <strong>$${sueldoEstimadoSemanal}</strong></p>`;
  }

  // ⚠️ Sin datos suficientes
  if (resultadoHTML === "") {
    resultadoHTML = `<p style="color: #FF8C00;">⚠️ Faltan datos para realizar cálculos. Completá al menos dos campos.</p>`;
  }

  // Mostrar resultados
  document.getElementById("resultado").innerHTML = resultadoHTML;
}

// ❓ FAQ tipo acordeón
document.addEventListener("DOMContentLoaded", function () {
  const preguntas = document.querySelectorAll(".faq-question");

  preguntas.forEach((pregunta) => {
    pregunta.addEventListener("click", function () {
      const item = this.parentElement;

      // Cierra otros items activos
      document.querySelectorAll(".faq-item.active").forEach((activo) => {
        if (activo !== item) {
          activo.classList.remove("active");
        }
      });

      // Alterna el actual
      item.classList.toggle("active");
    });
  });
});
