import Link from "next/link"; // Dynamic routing
import { useState } from "react"; // State management
import { web3 } from "@containers/index"; // Global state
import styles from "@styles/components/Header.module.scss"; // Component styles

// Header
export default function Header() {
  const [loading, setLoading] = useState(false); // Loading state
  const { address, authenticate } = web3.useContainer(); // Global state

  const authenticateWithLoading = async () => {
    setLoading(true); // Toggle loading
    await authenticate(); // Authenticate
    setLoading(false); // Toggle loading
  };

  return (
    <div className={styles.header}>
      {/* Logo */}
      <div className={styles.header__logo}>
        <Link href="/">
          <a>
            <img src="/difo.jpg" alt="DIFO" />
          </a>
        </Link>
      </div>

      {/* Menu */}
      <div className={styles.header__menu}>
        
        {address ? (
          // If user is authenticated
          <>
            <Link href={`/comp`}>
              <a className={styles.header__menu_button_black}>Compound Yield</a>
            </Link>
            <Link href={`/elf`}>
              <a className={styles.header__menu_button_black}>ELF Yield</a>
            </Link>
            <Link href={`/create`}>
              <a className={styles.header__menu_button_black}>Add Asset</a>
            </Link>
            <Link href={`/profile/${address}`}>
              <a className={styles.header__menu_button_gray}>
                {"Asset Owner " + address.substr(0, 3) + "..." + address.slice(address.length - 3)}
              </a>
            </Link>
          </>
        ) : (
          // Else if user is not authenticated
          <button  className={styles.header__menu_button_black}
            onClick={authenticateWithLoading} disabled={loading}
          >
            {loading ? "Connecting..." : "Connect"}
          </button>
        )}
      </div>
    </div>
  );
  
}
