import React from "react";

const Modul2 = () => {
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
                <h1>ELASTISITAS BAHAN</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Elastisitas bahan membahas sifat bahan untuk kembali ke bentuk semula setelah gaya yang diberikan dihilangkan.
                    Konsep ini penting dalam memahami perilaku berbagai material dalam kehidupan sehari-hari.
                </p>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Modulus Elastisitas (E):</strong> Perbandingan antara teganganb (stress) dan regangan (strain).
                    </li>
                    <li>
                        <strong>Hukum Hoke:</strong> Tegangan sebanding dengan regangan, selama batas elastisitas tidak terlampaui.
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
                            <td>Tegangan (Stress)</td>
                            <td>σ = F / A</td>
                            <td>F = gaya, A = luas penampang</td>
                        </tr>
                        <tr>
                            <td>Regangan (Strain)</td>
                            <td>ε = ΔL / L₀</td>
                            <td>ΔL = perubahan panjang, L₀ = panjang awal</td>
                        </tr>
                        <tr>
                            <td>Modulus Elastisitas</td>
                            <td>E = σ / ε</td>
                            <td> = tegangan, ε = regangan</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Elastisitas bahan diaplikasikan dalam berbagai bidang seperti teknik mesin, konstruksi, dan desain material, misalnya perancangan jembatan, pegas kendaraan dan kabel baja.
                </p>
            </section>
        </div>
    );
};

export default Modul1;