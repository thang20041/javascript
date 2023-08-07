let a = 10 , b = 5, c = 20, d = 15;
function tinhtoan(){
    let a  = +document.getElementById ('A').value
    let b  = +document.getElementById ('B').value
    let c  = +document.getElementById ('C').value
    let d  = +document.getElementById ('D').value
    let e  = document.getElementById ('E').innerHTML = (a + b * c - d / 2);
    console.log (e);
    alert (e);
    document.write (e);
}