import Link from "next/link"; // Dynamic routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/Success.module.scss"; // Component styles
import { web3 } from "@containers/index"; // Global state

export default function Success() {
  const { address, authenticate } = web3.useContainer(); // Global state
  return (
    <Layout>
      <div className={styles.success}>
        {/* Success content */}
        <h2>Success!</h2>
        <p>
          Your FUND has been deposited, although it may take a few more minutes
          for the necessary confirmations and for it to propogate.
        </p>
        <p>You should see it on Home and in your Profile soon!</p>

        {/* Redirect to home Profile */}
        <Link href={`/elf`}>
          <a>Back Home</a>
        </Link>
      </div>
    </Layout>
  );
}
