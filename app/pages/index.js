import client from "@data/index"; // GraphQL client
import Post from "@components/Post"; // Post component
import Layout from "@components/Layout"; // Layout
import { useState, useEffect } from "react"; // React state management
import { getPostByID, getPostByOwner } from "@data/functions"; // Post collection helper
import styles from "@styles/pages/Home.module.scss"; // Component styles

export default function Home() {
  const [posts, setPosts] = useState([]); // Posts array
  const [loading, setLoading] = useState(false); // Button loading state
  const [numPosts, setNumPosts] = useState(null); // Number of loadable posts

  /**
   * Collects initial 6 propertis to display
   */
  const collectInitialPosts = async () => {
     let initialPosts = [];
    setPosts([...initialPosts]); // Update new posts
  };

  /**
   * Collects more posts (6 at a time, unless < 6 remaining posts)
   */
  const collectMore = async () => {
    setLoading(true); // Toggle button loading

    let newPosts = [];
    console.log(Math.max(numPosts - 7, 0), numPosts);
    // For numPosts ... max(numPosts - 7, 0)
    for (let i = numPosts; i >= Math.max(numPosts - 7, 0); i--) {
      // FIXME: hardcoded fix for /dev/null lmao
      if (i !== 2) {
        // Collect post
        const post = await getPostByID(i);
        // Push post to newPosts
        newPosts.push(post);
      }
    }

    setPosts([...posts, ...newPosts]); // Append newPosts to posts array
    setNumPosts(numPosts - 8); // Update number of loadable posts count
    setLoading(false); // Toggle button loading
  };

  // Collect initial posts on load
  useEffect(collectInitialPosts, []);

  return (
    <Layout>
      {/* Subheader disclaimer */}
      <div className={styles.subheader}>
        <span>
          DIFO {" "} Yield Farming {" "} with Element Fi and NFT{" "}
          <a href="http://localhost:3000/"  target="_blank"  rel="noopener noreferrer">
            Check out
          </a>
        </span>
      </div>

      {posts.length > 0 ? (
        // If posts array contains > 0 posts
        <>
          
          <div className={styles.showcase}>
            {posts.map((post, i) => {
              // For each Zora post
              return (
                // Return Post component
                <Post
                  key={i}
                  creatorAddress={post.creator.id}
                  ownerAddress={post.owner.id}
                  createdAtTimestamp={post.createdAtTimestamp}
                  mimeType={post.metadata.mimeType}
                  contentURI={post.contentURI}
                  name={post.metadata.name}
                />
              );
            })}
          </div>

          {posts && posts.length > 0 && posts[posts.length - 1].id !== "0" ? (
            // If there remain posts that can be loaded, display button
            <div className={styles.showcase__more}>
              <button onClick={() => collectMore()} disabled={loading}>
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          ) : (
            // Else, display text signalling (end, beginning)
            <div className={styles.showcase__more}>
              <span>Is this the end or beginning? You decide.</span>
            </div>
          )}
        </>
      ) : (
        // Else, display loading state
        <div className={styles.loading}>
          <h4>Connect and click your account to see your assets</h4>
        </div>
      )}
    </Layout>
  )
}

