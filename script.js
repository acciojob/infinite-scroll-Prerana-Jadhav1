const infiList = document.getElementById('infi-list');
let itemCount = 0;

function addItems(count) {
    for (let i = 0; i < count; i++) {
        itemCount++;
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${itemCount}`;
        infiList.appendChild(listItem);
    }
}

addItems(10);

infiList.addEventListener('scroll', () => {
    // Add 1px tolerance to trigger slightly before exact bottom
    if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight - 1) {
        addItems(2);
    }
});