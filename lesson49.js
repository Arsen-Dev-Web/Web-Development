
const body = document.body;
body.style.margin = '0';
body.style.fontFamily = 'Arial, sans-serif';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.minHeight = '100vh';
body.style.position = 'relative';

const header = document.createElement('header');
header.style.backgroundColor = '#4CAF50';
header.style.color = 'white';
header.style.padding = '20px';
header.style.textAlign = 'center';
header.innerText = 'My Responsive Website';
body.appendChild(header);

const nav = document.createElement('nav');
nav.style.backgroundColor = '#f2f2f2';
nav.style.padding = '10px';
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'center';
body.appendChild(nav);


const menuLinks = document.createElement('div');
menuLinks.style.display = 'flex';
menuLinks.style.gap = '15px';
const menuItems = ['Home', 'About', 'Services', 'Contact'];
menuItems.forEach(item => {
    const a = document.createElement('a');
    a.href = '#';
    a.innerText = item;
    a.style.textDecoration = 'none';
    a.style.color = '#333';
    a.style.fontWeight = 'bold';
    menuLinks.appendChild(a);
});
nav.appendChild(menuLinks);


const hamburger = document.createElement('button');
hamburger.innerText = '☰';
hamburger.style.fontSize = '24px';
hamburger.style.display = 'none';
hamburger.style.background = 'none';
hamburger.style.border = 'none';
hamburger.style.cursor = 'pointer';
nav.appendChild(hamburger);


const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
overlay.style.zIndex = '900';
overlay.style.display = 'none';
body.appendChild(overlay);


const mainContainer = document.createElement('div');
mainContainer.style.display = 'flex';
mainContainer.style.flex = '1';
mainContainer.style.transition = 'all 0.3s';
body.appendChild(mainContainer);


const sidebar = document.createElement('aside');
sidebar.style.backgroundColor = '#ddd';
sidebar.style.padding = '20px';
sidebar.style.width = '200px';
sidebar.style.transition = 'all 0.3s';
sidebar.innerHTML = `
    <h3>Sidebar</h3>
    <ul style="list-style:none; padding:0;">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
    </ul>
`;
mainContainer.appendChild(sidebar);


const content = document.createElement('main');
content.style.flex = '1';
content.style.padding = '20px';
content.innerHTML = `
    <h2>Welcome!</h2>
    <p>This is the main content area.</p>
`;
mainContainer.appendChild(content);


const footer = document.createElement('footer');
footer.style.backgroundColor = '#333';
footer.style.color = 'white';
footer.style.padding = '20px';
footer.style.textAlign = 'center';
footer.innerText = '© 2025 My Responsive Website';
body.appendChild(footer);


function handleResize() {
    if (window.innerWidth <= 768) {
        sidebar.style.position = 'fixed';
        sidebar.style.left = '-220px';
        sidebar.style.top = '0';
        sidebar.style.height = '100%';
        sidebar.style.zIndex = '1000';
        sidebar.style.boxShadow = '2px 0 5px rgba(0,0,0,0.3)';
        hamburger.style.display = 'block';
    } else {
        sidebar.style.position = 'relative';
        sidebar.style.left = '0';
        sidebar.style.height = 'auto';
        sidebar.style.boxShadow = 'none';
        hamburger.style.display = 'none';
        overlay.style.display = 'none';
        mainContainer.style.marginLeft = '0';
    }
}
window.addEventListener('resize', handleResize);
handleResize();


let sidebarVisible = false;
function openSidebar() {
    sidebar.style.left = '0';
    overlay.style.display = 'block';
    sidebarVisible = true;
}
function closeSidebar() {
    sidebar.style.left = '-220px';
    overlay.style.display = 'none';
    sidebarVisible = false;
}

hamburger.addEventListener('click', () => {
    sidebarVisible ? closeSidebar() : openSidebar();
});

overlay.addEventListener('click', () => {
    closeSidebar();
});
