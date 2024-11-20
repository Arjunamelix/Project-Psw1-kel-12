import React from "react";

const Modul3 = () => {
    return (
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
                <h1>FLUIDA STATIS</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Fluida statis mempelajari fluida yang berada dalam keadaan diam dan gaya yang bekerja pada fluida tersebut.
                    Konsep ini penting untuk memahami tekanan pada fluida, hukum pascal, dan prinsip Archimedes.
                </p>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Tekanan (P):</strong> Gaya per satuan luas pada permukaan fluida .
                    </li>
                    <li>
                        <strong>Hukum Pascal:</strong> Tekanan yang diberikan pada fluida dalam ruangan tertutup diteruskan ke segala arah dengan sama besar.
                    </li>
                    <li>
                        <strong>Prinsip Archimedes</strong> Benda yang dicelupkan ke dalam fluida akan mengalami gaya angkat ke atas sebesar berat fluida yang dipindahkan.
                    </li>
                </ul>     
            </section>
            <section>
                <h2>Persamaan Penting</h2>
                <table>
                    <thead>
                        <tr>
                            <th>KTekanan</th>
                            <th>P = F / A</th>
                            <th>F = gaya, A = luas permukaan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tekanan Hidrostatis</td>
                            <td>P = pgh</td>
                            <td>ρ = massa jenis fluida, g = gravitasi, h = kedalaman</td>
                        </tr>
                        <tr>
                            <td>Gaya Angkat Archimedes</td>
                            <td>F = ρVg</td>
                            <td>ρ = massa jenis fluida, V = volume benda tercelup, g = gravitasi</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Fluida statis digunakan dalam perancangan kapal, dam, pompa hidrolik, dan alat pengukur tekanan seperti barometer dan manometer.
                </p>
            </section>
        </div>
    );
};

export default Modul3;