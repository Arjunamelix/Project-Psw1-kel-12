import React from "react";

const Modul3 = () => {
    return (
        <div className="container">
            <style>
                {`
                    .container {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background-color: #f9f9f9;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    header h1 {
                        color: #2c3e50;
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    section h2 {
                        color: #34495e;
                    }
                    section p, section ul {
                        color: #555;
                    }
                    ul {
                        list-style-type: square;
                        padding-left: 20px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 10px;
                    }
                    table th, table td {
                        border: 1px solid #ccc;
                        padding: 8px;
                        text-align: left;
                    }
                    table th {
                        background-color: #ecf0f1;
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