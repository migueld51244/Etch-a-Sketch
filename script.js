let container = document.querySelector(".container");

// This creates 16 rows
for(let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);


  // This creates 16 squares inside each row
  for(let j = 0; j < 16; j++) {
    let square = document.createElement('div');
    square.className = 'square';
    row.appendChild(square);
  }
}