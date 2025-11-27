import SideMenu from "../../component/SideMenu";
import HomeIcon from "@mui/icons-material/Home";
import IconTextButton from "../../component/IconTextButton";

const Avaliacao = () => {
  return (
    <SideMenu 
      titleText="Avaliação"
    >
      <IconTextButton
          onClick={() => {}}
          color="background.default"
          hoverColor="text.secondary"
          icon={<HomeIcon />}>
            Início
      </IconTextButton>
      <IconTextButton
          onClick={() => {}}
          color="background.default"
          hoverColor="text.secondary"
          icon={<HomeIcon />}>
            Início
      </IconTextButton>
    </SideMenu>
  )
};

export default Avaliacao;