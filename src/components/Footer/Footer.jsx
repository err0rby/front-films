import styles from "../Footer/Footer.module.css";
import telelogs from "../Footer/imgs/telephone.png"
import log1 from "../Footer/imgs/telegram.png"
import log2 from "../Footer/imgs/whatsapp.png"
import log3 from "../Footer/imgs/youtube.png"

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Foot2}>
        <div className={styles.Blocks}>
            <div className={styles.Numb}>
                <p>© 2023 TaskEase</p>
            </div>
            <div className={styles.logotips}>
                <div className={styles.qqq}><img src={log1} alt="q" /></div>
                <div className={styles.qqq}><img src={log2} alt="q" /></div>
                <div className={styles.qqq}><img src={log3} alt="q" /></div>
            </div>
            <div className={styles.phone}>
                <div><p>Для аварийного случая</p></div>
                <div><img src={telelogs} alt="q" /></div>
                <div><p>123-456-789</p></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
