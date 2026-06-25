// Importando a dependência do componente (como uma biblioteca profissional)
import { ProfileCard } from './ProfileCard.js';

// Selecionando o componente e escutando o Custom Event
const meuCard = document.querySelector('profile-card');

meuCard.addEventListener('seguir-clicado', (event) => {
    const dados = event.detail;
    console.log(`[API] Registrando que você seguiu o usuário: ${dados.usuario}`);
    alert(`Você começou a seguir ${dados.usuario}!`);
});
