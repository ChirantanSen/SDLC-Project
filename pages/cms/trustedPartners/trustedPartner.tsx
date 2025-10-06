export default function ClientsCarousel() {
  // Static local images from /public/clients/
  const logos = [
    "/clients/client-1.png",
    "/clients/client-2.png",
    "/clients/client-3.png",
    "/clients/client-4.png",
    "/clients/client-5.png",
    "/clients/client-6.png",
    "/clients/client-7.png",
    "/clients/client-8.png",
  ];

  // Duplicate the array so it looks infinite when sliding
  const scrollingLogos = [...logos, ...logos];

  return (
    <section
      style={{
        padding: "40px 20px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div style={{  margin: "0 auto" }}>
        {/* <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "30px",
          }}
        >
          Our Leading Partners
        </h2> */}
         <div
            style={{
              background: "linear-gradient(to right, #e8e6f7, #fff)",
              padding: "30px 0",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#0b0b4c",
                margin: 0,
              }}
            >
               Our Leading Partners
            </h2>
          </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Scrolling track */}
          <div
            style={{
              display: "flex",
              animation: "scroll 20s linear infinite",
            }}
          >
            {scrollingLogos.map((logo, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 auto",
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <img
                  src={logo}
                  alt={`Client ${i + 1}`}
                  style={{
                    maxWidth: "120px",
                    height: "auto",
                    objectFit: "contain",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter = "grayscale(0%)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "grayscale(100%)")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}
