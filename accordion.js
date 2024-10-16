const questionAndAnswer = [
    {
      id: 1,
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      opened: true
    },
    {
      id: 2,
      question: 'Is Frontend Mentor free?',
      answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      opened: false
    },
    {
      id: 3,
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      opened: false
    },
    {
      id: 4,
      question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      opened: false
    }
  ];
  
  function toggleOpen(index) {
    questionAndAnswer[index].opened = !questionAndAnswer[index].opened;
    accordionList(); // Re-render the accordion to reflect the new state
  }
  
  function accordionList() {
    const accordion = document.getElementById('accordion');
    accordion.innerHTML = ''; // Clear previous content
  
    questionAndAnswer.forEach((item, index) => {
      const accordionContent = document.createElement('div');
      accordionContent.classList.add('accordion-item');
      if (item.opened) {
        accordionContent.classList.add('open');
      }
  
      accordionContent.innerHTML = `
        <div class="accordion-item-header">
          <h3>${item.question}</h3>
          <button class="accordion-item-button">
            ${item.opened
              ? '<img src="./assets/images/icon-minus.svg" alt="minus icon">'
              : '<img src="./assets/images/icon-plus.svg" alt="plus icon">'
            }
          </button>
        </div>
      `;
  
      const content = document.createElement('p');
      content.classList.add('accordion-item-content');
      content.style.display = item.opened ? 'block' : 'none';
      content.textContent = item.answer;
  
      const accordionButton = accordionContent.querySelector('.accordion-item-button');
      accordionButton.addEventListener('click', () => toggleOpen(index));
  
      accordionContent.appendChild(content);
      accordion.appendChild(accordionContent);
    });
  }
  
  accordionList();
  