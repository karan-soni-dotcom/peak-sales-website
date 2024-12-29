const serviceContent = {
    salesSupport: {
        title: "Sales Team Support",
        content: `
        <h2>Sales Team Support</h2>
        <div class="content-icon">
          <i class="fas fa-user-tie"></i>
        </div>
        <h3>Transform Your Sales Organization</h3>
        <p>Enhance your team's performance with:</p>
        <ul>
          <li>Optimized team structures</li>
          <li>Performance tracking</li>
          <li>Leadership development</li>
          <li>Resource allocation</li>
        </ul>
        <p>We tailor solutions to achieve measurable results.</p>
      `
    },
    leadClosing: {
        title: "Lead Closing",
        content: `
        <h2>Lead Closing</h2>
        <div class="content-icon">
          <i class="fas fa-handshake"></i>
        </div>
        <h3>Maximize Conversions</h3>
        <p>Convert prospects with:</p>
        <ul>
          <li>Negotiation techniques</li>
          <li>Prospect qualification</li>
          <li>Objection handling</li>
          <li>Deal acceleration</li>
        </ul>
        <p>Our experts simplify the closing process.</p>
      `
    },
    trainingPrograms: {
        title: "Training Programs",
        content: `
        <h2>Training Programs</h2>
        <div class="content-icon">
          <i class="fas fa-chalkboard-teacher"></i>
        </div>
        <h3>Elevate Team Skills</h3>
        <p>Empower your team with training in:</p>
        <ul>
          <li>Modern selling</li>
          <li>Customer psychology</li>
          <li>Digital tools</li>
          <li>Industry strategies</li>
        </ul>
        <p>Tailored programs for your team's growth.</p>
      `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const contentWrapper = document.querySelector('.content-wrapper');
    const defaultContent = document.getElementById('defaultContent');
    let activeCard = null;

    // Create and append content panels dynamically
    Object.entries(serviceContent).forEach(([key, data]) => {
        const contentPanel = document.createElement('div');
        contentPanel.className = 'panel-content';
        contentPanel.dataset.content = key;
        contentPanel.innerHTML = data.content;
        contentWrapper.appendChild(contentPanel);
    });

    const updateContentPanel = (serviceKey) => {
        document.querySelectorAll('.panel-content').forEach(panel => panel.classList.remove('active'));
        const targetPanel = document.querySelector(`[data-content="${serviceKey}"]`);
        if (targetPanel) targetPanel.classList.add('active');
        if (defaultContent) defaultContent.style.display = 'none';
    };

    const activateCard = (card) => {
        if (activeCard) activeCard.classList.remove('active');
        card.classList.add('active');
        activeCard = card;
        updateContentPanel(card.dataset.service);
    };

    serviceCards.forEach(card => {
        card.addEventListener('click', () => activateCard(card));
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                activateCard(card);
            }
        });
    });

    const firstCard = serviceCards[0];
    if (firstCard) activateCard(firstCard);
});

//Easter Egg - Dino
console.log(`%c
               __
              / _)
     _.----._/ /
    /         /
 __/ (  | (  |
/__.-'|_|--|_|  
exit console 🦖 and Type "dino" `, 'color: white; font-family: consolas; font-size: 14px;');


document.addEventListener('DOMContentLoaded', function () {
    const easterEggContainer = document.getElementById('easter-egg-container');

    // Create the close button dynamically
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.id = 'close-easter-egg';
    closeButton.textContent = ''; // Remove visible close symbol
    closeButton.setAttribute('aria-label', 'Close'); // Accessible for screen readers


    // Exact same style as the removed HTML button
    closeButton.style.position = 'fixed';
    closeButton.style.bottom = '20px';
    closeButton.style.left = '50%';
    closeButton.style.transform = 'translateX(-50%)';
    closeButton.style.backgroundColor = '#f00';
    closeButton.style.color = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.padding = '10px 20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '10000';

    // Append the close button to the container
    easterEggContainer.appendChild(closeButton);

    // Function to hide the Easter egg container
    function hideEasterEgg() {
        easterEggContainer.style.display = 'none';
        const iframe = easterEggContainer.querySelector('iframe');
        iframe.blur();
        iframe.src = iframe.src; // Reset iframe state
    }

    // Event listener for the close button
    closeButton.addEventListener('click', hideEasterEgg);

    // Event listener for Escape key to close the iframe
    document.addEventListener('keydown', function (event) {
        if (event.code === "Escape" && easterEggContainer.style.display === 'flex') {
            hideEasterEgg();
        }
    });

    // 'dino' key sequence to show the Easter egg
    let typedKeys = '';
    document.addEventListener("keydown", function (event) {
        typedKeys += event.key.toLowerCase();

        if (typedKeys === "dino") {
            easterEggContainer.style.display = 'flex';
            const iframe = easterEggContainer.querySelector('iframe');
            iframe.focus();
            typedKeys = ''; // Reset after triggering
        } else if (!"dino".startsWith(typedKeys)) {
            typedKeys = ''; // Reset if sequence doesn't match
        }
    });
});