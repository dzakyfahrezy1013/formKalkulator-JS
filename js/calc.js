function tambah() {
	var angka1 = document.getElementById("angka1").value;
	var angka2 = document.getElementById("angka2").value;

	if (isNaN(angka1) || isNaN(angka2)) {
		alert("Maaf yang Anda Input bukan Angka");
	} else {
		var hasil = parseFloat(angka1) + parseFloat(angka2);
		document.getElementById("hasil").value = hasil;
	}
}

function kurang() {
	var angka1 = document.getElementById("angka1").value;
	var angka2 = document.getElementById("angka2").value;

	if (isNaN(angka1) || isNaN(angka2)) {
		alert("Maaf yang Anda Input bukan Angka");
	} else {
		var hasil = parseFloat(angka1) - parseFloat(angka2);
		document.getElementById("hasil").value = hasil;
	}
}

function kali() {
	var angka1 = document.getElementById("angka1").value;
	var angka2 = document.getElementById("angka2").value;

	if (isNaN(angka1) || isNaN(angka2)) {
		alert("Maaf yang Anda Input bukan Angka");
	} else {
		var hasil = parseFloat(angka1) * parseFloat(angka2);
		document.getElementById("hasil").value = hasil;
	}
}

function bagi() {
	var angka1 = document.getElementById("angka1").value;
	var angka2 = document.getElementById("angka2").value;

	if (isNaN(angka1) || isNaN(angka2)) {
		alert("Maaf yang Anda Input bukan Angka");
	} else if (angka2 == 0) {
		alert("Angka 2 tidak boleh nol");
	} else {
		var hasil = parseFloat(angka1) / parseFloat(angka2);
		document.getElementById("hasil").value = hasil;
	}
}

function pangkat() {
	var angka1 = document.getElementById("angka1").value;
	var angka2 = document.getElementById("angka2").value;

	if (isNaN(angka1) || isNaN(angka2)) {
		alert("Maaf yang Anda Input bukan Angka");
	} else {
		var hasil = Math.pow(parseFloat(angka1), parseFloat(angka2));
		document.getElementById("hasil").value = hasil;
	}
}
