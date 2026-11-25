const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const resultado = document.querySelector("#resultado");

const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const multiplicar = document.querySelector("#multiplicar");
const dividir = document.querySelector("#dividir");

const mostrar = (conta) => {
  resultado.textContent = `Resultado: ${conta}`;
};

somar.addEventListener("click", () => {
  mostrar(Number(n1.value) + Number(n2.value));
});

subtrair.addEventListener("click", () => {
  mostrar(Number(n1.value) - Number(n2.value));
});

multiplicar.addEventListener("click", () => {
  mostrar(Number(n1.value) * Number(n2.value));
});

dividir.addEventListener("click", () => {
  if (Number(n2.value) === 0) {
    resultado.textContent = "Não dá para dividir por zero";
  } else {
    mostrar(Number(n1.value) / Number(n2.value));
  }
});