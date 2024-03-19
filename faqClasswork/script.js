const faqSection = document.createElement('section');
faqSection.setAttribute('class', 'faqSection');

const firstContent = document.createElement('div');
firstContent.setAttribute('class', 'content');

const firstImage = document.createElement('img');
firstImage.setAttribute('src', './Assets/Bored Ape King.jpg');

const firstText = document.createElement('p');
firstText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iure eum enim hic vero, consequatur quo tempora voluptatum. Cupiditate quidem iusto consequuntur omnis rerum, tempora dolore? Laudantium qui mollitia dolorem reprehenderit totam, fuga cum. Asperiores ullam quisquam voluptate quis eaque debitis vel, autem dicta nam laborum repellat! Cumque deleniti iure tenetur ullam veniam maxime, nisi excepturi dolor, adipisci doloremque molestiae nihil non consectetur expedita! Nihil velit tenetur.';

const secondContent = document.createElement('div');
secondContent.setAttribute('class', 'content');

const secondImage = document.createElement('img');
secondImage.setAttribute('src', './Assets/Bored Ape Butler.jpg');

const secondText = document.createElement('p');
secondText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iure eum enim hic vero, consequatur quo tempora voluptatum. Cupiditate quidem iusto consequuntur omnis rerum, tempora dolore? Laudantium qui mollitia dolorem reprehenderit totam, fuga cum. Asperiores ullam quisquam voluptate quis eaque debitis vel, autem dicta nam laborum repellat! Cumque deleniti iure tenetur ullam veniam maxime, nisi excepturi dolor, adipisci doloremque molestiae nihil non consectetur expedita! Nihil velit tenetur..';

const thirdContent = document.createElement('div');
thirdContent.setAttribute('class', 'content');

const thirdImage = document.createElement('img');
thirdImage.setAttribute('src', './Assets/Bored Ape Baller.jpg');

const thirdText = document.createElement('p');
thirdText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iure eum enim hic vero, consequatur quo tempora voluptatum. Cupiditate quidem iusto consequuntur omnis rerum, tempora dolore? Laudantium qui mollitia dolorem reprehenderit totam, fuga cum. Asperiores ullam quisquam voluptate quis eaque debitis vel, autem dicta nam laborum repellat! Cumque deleniti iure tenetur ullam veniam maxime, nisi excepturi dolor, adipisci doloremque molestiae nihil non consectetur expedita! Nihil velit tenetur.';

thirdContent.appendChild(thirdImage);
thirdContent.appendChild(thirdText);

secondContent.appendChild(secondImage);
secondContent.appendChild(secondText);

firstContent.appendChild(firstImage);
firstContent.appendChild(firstText);

faqSection.append(firstContent);
faqSection.append(secondContent);
faqSection.append(thirdContent);

document.body.append(faqSection);
