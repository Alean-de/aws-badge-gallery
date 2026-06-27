document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.gallery-container');
    const searchInput = document.createElement('input');
    
    searchInput.type = 'text';
    searchInput.placeholder = 'Cari badge sertifikasi';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        margin: 0 auto 30px auto;
        display: block;
        padding: 10px 16px;
        border-radius: 8px;
        border: 1px solid #1e293b;
        background: #0f172a;
        color: #f1f5f9;
        font-size: 1rem;
    `;
    
    container.parentNode.insertBefore(searchInput, container);

    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.gallery-item');

        items.forEach(item => {
            const badgeName = item.querySelector('img').getAttribute('alt').toLowerCase();
            
            if (badgeName.includes(keyword)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});