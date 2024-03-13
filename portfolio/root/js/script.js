
function toggleDropdown(dropdownIcon, dropdownContent) {
    dropdownIcon.classList.toggle('rotate');
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
}



const dropdownIconOne = document.getElementById('dropdownIconOne');
const dropdownContentOne = document.getElementById('dropdownContentOne');
dropdownIconOne.addEventListener('click', function () {
    toggleDropdown(dropdownIconOne, dropdownContentOne);
});

const dropdownIconTwo = document.getElementById('dropdownIconTwo');
const dropdownContentTwo = document.getElementById('dropdownContentTwo');
dropdownIconTwo.addEventListener('click', function () {
    toggleDropdown(dropdownIconTwo, dropdownContentTwo);
});

const dropdownIconThree = document.getElementById('dropdownIconThree');
const dropdownContentThree = document.getElementById('dropdownContentThree');
dropdownIconThree.addEventListener('click', function () {
    toggleDropdown(dropdownIconThree, dropdownContentThree);
});

