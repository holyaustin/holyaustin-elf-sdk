import { useState } from "react"; // State management
import Layout from "@components/Layout"; // Layout wrapper
import { web3 } from "@containers/index"; // Web3 container
import styles from "@styles/pages/Create.module.scss"; // Page styles
import { useRouter } from "next/router"; // Router
import Card from "../components/Card";


const useStyles = () => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingBottom: theme.spacing(8),
    },
    link: {
      textDecoration: "none",
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.15s ease-in-out",
    },
    cardHovered: {
      transform: "scale3d(1.05, 1.05, 1)",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    bold: {
      fontWeight: 600,
    },
  });
  
export default function comp() {
  const router = useRouter(); // Router navigation
  // Global state
  const { address  } = web3.useContainer();

  const deposit = () => {

  }

  return (
    <Layout> 
      { !address ? ( <div> <p>Please authenticate</p></div>) : (
          <div className="form-group">
              <h2>Status</h2>
              <Card
                header="~10 NFTs"
                text="Minted on OURZ"
                add="Since March 2021"
              />

              <div>
                  <button onClick={deposit} className="btn btn-outline-warning" 
                  >
                    Deposit
                  </button>
              </div>


          </div>
        )
      }
    </Layout>
  );

}