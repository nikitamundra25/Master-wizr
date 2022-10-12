import React, { PureComponent } from 'react';
import {
	Button,
	Form,
	FormGroup,
	FormLabel,
	FormControl,
	Col,
	Row,
	FormCheck,
	Collapse,
} from 'react-bootstrap';
import roundhelpico from '../../assets/img/round-help-ico.svg';
import Lockico from '../../assets/img/lockico.svg';
import arrowdown from '../../assets/img/arrowdown.svg';
import cliparrowright from '../../assets/img/clip-arrow-right.svg';
import smalllogo from '../../assets/img/small-logo.png';

class PanelPage extends PureComponent<any, any> {
	constructor(props: any, context: any) {
		super(props, context);

		this.state = {
			open: false,
		};
	}
	render() {
		const { open } = this.state;
		return (
			<>
				<div className="master-menu-upper-wrap">
					<div className="upper-panel">
						<Collapse in={this.state.open}>
							<div id="cat-menu">
								<div className="panel-body">
									<div className="cat-block-menu">
										<h4>Master Menu</h4>
										<ul>
											<li>Menu 1</li>
											<li>Menu 2</li>
											<li>Menu 3</li>
											<li>Menu 4</li>
											<li>Menu 5</li>
										</ul>
									</div>
									<div className="cat-block-menu">
										<h4>Category 1</h4>
										<ul>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
										</ul>
									</div>
									<div className="cat-block-menu">
										<h4>Category 2</h4>
										<ul>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
										</ul>
									</div>
									<div className="cat-block-menu">
										<h4>Category 3</h4>
										<ul>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
										</ul>
									</div>
									<div className="cat-block-menu">
										<h4>Category 4</h4>
										<ul>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
										</ul>
									</div>
									<div className="cat-block-menu">
										<h4>Category 5</h4>
										<ul>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
										</ul>
									</div>
									<div className="cat-block-menu">
										<h4>Category 6</h4>
										<ul>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
											<li>Sub Category</li>
										</ul>
									</div>
									<div className="right-logo">
										<img src={smalllogo} width="40px" />
									</div>
								</div>
							</div>
						</Collapse>
					</div>
					<div className="header-toggle-btn">
						<Button
							aria-controls="cat-menu"
							aria-expanded={open}
							variant="link"
							onClick={() => this.setState({ open: !open })}>
							<span>Preview</span>
						</Button>
					</div>
				</div>
				<div className="project-wrap">
					<section className="left-sidebar-wrap">
						<div className="left-sidebar-inner-page">
							<h1>
								Control Panel
								<span>
									<img src={roundhelpico} width="25" />
								</span>
							</h1>
							<div className="step-administration-wrap mb-4">
								<h2 className="color-heading">STEPS ADMINISTRATION</h2>
								<ul>
									<li className="active">
										<strong>Step 1</strong> - Admin user(s)
									</li>
									<li>
										<strong>Step 2</strong> - Visual settings
									</li>
									<li>
										<strong>Step 3</strong> - Menu admin
									</li>
									<li>
										<strong>Step 4</strong> - Add pictures with text
									</li>
									<li>
										<strong>Step 5</strong> - Manage presentation
									</li>
									<li>
										<strong>Step 6</strong> - FAQ - Helpful answers
									</li>
								</ul>
							</div>
							<div className="no-cat-wrap mb-4">
								<h2 className="white-heading">A. Number of Categories</h2>
								<div className="cat-check-list">
									<div className="our-custom-checkbox">
										<FormCheck
											type="checkbox"
											custom
											label="1 category"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="2 category"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="3 category"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="4 category"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="5 category"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="6 category"
											checked={true}
											className="active mb-1"
										/>
									</div>
								</div>
							</div>
							<div className="menu-stru mb-4">
								<h2 className="white-heading">B. Menu Structure/Names</h2>
								<ul>
									<li className="align-items-center justify-content-between d-flex">
										Fill in the form to the right
										<img src={cliparrowright} width="" />
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section className="help-guidance-wrap">
						<div className="help-inner-page">
							<h1>Help Guidance</h1>
							<div className="expalin-pera">
								<h4>Registrations</h4>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
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
												type="checkbox"
												custom
												label="Menu 1"
												checked={true}
												className="active"
											/>
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
										</div>
										<div className="menu-block">
											<FormCheck type="checkbox" custom label="Menu 2" />
										</div>
										<div className="menu-block">
											<FormCheck type="checkbox" custom label="Menu 3" />
										</div>
										<div className="menu-block">
											<FormCheck type="checkbox" custom label="Menu 4" />
										</div>
										<div className="menu-block">
											<FormCheck type="checkbox" custom label="Menu 5" />
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
													onClick={() => this.setState({ open: !open })}>
													<div className="panel-title">
														<Button
															aria-controls="example-collapse-text"
															aria-expanded={open}
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
												<Collapse in={this.state.open}>
													<div id="example-collapse-text">
														<div className="panel-body">
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Category 1 - Sub menu"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
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
													onClick={() => this.setState({ open: !open })}>
													<div className="panel-title">
														<Button
															aria-controls="example-collapse-text"
															aria-expanded={open}
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
												<Collapse in={this.state.open}>
													<div id="example-collapse-text">
														<div className="panel-body">
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Category 2 - Sub menu"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
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
													onClick={() => this.setState({ open: !open })}>
													<div className="panel-title">
														<Button
															aria-controls="example-collapse-text"
															aria-expanded={open}
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
												<Collapse in={this.state.open}>
													<div id="example-collapse-text">
														<div className="panel-body">
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Category 3 - Sub menu"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
															</FormGroup>
															<FormGroup controlId="">
																<FormControl
																	type="text"
																	placeholder="Title text"
																/>
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
				</div>
			</>
		);
	}
}

export default PanelPage;
