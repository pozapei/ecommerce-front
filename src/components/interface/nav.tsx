import { Button } from "../ui/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import Link from "next/link";

export const AcmeLogo = () => {
  return (
    <svg
      width="90"
      height="92"
      viewBox="0 0 541 554"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M380.382 369.034C373.495 278.574 539.5 1.78906 539.5 1.78906C439.256 46.0862 179.437 252.965 130.358 188.21C117.959 171.85 152.824 286.228 140.772 255.804C109.266 176.271 16.2321 215.047 23.8365 215.047C97.3785 215.047 -22.6508 299.288 4.61023 462.747C26.4191 593.514 174.968 553.589 246.516 517.281C213.803 499.103 149.266 444.004 152.824 369.034C156.382 294.064 337.577 333.778 380.382 369.034Z"
        stroke="white"
        fill="white"
      />
    </svg>
  );
};

export default function Nav() {
  return (
    <Navbar >
      <NavbarBrand>
        <AcmeLogo/>
        <p className="font-bold text-inherit">AKNA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
