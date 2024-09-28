import { Row, Col } from "react-bootstrap"
import "../styles/testimonials.css"
import { TestimonialsCards } from "./Card"


function Testimonials() {
  let info = [
    {
      "name": "Sara Blu",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Venezia",
      "review": "Non solo ho trovato semi rari, ma ho anche imparato tantissimo grazie alla comunità di Seed Swap. È un vero tesoro per chi ama il giardinaggio."
    },
    {
      "name": "Davide Rossi",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Bologna",
      "review": "Seed Swap ha reso il mio orto più vario e resistente alle malattie. Lo scambio di semi è una risorsa incredibile per qualsiasi giardiniere."
    },
    {
      "name": "Francesca Gialli",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Genova",
      "review": "Grazie a Seed Swap, ho scoperto una varietà di basilico che ora è il protagonista del mio giardino. La biodiversità è veramente affascinante!"
    },
    {
      "name": "Giorgio Marrone",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Palermo",
      "review": "Ho scambiato semi con agricoltori da tutta Italia e ho visto il mio orto prosperare con nuove varietà. Seed Swap è una risorsa incredibile."
    },
    {
      "name": "Elena Bianchi",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Bari",
      "review": "La piattaforma è facile da usare e mi ha messo in contatto con tanti altri appassionati. Ho scoperto semi che non avrei mai trovato nei negozi."
    },
    {
      "name": "Alessandro Verde",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Verona",
      "review": "Seed Swap mi ha aiutato a rendere il mio orto più diversificato e resistente. Scambiare semi è un modo fantastico per migliorare la biodiversità."
    },
    {
      "name": "Mark Colombus",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Milano",
      "review": "Grazie a Seed Swap, ho scoperto una varietà antica di pomodori che ora coltivo con successo nel mio orto urbano. La biodiversità non è mai stata così affascinante!"
    },
    {
      "name": "Giulia Rossi",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Roma",
      "review": "Seed Swap mi ha permesso di trovare semi di varietà rare che non avrei mai scoperto altrimenti. Il mio giardino è ora un tripudio di colori e diversità."
    },
    {
      "name": "Luca Bianchi",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Firenze",
      "review": "Con Seed Swap ho scambiato semi con persone da tutta Italia. È incredibile vedere come la biodiversità possa essere condivisa e diffusa con tanta facilità."
    },
    {
      "name": "Anna Verdi",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Napoli",
      "review": "La chat integrata di Seed Swap è fantastica! Ho conosciuto tanti appassionati come me e abbiamo scambiato consigli e semi preziosi."
    },
    {
      "name": "Marco Neri",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "from": "Torino",
      "review": "Grazie a Seed Swap, ho potuto coltivare varietà di piante che si adattano perfettamente al clima della mia zona. La mia resa è migliorata notevolmente."
    },

  ]

  return (
    <>
      <h1 className="mx-4">Testimonianze</h1>
      <Row className="py-5 mx-3 truncate">
        {TestimonialsCards(info)}
      </Row>
    </>
  )

}

export default Testimonials