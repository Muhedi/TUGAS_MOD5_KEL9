import React, { Fragment } from "react";

class Kasir extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      kuota: [
        ["PULSA 5K", 6500],
        ["PULSA 10K", 11000],
        ["PULSA 50K", 51000],
        ["PULSA 100K", 100000],
        ["PULSA 1000K", 998000],
        ["INDOSAT 12GB/30Hari", 98000],
        ["INDOSAT 4G UNLMTD", 145000],
        ["telkomsel 10GB 20hari", 108000],
        ["telkomsel orbit 5G 100GB", 130000],
        ["telkomsel orbit 5G 500GB", 500000],
        ["XL 15GB", 45000],
        ["xl UNLMTD", 140000],
        ["xl super ngebut 5GB", 49000],
        ["Smartfren UNLMTD lite", 51000],
        ["smartfren UNLMTD Max", 74000],
        ["3 12GB", 50000],
        ["3 38GB", 100000],
      ],
      
      produk: {
        produk1: 0,
        produk2: 0,
      },
      totalTagihan: 0,
    };
  }

  handleCalculation = () => {
    const { produk1, produk2} = this.state.produk;
    var total = produk1 + produk2;
    this.setState({
      ...this.state.produk,
      totalTagihan: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { produk } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        produk: {
          ...produk,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }

  render() {
    const {kuota, totalTagihan } = this.state;
    return (
      <div style={{ backgroundColor: "#bb1111", height: "850px"   }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="FFF300" align ="center" direction ="left" scrollamount="10">TOKOPAEDI.COM PUSAT KUOTA DAN PULSA TERMURAH, INI BUKAM TIPU-TIPU KAKAK!, BY KELOMPOK 9, SILAHKAN DIPILIH KAKAK! </marquee>
        <div className="titleWrapper">
          <center>
            <p className="judul" style={{ color:"#FFF300", fontFamily:"Arial", fontWeight: "bold" }}>BELI KUOTA DAN PULSA!</p>
            </center>
        </div>
          <div className="inputWrapper">
            <center>
            <label >Masukkan NO HP:</label>
            </center>
            <div>
              <center>
              <input style={{
                   background: "#efdbff",
                   color: "#4B0082",
                   margin: "auto",
                   height: "40px",
                   border: "#9254de",
                   fontSize: "15px"
                }}
                placeholder="HP"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
            <center>
            <label >JENIS KARTU SIM:</label>
            </center>
            <div>
              <center>
              <input
              style={{
                background: "#efdbff",
                color: "#4B0082",
                margin: "auto",
                height: "40px",
                border: "#9254de",
                fontSize: "15px"
              }}
                placeholder="misal telkomsel atau indosat"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
          </div>
      <>
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="sarapan">
                <br />
                <center>
                <label >Pilih kuota/pulsa :    </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk1"
                  style={{ cursor: "pointer", background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px" }}
                >
                  <option value="0">kuota</option>
                  <Fragment>
                    {kuota.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                </center>
                
                <br />
              </div>
              <h3
                style={{
                  color: "#feff50",
                  textAlign: "center",
                  flex: "1 0 100%",
                  margin: "auto",
                  fontFamily:"sans-serif",
                  fontStyle:"italic"
                }}
              >
                Total Harga {totalTagihan} 
              </h3>
            </div>
          </div>
        </div>
        </>
        </div>
    );
  }
}

export default Kasir;
