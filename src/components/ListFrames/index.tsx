import React from "react";
import styles from "./styles.module.scss";
import BoxFrame from "../BoxFrame";
import { listFrames } from "../../mock/listFrames";

export default function index() {
	const totalFrames = listFrames.length;

	return (
		<div className={styles.listContainer}>
			<h2>Compre já</h2>
			<span>Foram encontrados {totalFrames} quadros</span>
			<div className={styles.boxContent}>
				<BoxFrame listFrames={listFrames} />
			</div>
		</div>
	);
}
