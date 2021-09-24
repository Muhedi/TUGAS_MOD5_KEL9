import { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import handphoneImage from "./images/home.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderAllOutlined } from "@material-ui/icons";
import "./App.css";

const styles = makeStyles((theme) => ({

}));
const themes = {
  light: {
    background: "#bc8e52",
    color: "#F8F8FF",
    backgroundSize: "100%",
  },
  dark: {
    background: "#d10000",
    color: "#F8F8FF",
    backgroundSize: "100%",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();

  const [valueTheme, setValueTheme] = useState(themes.light);
  const theme = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  return (
    <body>
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background, backgroundSize: "10%"  }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="ffff24" align ="center" direction ="left" scrollamount="10">  TOKOPAEDI.COM {valueInput.name} PUSAT KUOTA DAN PULSA TERMURAH, INI BUKAM TIPU-TIPU KAKAK!, BY KELOMPOK 9, MUHAMMAD EDI ILFA</marquee>
 
    
            <button
                className="button"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                  )
                }
              >
              <FontAwesomeIcon icon={faHome} />
              </button>
            
          <center>
          <div className="judul">
             <h2 className="judul" style={{ color:"#52ff52", fontFamily:"Arial", fontWeight: "bold" }}>TOKOPAEDI.COM</h2>
            <h6 className="ISI" style={{ color:"#FFFFFF", fontFamily:"Arial", fontWeight: "bold" }}>PUSAT JUAL KUOTA DAN PULSA MURAH!</h6>
            <h6>Bisa dilihat-lihat dulu kakak!</h6>
            <div className="gambar">
              <center>
             
                <img src={handphoneImage} style={{ height: "600px"  }} />
             
              </center>
            </div>
          </div>
          </center>
          <marquee style={{ fontWeight: "bold" }} bgcolor="ffff24" align ="center" direction ="left" scrollamount="10"> PUSAT KUOTA DAN PULSA TERMURAH SEJAGAD. MONGGO AGAN-AGAN PADA MAMPIR</marquee>
          </div>
          <h2>
          </h2>
    </ThemeContext.Provider>
    </body>
  );
}
