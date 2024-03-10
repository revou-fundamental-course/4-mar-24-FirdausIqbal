// buat fungsi untuk handle button submit
function handleFunction(){
    // tangkap nilai dari form menggunakan id
    let berat_badan = document.getElementById("bb").value;
    let tinggi_badan = document.getElementById("tb").value / 100; // input menggunakan cm akan di konfersi menjadi satuan meter
    let usia = document.getElementById("usia").value;
    
    // menangkap nilai dari elemen radio
    let genderRadio = document.getElementsByName("gender"); // ambil data dengan nama "gender" *saya memberi nama setiap elemen radio saya dengan "gender"
    let gender; // buat variabel gender kosong;
    for(let i = 0; i < genderRadio.length; i++){ // lakukan perulangan pada setiap data di genderRadio | karena saat getElementsByName data disimpan lebih dari satu dalam bentuk array
        if(genderRadio[i].checked){ // buat kondisi apabila element genderRadio pada index[i].checked maka akan dilanjutkan ke blok if 
            gender = genderRadio[i].value; // mengisi nilai gender dengan data genderRadio[i].value;
        }
    }
    if(!gender || !berat_badan || !tinggi_badan || usia < 18){ // saya membuat kondisi agar data dipastikan sudah sesuai dan terisi semua
        alert("Data yang dimasukkan belum sesuai")
    }else{
        // Blok perhitungan BMI
        const valueBMI = (berat_badan / (tinggi_badan*tinggi_badan)).toFixed(1); // toFixed(1) untuk membuat hasil perhitungan dibulatkan hanya 1 angka dibelakang koa ','
    
        // buat kondisi klasifikasi berat badan
        let paragraf;
        if(valueBMI < 18.5){
            paragraf = `Anda kekurangan berat badan untuk ${gender}`
        }else if(valueBMI >= 18.5 && valueBMI < 25.0){
            paragraf =  `Selamat Anda ${gender} dengan berat badan ideal !! `
        }else if(valueBMI >= 25.0 && valueBMI < 30.0){
            paragraf = `Anda masuk kategori ${gender} kelebihan berat badan!`
        }else{
            paragraf = `Bahaya ! Anda masuk kategori ${gender} Obesitas!`
        }
    
        document.getElementById("result").innerHTML = `
            <h1>${valueBMI}</h1>
            <p>${paragraf}</p<
        `;
    }
    
}
