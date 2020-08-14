import item from './item.js';
let items = [];
let hideCheckedItems = false;

function findById(id) {
    return items.find(item => item.id === id);
}

function addItem(name) {
    try {
        item.validateName(name);
        let newItem = item.create(name);
        this.items.push(newItem);
    } catch (error) {
        console.log(`Cannot add item: ${error.message}`);
    }
}

function findAndToggleChecked(id) {
    const foundItem = findById(id);
    foundItem.checked = !foundItem.checked;
}

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        const foundItem = findById(id);
        foundItem.name = newName;
    } catch (error) {
        console.log(`Cannot add item: ${error.message}`);
    }
}

function findAndDelete(id) {
    const deleteItem = findById(id);
    this.items.splice(deleteItem, 1);
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
}