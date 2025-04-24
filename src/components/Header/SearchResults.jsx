import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "../Footer/Footer";

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `https://apitestpricemal.nodejsdapldevelopments.com/api/products-details/apple-iphone-16`
        );

        const product = res.data?.data;

        if (product) {
          setProducts([product]); // wrap in array to map over
        } else {
          setError("No product found.");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Header />

      <section className="top-banner inner d-flex align-items-center">
        <div className="container">
          <div className="banner-inner d-flex align-items-center justify-content-between">
            <div className="banner-content">
              <h1>Your Smart Shopping Assistant: Compare Before You Buy</h1>
            </div>
            <img src="assets/img/product-img.png" alt="Banner" />
          </div>
        </div>
      </section>

      <div className="container my-5">
        {/* <h2>Search Results for: "{query}"</h2> */}

        {products.length === 0 ? (
          <p>No products found for your search.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} style={{ marginBottom: "40px" }}>
              <h3>{product.name}</h3>

              <img
                src={product.image_urls?.[0]}
                alt={product.name}
                style={{ maxWidth: "200px", marginBottom: "10px" }}
              />

              <h4>Top Features:</h4>
              {Object.entries(product.top_feature || {}).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}

              <p>
                <strong>Brand:</strong> {product.brand || "N/A"}
              </p>
              <p>
                <strong>Price:</strong> ${product.price || "N/A"}
              </p>

              <div class="product-description">
                <h4>Product Description</h4>
                <p>{product.description}</p>{" "}
                <div class="d-flex align-items-center justify-content-end">
                  <a href="">
                    View More <i class="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>

              <h4>Specifications:</h4>
              {product.product_specifications?.map((spec, index) => (
                <div key={index}>
                  <strong>{spec.key}:</strong> {spec.value}
                </div>
              ))}

              <hr />
            </div>
          ))
        )}
      </div>

      {/* <div class="product-specification">
        <h3>Product Specifications</h3>
        <div class="spec-block">
          <h4>Features</h4>
          <div class="spec-block-inner">
            <div class="sgl-spec">
              <div class="sgl-spec-title">Headphone output</div>
              <div class="sgl-spec-desc">
                <span class="no">No</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Display</div>
              <div class="sgl-spec-desc">Color</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Keyboard</div>
              <div class="sgl-spec-desc">
                <span class="no">No</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Dual SIM</div>
              <div class="sgl-spec-desc">
                <span class="yes">Yes</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Water resistant</div>
              <div class="sgl-spec-desc">
                <span class="yes">Yes</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">NFC</div>
              <div class="sgl-spec-desc">
                <span class="yes">Yes</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">SIM size</div>
              <div class="sgl-spec-desc">Nano SIM</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Release date</div>
              <div class="sgl-spec-desc">2023</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Multimedia formats</div>
              <div class="sgl-spec-desc">
                Support formats include AAC, MP3, Apple Lossless, FLAC, Dolby
                Digiatl
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Available colors</div>
              <div class="sgl-spec-desc">Black, Blue, White</div>
            </div>
          </div>
        </div>

        <div class="spec-block">
          <h4>System</h4>
          <div class="spec-block-inner">
            <div class="sgl-spec">
              <div class="sgl-spec-title">Operating system</div>
              <div class="sgl-spec-desc">Apple iOS 17</div>
            </div>
          </div>
        </div>

        <div class="spec-block">
          <h4>Camera</h4>
          <div class="spec-block-inner">
            <div class="sgl-spec">
              <div class="sgl-spec-title">Camera</div>
              <div class="sgl-spec-desc">
                <span class="yes">Yes</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Rear camera resolution</div>
              <div class="sgl-spec-desc">48 MP</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Front camera resolution</div>
              <div class="sgl-spec-desc">12 MP</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Video recording</div>
              <div class="sgl-spec-desc">
                <span class="yes">Yes</span>
              </div>
            </div>
          </div>
        </div>

        <div class="spec-block">
          <h4>Video</h4>
          <div class="spec-block-inner">
            <div class="sgl-spec">
              <div class="sgl-spec-title">Video resolution</div>
              <div class="sgl-spec-desc">4096x2160 Pix</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Video format</div>
              <div class="sgl-spec-desc">
                HEVC, H.264, AV1, and ProRes. It also supports HDR with Dolby
                Vision, HDR10, and HLG. The iPhone 15 Pro Max can record video
                in 4K, 1080p HD, and 720p HD
              </div>
            </div>
          </div>
        </div>

        <div class="spec-block">
          <h4>Screen</h4>
          <div class="spec-block-inner">
            <div class="sgl-spec">
              <div class="sgl-spec-title">Number of colors</div>
              <div class="sgl-spec-desc">16 777 216 colors</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Display resolution</div>
              <div class="sgl-spec-desc">1290x2796 pix</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Screen size</div>
              <div class="sgl-spec-desc">6.7 in</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Display size</div>
              <div class="sgl-spec-desc">OLED</div>
            </div>
          </div>
        </div>

        <div class="spec-block">
          <h4>Memory</h4>
          <div class="spec-block-inner">
            <div class="sgl-spec">
              <div class="sgl-spec-title">Internal storage size</div>
              <div class="sgl-spec-desc">256 GB</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">RAM memory</div>
              <div class="sgl-spec-desc">8 GB</div>
            </div>
          </div>
        </div>

        <div class="spec-block">
          <h4>Processor</h4>
          <div class="spec-block-inner">
            <div class="sgl-spec">
              <div class="sgl-spec-title">Processor speed</div>
              <div class="sgl-spec-desc">3.46 GHz</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">SoC/CPU</div>
              <div class="sgl-spec-desc">Apple A17 Pro</div>
            </div>
          </div>
        </div>
        <div class="spec-block">
          <h4>Communication</h4>
          <div class="spec-block-inner">
            <div class="sgl-spec">
              <div class="sgl-spec-title">5G</div>
              <div class="sgl-spec-desc">
                <span class="yes">Yes</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">4G(LTE)</div>
              <div class="sgl-spec-desc">
                <span class="yes">Yes</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">WIFI</div>
              <div class="sgl-spec-desc">
                <span class="yes">Yes</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Bluetooth</div>
              <div class="sgl-spec-desc">
                <span class="yes">Yes</span>
              </div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Bluetooth version</div>
              <div class="sgl-spec-desc">5.3</div>
            </div>
            <div class="sgl-spec">
              <div class="sgl-spec-title">Connectivity</div>
              <div class="sgl-spec-desc">
                Wi-FI 6E, 802.11a, 802.11ac(Wi-Fi 5)
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default SearchResults;
