import React from "react";


const Modul1 = () => {
    return (
        <div className="container ">
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
            <header style={{
                background: "linear-gradient(135deg, #007acc, #005f99)",
                color: "white",
                padding:"15px",
                borderRadius:"10px",
                textAlign:"center",
                marginBottom:"20px"
            }}>
                <h1 style={{
                    fontSize:"2rem",
                    fontWeight:"bold"
                }}>DINAMIKA ROTASI DAN BENDA TEGAR</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Dinamika rotasi membahas gerak rotasi benda tegar, yaitu benda yang
                    bentuk dan dimensinya tidak berubah meskipun mengalami gaya.
                </p>
            </section>
            <section className="card">
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Torque (τ):</strong> Gaya yang menyebabkan benda berputar.
                    </li>
                    <li>
                        <strong>Hukum Newton Rotasi:</strong> Στ = Iα
                    </li>
                </ul>     
            </section>
            <section className="card"> 
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
                            <td>Momen Inersia</td>
                            <td>I = Σmᵢrᵢ²</td>
                            <td>rᵢ = jarak partikel ke sumbu rotasi</td>
                        </tr>
                        <tr>
                            <td>Hubungan Torque</td>
                            <td>τ = r × F</td>
                            <td>r = lengan gaya, F = gaya</td>
                        </tr>
                        <tr>
                            <td>Energi Kinetik Rotasi</td>
                            <td>E = (1/2)Iω²</td>
                            <td>ω = kecepatan sudut</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="card">
                <h2>Contoh Aplikasi</h2>
                <p>
                    Dinamika rotasi banyak diaolikasikan dalam kehidupan sehari-hari,
                    seperti roda mobil, mesin turbin, dan permainan bola.
                </p>
            </section>
        </div>
    );
};

export default Modul1;