import "../styles/button.css"
import { Button } from "react-bootstrap"

export function Btn({children, onClick}){
  return <Button id="button" onClick={onClick}>
    {children}
  </Button>
}

export function SmallButton({ children, onClick }) {
  return <Button id="s-button" onClick={onClick}>
    {children}
  </Button>
}

