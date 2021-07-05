import { useState } from "react"; // State management
import Layout from "@components/Layout"; // Layout wrapper
import { web3 } from "@containers/index"; // Web3 container
import styles from "@styles/pages/Create.module.scss"; // Page styles
import Dropzone from "react-dropzone"; // React dropzone upload
import { useRouter } from "next/router"; // Router

export default function Create() {
  const router = useRouter(); // Router navigation
  const [loading, setLoading] = useState(false); // Global loading state
  const [name, setName] = useState("$240,000"); // Property Address
  const [currentValuation, setCurrentValuation] = useState("$210,000"); // Property Address
  const [share, setShare] = useState(10); // Media fee share with past owner
  const [upload, setUpload] = useState(null); // Uploaded file
  const [uploadName, setUploadName] = useState(""); // Uploaded file name
  const [uploadText, setUploadText] = useState(null); // Text content
  const [description, setDescription] = useState("NFT short description"); // Property description
  // Global state
  const { address, authenticate, mintMedia } = web3.useContainer();

  const mintWithLoading = async () => {
    setLoading(true); // Toggle loading
    try {
      await mintMedia(upload, name, description, share); // Mint media
      router.push("/success"); // Redirect to success page
    } catch (e) {
      console.log("Error when executing: ", e);
    }
    setLoading(false); // Toggle loading
  };

  const dropHandler = async (file) => {
    // Save file
    const [File] = file;
    setUpload(File);

    // Update upload name
    const fileName = File.name;
    setUploadName(fileName);

    // Update text content if text file
    if (File.type.startsWith("text")) {
      const textContent = await File.text();
      setUploadText(textContent);
    }
  };
  
  return (
    <Layout> 
    {
        !address ? (
            <div>
                <p>Please authenticate</p>
            </div>
        ) : (
            <div className="form-group">
                <h2>UPLOAD a NFT</h2>
                <div className={styles.create__upload}>
                    <div>
                        <p>Upload Image</p>
                        <Dropzone maxFiles={1} accept={[
                            "image/png", "image/jpeg", "image/gif", "video/mp4",
                            "video/quicktime", "audio/mpeg", "audio/wav", "text/plain",
                            ]}
                            onDrop={(acceptedFiles) => dropHandler(acceptedFiles)}
                            >
                            {({ getRootProps, getInputProps  }) => (
                                <section>
                                    <div className={styles.upload__field} {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <span>{uploadName ? uploadName
                                            : "You can drag and drop file here."}
                                        </span>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div></div>
                    <div>
                        <label htmlFor="description">Description</label> {" "}
                        <textarea id="description" type="text" placeholder="Enter Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="name"> Estimated Value Range{" "}
                            <span className={styles.create__upload_required}>
                                (required)  
                            </span>
                        </label> {"  "}
                        <input id="name" type="text" placeholder="Estimated Value"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="currentValuation"> Current Valuation{" "}
                        <span className={styles.create__upload_required}>
                            (required)
                        </span>
                        </label> {"  "}
                        <input id="currentValuation" type="text" placeholder="Current Valuation"
                                value={currentValuation}
                                onChange={(e) => setCurrentValuation(e.target.value)}
                        />
                    </div>
                    <div>
                        <button onClick={mintWithLoading} className="btn btn-outline-warning" 
                        disabled={
                            name === "" || // No name
                            !upload || // No uploaded file
                            loading // Global loading state
                            }
                        >
                            {loading ? "Minting..." : "Mint Media"}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    </Layout>
  );

}
