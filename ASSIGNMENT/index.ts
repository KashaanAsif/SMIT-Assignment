interface ApiData {
  name: string;
  email: string;
  phone: string;
}

async function fetchData(): Promise<ApiData[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

function createTable(data: ApiData[]): void {
  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  const nameHeader = document.createElement("th");
  const emailHeader = document.createElement("th");
  const phoneHeader = document.createElement("th");
  nameHeader.textContent = "Name";
  emailHeader.textContent = "Email";
  phoneHeader.textContent = "Phone";
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(emailHeader);
  headerRow.appendChild(phoneHeader);
  table.appendChild(headerRow);

  data.forEach((item) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const phoneCell = document.createElement("td");
    nameCell.textContent = item.name;
    emailCell.textContent = item.email;
    phoneCell.textContent = item.phone;
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);
    table.appendChild(row);
  });

  const container = document.getElementById("table-container");
  container?.appendChild(table);
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await fetchData();
    createTable(data);
  } catch (error) {
    console.error(error);
  }
});
