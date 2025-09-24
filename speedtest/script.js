async function runSpeedTest( ) {
    document.getElementById("ping").innerText =
    "Mengukur Ping...";
     document.getElementById("download").innerText =
    "Mengukur download...";
     document.getElementById("upload").innerText =
    "Mengukur upload...";
//Test Ping
    let start = performance.now( );
    await
    fetch("https://www.google.com/images/phd/px.gif?cache=" + Math.random( ));
    let end = performance.now( );
    let ping = (end - start).toFixed(2);
    document.getElementById("ping").innerText =
    "Ping: " + ping + " ms";
    //Test Download
    let downloadStart = performance.now( );
    let response = await fetch("https://speed.hetzner.de/1MB.bin?cache=" + Math.random());
    let blob = await response.blob( );
    let downloadEnd = performance.now( );
    let duration = (downloadEnd-downloadStart )/1000;//perdetik
    let bitsLoaded = blob.size * 8; //ini hitungan bit ya ges
    let speedMbps = (bitsLoaded / duration / 1024 / 1024).toFixed(2);
    document.getElementById("download").innerText = "Download: " + speedMbps + " Mbps";
    //Test Upload ni ges ..
let data = new Blob([new ArrayBuffer(2 * 1024 * 1024)]); //ini dari dummy ges
let uploadStart = performance.now( ); await fetch("https://httpbin.org/post", {method:"POST", body: data});
let uploadEnd = performance.now ( );
let uploadDuration = (uploadEnd-uploadStart) / 1000;
let uploadSize = data.size * 8;
let uploadSpeed = (uploadSize / uploadDuration / 1024 / 1024).toFixed(2);
document.getElementById("upload").innerText = "Upload: " + uploadSpeed + " Mbps";
}
//buat atipasi ges
function withTimeout(promise, ms){
    let timeout = new Promise((_, reject)=> 
        setTimeout(( ) => reject (new Eror("Timeout")), ms));
return Promise.race([promise,timeout]);
}
async function runSpeedTest( ) {
    document.getElementById("status").innerText = "Sedang mengetes kecepatannya ni cuyy...";
    try {
        let start = performance.now ( );//tes download file kecil bray
        let response = await withTimeout(fetch("https://speed.hetzer.de/1MB.bin?cache=" + Math.random ( )), 10000);
        let blob = await response.blob( );
        let end = performance.now ( );
        let durasi = ( end - start ) / 1000; //ini perdetik geng 
        let bits = blob.size * 8;
    let speedMbps = (bits / durasi / 1024 / 1024).toFixed(2);
document.getElementById("status").innerText = "Download Speed: " + speedMbps + " Mbps";   }
catch (err) {
    document.getElementById("status").innerHTML= "<span class = 'error'> Speedtest Gagal (Timeout)</span>";
}
    
}