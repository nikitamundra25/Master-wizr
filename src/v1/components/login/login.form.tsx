import React, { Fragment } from 'react';
import { FormikProps } from 'formik';
import { ILoginForm } from '../../interfaces/login.interface';
import { FormGroup, Button, Dropdown, FormCheck } from 'react-bootstrap';

const LoginForm = (props: FormikProps<ILoginForm>) => {
	const {
		values: { email, password },
		touched,
		errors,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
	} = props;

	return (
		<Fragment>
			<form className="login-form" onSubmit={handleSubmit} noValidate={true}>
				<FormGroup className="form-vld">
					<Dropdown className="custom-dropdown">
						<Dropdown.Toggle
							variant="secondary"
							id="dropdown-basic"
							className="btn-block custom-dropdown-btn">
							<span>Dropdown Button</span>
							<span className="arrow" />
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">
								Content management
							</Dropdown.Item>
							<Dropdown.Item href="#/action-2">
								Navigation management
							</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Admin manangement</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</FormGroup>
				<FormGroup className="form-vld">
					<input
						name="email"
						type="email"
						placeholder="Email"
						className={`form-control ${errors.email &&
							touched.email &&
							'is-invalid'}`}
						value={email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.email && touched.email && (
						<div className="invalid-feedback">{errors.email}</div>
					)}
				</FormGroup>

				<FormGroup className="form-vld">
					<input
						name="password"
						type="password"
						placeholder="Password"
						className={`form-control ${errors.password &&
							touched.password &&
							'is-invalid'}`}
						value={password}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.password && touched.password && (
						<div className="invalid-feedback">{errors.password}</div>
					)}
				</FormGroup>

				<Button block type="submit" disabled={isSubmitting}>
					{isSubmitting ? 'Please wait...' : 'Sign in'}
				</Button>
				<div className="forgot-link-wrap align-items-center d-flex justify-content-between">
					<span>New User</span>
					<span>Forget username / Password?</span>
				</div>
				<div className="d-flex justify-content-center">
					<div className="our-custom-checkbox">
						<FormCheck
							type="checkbox"
							custom={true}
							label="Save username"
							className="white-checkbox"
							defaultChecked={true}
						/>
					</div>
				</div>
			</form>
		</Fragment>
	);
};

export default LoginForm;
