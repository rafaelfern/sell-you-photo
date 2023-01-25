"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { ActiveLink } from "../ActiveLink";
import Link from "next/link";
import ModalLogin from "../../components/ModalLogin";

export default function Header() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);
	const [modalLogin, setModalLogin] = useState(false);
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Link href="/" className={styles.active}>
					<h2 className={styles.logoText}>Far Photo</h2>
				</Link>
				{/* <FiMenu size={25} className={styles.hamburguer} onClick={() => setIsNavExpanded(!isNavExpanded)}></FiMenu> */}
				<div
					className={
						!isNavExpanded
							? styles.topNav
							: `${styles.topNav} ${styles.expanded} `
					}
				>
					<nav>
						<ActiveLink href="/" activeClassName={styles.active}>
							Home
						</ActiveLink>
						<ActiveLink
							href="/posts"
							activeClassName={styles.active}
						>
							Fotografias
						</ActiveLink>
						<ActiveLink
							href="/frame-photo"
							activeClassName={styles.active}
						>
							Quadro com foto
						</ActiveLink>
						<ActiveLink
							href="/donate"
							activeClassName={styles.active}
						>
							Apoie
						</ActiveLink>
						{/* <ActiveLink href="/about" activeClassName={styles.active}>
                            Quem Somos
                        </ActiveLink> */}
					</nav>
				</div>
				<div className={styles.interactBtns}>
					<a className={styles.cartIcon}>
						<FiShoppingCart size={25} />
					</a>
					<a
						className={styles.loginButton}
						onMouseOver={() => setModalLogin(true)}
						type="button"
						href=""
					>
						<FiUser size={25} />
						ENTRAR
					</a>
					{modalLogin && <ModalLogin />}
				</div>
			</div>
		</header>
	);
}
