import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Image, Center } from "@chakra-ui/react";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const Logo = () => 
<Image 
 w={{ base: '50px', sm: '70px', lg: '100px' }}
 src="./logomarca.svg"></Image>;

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "row" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      pb={2}
    >
      <Stack
        spacing={{ base: '2', sm: '4', lg: '8' }}
        align="center"
        fontSize={{ base: 'sm', sm: 'xs', lg: 'xl' }}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "block", "row", "row"]}
        pt={[4, 0, 0, 0]}
      >
        <MenuItem to="/"> Sobre a Escola </MenuItem>
        <MenuItem to="/cursos"> Planos de Carreira </MenuItem>
        <MenuItem to="/eja"> Ensino EJA </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            variant={"primary"}
            fontSize={{ base: 'sm', sm: 'sm', lg: 'xl' }}
            fontWeight={"normal"}
            leftIcon={
              <lord-icon src="/icons/icon-whats.json" trigger="hover" />
            }
            w={{ base: '140px', sm: '160px', lg: '240px' }}
          >
            Matricule-se
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      pos={"fixed"}
      zIndex={2}
      wrap="wrap"
      w="100%"
      mb={2}
      p={2}
      bg={["orange.900", "orange.900", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
