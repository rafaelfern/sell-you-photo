import React from "react";
import styles from "./styles.module.scss";
import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";

interface FormValues {
	email: string;
	password: string;
}

export default function index({ setModalLogin }) {
	const validateForm = (values: any) => {
		const errors: FormikErrors<FormValues> = { email: "", password: "" };
		if (!values.email) {
			errors.email = "Required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = "Endereço de e-mail inválido";
		}
		return errors;
	};

	const renderFormikForm = ({ isSubmitting }) => (
		<Form>
			<Field type="email" name="email" />
			<ErrorMessage name="email" component="div" />
			<Field type="password" name="password" />
			<ErrorMessage name="password" component="div" />
			<button type="submit" disabled={isSubmitting}>
				Enviar
			</button>
		</Form>
	);

	return (
		<div className={styles.loginContainer}>
			<h2>Logar com Google</h2>

			<span>Ou com e-mail</span>
			<div className={styles.inputContent}>
				<Formik
					initialValues={{ email: "", password: "" }}
					validate={(values) => validateForm(values)}
					onSubmit={(values) => {}}
				>
					{renderFormikForm}
				</Formik>
				{/* <input type="text"></input>
            <input type="password"></input> */}
			</div>

			{/* <a href=''>Não consegue acessar sua conta?</a> */}
			<div className={styles.actionsContent}>
				{/* <a type="button" className={styles.btnLogin}>Entrar</a> */}
				<a type="button" className={styles.btnNewAccount}>
					Criar nova conta
				</a>
			</div>
		</div>
	);
}
