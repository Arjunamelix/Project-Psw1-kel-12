import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul6 = () => {
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
            <style >
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
                <h1>TEORI KINETIK GAS</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Teori kinetik gas menjelaskan sifat gas berdasarkan gerakan pertikel-partikelnya.
                    Gas dianggap terdiri dari partikel kecil yang bergerak secara acak dan terus-menerus.
                </p>
            </section>
            <section className="card">
                <strong>Pengertian Gas Ideal </strong>
                <p>Gas ideal adalah gas yang secara tepat memenuhi persamaan pV = nRT. Sebagai 
                   gambaran tentang keadaan gas ideal, kita tinjau sifat-sifat gas ideal diantaranya 
                   adalah: 
                </p>
                <p>1. Gas ideal terdiri dari partikel-partikel yang amat besar jumlahnya, yang tersebar 
                   merata di seluruh bagian jumlahnya, dan bergerak secara acak ke segala arah 
                   dengan kelajuan tetap
                </p>
                <p>2. Jarak antara partikel gas jauh lebih besar dari dibanding ukuran partikel
                </p>
                <p>3. tidak ada gaya di antara partikel-partikel tersebut kecuali jika bertumbukan 
                   (tumbukan dianggap lenting sempurna dan partikel dianggap bulat, licin, dan pejal), 
                   dan berlangsung sangat singkat</p>
                <p>4. Volume partikel gas sangat kecil dibandingkan dengan wadah yang ditempatinya 
                   sehingga ukurannya dapat diabaikan </p>
                <p>5. Hukum Newton tentang gerak berlaku</p>

                <strong>Persamaan Keadaan Gas Ideal </strong>
                <p>Hukum Boyle-Gay Lussac berlaku untuk gas ideal di dalam ruang tertutup, 
                   persamaannya dapat dituliskan sebagai berikut  :  </p>
                <img 
                     src="modul6.png"
                     style={{width: "300px", height: "70px", margin: "5px"}}
                />
                <img 
                     src="modul6.1.png"
                     style={{width: "200px", height: "40px", margin: "5px"}}
                />
                <p>Maka : </p>
                <p>Persamaan PV = nRT dapat dinyatakan sebagai berikut, </p>
                <img 
                     src="modul6.2.png"
                     style={{width: "160px", height: "70px", margin: "5px"}}
                />
                <img 
                     src="modul6.3.png"
                     style={{width: "100px", height: "50px", margin: "5px"}}
                />
                <p>Dari persamaan PV = nRT , dengan mensubstitusikan n = m/M , persamaan keadaan  gas ideal menjadi :</p>
                <img 
                     src="modul6.4.png"
                     style={{width: "160px", height: "70px", margin: "5px"}}
                />
                <strong> Keterangan : </strong>                           
                <p>m = massa total gas (kg) </p>                          
                <p>M = massa molekul gas (kg/kmol = gr/mol) </p>
                <p>Na = bilangan Avogadro (6,02 x 1023 partikel/mol)</p>
                <p>P1 = tekanan gas mula-mula (Pa = N/m2)  </p>
                <p>P2 = tekanan gas akhir </p>
                <p>V1 = volume gas mula-mula (m3)  </p>
                <p>T1 = suhu gas mula-mula (K) </p>
                <p>R = tetap umum gas = tetapan molar gas
                     = 8314 J/kmolK = 8,314 J/molK = 0,082 liter.atm/molK</p>
                <p>N = banyak partikel </p>
                <p>n = jumlah mol (mol)</p>
                <p>P = tekanan gas ideal (Pa) </p>
                <p>V = volume gas (m3)</p>
                <p>V2 = volume gas akhir </p>
                <p>T2 = suhu gas akhir (K) </p>
                <p>ρ = massa jenis gas (kg/m3) </p>

                <strong>Tekanan Gas Ideal</strong>
                <p>Berdasarkan teori kinetik, molekul-molekul gas ideal bergerak secara acak sesuai 
                   Hukum Gerak Newton dan bertumbukan dengan molekul lain maupun dengan dinding 
                   bejana tempat gas berada secara elastis sempurna.  
                </p>
                <img 
                     src="modul6.5.png"
                     style={{width: "200px", height: "60px", margin: "5px"}}
                />
                <p>P = tekanan gas (Pa) </p>
                <p>2 v = kuadrat kelajuan rata-rata molekul gas</p>
                <p>N/V = kerapatan partikel,  </p>
                <p>N = jumlah molekul (partikel),  </p>
                <p>V = volume wadah </p>
                <p>ρ = massa jenis (kg m-3)  </p>
                <p>m0= massa satu molekul gas (kg),  </p>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Energi Kinetik:</strong> Energi partikel gas yang bergerak, berbanding lurus dengan suhu mutlaknya.
                    </li>
                    <li>
                        <strong>Tekanan Gas:</strong> Diakibatkan oleh tumbukan partikel gas dengan dinding wadah.
                    </li>
                    <li>
                        <strong>Hukum Gas Ideal:</strong> Menjelaskan hubungan antara tekanan, volume, suhu, dan jumlah mol gas.
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
                            <td>Hukum Gas Ideal</td>
                            <td>PV = nRT</td>
                            <td>P = tekanan, V = volume, n = jumlah mol, R = konstanta gas, T = suhu mutlak</td>
                        </tr>
                        <tr>
                            <td>Energi Kinetik Rata-rata</td>
                            <td>E_k = ½mv² = ³/₂ kT </td>
                            <td>m = massa partikel, v = kecepatan partikel, k = konstanta Boltzmann, T = suhu mutlak</td>
                        </tr>
                        <tr>
                            <td>Kecepatan Efektifi</td>
                            <td>v_rms = √(3RT/M)</td>
                            <td>R = konstanta gas, T = suhu mutlak, M = massa molar gas</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Teori kinetik gas digunakan untuk memahami perilaku gas dalam mesin pembakaran internak, pendingin udara, balon udara, dan studi termodinamika.
                </p>
            </section>
        </div>
        </div>
    );
};

export default Modul6;