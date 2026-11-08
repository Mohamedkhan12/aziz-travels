
import styles from "./style";

import {
  Navbar,
  Hero,
  Destinations,
  TourPackages,
  Business,
  Testimonials,
  Contact,
  Footer,
  WhatsAppButton,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <Navbar />
      </div>
    </div>

    {/* Hero */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Hero />
      </div>
    </div>

    {/* Main Sections */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <Destinations />
        <TourPackages />
        <Business />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>

    {/* Floating WhatsApp Button */}
    <WhatsAppButton />
  </div>
);

export default App;
