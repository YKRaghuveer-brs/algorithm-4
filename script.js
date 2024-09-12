// Node definition
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Function to construct tree from level-order input
function constructTreeFromArray(arr) {
    if (arr.length === 0 || arr[0] === 'null') return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const node = queue.shift();

        if (arr[i] !== 'null') {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== 'null') {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

// Function to find the height of the tree
function findHeightRecursive(root) {
    if (root === null) return 0;
    const leftHeight = findHeightRecursive(root.left);
    const rightHeight = findHeightRecursive(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

// Event listener for the button click
document.getElementById('calculateHeight').addEventListener('click', () => {
    const treeInput = document.getElementById('treeStructure').value;
    const nodes = treeInput.split(',').map(node => node.trim());

    const root = constructTreeFromArray(nodes);
    const height = findHeightRecursive(root);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Height of the Decision Tree: ${height}`;
});
