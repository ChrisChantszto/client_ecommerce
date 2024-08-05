import Head from 'next/head';
import Link from 'next/link';
import Layout from '@components/Layout';
import Container from '@components/Container';
import styles from '@styles/Home.module.css';
import products from '../../products.json';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Play Eat Easy</title>
      </Head>
      <Container className={styles.homeContainer}>
        <div className={styles.imageGallery}>
          <img src="https://i.imgur.com/g5cd7YT.jpg" alt="disney on ice 1" />
        </div>
        <div className={styles.productsSection}>
          <h2>Our Products</h2>
          <div className={styles.grid}>
            {products.map(product => {
              return (
                <div key={product.id} className={styles.card}>
                  <Link href={`/products/${product.id}`}>
                    <img src={product.image} alt={`Preview of ${product.title}`} />
                    <h3>{product.title}</h3>
                    <p className={styles.cardDescription}>{product.description}</p>
                    <p>${product.price}</p>
                  </Link>
                  <p>
                    <button className="snipcart-add-item"
                      data-item-id={product.id}
                      data-item-image={product.image}
                      data-item-name={product.title}
                      data-item-price={product.price}
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* <img src="https://i.imgur.com/oFeREzl.jpeg" alt="Disney on Ice 2" />
        <img src="https://i.imgur.com/AgoLA2i.jpeg" alt="Disney on Ice 3" /> */}
      </Container>
    </Layout>
  )
}