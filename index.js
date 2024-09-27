function classificarHeroi(nome, xp) {
  switch (true) {
    case xp < 1000:
      return "Ferro";
    case xp <= 2000:
      return "Bronze";
    case xp <= 5000:
      return "Prata";
    case xp <= 7000:
      return "Ouro";
    case xp <= 8000:
      return "Platina";
    case xp <= 9000:
      return "Ascendente";
    case xp <= 10000:
      return "Imortal";
    default:
      return "Radiante";
  }
}

const nomeHeroi = prompt("Digite o nome do herói: ");
const xpHeroi = parseInt(prompt("Digite a quantidade de XP do herói: "));

const nivel = classificarHeroi(nomeHeroi, xpHeroi);
console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);
