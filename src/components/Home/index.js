import { useEffect, useState, useRef } from "react";
import Header from "../../assets/img/header.png";
import Store from "../../assets/img/store.jpg";
import Section from "./section";
import CardImage from "../CardImage";
import { getServices, getGalery, order, getContact } from "../../apis";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "450px"
    },
  };

const Home = () => {
  const [product, setProduct] = useState([]);
  const [galery, setGalery] = useState([]);
  const [contact, setContact] = useState({})
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState({nama: "", nomor: ""});
  let id_layanan = useRef(null);
  const layananRef = useRef(null);
  const galeryRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    getServices().then((res) => setProduct(res.data.data));
    getGalery().then((res) => setGalery(res.data.data));
    getContact().then(res => setContact(res.data.data));

    // document.addEventListener('scroll', ({target}) => console.log(window.scrollY))
  }, []);

  const openModal = id => {
    id_layanan.current = id;
    setModal(true);
  }

  const onOrder = () => {
      setModal(false)
      let data = {
          id_layanan: id_layanan.current,
          nama: info.nama,
          nomor: info.nomor
      }

      alert('Terimakasih telah memboking dan silahkan tunggu kabar selanjutnya')
      
      order(data).then(res => {
        console.log(res)
      })
  }

  return (
    <>
    <nav style={{height: "60px", width: "100%"}} className="shadow flex flex-row justify-center md:justify-end items-center fixed bg-white">
      <ul className="flex flex-row">
          <li className="mx-5 font-medium nav">
              <p className={"cursor-pointer"} onClick={() => window.scrollTo(0, 0)}>Home</p>
          </li>
          <li className="mx-5 font-medium nav" onClick={() => layananRef.current.scrollIntoView()}>
              <p className="cursor-pointer">Layanan</p>
          </li>
          <li className="mx-5 font-medium nav">
              <p className="cursor-pointer" onClick={() => galeryRef.current.scrollIntoView()}>Galery</p>
          </li>
          <li className="mx-5 font-medium nav ">
              <p className="cursor-pointer" onClick={() => aboutRef.current.scrollIntoView()}>Tentang Kami</p>
          </li>
      </ul>
    </nav>
    <div>
      <div
        style={{
          background: `url(${Header})`,
          height: "586px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Modal
        isOpen={modal}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <h2 className="text-4xl">Order</h2>
            <hr/>
            <div style={{width: "100%"}} className="mt-5">
                <label for="first-name" className="block text-sm font-medium text-gray-700">Nama</label>
                <input type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" style={{width: "100%"}} value={info.nama} onChange={({target}) => setInfo(info => ({...info, nama: target.value}))} />
            </div>
            <div style={{width: "100%"}} className="mt-5">
                <label for="first-name" className="block text-sm font-medium text-gray-700">Nomor Whatsapp</label>
                <input type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" style={{width: "100%"}} value={info.nomor} onChange={({target}) => setInfo(info => ({...info, nomor: target.value}))} />
            </div>

            <div className="flex flex-row justify-end">
                <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded mt-10 mr-3"
                style={{ width: "100px" }} onClick={() => setModal(false)}
                >
                Close
                </button>
                <button
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 rounded mt-10 mr-3"
                style={{ width: "150px" }} onClick={() => window.location.href = `https://wa.me/${contact.whatsapp}?text=Saya%20ingin%20melakukan%20booking%20pada%20product%20anda`}
                >
                Hubungi Langsung
                </button>
                <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-10"
                style={{ width: "100px" }}
                onClick={onOrder}
                >
                Booking
                </button>
            </div>
        </Modal>
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, .6)", height: "100%" }}
          className="text-white flex flex-col justify-center px-10"
        >
          <h1 className="text-5xl mb-10">Salon Syafa</h1>
          <div>
            <p>Nikmati kemudahan layanan kami</p>
            <p>Dengan melakukan booking online di sini</p>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-10"
            style={{ width: "150px" }}
          >
            Mulai Berbelanja
          </button>
        </div>
      </div>

      <div ref={layananRef}>
        <Section title="Daftar Paket">
          <div className="flex flex-row flex-wrap justify-center sm:justify-between">
            {product.map((val) => (
              <CardImage
                className="mb-5"
                img={val.image}
                title={val.nama}
                description={val.deskripsi}
                onClick={() => openModal(val.id)}
              />
            ))}
          </div>
          <div className="flex flex-row justify-center">
            <a href="" className="active text-xl">
              See More
            </a>
          </div>
        </Section>
      </div>

      <div ref={galeryRef}>
        <Section title="Galery" style={{ background: "#F1F1F1" }}>
          <div className="flex flex-wrap flex-row justify-center sm:justify-between">
            {galery.map(
              (val) =>
                val.image &&
                val.image !== "" && (
                  <img src={val.image} width={300} className="shadow mb-5" />
                )
            )}
          </div>
        </Section>
      </div>

      <div ref={aboutRef}>
        <Section title="Tentang Kami">
          <div className="flex flex-col md:flex-row">
            <div style={{ minWidth: "30%" }}>
              <img src={Store} className="mb-10" />
              <iframe
                width="100%"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/car-satnav-gps/">sat navs</a>
              </iframe>
            </div>
            <div className="ml-10">
              {contact.about}
            </div>
          </div>
        </Section>
      </div>
    </div>
    </>
  );
};

export default Home;
