// User data array
const users = [
    { name: 'Olamphzy', imgSrc: './images/olamphzy.jpg' },
    { name: 'Rasaq', imgSrc: './images/Rasaq.jpg' },
    { name: 'Eesha', imgSrc: './images/Eesha.jpg' },
    { name: 'Iffe', imgSrc: './images/Iffe.jpg' },
    { name: 'Ayo', imgSrc: './images/Ay.jpg' },
    { name: 'Akorede', imgSrc: './images/Ak.jpg' }
  ];
  
  // Render the user list
  function renderUsers(userArray) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';  //  This clears the current list
    userArray.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';
      userCard.innerHTML = `
        <img src="${user.imgSrc}" alt="${user.name}'s profile picture">
        <p>${user.name}</p>
      `;
      userList.appendChild(userCard);
    });
  }
  
  // Shuffle the user list
  function shuffleUsers() {
    const shuffledUsers = [...users].sort(() => 0.5 - Math.random());
    renderUsers(shuffledUsers);
  
    // Applying animation to user cards
    document.querySelectorAll('.user-card').forEach(card => {
      card.style.transform = 'scale(1.1)';
      setTimeout(() => card.style.transform = 'scale(1)', 300);
    });
  }
  
  renderUsers(users);
  
  // Event listener for shuffle button
  document.getElementById('shuffle-button').addEventListener('click', shuffleUsers);
  