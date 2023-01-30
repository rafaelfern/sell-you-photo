import React from "react";
import { Noto_Sans } from "@next/font/google";
import styles from "./styles.module.scss";
import Image from "next/image";

const notoSans = Noto_Sans({
    weight: "400",
    variable: "--font-inter",
    subsets: ["latin"],
});
interface IListItemsProps {
    listFrames: [
        {
            id: number;
            seller: string;
            price: number;
            image: string;
            title: string;
            installments: number;
        },
    ];
}

export default function index({ listFrames }: IListItemsProps) {
    const getPriceByInstallments = (value: number, installments: number) =>
        value / installments;

    return (
        <>
            {listFrames.map((frame, i: number) => {
                return (
                    <div key={i} className={styles.boxContainer}>
                        <Image
                            src={frame.image}
                            alt=""
                            width={250}
                            height={159}
                        />
                        <div className={styles.boxContent}>
                            <h4>{frame.title}</h4>
                            <span>
                                a partir de{" "}
                                <span className={notoSans.variable}>
                                    R$ {frame.price}
                                </span>
                            </span>
                            <div className={styles.installmentsContent}>
                                ou
                                <span className={notoSans.variable}>
                                    {frame.installments}X de R${" "}
                                    {getPriceByInstallments(
                                        frame.price,
                                        frame.installments,
                                    )}
                                </span>
                            </div>
                            <div className={styles.btnContent}>
                                <a href="" type="button">
                                    Comprar
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
