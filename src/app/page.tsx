import styles from "./styles.module.scss";
import Image from "next/image";
import ListFrames from "../components/ListFrames";

export default function Home() {
    return (
        <main className={styles.container}>
            <div className={styles.containerHeader}>
                <section className={styles.ctaText}>
                    <h1>Compre seus quadros de maneira descomplicada</h1>
                    <span>
                        Uma plataforma voltada para a venda de suas fotografias,
                        quadros ou ideias. Consiga também um patrocínio para
                        seus projetos
                    </span>
                    <a href="">
                        <button>COMEÇAR AGORA</button>
                    </a>
                </section>
                <Image
                    src="/images/ambiente2.png"
                    width={500}
                    height={318}
                    alt="Conteúdos das suas Fotos"
                />
            </div>

            <hr className={styles.divisor} />
            <ListFrames />
            <hr className={styles.divisor} />

            <div className={styles.sectionContent}>
                <section>
                    <h2>Patrocine seu fotógrafo favorito</h2>
                    <span>
                        Faça parte do projeto do seu fotógrafo. Doe qualquer
                        valor e se torne um patrocinador
                    </span>
                </section>
            </div>
        </main>
    );
}
