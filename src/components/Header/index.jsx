import { FiSearch, FiLogOut } from "react-icons/fi";

import { Container, Brand, Search, Logout } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import brand from "../../assets/brand.svg";

export function Header() {
  

  return (
    <Container>
      <Brand>
        <img src={brand} alt="Logo" /> 
      </Brand>

      <Search>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
      </Search>

      <Button title="Novo prato" />

      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}