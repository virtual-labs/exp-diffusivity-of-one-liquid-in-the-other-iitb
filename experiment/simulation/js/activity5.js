var act5_table;
var act5_table_headings = [];
function activity5() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    load_act5_table();
    pp.showtitle("To determine the diffusivity of one liquid in the other", 3);
    let activity5_formulae = `
        <p>Inside Diameter fo beaker D(cm) = 14</p>

        <p>Outside Radius of porous cell r2(cm) = 3.54</p>

        <p>Inside Radius of porous cell r1(cm) = 2.861</p>

        <p>N = total mass transferred (C1 - C2)</p>

        <p>Volume of water (V) = </p>

        <p>Height of Liquid (cm) = 12.62</p>



        <p>&Delta;C<sub>m</sub> = [(C1 - (C2 - C3))/ ln(C1 / (C1 - C3))]</p>

        <p>D<sub>L</sub> = (N x V x ln(r1/r2)) / 2 x &pi; x &Theta; h x &Delta;C<sub>m</sub></p>

    `;
    show_panel(3);
    pp.showdescription(activity5_formulae, 3);
}
function load_act5_table() {
    act5_table_headings = ["Sr No.", "Time &Theta; (hr)", "C<sub>1</sub>(N)", "C<sub>2</sub>(N)", "C<sub>3</sub>(N)", "&Delta; C<sub>m</sub>", "D<sub>L</sub> x 10<sup>9</sup> (m<sup>2</sup>/sec)", "check"];
    let verify_row = [["1", "25", "1", "0.73", "0.03", `<input type="text" id="inp-1">`, `<input type="text"  id="inp-2">`, `<input type="submit" class="btn btn-primary" onclick="verify_act5();">`]];
    act5_table = new Table(act5_table_headings, verify_row);
    pp.addtoleftpannel(act5_table.template);
    act5_table.draw();
}
function verify_act5() {
    let val1 = document.getElementById(`inp-1`);
    let val2 = document.getElementById(`inp-2`);
    if (!verify_values(parseFloat(val1.value), parseFloat(act5_table_data[0][5]))) {
        alert(`please check ${act5_table_headings[5]}`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), parseFloat(act5_table_data[0][6]))) {
        alert(`please check ${act5_table_headings[6]}`);
        return;
    }
    alert("all values are right!!");
    act5_table_headings.pop();
    act5_table = new Table(act5_table_headings, act5_table_data);
    act5_table.draw();
}
activity5();
//# sourceMappingURL=activity5.js.map