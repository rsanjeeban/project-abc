import { AppBarSection, Avatar } from "@progress/kendo-react-layout";
// let avatar = "../../assets/avatar.jpg";
let avatar =
  "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";

function User(props) {
  return (
    <AppBarSection>
      <Avatar shape="circle" type="image">
        <img src={avatar} />
      </Avatar>
    </AppBarSection>
  );
}
export default User;
