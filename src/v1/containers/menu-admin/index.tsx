import React, {
	Fragment,
	PureComponent,
	InputHTMLAttributes,
	ChangeEvent,
} from 'react';
import MenuAdminComponent from '../../components/menu-admin/menu-admin.component';
import { IOwnProps, IOwnState } from '../../interfaces/menu-admin.interface';

class MenuAdmin extends PureComponent<IOwnProps, IOwnState> {
	state: { [key: string]: any } = {
		menu1: true,
		menu2: false,
		menu3: false,
		menu4: false,
		menu5: false,
	};

	handleMenuCheckbox = async (e: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;

		if (this.state[name] === false) {
			let t: number[] = [1, 2, 3, 4, 5];
			await Promise.all(
				t.map(async k => {
					await this.setState({ [`menu${k}`]: !checked });
				}),
			);

			await this.setState({ ...t, [name]: checked });
		}
	};

	render() {
		return (
			<Fragment>
				<MenuAdminComponent
					{...this.state}
					handleMenuCheckbox={this.handleMenuCheckbox}
				/>
			</Fragment>
		);
	}
}

export default MenuAdmin;
