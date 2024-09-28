import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx"
import Product from "./pages/Product.jsx"
import Profile from "./pages/Profile.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
/* 
Introduzione al sito
Breve descrizione del sito e del suo scopo.
seedSavers è un sito che permette lo scambio di semi in maniera indipendente tra utenti 

Benefici dello scambio di semi per la biodiversità e la sostenibilità.
lo scambio di semi permette di conservre varietà antiche che altrimenti !!!andrebbero perdute. Le sementi antiche
conservano l'identità culturali del luogo d'origine attraverso la cucina. Aumentare la biodiversita anche in campo agricolo
è un beneficio per tutta la comunità perchè conservando varie varieta l'intera specie diventa piú resistente garantedo
la produzione di cibo

!! tasto Registrazione e creazione del profilo

Come impostare un profilo utente, inclusa l’aggiunta di informazioni personali e preferenze sui semi.

Navigazione nel catalogo dei semi

filtri di ricerca per trovare semi specifici.

Pubblicazione di semi per lo scambio

Guida passo - passo su come gli utenti possono elencare i propri semi per lo scambio.
Informazioni necessarie da includere nell’elenco, come la descrizione del seme, la stagione di crescita, e le istruzioni di piantagione.
Interazione con altri utenti
Modalità di comunicazione con altri utenti per discutere dello scambio.
Norme di comportamento e sicurezza da seguire durante l’interazione.
Processo di scambio
Descrizione del processo di scambio, dalla negoziazione alla transazione finale.
Metodi di scambio accettati, come la consegna diretta o la spedizione.
Feedback e recensioni
Importanza del lasciare feedback dopo uno scambio.
Come le recensioni influenzano la reputazione degli utenti sul sito.
Supporto e assistenza
Informazioni su come contattare il supporto per aiuto o segnalare problemi.
Risorse aggiuntive disponibili, come FAQ o forum della comunità.
  Conclusione
Riepilogo dei vantaggi dell’utilizzo del sito.
Invito agli utenti a partecipare attivamente alla comunità di scambio di semi.

 */
/* function App() {
  return (
    <div className='container'>
      
      <h1 className='home-title'>Benvenuto su Seed Save</h1>
      <h6 className='home-title small'>la piattaforma per scambiare e salvare varietà antiche in Italia</h6>
      <img src={photo}  alt="home" />
      <h1>Cos'è Seed Save?</h1>
      <p>Seed Save è una piattaforma che consente di schttps://cdpn.io/JacobLett/fullpage/weqOjq?anon=true&view=fullpage#carouselambire semi in modo gratuito tra gli utenti della piattaforma in modo da diffondere le varietà antiche che rischiamo di perdere per sempre.</p>
    </div>
  );
} */


