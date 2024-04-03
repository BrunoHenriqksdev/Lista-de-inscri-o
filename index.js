
let NewUsers = [
  {
    nome: "Ana Silva",
    email: "ana.silva@example.com",
    dataInscricao: new Date(2024, 3, 2, 10),
    dataCheckIn: new Date(2024, 3, 23, 8)
  },
  {
    nome: "João Santos",
    email: "joao.santos@example.com",
    dataInscricao: new Date(2024, 3, 5, 14),
    dataCheckIn: new Date(2024, 3, 25, 9)
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    dataInscricao: new Date(2024, 3, 8, 12),
    dataCheckIn: new Date(2024, 3, 27, 10)
  },
  {
    nome: "Pedro Costa",
    email: "pedro.costa@example.com",
    dataInscricao: new Date(2024, 3, 11, 9),
    dataCheckIn: new Date(2024, 3, 29, 11)
  },
  {
    nome: "Mariana Pereira",
    email: "mariana.pereira@example.com",
    dataInscricao: new Date(2024, 3, 14, 16),
    dataCheckIn: new Date(2024, 4, 1, 12)
  },
  {
    nome: "Carlos Santos",
    email: "carlos.santos@example.com",
    dataInscricao: new Date(2024, 3, 17, 11),
    dataCheckIn: new Date(2024, 4, 3, 14)
  },
  {
    nome: "Sofia Fernandes",
    email: "sofia.fernandes@example.com",
    dataInscricao: new Date(2024, 3, 20, 13),
    dataCheckIn: new Date(2024, 4, 5, 15)
  },
  {
    nome: "Ricardo Martins",
    email: "ricardo.martins@example.com",
    dataInscricao: new Date(2024, 3, 23, 8),
    dataCheckIn: new Date(2024, 4, 7, 16)
  },
  {
    nome: "Andreia Sousa",
    email: "andreia.sousa@example.com",
    dataInscricao: new Date(2024, 3, 26, 15),
    dataCheckIn: new Date(2024, 4, 9, 17)
  },
  {
    nome: "Daniel Oliveira",
    email: "daniel.oliveira@example.com",
    dataInscricao: new Date(2024, 3, 29, 10),
    dataCheckIn: new Date(2024, 4, 11, 18)
  }

];

const CreateNewUser = (NewUser) => {
  const dataInscricao = dayjs(NewUser.dataInscricao).format('YYYY-MM-DD HH:mm:ss');
  let dataCheckIn = '';

  if (NewUser.dataCheckIn == null) {
    dataCheckIn = `
      <button 
        data-email="${NewUser.email}"  
        onclick="FazerCheckIn(event)" 
      >
        Confirmar Check-in
      </button>`;
  } else {
    dataCheckIn = dayjs(NewUser.dataCheckIn).format('YYYY-MM-DD HH:mm:ss');
  }

  return `
    <tr>
      <td>
        <strong>${NewUser.nome}</strong><br>
        <small>${NewUser.email}</small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>`;
};

const updateList = (NewUsers) => {
  let output = "";

  for (let NewUser of NewUsers) {
    output += CreateNewUser(NewUser);
  }
  document.querySelector('tbody').innerHTML = output;
};

updateList(NewUsers);

const addNewUser = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const participant = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  };

  NewUsers = [participant, ...NewUsers];
  updateList(NewUsers);
};

document.getElementById('addUserForm').addEventListener('submit', addNewUser);

const FazerCheckIn = (event) => {
  const userEmail = event.target.dataset.email;

  const NewUser = NewUsers.find((p) => {
    return p.email == userEmail;
  });

  NewUser.dataCheckIn = new Date();
  updateList(NewUsers);
};

