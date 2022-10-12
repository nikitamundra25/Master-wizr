import React, { Fragment, FunctionComponent } from 'react';
import { FormCheck, FormGroup, FormControl } from 'react-bootstrap';
import roundhelpico from '../../assets/img/round-help-ico.svg';
import cliparrowright from '../../assets/img/clip-arrow-right.svg';
import { AdminRoutes } from '../../settings/routes';
import adminRoutes from '../../settings/configs/AdminRoutes';
import { NavLink } from 'react-router-dom';
import { IOwnProps } from '../../interfaces/sidebar.interface';

const SidebarComponent: FunctionComponent<IOwnProps> = (props: IOwnProps) => {
	return (
		<Fragment>
			<div className="project-wrap">
				<section className="left-sidebar-wrap">
					<div className="left-sidebar-inner-page">
						<h1>
							Control Panel
							<span>
								<img src={roundhelpico} width="25" />
							</span>
						</h1>

						{/* =============== NAVIGATION MENU SECTION =============== */}
						<div className="step-administration-wrap mb-4">
							<h2 className="color-heading">STEPS ADMINISTRATION</h2>
							<ul>
								{adminRoutes.map(k => (
									<li key={k.id}>
										<NavLink
											to={k.path}
											exact={k.exact}
											activeClassName="active">
											<span dangerouslySetInnerHTML={{ __html: k.name }} />
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						{/* =============== NAVIGATION MENU SECTION =============== */}

						{/* =============== MENU ADMIN SECTION =============== */}
						{/* NUMBER OF CATEGORIES SELECT SECTION */}
						{props.sidebarProps.showNumberCategories ? (
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
						) : null}
						{/* NUMBER OF CATEGORIES SELECT SECTION */}

						{/* MENU STRUCTURE NAME SECTION */}
						{props.sidebarProps.showMenuStructureNames ? (
							<div className="menu-stru mb-4">
								<h2 className="white-heading">B. Menu Structure/Names</h2>
								<ul>
									<li className="align-items-center justify-content-between d-flex">
										Fill in the form to the right
										<img src={cliparrowright} width="" />
									</li>
								</ul>
							</div>
						) : null}
						{/* MENU STRUCTURE NAME SECTION */}
						{/* =============== MENU ADMIN SECTION =============== */}

						{/* =============== MANAGE PRESENTATION SECTIONS =============== */}
						{/* TEXT LOCATION SECTION */}
						{props.sidebarProps.showTextLocation ? (
							<div className="no-cat-wrap mb-4">
								<h2 className="white-heading">A. Text location</h2>
								<div className="cat-check-list">
									<div className="our-custom-checkbox">
										<FormCheck
											type="checkbox"
											custom
											label="Imported file"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="Image with text"
											checked={true}
											className="active mb-1"
										/>
									</div>
								</div>
							</div>
						) : null}
						{/* TEXT LOCATION SECTION */}

						{/* DEFINE SEARCHABLE FORMAT SECTION */}
						{props.sidebarProps.showDefineSearchableFormat ? (
							<div className="no-cat-wrap mb-4">
								<h2 className="white-heading">B. Define searchable format</h2>
								<div className="cat-check-list">
									<div className="our-custom-checkbox">
										<FormCheck
											type="checkbox"
											custom
											label="PDF"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="Images"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="Videos"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="Mini presentation, less than 10"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="Presentation, over 10 pages"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="Mixed presentation"
											checked={true}
											className="active mb-1"
										/>
									</div>
								</div>
							</div>
						) : null}
						{/* DEFINE SEARCHABLE FORMAT SECTION */}

						{/* ADD TAGS SECTION */}
						{props.sidebarProps.showAddTags ? (
							<div className="no-cat-wrap mb-4">
								<h2 className="white-heading">C. Add tags</h2>
								<div className="cat-check-list">
									<div className="our-custom-checkbox">
										<FormCheck
											type="checkbox"
											custom
											label="All pages in series"
											className="mb-1"
										/>
										<FormCheck
											type="checkbox"
											custom
											label="Change tags for selected pages"
											checked={true}
											className="active mb-1"
										/>
									</div>
								</div>
							</div>
						) : null}
						{/* ADD TAGS SECTION */}

						{/* UPLOAD FORMAT SECTION */}
						{props.sidebarProps.showUploadFormat ? (
							<div className="attech-file-wrap mb-4">
								<h2 className="white-heading">D. UPLOAD FORMAT</h2>
								<ul>
									<li>
										<FormGroup controlId="">
											<FormControl
												type="text"
												placeholder="Upload from your computer"
											/>
										</FormGroup>
									</li>
								</ul>
							</div>
						) : null}
						{/* UPLOAD FORMAT SECTION */}
						{/* =============== MANAGE PRESENTATION SECTIONS =============== */}
					</div>
				</section>

				{/* All pages will going to render here */}
				<AdminRoutes />
			</div>
		</Fragment>
	);
};

export default SidebarComponent;
