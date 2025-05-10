import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";
const Modul9 = () => {
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
                <h1>GELOMBANG BUNYI & CAHAYA</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Gelombang bunyi dan cahaya merupakan dua jenis gelombang yang sangat penting dalam kehidupan sehari-hari.
                    Gelombang bunyi merambat melalui medium seperti udara, air, atau padatan, sedangkan gelombang cahaya dapat merambat bahkan di ruang hampa.                
                </p>
            </section>
            <section className="card">
                <p>Gelombang Bunyi adalah gelombang yang merambat melalui medium 
                   tertentu. Gelombang bunyi merupakan gelombang mekanik yang 
                   digolongkan sebagai gelombang longitudinal. Gelombang bunyi ini 
                   menghantarkan bunyi ke telinga manusia. Bunyi/ suara dapat terdengar 
                   karena adanya getaran yang menjalar ke telinga pendengar.  Lalu bagaimana 
                   cara menentukan cepat rambat bunyi?  
                   Simak uraian berikut.</p>
                
                <strong>1. Cepat Rambat Bunyi </strong>
                <p>Bunyi merupakan gelombang longitudinal yang dapat merambat dalam medium 
                   padat, cair, dan gas. Cepat rambat bunyi tergantung pada sifat-sifat medium rambat, 
                   maka bunyi mempunyai cepat rambat yang dipengaruhi oleh dua faktor yaitu : </p>
                <p>a. Kerapatan partikel medium yang dilalui bunyi. Semakin rapat susunan partikel 
                   medium maka semakin cepat bunyi merambat, sehingga bunyi merambat paling 
                   cepat pada zat padat. </p>
                <p>b. Suhu medium, semakin panas suhu medium yang dilalui maka semakin cepat bunyi 
                   merambat. </p>
                <p>Cepat rambat bunyi dapat dihitung dengan menggunakan persamaan :</p>

                <img 
                     src="modul9.png"
                     style={{width: "100px", height: "30px", margin: "5px"}}
                />
                <p>Keterangan : </p>
                <p>v  : cepat rambat bunyi </p>
                <p>λ  : panjang gelombang bunyi </p>
                <p>f  : frekuensi bunyi </p>
                <p>Cepat rambat bunyi tergantung pada mediumnya: </p>

                <strong> a. Cepat rambat bunyi di dalam medium gas </strong>
                <img 
                     src="modul9.1.png"
                     style={{width: "100px", height: "60px", margin: "5px"}}
                />
                <p>v = cepat rambat bunyi  (m/s) </p>
                <p>γ = tetapan Laplace </p>
                <p>R = tetapan gas umum  (J/mol K)</p>
                <p>T = suhu mutlak (K)</p>
                <p>Mr = massa molekul relatif (kg/mol) </p>

                <strong>b. Cepat rambat bunyi di dalam medium zat cair </strong>
                <img 
                     src="modul9.2.png"
                     style={{width: "100px", height: "60px", margin: "5px"}}
                />
                <p>v = cepat rambat bunyi  (m/s) </p>
                <p>B = modulus Bulk (N/m2) </p>
                <p>ρ = massa jenis zat cair (kg/m3)</p>

                <strong>c. Cepat rambat bunyi di dalam medium zat padat </strong>
                <img 
                     src="modul9.3.png"
                     style={{width: "100px", height: "60px", margin: "5px"}}
                />
                <p>v = cepat rambat bunyi  (m/s) </p>
                <p>B = modulus Young (N/m2) </p>
                <p>ρ = massa jenis zat padat (kg/m3) </p>

                <strong>2.  Dawai</strong>
                <p>Ketika Anda memainkan gitar  di bagian 
                   depan (dekat leher gitar), pasti bunyinya nyaring. Itu 
                   artinya, semakin pendek jaraknya, frekuensinya 
                   semakin tinggi (berbanding terbalik). Begitu pula 
                   dengan massa jenis, dan luas permukaan senarnya. 
                   Yang dimaksud dengan luas permukaan senar di sini 
                   penampang dari senar / dawai  dan tentu kecil sekali 
                   kan penampangnya?Artinya, semakin kecil luas 
                   permukaannya maka frekuensinya besar.  Adapun 
                   variabel yang berbanding lurus terhadap frekuensi 
                   adalah gaya. </p>
                
                <p>Gitar merupakan alat musik yang menggunakan dawai sebagai sumber bunyinya. 
                   Gitar dapat menghasilkan nada-nada yang berbeda dengan jalan menekan bagian 
                   tertentu pada senar itu saat dipetik. Nada yang dihasilkan dengan pola paling sederhana 
                   disebut nada dasar, kemudian secara berturut-turut pola gelombang yang terbentuk 
                   menghasilkan nada atas ke 1, nada atas ke 2, nada atas ke 3  dan seterusnya.  Baca dengan 
                   baik uraian tentang nada-nada pada dawai.</p>
                <p>Nada Dasar </p>
                <img 
                     src="modul9.5.png"
                     style={{width: "200px", height: "70px", margin: "5px"}}
                />
                <p>Nada Dasar terjadi apabila sepanjang dawai terbentuk 1/2 gelombang seperti 
                   pada gambar.  </p>
                <p>Tali dengan panjang L membentuk ½ λ </p>
                <p>Sehingga : L = ½ λ   maka λ = 2L  </p>
                <p>Maka frekuensi nada dasar adalah, </p>
                <img 
                     src="modul9.4.png"
                     style={{width: "100px", height: "60px", margin: "5px"}}
                />
                <p> Nada Atas ke 1  </p>
                <img 
                     src="modul9.6.png"
                     style={{width: "250px", height: "70px", margin: "5px"}}
                />
                <p>Nada atas ke 1 terjadi apabila sepanjang dawai terbentuk 1 gelombang. 
                   Tali dengan panjang L membentuk 1 λ .  </p>
                
                <p>L = 1 λ   maka λ = L </p>
                <p>Frekuensi nada atas ke 1 adalah,  </p>
                <img 
                     src="modul9.7.png"
                     style={{width: "100px", height: "40px", margin: "5px"}}
                />
                <p> Nada Atas ke 2 </p>
                <p>Nada atas ke 2 terjadi apabila sepanjang dawai terbentuk 1 ½ gelombang. 
                   Tali dengan panjang L membentuk 1 ½  λ  atau 3/2 λ </p>
                <p>L = 3/2 λ   maka λ = 2/3 L </p>
                <img 
                     src="modul9.8.png"
                     style={{width: "220px", height: "90px", margin: "5px"}}
                />
                <p>Frekuensi nada atas ke 2 adalah,  </p>
                <img 
                     src="modul9.9.png"
                     style={{width: "100px", height: "40px", margin: "5px"}}
                />
                <p>Nada Atas ke 2 </p>
                <p>Nada atas ke 2 terjadi apabila sepanjang dawai terbentuk 1 ½ gelombang. 
                   Tali dengan panjang L membentuk 1 ½  λ  atau 3/2 λ</p>
                <p>L = 3/2 λ   maka λ = 2/3 L </p>
                <p>Frekuensi nada atas ke 2 adalah,  </p>
                <img 
                     src="modul9.10.png"
                     style={{width: "200px", height: "70px", margin: "5px"}}
                />
                <p>Frekuensi nada atas ke 2 adalah, </p>
                <img 
                     src="modul9.11.png"
                     style={{width: "100px", height: "40px", margin: "5px"}}
                />
                <p>Berdasarkan data diatas dapat diambil kesimpulan bahwa frekuensi nada atas ke n  </p>
                <img 
                     src="modul9.12.png"
                     style={{width: "100px", height: "50px", margin: "5px"}}
                />
                <p>Frekuensi-frekuensi dan seterusnya disebut frekuensi alami atau 
                   frekuensi resonansi.  </p>
                <img 
                     src="modul9.13.png"
                     style={{width: "200px", height: "30px", margin: "5px"}}
                />
                <p>Perbandingan frekuensi-ferkuensi di atas, yaitu </p>
                <img 
                     src="modul9.14.png"
                     style={{width: "200px", height: "50px", margin: "5px"}}
                />
            </section>
            <section className="card">
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Frekuensi (f):</strong> Jumlah gelombang yang melewati suatu titik per detik.
                    </li>
                    <li>
                        <strong>Periode (T):</strong> Waktu yang diperlukan untuk suatu siklus penuh gelombang.
                    </li>
                    <li>
                        <strong>Panjang Gelombang (λ):</strong> Jarak antara dua titik berturut-turut yang setara pada gelombang .
                    </li>
                    <li>
                        <strong>Kecepatan Gelombang (v):</strong> Jarak yang ditempuh gelomban per satuan waktu.
                    </li>
                    <li>
                        <strong>Amplitudo (A):</strong> Besarnya simpangan dari tiitk keseimbangan.
                    </li>
                </ul>     
            </section>
            <section>
                <h2>Perbedaan Gelombang Bunyi dan Cahaya</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Karakteristik</th>
                            <th>Gelombang Bunyi</th>
                            <th>Gelombang Cahaya</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jenis Gelombang</td>
                            <td>Gelombang Mekanik</td>
                            <td>Gelombang Elektromagnetik</td>
                        </tr>
                        <tr>
                            <td>Medium</td>
                            <td>Memerlukan medium untuk merambat</td>
                            <td>Dapat merambat diruang hampa</td>
                        </tr>
                        <tr>
                            <td>Kecepatan</td>
                            <td>~343 m/s (di udara pada suhu 20°C)</td>
                            <td>~3 × 10⁸ m/s (di ruang hampa)</td>
                        </tr>
                        <tr>
                            <td>Panjang Gelombang</td>
                            <td>Beberapa mm hingga beberapa meter</td>
                            <td>10⁻¹⁴ m hingga beberapa km</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                <strong>Gelombang Bunyi:</strong> Digunakan dalam sonar, USG medis, dan sistem komunikasi.  
                <strong>Gelombang Cahaya:</strong> Penting untuk teknologi optik, komunikasi serat optik, dan energi surya.
                </p>
            </section>
        </div>
        </div>
    );
};

export default Modul9;