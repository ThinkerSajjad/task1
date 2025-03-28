function toggleCheckbox(id) {
    const checkbox = document.querySelector(`#${id}`);
    const customCheckbox = checkbox.closest('.page-item').querySelector('.custom-checkbox');
    
    checkbox.checked = !checkbox.checked;
    customCheckbox.classList.toggle('checked');
    
    updateAllPagesCheckbox();
}

function toggleAll() {
    const allPagesCheckbox = document.querySelector('#all-pages');
    const allCustomCheckbox = allPagesCheckbox.closest('.page-item').querySelector('.custom-checkbox');
    
    allPagesCheckbox.checked = !allPagesCheckbox.checked;
    allCustomCheckbox.classList.toggle('checked');
    
    const checkboxes = document.querySelectorAll('.checkbox-input:not(#all-pages)');
    const customCheckboxes = document.querySelectorAll('.page-item .custom-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = allPagesCheckbox.checked;
    });
    
    customCheckboxes.forEach(customCheckbox => {
        customCheckbox.classList.toggle('checked', allPagesCheckbox.checked);
    });
}

function updateAllPagesCheckbox() {
    const allPagesCheckbox = document.querySelector('#all-pages');
    const allCustomCheckbox = allPagesCheckbox.closest('.page-item').querySelector('.custom-checkbox');
    const checkboxes = document.querySelectorAll('.checkbox-input:not(#all-pages)');
    
    const allChecked = checkboxes.length > 0 && Array.from(checkboxes).every(checkbox => checkbox.checked);
    
    allPagesCheckbox.checked = allChecked;
    allCustomCheckbox.classList.toggle('checked', allChecked);
}
