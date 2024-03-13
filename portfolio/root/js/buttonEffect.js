function toggleDropdown(dropdownIcon, dropdownContent) {
    dropdownIcon.classList.toggle('rotate');
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
}
function toggleDropdown(dropdownIcon, dropdownContent) {
    dropdownIcon.classList.toggle('rotate');
    if (dropdownContent.style.maxHeight === '0px' || dropdownContent.style.maxHeight === '') {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
    } else {
        dropdownContent.style.maxHeight = '0px';
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
const dropdownIconFour = document.getElementById('dropdownIconFour');
const dropdownContentFour = document.getElementById('dropdownContentFour');
dropdownIconFour.addEventListener('click', function () {
    toggleDropdown(dropdownIconFour, dropdownContentFour);
});
const dropdownIconFive = document.getElementById('dropdownIconFive');
const dropdownContentFive = document.getElementById('dropdownContentFive');
dropdownIconFive.addEventListener('click', function () {
    toggleDropdown(dropdownIconFive, dropdownContentFive);
});
const dropdownIconSix = document.getElementById('dropdownIconSix');
const dropdownContentSix = document.getElementById('dropdownContentSix');
dropdownIconSix.addEventListener('click', function () {
    toggleDropdown(dropdownIconSix, dropdownContentSix);
});