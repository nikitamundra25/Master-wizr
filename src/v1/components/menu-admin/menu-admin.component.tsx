import React, { Fragment, FunctionComponent, useState } from 'react';
import {
	Button,
	Form,
	FormGroup,
	FormControl,
	Col,
	Row,
	FormCheck,
	Collapse,
} from 'react-bootstrap';
import Lockico from '../../assets/img/lockico.svg';
import arrowdown from '../../assets/img/arrowdown.svg';
import { IOwnProps } from '../../interfaces/menu-admin.interface';

const MenuAdminComponent: FunctionComponent<IOwnProps> = (props: IOwnProps) => {
	const [state, setState] = useState({ open: false });

	return (
		<Fragment>
			{/* HELP GUIDANCE */}
			<section className="help-guidance-wrap">
				<div className="help-inner-page">
					<h1>Help Guidance</h1>
					<div className="expalin-pera">
						<h4>Registrations</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
					</div>
				</div>
				<div className="footer-wrap">
					<div className="content">
						<Button className="save-user-info">
							Save individual user info
						</Button>
					</div>
				</div>
			</section>
			{/* HELP GUIDANCE */}

			{/* MENU ADMIN PAGE */}
			<section className="right-side-wrapper">
				<div className="content-holder">
					<div className="inner-content-holder">
						<div className="heading">
							<h2>Step 3 - Menu Admin</h2>
						</div>
						<div className="menu-check-item">
							<div className="our-custom-checkbox">
								<div className="menu-block">
									<FormCheck
										name="menu1"
										type="checkbox"
										custom
										label="Menu 1"
										checked={props.menu1}
										className={props.menu1 ? 'active' : ''}
										onChange={props.handleMenuCheckbox}
									/>

									{/* MENU OPTIONS SECTION */}
									<div className="sub-menu-block">
										<FormCheck
											type="checkbox"
											custom
											label="Multiple links accross menus"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="Multiple links in one category"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="No linked search, just taggs"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="No linked search, just taggs"
										/>
									</div>
									{/* MENU OPTIONS SECTION */}
								</div>
								<div className="menu-block">
									<FormCheck
										name="menu2"
										type="checkbox"
										custom
										label="Menu 2"
										checked={props.menu2}
										className={props.menu2 ? 'active' : ''}
										onChange={props.handleMenuCheckbox}
									/>
								</div>
								<div className="menu-block">
									<FormCheck
										name="menu3"
										type="checkbox"
										custom
										label="Menu 3"
										checked={props.menu3}
										className={props.menu3 ? 'active' : ''}
										onChange={props.handleMenuCheckbox}
									/>
								</div>
								<div className="menu-block">
									<FormCheck
										name="menu4"
										type="checkbox"
										custom
										label="Menu 4"
										checked={props.menu4}
										className={props.menu4 ? 'active' : ''}
										onChange={props.handleMenuCheckbox}
									/>
								</div>
								<div className="menu-block">
									<FormCheck
										name="menu5"
										type="checkbox"
										custom
										label="Menu 5"
										checked={props.menu5}
										className={props.menu5 ? 'active' : ''}
										onChange={props.handleMenuCheckbox}
									/>
								</div>
							</div>
						</div>
						<div className="menu-password-protect d-flex align-items-center mb-4">
							<img src={Lockico} width="13" />
							<span>Add password to menu</span>
						</div>
						<Form>
							<Row className="menu-name-field-wrap mb-2">
								<Col className="col-sm-6 col-md-4">
									<FormGroup controlId="">
										<FormControl type="text" placeholder="Menu name" />
									</FormGroup>
								</Col>
							</Row>
							<Row className="row menu-cat-form-wrap">
								<Col className="col-sm-6 col-md-4 menu-cat-block">
									<div className="panel panel-default">
										<div
											className="panel-heading"
											onClick={() => setState({ open: !state.open })}>
											<div className="panel-title">
												<Button
													aria-controls="example-collapse-text"
													aria-expanded={state.open}
													variant="link">
													<span>Category 1 - Sub menu form</span>
													<img
														src={arrowdown}
														width="20"
														className="arrow-down"
													/>
												</Button>
											</div>
										</div>
										<Collapse in={state.open}>
											<div id="example-collapse-text">
												<div className="panel-body">
													<FormGroup controlId="">
														<FormControl
															type="text"
															placeholder="Category 1 - Sub menu"
														/>
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
												</div>
											</div>
										</Collapse>
									</div>
								</Col>
								<Col className="col-sm-6 col-md-4 menu-cat-block">
									<div className="panel panel-default">
										<div
											className="panel-heading"
											onClick={() => setState({ open: !state.open })}>
											<div className="panel-title">
												<Button
													aria-controls="example-collapse-text"
													aria-expanded={state.open}
													variant="link">
													<span>Category 2 - Sub menu form</span>
													<img
														src={arrowdown}
														width="20"
														className="arrow-down"
													/>
												</Button>
											</div>
										</div>
										<Collapse in={state.open}>
											<div id="example-collapse-text">
												<div className="panel-body">
													<FormGroup controlId="">
														<FormControl
															type="text"
															placeholder="Category 2 - Sub menu"
														/>
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
												</div>
											</div>
										</Collapse>
									</div>
								</Col>
								<Col className="col-sm-6 col-md-4 menu-cat-block">
									<div className="panel panel-default">
										<div
											className="panel-heading"
											onClick={() => setState({ open: !state.open })}>
											<div className="panel-title">
												<Button
													aria-controls="example-collapse-text"
													aria-expanded={state.open}
													variant="link">
													<span>Category 3 - Sub menu form</span>
													<img
														src={arrowdown}
														width="20"
														className="arrow-down"
													/>
												</Button>
											</div>
										</div>
										<Collapse in={state.open}>
											<div id="example-collapse-text">
												<div className="panel-body">
													<FormGroup controlId="">
														<FormControl
															type="text"
															placeholder="Category 3 - Sub menu"
														/>
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
													<FormGroup controlId="">
														<FormControl type="text" placeholder="Title text" />
													</FormGroup>
												</div>
											</div>
										</Collapse>
									</div>
								</Col>
							</Row>
						</Form>
					</div>
				</div>
			</section>
			{/* MENU ADMIN PAGE */}
		</Fragment>
	);
};

export default MenuAdminComponent;
