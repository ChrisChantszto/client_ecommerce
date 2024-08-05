import Container from '../Container';
import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerImage}>
            <img src="https://i.imgur.com/AgoLA2i.jpeg" alt="Disney on Ice 3" />
          </div>
          <div className={styles.footerText}>
            &copy; Play Eat Easy
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;