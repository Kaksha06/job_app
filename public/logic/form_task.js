let languages = ["Hindi", "English", "Gujarati"];
function addLang() {
  let lang = document.getElementById("add_lang").value;
  languages.push(lang);
  generateLang();
}

function generateLang() {
  let langbody = document.getElementById("addlangbody");
  langbody.innerHTML = "";
  for (let i = 0; i < languages.length; i++) {
    let newlangrow = document.createElement("tr");
    newlangrow.innerHTML = `<td class="lang_name">${languages[i]}</td>
                            <td><input type = "checkbox" name=${languages[i]} class="read"></td>
                            <td><input type = "checkbox" name=${languages[i]} class="write"></td>
                            <td><input type = "checkbox" name=${languages[i]} class="speak"></td>`;
    langbody.appendChild(newlangrow);
  }
}
generateLang();

// let technologies = ["Java", "Python", "MySql", "PHP"];
// function addTech() {
//   let tech = document.getElementById("add_tech").value;
//   technologies.push(tech);
//   generatetech();
// }
// function generatetech() {
//   let techbody = document.getElementById("addtechbody");
//   techbody.innerHTML = "";
//   for (let i = 0; i < technologies.length; i++) {
//     let newrow = document.createElement("tr");
//     newrow.innerHTML = `
//         <td class="tech_name">${technologies[i]}</td>
//         <td><input type="radio" name="${technologies[i]}" class="beginner"></td>
//         <td><input type="radio" name="${technologies[i]}" class="mediator"></td>
//         <td><input type="radio" name="${technologies[i]}" class="expert"></td>`;
//     techbody.appendChild(newrow);
//   }
// }
// generatetech();
// function removerow() {
//   console.log("hii");

//   const table = document
//     .getElementById("container")
//     .getElementsByTagName("tbody")[0];
//   if (table.rows.length > 1) {
//     const lastrow = table.rows[table.rows.length - 1];
//     table.removeChild(lastrow);
//   }
// }





 let techIndex = 0
        function addTech() {
            techIndex++

            let tbody = document.querySelector("#techtable tbody")
            let newrow = document.createElement("tr")

            newrow.innerHTML = `<td>
        <select name="technologies[${techIndex}][tech_id]" >
          <% techDetails.forEach(t=>{ %>
          <option value="<%= t.tech_id %>"><%= t.tech_name %></option>
                    <% })%>
        </select>
        </td>
        <td>
        <input type="radio" name="technologies[${techIndex}][beginner]" value="<%= t.tech_id %>">
        </td>

        <td>
        <input type="radio" name="technologies[${techIndex}][intermediate]" value="<%= t.tech_id %>">
        </td>

        <td>
        <input type="radio" name="technologies[${techIndex}][expert]" value="<%= t.tech_id %>">
        </td>`

         tbody.appendChild(newrow)
        }
function addrow() {
  // console.log("hii");

  const table = document
    .getElementById("container")
    .getElementsByTagName("tbody")[0];
  container.addEventListener("click", function (e) {
    e.preventDefault();
  });
  const newrow = table.insertRow(table.rows.length);

  newrow.innerHTML = `<td><input type="text" id="cname" /></td>
              <td><input type="text" id="des" /></td>
              <td><input type="date" id="fromdt" /></td>
              <td><input type="date" id="todt" /></td>
              <td><button type="button" onclick="removerow(this)">remove</button></td>`;
  table.appendChild(newrow);
}
function nextpage() {
  let form = document.getElementById("basicform");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
}
