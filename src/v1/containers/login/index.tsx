import React, { Component, Fragment } from 'react';
import LoginComponent from '../../components/login/login.component';
import {
	ILoginForm,
	IState,
	IDispatchToProps,
	IOwnProps,
} from '../../interfaces/login.interface';
import { FormikActions } from 'formik';
import { connect } from 'react-redux';
import { userLogin } from '../../store/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IAppState } from '../../interfaces/store.interface';
import * as helpers from '../../settings/helpers/toast';
import * as constants from '../../settings/helpers/constants';
import history from '../../settings/helpers/History';

class Login extends Component<IOwnProps, IState> {
	// LOGIN THE USER
	onLogin = async (values: ILoginForm, actions: FormikActions<ILoginForm>) => {
		console.log({ values, actions });
		await this.props.onLogin(values.email, values.password);
		if (this.props.successState) {
			actions.resetForm();
			actions.setSubmitting(false);
			localStorage.setItem(constants.id, this.props.userData.token);
			history.replace('/control-panel/menu-admin');
		} else {
			actions.setSubmitting(false);
			helpers.showErrorToast(this.props.errorState);
		}
	};

	render() {
		return (
			<Fragment>
				<LoginComponent onLogin={this.onLogin} />
			</Fragment>
		);
	}
}

const mapStateToProps = (state: IAppState) => {
	const loginState = state.loginState;
	return {
		loadingState: loginState.loading,
		successState: loginState.loginSuccess,
		userData: loginState.userData,
		errorState: loginState.error,
	};
};

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AnyAction>,
): IDispatchToProps => {
	return {
		onLogin: async (email: string, password: string) => {
			await dispatch(userLogin({ email, password }));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
