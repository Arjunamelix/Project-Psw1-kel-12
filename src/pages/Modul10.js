import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul10 = () => {
    const navigate = useNavigate();
    return (
        <div><Navbar />

    <button style={{
        position:"fixed",
        top:"150px",
        left:"20px",
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
                <h1>PEMANASAN GLOBAL</h1>
            </header>

            <section>
                <h2>Pendahuluan</h2>
                <p>
                   Pemanasan global adalah peningkatan suhu rata-rata atmosfer, lautan, dan bumi akibat peningkatan konsentrasi gas rumah kaca.
                   Fenomena ini berdampak besar pada ekosistem, cuaca, dan kehidupan manusia di seluruh dunia.                
                </p>
            </section>

            <section className="card">
                <strong>1. Efek Rumah Kaca </strong>
                <p>Tahukan Anda apakah sumber energi yang terdapat di Bumi? Sumber energi di 
                   bumi berasal dari matahari. Sebagian besar energi tersebut berbentuk radiasi 
                   gelombang pendek, termasuk cahaya tampak. Ketika energi ini tiba permukaan 
                   Bumi, ia berubah dari cahaya menjadi panas yang menghangatkan Bumi. 
                   Permukaan Bumi, akan menyerap sebagian panas dan memantulkan kembali 
                   sisanya. Sebagian dari panas ini berwujud radiasi infra merah gelombang panjang 
                   ke angkasa luar.  </p>
                <p>Namun sebagian panas tetap terperangkap di atmosfer Bumi akibat 
                   menumpuknya jumlah gas rumah kaca antara lain uap air, karbon dioksida, sulfur 
                   dioksida dan metana yang menjadi perangkap gelombang radiasi ini. Gas-gas ini 
                   menyerap dan memantulkan kembali radiasi gelombang yang dipancarkan Bumi 
                   dan akibatnya panas tersebut akan tersimpan di permukaan Bumi. Keadaan ini 
                   terjadi terus menerus sehingga mengakibatkan suhu rata-rata tahunan bumi terus 
                   meningkat.  </p>
                <p>Gas-gas tersebut berfungsi sebagaimana gas dalam rumah kaca. Dengan semakin 
                   meningkatnya konsentrasi gas-gas ini di atmosfer, semakin banyak panas yang 
                   terperangkap di bawahnya. </p>
                <p>Efek rumah kaca ini sangat dibutuhkan oleh segala makhluk hidup yang ada di 
                   bumi, karena tanpanya, planet ini akan menjadi sangat dingin. Dengan suhu rata
                   rata sebesar 15°C (59°F), bumi sebenarnya telah lebih panas 33°C (59°F) dari 
                   suhunya semula, jika tidak ada efek rumah kaca suhu bumi hanya -18 °C sehingga 
                   es akan menutupi seluruh permukaan Bumi. Akan tetapi sebaliknya, apabila gas
                   gas tersebut telah berlebihan di atmosfer, akan mengakibatkan pemanasan global.</p>
                <img 
                     src="modul10.png"
                     style={{width: "500px", height: "450px", margin: "5px"}}
                />
                <p>Efek rumah kaca merupakan gambaran awal mengenai bagaimana dampak 
                   pemanasan global akan menimpa bumi dan segenap isinya.</p>


                <strong>2. Penyebab Pemanasan Global</strong>
                <p>Pemanasan global (global warming) atau sekarang lebih dikenal sebagai 
                   perubahan iklim global (climate change) adalah memanasnya iklim bumi secara 
                   umum. Memanasnya bumi telah diobservasi peneliti sejak tahun 1950-an dan 
                   terus bertambah panas sejak itu. Selain bertambah panas dari tahun ke tahun, di 
                   beberapa wilayah di bumi mengalami perubahan cuaca yang ekstrim. Oleh karena 
                   itulah fenomena ini disebut juga sebagai perubahan iklim global (climate change). </p>
                <p>Penyebab pemanasan global secara langsung berkaitan dengan efek rumah kaca. 
                   Jika gas-gas rumah kaca makin meningkat jumlahnya di atmosfer, maka efek 
                   pemanasan global akan semakin signifikan. Sejak revolusi industri, gas-gas rumah 
                   kaca seperti karbon dioksida, methana, dan gas berbahaya lainnya menjadi 
                   semakin bertambah di atmosfer sehingga konsentrasinya makin meningkat akibat 
                   ulah manusia.</p>
                <p>Berikut ini dijabarkan secara lebih detail mengenai penyebab-penyebab langsung 
                   maupun tidak langsung yang mengakibatkan pemanasan global:</p>
                <p>a. Bertambahnya gas-gas rumah kaca di atmosfer yang menyebabkan terjadinya 
                   efek rumah kaca secara global; setiap penyebab bertambahnya efek rumah 
                   kaca juga berkontribusi langsung terhadap pemanasan global seperti:  </p>
                <ul>
                <p>1) Energi; karena hampir sebagian besar pembangkit listrik di dunia 
                   menggunakan minyak bumi dan batu bara, maka tentu saja aspek ini 
                   berpengaruh sangat besar terhadap pemanasan global karena permintaan 
                   listrik sangatlah tinggi dan makin meninggi setiap tahun yang pada saat 
                   ini, konstribusi terhadap pemanasan global sekitar seperempatnya. </p>
                <p>2) Transportasi; karena hampir seluruh sistem transportasi menggunakan 
                   bahan bakar fosil, maka semakin banyak orang yang memakai kendaraan 
                   pribadi akan berdampak pada peningkatan gas karbon dioksida di 
                   atmosfer yang saat ini berkonstribusi sebesar 20% terhadap pemanasan 
                   global.</p>
                <p>3) Industri peternakan sapi; industri peternakan sapi menghasilkan gas 
                   methana yang sangat besar ke atmosfer. Gas-gas ini dihasilkan dari kentut 
                   sapi dan kotoran sapi yang diproduksi oleh bakteri pengurai selulosa di 
                   perut sapi. Hampir setengah dari penyebab pemanasan global disebabkan 
                   oleh hal ini karena masifnya industri ini di seluruh dunia karena konsumsi 
                   susu dan daging sapi oleh manusia yang begitu besar. </p>
                <p>4) Industri pertanian; pupuk yang digunakan dalam pertanian melepaskan 
                   gas nitrous oxide ke atmosfer yang merupakan gas rumah kaca. </p>
                <p>5) Limbah industri dan tambang industri seperti pabrik semen, pabrik pupuk, 
                   dan penambangan batu baru serta minyak bumi memproduksi gas rumah 
                   kaca seperti karbon dioksida.</p>
                <p>6) Limbah rumah tangga; limbah rumah tangga menghasilkan gas methana 
                   dan karbon dioksida yang dihasilkan dari bakteri-bakteri pengurai 
                   sampah.</p>
                   </ul>
                <p>b. Pencemaran laut; lautan dapat menyerap karbon dioksida dalam jumlah yang 
                   besar, akan tetapi akibat pencemaran laut oleh limbah industri dan sampah, 
                   laut menjadi tercemar sehingga banyak ekosistem di dalamnya yang musnah, 
                   yang menyebabkan laut tidak dapat menyerap karbon dioksida lagi. </p>
                <p>c. Penebangan dan pembakaran hutan; penebangan dan pembakaran hutan 
                   sangat berdampak buruk karena hutan dapat menyerap karbon dioksida di 
                   atmosfer.</p>
                <p>d. Mencairnya es di kutub; permukaan es berwarna putih dapat memantulkan 
                   lebih dari 60% sinar matahari, akan tetapi jika semakin banyak es yang 
                   mencair, maka sinar matahari tidak dipantulkan seperti sebelumnya karena 
                   lautan hanya dapat memantulkan sinar matahari sepersepuluhnya saja. </p>

                <strong>3. Dampak Pemanasan Global </strong>
                <p>Dampak pemanasan global secara umum adalah terjadinya peningkatan suhu rata
                   rata di bumi. Namun, ada banyak sekali dampak yang terjadi akibat pemanasan 
                   global tersebut, baik itu iklim dan cuaca, peningkatan air laut, ekosistem, dan lain-lain.  </p>
                <img 
                     src="modul10.1.png"
                     style={{width: "500px", height: "450px", margin: "5px"}}
                />
                
                <p>Berikut ini adalah beberapa dampak pemanasan global: </p>
                <ul>
                <b>1) Perubahan Iklim dan Cuaca </b>
                <p>Pemanasan Global mengakibatkan terjadinya perubahan iklim dan cuaca di 
                   berbagai penjuru dunia. Hal ini dikarenakan kondisi atmosfir yang berubah di 
                   berbagai lokasi akibat pemanasan global tersebut. Perubahan iklim membuat 
                   terjadinya perubahan musim juga siklus musim di berbagai wilayah bumi akan 
                   mengalami perubahan atau menjadi tak tentu. Hal ini menyebabkan banyak 
                   masalah bagi manusia, misalnya perubahan musim hujan dan musim kemarau. 
                   Dampak pergantian musim ini juga terjadi pada industri pertanian dan 
                   peternakan. Musim tanam dan musim panen yang tidak jelas akan 
                   mengakibatkan hasil pertanian dan peternakan menjadi menurun.</p>
                <b>2) Hujan Asam </b>
                <p>Asap hasil pembakaran batubara dan minyak akan menghasilkan emisi sulfur 
                   oksida dan nitrogen oksida. Ketika kedua gas tersebut bereaksi di udara maka 
                   akan menghasilkan asam nitrat, asam sulfat. Inilah yang kemudian 
                   mengakibatkan terjadinya hujan asam. Hujan asam ini dapat mengakibatkan 
                   kerusakan pada benda-benda logam, merusak tanaman, mengakibatkan 
                   kesulitan bernafas, dan lain sebagainya.</p>
                <b>3) Es Kutub Utara dan Selatan Mencair</b>
                <p>Sebagian besar area kutub utara dan selatan tertutup oleh es yang dapat 
                   memantulkan cahaya matahari. Pemanasan global akan membuat es di kutub 
                   utara dan selatan mencair. Jika es di kutub utara dan selatan terus mencair 
                   maka panas matahari akan semakin banyak terserap dan menimbulkan panas. 
                   Selain itu, percepatan mencairnya es akan membuat berbagai binatang di 
                   kutub utara dan selatan kehilangan habitatnya. </p>
                <b>4) Permukaan Laut Naik </b>
                <p>Es yang mencari dari kutub utara dan selatan akan mengalir menuju laut. Pada 
                   akhirnya permukaan air laut akan semakin tinggi secara perlahan-lahan. 
                   Menurut beberapa ilmuwan, sepanjang abad 20 permukaan air laut telah naik 
                   hingga 25 cm. Dan diperkirakan permukaan air laut akan terus naik hingga 
                   mencapai 88 cm. Hal ini tentu saja akan membuat area daratan di permukaan 
                   bumi semakin berkurang. </p>
                <b>5) Ekologis Terganggu </b>
                <p>Pemanasan global berdampak besar bagi semua mahluk hidup, termasuk 
                   hewan dan tumbuhan. Aktivitas manusia yang mengakibatkan pemanasan 
                   global akan membuat banyak hewan melakukan migrasi ke tempat lain. 
                   Tumbuhan-tumbuhan di suatu daerah bisa hilang atau mati karena iklimnya 
                   sudah tidak sesuai dengan habitat aslinya.</p>
                <b>6) Lapisan Ozon Menipis </b>
                <p>Lapisan ozon merupakan lapisan yang menyelimuti bumi sehingga tidak 
                   terkena radiasi langsung dari sinar matahari. Pemanasan global 
                   mengakibatkan lapisan ozon ini semakin menipis bahkan rusak. Dampak dari 
                   kerusakan lapisan ozon ini adalah sinar matahari yang langsung mengenai 
                   kulit manusia. Sinar ultraviolet yang langsung mengenai kulit dapat 
                   mengakibatkan penyakit kulit hingga kanker kulit.</p>
                </ul>

                <strong>4. Cara Mengatasi Pemanasan Global </strong>
                <p>Pemanasan global dapat diatasi dengan tindakan nyata oleh semua umat manusia 
                   di berbagai penjuru dunia. Eksploitasi alam yang selama ini dilakukan harus 
                   dikendalikan dengan baik. Mengacu pada pengertian pemanasan global di atas, 
                   berikut ini adalah beberapa upaya sederhana untuk mengatasinya: </p>
                <ul>
                    <b>a. Mengurangi Penggunaan Kendaraan Bermotor </b>
                    <p>Kendaraan bermotor sudah menjadi kebutuhan manusia saat ini sebagai alat 
                       transportasi. Namun, kita sering lupa bahwa asap kendaraan bermotor 
                       menyumbang CO2 yang mengakibatkan pemanasan global. Untuk mencegah 
                       pemanasan global, kita bisa mengurangi penggunaan kendaraan pribadi dan 
                       menggunakan angkutan massal. Dengan begitu, polusi udara akan berkurang 
                       dan dapat membantu mengatasi pemanasan global. </p>
                    <b>b. Menjaga Kelestarian Alam </b>
                    <p>Eksploitasi hasil alam yang berlebihan lebih banyak merugikan ketimbang 
                       menguntungkan untuk jangka panjang. Penebangan dan pembakaran hutan 
                       untuk membuka lahan sudah seharusnya dikendalikan atau dihentikan. 
                       Menanam kembali pohon di lahan yang dibakar/ditebang merupakan langkah 
                       konkrit yang bisa dilakukan untuk mengatasi pemanasan global.</p>
                    <b>c. Mengontrol Pemakaian Listrik </b>
                    <p>Penggunaan listrik yang berlebihan juga dapat menimbulkan pemanasan 
                       global. Hal ini terkesan sangat sepele namun dampaknya sangat besar. Lampu-
                       lampu dan peralatan listrik dapat mengeluarkan panas. Bayangkan berapa 
                       besar panas yang dikeluarkan bila seluruh manusia di bumi menggunakan 
                       listrik secara berlebihan. Selain membantu mengatasi pemanasan global, 
                       dengan mengontrol pemakaian listrik maka kita akan lebih hemat energi dan 
                       hemat biaya.</p>
                    <b>d. Mengendalikan Limbah </b>
                    <p>Limbah dapat mengeluarkan gas berbahaya ke udara. Gas berbahaya ini selain 
                       menimbulkan bau busuk, juga dapat menyebabkan efek rumah kaca yang 
                       menyebabkan panas matahari terperangkap di permukaan bumi. Dengan 
                       mengendalikan limbah, baik limbah rumah tangga maupun limbah industri, 
                       maka hal ini dapat membantu mengatasi pemanasan global. </p>
                </ul>

                <strong>5. Perjanjian Internasional </strong>
                <p>Kerja sama internasional diperlukan untuk mensukseskan pengurangan gas-gas 
                   rumah kaca. Ada dua perjanjian internasional terkait untuk menghadapi masalah 
                   gas rumah kaca yaitu Protokol Montreal dan Protokol Kyoto. </p>
                <p>Perjanjian internasional yang pertama yaitu Protokol Montreal adalah sebuah 
                   traktat internasional yang dirancang untuk melindungi lapisan ozon dengan 
                   meniadakan produksi sejumlah zat yang diyakini bertanggung jawab atas 
                   berkurangnya lapisan ozon. Traktat ini terbuka untuk ditandatangani pada 16 
                   September 1987 dan berlaku sejak 1 Januari 1989. Sejak itu, traktat ini telah 
                   mengalami lima kali revisi yaitu pada 1990 di London, 1992 di Kopenhagen, 1995 
                   di Vienna, 1997 di Montreal dan 1999 di Beijing.</p>
                <p>Protokol Montreal merupakan perjanjian antarbangsa yang dibentuk Perserikatan 
                   Bangsa-bangsa (PBB) dan bertanggung jawab untuk menghentikan penggunaan 
                   zat berbahaya yang mengikis ozon, seperti klorofluorokarbon (CFC) dan 
                   hidrofluorokarbon (HCFC).  </p>
                <p>Negara-negara yang meratifikasi Amandemen Kigali pada protokol montreal 
                   berkomitmen memangkas proyeksi produksi dan konsumsi gas yang dikenal 
                   dengan hydrofluorocarbons (HFCs) lebih dari 80 persen. Sejauh ini 99 negara 
                   telah memulainya dari total 197 negara. </p>
                <p>Perjanjian internasional yang kedua yaitu Protokol Kyoto adalah sebuah 
                   amendemen terhadap Konvensi Rangka Kerja PBB tentang Perubahan Iklim 
                   (UNFCCC), sebuah persetujuan internasional tentang pemanasan global yang 
                   disepakati pada tahun 1997 di Jepang yang disepakatii 160 negara.  </p>
                <p>Negara-negara yang meratifikasi protokol ini berkomitmen untuk mengurangi 
                   emisi/pengeluaran karbon dioksida dan lima gas rumah kaca lainnya, atau bekerja 
                   sama dalam perdagangan emisi jika mereka menjaga jumlah atau menambah 
                   emisi gas-gas tersebut, yang telah dikaitkan dengan pemanasan global.  </p>
                <p>Temuan ini menjadi krusial saat seluruh dunia baru-baru ini dibuat cemas oleh pesan dari Panel 
                   Antarpemerintah tentang Perubahan Iklim atau 
                   Intergovernmental Panel on Climate Change (IPCC). Oktober 2018, IPCC 
                   menyatakan temuan bahwa dunia hanya punya waktu 12 tahun untuk membatasi 
                   pemanasan global pada level 1,5 derajat celcius. Jika di atas angka itu akan 
                   membawa dampak ekstrim yang luas pada kehidupan manusia dan ekosistem.</p>
            </section>

            <section className="card">
                <h2>Proses Terjadinya</h2>
                <ul>
                    <li>
                        <strong>Pemantulan Sinar Matahari:</strong>Sebagian energi matahari dipantulkan kembali ke luar angkasa oleh atmosfer.
                    </li>
                    <li>
                        <strong>Absorpsi oleh Gas Rumah Kaca:</strong>Gas seperti karbondioksida (CO₂), metana (CH₄), dan uap air menyerap energi panas dan memantulkannya kembali ke permukaan bumi.
                    </li>
                    <li>
                        <strong>Efek Rumah Kaca:</strong>Proses ini menyebabkan suhu bumi meningkat karena panas terperangkap di atmosfer.
                    </li>
                </ul>     
            </section>
            <section>
                <h2>Dampak Pemanasan Global</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Dampak</th>
                            <th>Penjelasan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kenaikan Permukaan Laut</td>
                            <td>Pencairan es di kutub menyebabkan kenaikan volume air laut.</td>
                        </tr>
                        <tr>
                            <td>Perubahan Iklim</td>
                            <td>Cuaca menjadi tidak stabil, menyebabkan bencana seperti badai, banjir, dan kekeringan.</td>
                        </tr>
                        <tr>
                            <td>Kerusakan Ekosistrtem</td>
                            <td>Habitat alami hewan dan tumbuhan terganggu, menyebabkan kepunahan spesies.</td>
                        </tr>
                        <tr>
                            <td>Gangguan pada Kesehatan</td>
                            <td>Peningkatan penyakit akibat suhu tinggi, seperti dehidrasi dan gangguan pernapasan.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Upaya Mengurangi Pemanasan Global</h2>
                <ul>
                    <li>
                        Mengurangi emisi gas rumah kaca dengan beralih ke energi terbarukan seperti tenaga surya dan angin.
                    </li>
                    <li>
                        Mengurangi penggunaan kendaraan bermotor dan beralih ke transportasi ramah lingkungan.
                    </li>
                    <li>
                        Menanam lebih banyak pohon untuk menyerap karbon dioksida.
                    </li>
                    <li>
                        Menerapkan gaya hidup hemat energi seperti menggunakan lampu LED dan mematikan perangkat elektronik saat tidak digunakan.
                    </li>
                </ul>
            </section>
        </div>
        </div>
    );
};

export default Modul10;