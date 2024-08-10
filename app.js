function Gst() {
    const showGST = document.getElementById("gstHolder");
    const salary = document.getElementById("inputSalary").value;

    const div = salary / 100;
    const gst = div * 5

    showGST.innerText = gst
}