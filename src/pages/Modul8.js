import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul8 = () => {
    const navigate = useNavigate();
    return (
        <div><Navbar />

    <button style={{
        position:"fixed",
        top:"150px",
        left:"0.1px",
        background:"linear-gradient(135deg, #007acc, #00bfff)",
        color:"white",
        border:"none",
        borderRadius:"50px",
        padding:"10px 20px",
        fontSize:"1rem",
        fontWeight:"bold",
        cursor:"pointer",
        boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)",
        transition:"all 0.3s ease-in-out",
        transform:"scale(1.05)",
        zIndex: 9999,
    }}
                onClick={() => navigate("/menubook")}
            > Back
    </button>
        <div className="container">
            <style>
                {`
                    .container {
                        background-color: linear-gradient(135deg, #e0f7fa, #fce4ec);
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background-color: #f0f8ff;
                        border-radius: 10px;
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                        max-width:1000px;
                        margin:20px auto;
                        display: block;
                        animation:fadein 0.6s ease-in-out;
                    }
                   
                    .card {
                        background: linear-gradient(135deg, #ffffff; #f9fbe7);
                        border-left:4px solid #007acc
                        border-radius: 8px;
                        margin-bottom: 20px;
                        padding: 20px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                        }
                    
                    .card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                        }

                    .card h2 {
                        color: #007acc;
                        font-size: 1.5rem;
                        border-left: 4px solid #007acc;
                        padding-left: 10px;
                        margin-bottom: 15px;
                        position: relative;
                        }

                    .card h2::after{
                        content: "";
                        position: absolute;
                        bottom: -5px;
                        left: 10px;
                        width: 50px;
                        height: 3px;
                        background-color: #007acc;
                        transition: width 0.3s ease;
                        }

                    .card h2:hover::after {
                        width: 100%;
                        }
                    
                    .card p {
                        color: #555;
                        line-height: 1.8;
                        }
                        
                    ul {
                        list-style-type: disc;
                        padding-left: 20px;
                    }

                    ul li {
                        margin-bottom: 10px;
                        color: #333;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 10px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    }
                    table th, table td {
                        border: 1px solid #ccc;
                        padding: 10px;
                        text-align: left;
                        background-color: #ffffff;
                        transition: background-color 0.3s ease;
                    }
                    table th {
                        background-color: #d4e8f9;
                        color: #005f99;
                    }

                    table tr:hover td{
                        background-color: #f1f9ff;
                    }

                    @keyframes fadeIn{
                        from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                        to{
                        opacity:1;
                        transform: translateY(0);
                        }
                    }
                    @keyframes slideIn{
                        from {
                        transform: translateX(-30px);
                        opacity: 0;
                        }
                        to{
                        transform: translateX(0);
                        opacity: 1;
                        }
                    }
                `}
            </style>
            <header>
                <h1>GELOMBANG BERJALAN & GELOMBANG STASIONER</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Gelombang berjalan dan gelombang stasioner adalah dua jenis gelombang yang memiliki sifat dan karaktere unik.
                    Gelombang berjalan merambat melalui medium, sedangkan gelombang stasioner terbentuk
                </p>
            </section>
            <section className="card">
                <strong>1. Gelombang Berjalan </strong>
                <p>Gelombang berjalan adalah gelombang yang amplitude dan fasenya sama di setiap titik 
                   yang dilalui gelombang. Suatu gelombang dimana setiap titik yang dilalui oleh 
                   gelombang tersebut bergetar harmonis dengan amplitudo yang sama besar. Amplitudo 
                   pada tali yang digetarkan terus menerus akan selalu tetap, oleh karenanya gelombang 
                   yang memiliki amplitudo yang tetap setiap saat disebut gelombang berjalan.</p>
                <strong>2. Persamaan simpangan </strong>
                <p>Seutas tali yang cukup panjang digetarkan sehingga pada tali terbentuk gelombang 
                   transversal berjalan. Gelombang merambat dari titik O sebagai pusat koordinat 
                   menuju arah sumbu –x positif. Mari kita perhatikan gambar berikut:  </p>
                <img 
                     src="modul8.png"
                     style={{width: "400px", height: "170px", margin: "5px"}}
                />
                <p>Jika titik O telah bergetar secara periodik selama t detik, maka simpangan gelombang 
                   di titik O akan memenuhi simpangan getaran harmonis, yaitu </p>
                <img 
                     src="modul8.1.png"
                     style={{width: "100px", height: "40px", margin: "5px"}}
                />
                <p>Dengan: </p>
                <p>y = simpangan gelombang atau simpangan getaran titik yang dilalui (m)</p>
                <p>A = Amplitudo atau simpangan maksimum (m)</p>
                <p>ω = kecepatan sudut (rads-1)</p>
                <p>ω = 2𝜋𝑓 , dengan 𝑓 adalah frekuensi getar (Hz) </p>
                <p>t = lamanya titik O telah bergetar (s)</p>
                <p>Oleh karena 𝜔 = 2𝜋𝑓 atau bisa juga ditulis 𝜔 = 2𝜋 1/𝑇
                   , maka persamaan 9 – 1 dapat ditulis 
                   menjadi</p>
                <img 
                     src="modul8.2.png"
                     style={{width: "300px", height: "40px", margin: "5px"}}
                />
                <p>Bagaimana jika Anda menginginkan mencari fase gelombangnya? Dari persamaan di 
                   atas Anda dapat tuliskan sebagai </p>
                <img 
                     src="modul8.3.png"
                     style={{width: "120px", height: "40px", margin: "5px"}}
                />
                <p>Maka Anda dapat menentukan persamaan fase gelombang yaitu 𝜑 = 𝑡/𝑇 atau 𝜑 = 𝑓𝑡</p>
                <p>Bagaimana dengan sudut fase? Anda tinggal mengambil variabel di dalam sinus, yaitu θ = 𝜔 𝑡</p>
                <p>Gelombang merambat dari titik O sepanjang sumbu-x positif. Sebuah titik P bergerak 
                   x dari titik O akan ikut bergetar karena adanya rambatan getaran dari titik O ke titik P. 
                   Gelombang yang terbentuk itu disebut gelombang berjalan. Waktu yang diperlukan 
                   oleh gelombang untuk merambat dari titik O ke titik P adalah 𝑡𝑝 = 𝑥/𝑣 sekon. </p>
                <p>Jika titik O telah bergetar selama t sekon dan waktu yang dibutuhkan oleh gelombang 
                   untuk merambat sampai di titik P adalah 𝑡𝑝 = 𝑥/𝑣, maka titik P baru bergetar selama (𝑡 − 𝑡𝑝) = (𝑡− 𝑥/𝑣) sekon. \
                   Sehingga Anda dapat menentukan persamaan simpangan gelombang di titik P menjadi </p>
                <img 
                     src="modul8.4.png"
                     style={{width: "120px", height: "40px", margin: "5px"}}
                />

                <p>Anda dapat membuat persamaan di atas menjadi persamaan yang biasa digunakan 
                   dengan mensubtitusikan nilai = 2𝜋/𝑇, sehingga persamaannya dapat Anda tulis menjadi</p>
                
                <img 
                     src="modul8.5.png"
                     style={{width: "120px", height: "40px", margin: "5px"}}
                />
                <p>Persamaan di atas dapat Anda ditulis menjadi </p>
                <img 
                     src="modul8.6.png"
                     style={{width: "130px", height: "40px", margin: "5px"}}
                />

                <p>Dapat Anda simpulkan persamaan simpangan gelombang secara lengkap adalah </p>
                <img 
                     src="modul8.7.png"
                     style={{width: "230px", height: "40px", margin: "5px"}}
                />
                <p> Anda tentu dapat membuat kesimpulan berhubungan dengan tanda di depan 
                    amplitudo 𝐴 dan bilangan gelombang 𝑘, yaitu:</p>
                <p>+𝐴  berarti simpangan awal gelombang ke atas</p>
                <p>–𝐴  berarti simpangan awal gelombang ke bawah </p>
                <p>− 𝑘 berarti gelombang merambat ke kanan</p>
                <p>+ 𝑘 berarti gelombang merambat ke kiri</p>

                <p> Keterangan: </p>
                <p>y = simpangan (m); </p>
                <p>A = amplitudo gelombang (m); </p>
                <p>ω = kecepatan sudut gelombang (rads-1); </p>
                <p>t  = lamanya gelombang beretar (s);</p>
                <p>T  = periode gelombang (s); </p>
                <p>k = bilangan gelombang (radm-1);</p>
                <p>x = jarak titik ke sumber getar (m); dan</p>
                <p>λ = panjang gelombang (m).</p>
            
            <strong>3. Persamaan kecepatan </strong>
            <p>Seperti Anda ketahui bahwa kecepatan merupakan turunan pertama dari jarak atau 
               simpangan. Dengan demikian, persamaan kecepatan gelombang berjalan adalah 
               persamaan yang diturunkan dari persamaan simpangan. Secara matematis, jika Anda 
               ambil persamaan gelombang yang simpangan awal ke atas dan arah rambatnya ke 
               kanan maka Anda dapat turunkan persamaan kecepatannya sebagai berikut:</p>

            <img 
                     src="modul8.8.png"
                     style={{width: "230px", height: "180px", margin: "5px"}}
             />
            <p>Bagaimana jika Anda ditanya kecepatan maksimum, maka Anda tinggal ambil variabel 
               sebelum cos yaitu  𝐴𝜔, jadi kecepatan maksimum dapat Anda tuliskan </p>
            
               <img 
                     src="modul8.9.png"
                     style={{width: "60px", height: "20px", margin: "5px"}}
             />
             <p>Keterangan: </p>
             <p>v = kecepatan (m/s); dan</p>
             <p>y = simpangan gelombang (m).</p>

             <strong>4. Persamaan percepatan</strong>
             <p>Seperti halnya kecepatan, Anda dapat mencari persamaan percepatan merupakan 
                turunan pertama dari kecepatan atau percepatan merupakan turunan kedua dari 
                simpangan. Secara matematis, Anda dapat  mencari persamaan percepatan dengan 
                langkah-langkah sebagai berikut: </p>

             <img 
                     src="modul8.10.png"
                     style={{width: "200px", height: "140px", margin: "5px"}}
                />
            <p>Sehingga akhirnya Anda dapat menulis persamaan gelombang berjalan sebagai 
               berikut: </p>

            <img 
                     src="modul8.11.png"
                     style={{width: "200px", height: "40px", margin: "5px"}}
            />
            
            <p>Dari persamaan di atas, Anda pasti dapat menentukan percepatan maksimum 
             gelombang berjalan, yaitu:</p>

            <img 
                     src="modul8.12.png"
                     style={{width: "50px", height: "20px", margin: "5px"}}
            />

            <p>Keterangan: </p>
            <p>a = percepatan (ms-2); </p>
            <p>v = kecepatan gelombang (ms-1);</p>
            <p>y = simpangan (m). </p>

            <strong>5. Sudut Fase, Fase dan Beda fase Gelombang Stasioner </strong>
            <p>Pada gelombang berjalan Anda juga dapat menentukan sudut fase dan fase gelombang 
               serta beda fase. Sudut fase adalah sudut yang ditempuh oleh benda yang 
               bergetar.  Sudut fase dinyatakan dalam fungsi sinus dari persamaan umum gelombang. 
               Fase gelombang adalah besaran yang berkaitan dengan simpangan dan arah gerak 
               gelombang. Beda fase adalah perbedaan fase gelombang atau tahapan gelombang. </p>
            <p>Tiga variabel tersebut dapat Anda turunkan dengan mudah dari persamaan 
               gelombang berjalan, mari Anda turunkan. Tuliskan persamaan umum gelombang 
               berjalan, misalnya Anda ambil persamaan simpangan gelombang yang simpangan 
               awalnya ke atas dan arah rambatnya ke kanan,  </p>
            <img 
                     src="modul8.13.png"
                     style={{width: "160px", height: "40px", margin: "5px"}}
            />
            <p>Maka sudut fase 𝜃𝑝= 𝜔𝑡− 𝑘𝑥, bagaimana dengan fase gelombang? Fase Anda bisa 
               peroleh dengan membagi sudut fase dengan 2𝜋, maka Anda akan dapatkan </p>

            <img 
                     src="modul8.14.png"
                     style={{width: "200px", height: "50px", margin: "5px"}}
            />
            <p>Tinggal Anda tentukan beda fase kan? Beda berarti selisih kan? Maka beda fase Anda 
               dapat artikan selisih fase</p>
            <p>Beda fase disimbulkan dengan ∆𝜑 . Jika Anda mau turunkan persamaan beda fase maka 
               Anda bisa mengikuti langkah-langkah berikut ini: </p>
            
            <img 
                     src="modul8.15.png"
                     style={{width: "200px", height: "300px", margin: "5px"}}
            />
            <p>Dua buah titik bisa memiliki fase sama dengan syarat sebagai berikut. 
               θp=2nπ atau ∆φ=n dengan n=0,1,2,3,…. </p>
            <p>Dua buah titik bisa memiliki fase berlawanan dengan syarat sebagai berikut. θp=(2n+1)π atau ∆φ=12(2n+1) dengan n=0,1,2,3,….</p>
            </section>
            <section className="card"> 
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Frekuensi (f):</strong> Jumlah gelombang yang melewati suatu titik per detik.
                    </li>
                    <li>
                        <strong>Periode (T)</strong> Waktu yang diperlukan untuk suatu siklus penuh gelombang.
                    </li>
                    <li>
                        <strong>Panjang Gelombang (λ):</strong> Jarak antara dua titik berturut-turut yang setara pada gelombang .
                    </li>
                    <li>
                        <strong>Kecepatan Gelombang (v):</strong> Jarak yang ditempuh gelomban per satuan waktu .
                    </li>
                </ul>     
            </section>
            <section>
                <h2>Persamaan Penting</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Konsep</th>
                            <th>Persamaan</th>
                            <th>Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kecepatan Gelombang</td>
                            <td>v = fλ</td>
                            <td>v = kecepatan, f = frekuensi, λ = panjang gelombang</td>
                        </tr>
                        <tr>
                            <td>Frekuensi</td>
                            <td>f = 1/T</td>
                            <td>f = frekuensi, T = periode</td>
                        </tr>
                        <tr>
                            <td>Energi Gelombang</td>
                            <td>E = ½kA²</td>
                            <td>k = konstanta pegas, A = amplitudo</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Karakteristik gelombang mekanik digunakan dalam sistem komunikasi seperti sonar,
                   teknologi medis seperti USG, dan eksplorasi geologi untuk mendeteksi gempa bumi.
                </p>
            </section>
        </div>
        </div>
    );
};

export default Modul8;