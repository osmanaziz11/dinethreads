import Image from "next/image";
import styles from "./ClientSection.module.css";

const ClientSection = () => {
  const clients = [
    {
      name: "ranchers",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJYOygME5kJL0rTyKeZk8-6acTnMHCJBgjg&s",
    },

    {
      name: "cheezious",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmU8dpwAwPs28NXVH39a1xsH3RNvWj6nRI79QGJni9rYRx2qnr2kPb2vNcXqcI5JLEQ",
    },
    {
      name: "hardees",
      logo: "/images/c1.png",
    },
  ];

  return (
    <section className={styles["clients-section"]}>
      <div className={styles["section-header"]}>
        <div className={styles["section-eyebrow"]}>Trusted By</div>
        <h2 className={styles["section-title"]}>Our Valued Clients</h2>
        <p className={styles["section-subtitle"]}>
          We are proud to partner with leading brands across hospitality and
          retail
        </p>
      </div>

      <div className={styles["clients-grid"]}>
        {clients.map((client) => (
          <div key={client.name} className={styles["client-logo"]}>
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              className={styles["logo-img"]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
