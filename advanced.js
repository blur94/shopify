const data = [
  { id: 1, parent: 0 },
  { id: 2, parent: 0 },
  { id: 3, parent: 1 },
  { id: 4, parent: 1 },
  { id: 5, parent: 1 },
  { id: 6, parent: 2 },
  { id: 7, parent: 2 },
  { id: 8, parent: 2 },
  { id: 9, parent: 3 },
  { id: 10, parent: 3 },
  { id: 11, parent: 3 },
  { id: 12, parent: 3 },
  { id: 13, parent: 3 },
  { id: 14, parent: 3 },
  { id: 15, parent: 3 },
];

const restructureArray = (data) => {
  const dataMap = {};
  const root = [];

  data.forEach((item) => {
    dataMap[item.id] = {
      ...item,
      children: [],
    };
  });

  data.forEach((item) => {
    const parent = dataMap[item.parent];
    if (parent) return parent.children.push(dataMap[item.id]);
    root.push(dataMap[item.id]);
  });

  return root;
};

const result = restructureArray(data);
console.log(result);

// JavaScript code​​​​​​‌​‌​​‌‌‌‌‌‌‌​​​‌​‌‌‌​‌‌‌​ below
// Change these values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = true
const showHints = false

const comments = [
  {
    comment_ID: 1,
    comment_text: "Top-level comment 1",
    comment_parent: 0,
  },
  {
    comment_ID: 2,
    comment_text: "Top-level comment 2",
    comment_parent: 0,
  },
  {
    comment_ID: 3,
    comment_text: "Reply to Top-level comment 1, Child comment 1",
    comment_parent: 1,
  },
  {
    comment_ID: 4,
    comment_text: "Reply to Top-level comment 1, Child comment 2",
    comment_parent: 1,
  },
  {
    comment_ID: 5,
    comment_text: "Reply to Top-level comment 1, Child comment 3",
    comment_parent: 1,
  },
  {
    comment_ID: 6,
    comment_text: "Reply to Top-level comment 2, Child comment 1",
    comment_parent: 2,
  },
  {
    comment_ID: 7,
    comment_text: "Reply to Top-level comment 2, Child comment 2",
    comment_parent: 2,
  },
  {
    comment_ID: 8,
    comment_text: "Reply to Top-level comment 2, Child comment 3",
    comment_parent: 2,
  },
  {
    comment_ID: 9,
    comment_text: "Reply to Reply to Top-level comment 1, Grandchild comment 1",
    comment_parent: 3,
  },
  {
    comment_ID: 10,
    comment_text: "Reply to Reply to Top-level comment 1, Grandchild comment 2",
    comment_parent: 3,
  },
  {
    comment_ID: 11,
    comment_text: "Reply to Reply to Top-level comment 1, Grandchild comment 3",
    comment_parent: 3,
  },
  {
    comment_ID: 12,
    comment_text: "Reply to Reply to Top-level comment 1, Grandchild comment 4",
    comment_parent: 3,
  },
  {
    comment_ID: 13,
    comment_text: "Reply to Reply to Top-level comment 1, Grandchild comment 5",
    comment_parent: 3,
  },
  {
    comment_ID: 14,
    comment_text: "Reply to Reply to Top-level comment 1, Grandchild comment 6",
    comment_parent: 3,
  },
  {
    comment_ID: 15,
    comment_text: "Reply to Reply to Top-level comment 1, Grandchild comment 7",
    comment_parent: 3,
  },
];

// Restructure the comments array into a nested object
function restructureComments(comments) {
  const commentsMap = {};
  const rootComments = [];

  // Create a map of comments by their ID
  comments.forEach((comment) => {
    commentsMap[comment.comment_ID] = {
      ...comment,
      children: [],
    };
  });

  // Iterate through the comments again and add each one as a child
  // of its parent comment, if it has one. If it doesn't have a parent,
  // it's a root-level comment and should be added to the `rootComments` array.
  comments.forEach((comment) => {
    if (comment.comment_parent !== 0) {
      const parent = commentsMap[comment.comment_parent];
      if (parent) {
        parent.children.push(commentsMap[comment.comment_ID]);
      }
    } else {
      rootComments.push(commentsMap[comment.comment_ID]);
    }
  });

  return rootComments;
}

// Generate the nested list HTML
function generateNestedList(comments, document) {
  // Your code begins here.

  const ul = document.createElement("ul")

  comments.forEach((comment) => {
    const li = document.createElement("li")
    li.textContent = comment.comment_text
  if (comment.children.length > 0) {
    li.classList.add("has-submenu")
    const nestedUl = generateNestedList(comment.children, document)
    li.appendChild(nestedUl)
  }
  ul.appendChild(li)
  })
return ul
  // Your code ends here.
}
  
