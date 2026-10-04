document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Toggle Navigation
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // 2. Extra Feature: Real-Time Shortcut Search Filter
    const searchInput = document.getElementById('shortcutSearch');
    const shortcutRows = document.querySelectorAll('.shortcut-item');

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const query = e.target.value.toLowerCase();
            shortcutRows.forEach(row => {
                const text = row.innerText.toLowerCase();
                if (text.includes(query)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // 3. Extra Feature: Modal Detail Overlay
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const closeModal = document.querySelector('.close-modal');

    if (shortcutRows.length > 0 && modal) {
        shortcutRows.forEach(row => {
            row.addEventListener('click', () => {
                const title = row.getAttribute('data-title');
                const desc = row.getAttribute('data-desc');
                if (title && desc) {
                    modalTitle.textContent = title;
                    modalDesc.textContent = desc;
                    modal.style.display = 'flex';
                }
            });
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});