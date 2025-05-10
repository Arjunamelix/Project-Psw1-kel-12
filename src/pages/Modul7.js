import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul7 = () => {
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
                <h1>KARAKTERISTIK GELOMBANG MEKANIK</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Gelombang mekanik adalah gelombang yang membutuhkan medium untuk merambat.
                    Contoh gelombang mekanin meliputi gelombang bunyi, gelombang air, dan gelombang pada tali.
                </p>
            </section>
            <section className="card">
                <strong>Jenis-jenis Gelombang</strong>
                <p>Berdasarkam medium untuk merambatnya gelobang dibedakan menjadi dua yaitu 
                   gelombang mekanik dan gelombang elektromagnetik. Gelombang yang memerlukan 
                   medium untuk merambat disebut gelombang mekanik. Contoh : gelombang bunyi, 
                   gelombang air.  Gelombang yang tidak memerlukan medium untuk merambat disebut 
                   gelombang elektromagnetik. Contoh : gelombang cahaya, sinar X, gelombang radio.</p>
                <p>Berdasarkan arah getarannya, gelombang  dibedakan menjadi dua, yaitu : </p>
                <p>1. gelombang transversal</p>
                <p>2. gelombang longitunidinal</p>

                <p>Berdasarkan Amplitudonya, gelombang terbagi menjadi : </p>
                <p>1. gelombang berjalan </p>
                <p>2. gelombang stasioner (gelombang berdiri) </p>

                <p>Berdasarkan medium perambatannya, gelombang terbagi menjadi : </p>
                <p>1. gelombang mekanis </p>
                <p>2. gelombang elektromagnetis </p>

                <strong>Gelombang Transversal </strong>
                <p>Yaitu gelombang yang arah getarannya tegak lurus dengan arah perambatannya. 
                   Contoh : gelombang tali yang diusik. </p>
                <img 
                     src="modul7.png"
                     style={{width: "300px", height: "150px", margin: "5px"}}
                />
                <p>Pada gelombang transversal mempunyai bagian dan besaran berikut : </p>
                <p>▪ puncak gelombang, yaitu titik tertinggi pada gelombang</p>
                <p>▪ dasar gelombang, yaitu titik terendah pada gelombang</p>
                <p>▪ bukit gelombang </p>
                <p>▪ lembah gelombang </p>
                <p>▪ amplitudo gelombang, yaitu simpangan terbesar gelombang/tinggi puncak gelombang. </p>
                <p>▪ panjang gelombang, yaitu jarak antara dua puncak gelombang yang berturutan atau jarak antara dua dasar gelombang yang berurutan. Jadi sebuah gelombang 
                     terdiri dari sebuah bukit dan sebuah lembang gelombang. </p>
                <p>▪ periode gelombang, yaitu waktu untuk menempuh 1 buah panjang gelombang. </p>
                <p>▪ Frekuensi gelombang, yaitu banyaknya gelombang yang terjadi tiap detik. </p>

                <strong>Gelombang Longitudinal </strong>
                <p>Yaitu gelombang yang arah getarannya searah dengan arah rambatnya. Contoh : 
                   gelombang pegas atau slinki. </p>
                <img 
                     src="modul7.1.png"
                     style={{width: "200px", height: "100px", margin: "5px"}}
                />
                <p>Pada gelombang longitudinal, terdiri dari rapat dan renggangan. Satu panjang 
                   gelombang adalah jarak antara rapatan dengan rapatan yang berurutan, atau jarak 
                   antara renggangan dengan renggangan yang berurutan.</p>
                <strong>Besaran-besaran Pada Gelombang </strong>
                <p>1. Amplitudo (A) </p>
                <p>Amplitudo adalah simpangan maksimum gelombang yang memiliki satuan meter (m). </p>
                <p>2. Panjang gelombang (λ) </p>
                <p>Jika ditinjau dari gelombang transversal, panjang gelombang adalah jarak antara dua 
                   puncak yang berdekatan atau jarak antara dua lembah yang berdekatan. Pada 
                   gelombang longitudinal, panjang gelombang adalah jarak antara pusat rapatan ke 
                   rapatan berikutya  atau pusat regangan ke pusat regangan berikutnya.</p>
                <p>3. Frekuensi gelombang (f) </p>
                <p>Frekuensi adalah banyaknya gelombang yang bisa terbentuk setiap detik. Secara 
                   matematis, frekuensi dirumuskan sebagai berikut. </p>
                <img 
                     src="modul7.2.png"
                     style={{width: "50px", height: "40px", margin: "5px"}}
                />
                <p> Keterangan: </p>
                <p>f = frekuensi gelombang (Hz); </p>
                <p>n = jumlah gelombang yang terbentuk;</p>
                <p>t = waktu tempuh gelombang (s).</p>
                
                <p>4. Periode gelombang (T) </p>
                <p>Periode adalah waktu yang dibutuhkan gelombang untuk menempuh satu panjang gelombangnya. Periode juga bisa didefinisikan sebagai waktu yang dibutuhkan 
                   gelombang untuk melakukan satu kali putaran. Secara matematis, periode dirumuskan sebagai berikut. </p>
                <img 
                     src="modul7.3.png"
                     style={{width: "170px", height: "40px", margin: "5px"}}
                />
                <p>Keterangan: </p>
                <p>f = frekuensi gelombang (Hz); </p>
                <p>T = periode (s); </p>
                <p>n = jumlah gelombang yang terbentuk; dan</p>
                <p>t = waktu tempuh gelombang (s).</p>

                <p>5. Kecepatan Rambat Gelombang</p>
                <p>Kecepatan rambat gelombang pada suatu medium dihitung dengan : </p>
                <img 
                     src="modul7.4.png"
                     style={{width: "300px", height: "150px", margin: "5px"}}
                />
                <p>6. Fase dan beda fase Gelombang</p>
                <p>Fase gelombang  adalah keadaan gelombang yang berkaitan dengan simpangan dan 
                   arah rambatnya.  Secara matematis fase gelombang dinyatakan sebagai berikut :   </p>
                <img 
                     src="modul7.5.png"
                     style={{width: "500px", height: "160px", margin: "5px"}}
                />
                <p>Sedangkan beda fase adalah  apabila pada tali terdapat dua buah titik, maka beda 
                   fasenya adalah jarak antara dua titik tersebut. Persamaan beda fase gelombang adalah 
                   sebagai berikut.:  </p>
                <img 
                     src="modul7.6.png"
                     style={{width: "300px", height: "70px", margin: "5px"}}
                />
                <p>7. Energi dan Intensitas Gelombang </p>
                <p>Gelombang memindahkan energi dari satu tempat ke tempat lain. Gelombang 
                   merupakan getaran yang merambat dalam suatu medium. Energi getaran merambat 
                   dari satu partikel ke partikel lain sepanjang medium, walaupun partikelnya sendiri 
                   tidak berpindah. Besarnya energi gelombang adalah :</p>
                <img 
                     src="modul7.7.png"
                     style={{width: "200px", height: "170px", margin: "5px"}}
                />
                <p>EK = energi kinetik (J) </p>
                <p>EP = energi potensial (J) </p>
                <p>E = energi mekanik / energi total (Joule) </p>
                <p>θ = sudut fase gelombang</p>
                <p>k = m.ω2 =  konstanta (N/m) </p>
                <p>m = massa (kg) </p>
                <p>ω = 2.π.f = frekuensi sudut = kecepatan sudut (rad/s) </p>
                <p>f = 1/T = frekuensi gelombang (Hz) </p>
                <p>T = periode gelombang (s) </p>
                <p>A = amplitudo gelombang (m)</p>
                <p>Besarnya energi  gelombang yang dipindahkan per satuan luas per satuan waktu 
                   disebut intensitas gelombang. Besarnya intensitas gelombang bunyi adalah : </p>
                <p>I = intensitas bunyi (J/m2.s = Watt/m2) </p>
                <p>t = waktu (s)</p>
                <p>P = daya bunyi (watt)</p>
                <p>A = 4.π.r2 = luas penampang medium (m2)</p>
                <p>r = jarak (m)</p>
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

export default Modul7;