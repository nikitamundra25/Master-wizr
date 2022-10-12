import React, { Fragment, PureComponent } from 'react';
import SidebarComponent from '../../components/sidebar/sidebar.component';
import {
	IOwnProps,
	IOwnStates,
	IDispatchToProps,
} from '../../interfaces/sidebar.interface';
import { IAppState } from '../../interfaces/store.interface';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
	showAdminUsersOptions,
	showVisualSettingsOptions,
	showMenuAdminOptions,
	showAddPictureTextOptions,
	showManagePresentationOptions,
	showFaqsOptions,
} from '../../store/actions';
import { connect } from 'react-redux';
import history from '../../settings/helpers/History';

class Sidebar extends PureComponent<IOwnProps, IOwnStates> {
	unlisten: any;

	componentDidMount = async () => {
		const location: Location = history.location;
		this.processLocation(location);
		this.unlisten = history.listen((location: Location, action: string) => {
			console.log(action, location.pathname);
			this.processLocation(location);
		});
	};

	componentWillUnmount = () => {
		this.unlisten();
	};

	processLocation = async (location: Location) => {
		switch (location.pathname) {
			case '/control-panel/admin-users':
				this.props.showAdminUsersOptions();
				break;

			case '/control-panel/visual-settings':
				this.props.showVisualSettingsOptions();
				break;

			case '/control-panel/menu-admin':
				this.props.showMenuAdminOptions();
				break;

			case '/control-panel/add-picture-text':
				this.props.showAddPictureTextOptions();
				break;

			case '/control-panel/manage-presentation':
				this.props.showManagePresentationOptions();
				break;

			case '/control-panel/faq':
				this.props.showFaqsOptions();
				break;

			default:
				console.log('default');
				break;
		}
	};

	render() {
		return (
			<Fragment>
				<SidebarComponent {...this.props} />
			</Fragment>
		);
	}
}

const mapStateToProps = (state: IAppState) => {
	const sidebarState = state.sidebarState;
	return {
		sidebarProps: sidebarState,
	};
};

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AnyAction>,
): IDispatchToProps => {
	return {
		showAdminUsersOptions: async () => {
			await dispatch(showAdminUsersOptions());
		},
		showVisualSettingsOptions: async () => {
			await dispatch(showVisualSettingsOptions());
		},
		showMenuAdminOptions: async () => {
			await dispatch(showMenuAdminOptions());
		},
		showAddPictureTextOptions: async () => {
			await dispatch(showAddPictureTextOptions());
		},
		showManagePresentationOptions: async () => {
			await dispatch(showManagePresentationOptions());
		},
		showFaqsOptions: async () => {
			await dispatch(showFaqsOptions());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Sidebar);
