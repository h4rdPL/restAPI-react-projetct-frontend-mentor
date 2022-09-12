import { Menu } from "./Navigation";

export default {
  title: "Example/Organisms/Navigation",
  component: Menu,
};

function Primary() {
  return <Menu />;
}
export const Nav = Primary.bind({});
