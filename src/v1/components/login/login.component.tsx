import React, { FunctionComponent, Fragment } from 'react';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import {
	ILoginComponentProps,
	ILoginForm,
} from '../../interfaces/login.interface';
import loginLogo from '../../assets/img/login-logo.jpg';
import MAsterWizrlogo from '../../assets/img/MAsterWizr-logo.png';
import LoginForm from './login.form';

const LoginComponent: FunctionComponent<ILoginComponentProps> = (
	props: ILoginComponentProps,
) => {
	const { onLogin } = props;
	const values: ILoginForm = { email: '', password: '' };

	const validationSchema = Yup.object().shape<ILoginForm>({
		email: Yup.string()
			.email('Enter a valid email')
			.required('Email is required'),
		password: Yup.string()
			.min(5, 'Password must contain at least 5 characters')
			.max(18, 'Password cannot be more than 18 characters')
			.required('Enter your password'),
	});

	return (
		<Fragment>
			<div className="login-container">
				<div className="login-bg" />
				<div className="login-middle-wrap">
					<div className="top-logo">
						<img src={loginLogo} alt={''} />
					</div>
					<div className="login-paper d-flex justify-content-center flex-column">
						{/* <h1 className="brand-name text-center">
							Master <span>Wizr</span>
						</h1> */}
						<span className="brandlogo">
							<img src={MAsterWizrlogo} />
						</span>
						<div className="sign-with-gf text-center">
							Sign in with Google / Facebook
						</div>
						<Formik
							render={(formikBag: FormikProps<ILoginForm>) => (
								<LoginForm {...formikBag} />
							)}
							initialValues={values}
							validationSchema={validationSchema}
							onSubmit={onLogin}
						/>
						<h4 className="essentials-name">
							Essentials<span>Contact</span>
						</h4>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default LoginComponent;
