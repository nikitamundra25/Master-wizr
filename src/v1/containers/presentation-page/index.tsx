import React, { Fragment, PureComponent, FormEvent } from 'react';
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
import {
	IOwnProps,
	IComponentState,
	IItem,
	IPresentationForm,
	IDispatchToProps,
} from '../../interfaces/presentation.interface';
import roundhelpico from '../../assets/img/round-help-ico.svg';
import DocImage from '../../assets/img/doc2.jpeg';
import Dropzone from 'react-dropzone';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import { IAppState } from '../../interfaces/store.interface';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { UserPresentation } from '../../store/actions';
import * as helpers from '../../settings/helpers/toast';

class PresentationPage extends PureComponent<IOwnProps, IComponentState> {
	constructor(props: IOwnProps) {
		super(props);
		this.state = { preview: [] };
		this.onImageDrop = this.onImageDrop.bind(this);
	}

	onImageDrop(preview: any[], files: any[]) {
		let temp: any[] = [];
		// eslint-disable-next-line
		files.map((key: any, index: number) => {
			const obj = { file: key, url: URL.createObjectURL(key), id: index };
			temp = [...temp, obj];
		});
		this.setState({ preview: [...temp] });
		console.log('Preview', temp);
	}

	onPresentation = async (event: FormEvent<HTMLFormElement>) => {
		console.log('FHFGh');
		event.preventDefault();
		await this.props.onDataPresentation(this.state.preview);
		if (this.props.successState) {
			helpers.showSuccessToast('Your Images have been saved!!');
		} else {
			helpers.showErrorToast('Failed to save data');
		}
	};

	render() {
		const { preview } = this.state;
		return (
			<>
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
									<li>
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
									<li className="active">
										<strong>Step 5</strong> - Manage presentation
									</li>
									<li>
										<strong>Step 6</strong> - FAQ - Helpful answers
									</li>
								</ul>
							</div>
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
						</div>
					</section>
					<section className="help-guidance-wrap">
						<div className="help-inner-page">
							<h1>Help Guidance</h1>
							<div className="expalin-pera">
								<h4>Adding contents</h4>
								<p>
									It cant be easier: drag and drop contents from your PC. Don’t
									focus on order or anything. Just add contents to be part of
									presentation. We advice to have Mini presentations under 10
									pages and regular presentation under 20 content elements.
								</p>
							</div>
						</div>
						<div className="footer-wrap">
							<div className="content">
								<p>
									Want to leave Contro panel?
									<br />
									Remember to save your options!
									<br />
									<b>Go to SERVICE PORTAL</b>
								</p>
								<Button className="service-portal mb-1">
									Take me to SERVICE PORTAL
								</Button>
								<Button className="save-user-info">
									Save control panel choices
								</Button>
							</div>
						</div>
					</section>
					<section className="right-side-wrapper">
						<div className="content-holder">
							<div className="inner-content-holder">
								<div className="heading">
									<h2>STEP 5 - MANAGE PRESENTATION</h2>
								</div>
								<form onSubmit={this.onPresentation}>
									<div className="tab-item-wrap mb-5">
										<ul>
											<li className="active">
												<span>A) Add contents</span>
											</li>
											<li>
												<span>B) Sort order</span>
											</li>
											<li>
												<span>C) Add tags and links</span>
											</li>
										</ul>
										<Button className="save-opation" type="submit">
											Save your options
										</Button>
									</div>
									<div className="dropzone-img-wrap mb-5">
										<Dropzone
											onDrop={this.onImageDrop}
											accept="/*"
											multiple={true}>
											{({ getRootProps, getInputProps }) => {
												return (
													<div {...getRootProps()}>
														<input {...getInputProps()} />
														{preview.length == 0 ? (
															<div className="upload-img-hold">
																<div className="upload-text">
																	<h4>Add content here</h4>
																	<p>
																		Simply drag and drop multiple images, videos
																		and other files to be part of presentation
																		<br />
																		You can sort, delete and do more after
																		uploading (menu B and C options)
																	</p>
																</div>
															</div>
														) : (
															this.itemRenderer
														)}
													</div>
												);
											}}
										</Dropzone>
										<RLDD
											items={preview}
											itemRenderer={this.itemRenderer}
											onChange={this.handleRLDDChange}
										/>
									</div>
								</form>
							</div>
						</div>
					</section>
				</div>
			</>
		);
	}
	itemRenderer = (preview: any, index: Number): JSX.Element => {
		return (
			<div className="drop-img-wrapper">
				<div className="inner-drop-block">
					<div className="img-block">
						{preview.file.type === 'image/jpeg' ||
						preview.file.type === 'image/JPEG' ||
						preview.file.type === 'image/JPG' ||
						preview.file.type === 'image/jpg' ||
						preview.file.type === 'image/png' ||
						preview.file.type === 'image/TIF' ||
						preview.file.type === 'image/tif' ||
						preview.file.type === 'image/BMP' ||
						preview.file.type === 'image/bmp' ||
						preview.file.type === 'image/PNG' ? (
							<img
								// style={{ width: '150px', height: '150px' }}
								src={preview.url}
								alt={preview.file.name}
							/>
						) : preview.file.type === 'video/mp4' ? (
							<video loop autoPlay>
								<source src={preview.url} />
								Your browser does not support HTML5 video.
							</video>
						) : preview.file.type === 'application/pdf' ||
						  preview.file.type === 'application/PDF' ||
						  preview.file.type === 'application/XLS' ||
						  preview.file.type === 'application/xls' ||
						  preview.file.type === 'application/XLSX' ||
						  preview.file.type === 'application/xlsx' ||
						  preview.file.type === 'application/ppt' ||
						  preview.file.type === 'application/PPT' ||
						  preview.file.type === 'text/plain' ||
						  preview.file.type === 'text/plain' ? (
							// eslint-disable-next-line
							<iframe
								// style={{ width: '150px', height: '150px' }}
								src={preview.url}
							/>
						) : preview.file.type === 'application/msword' ||
						  preview.file.type === 'application/doc' ? (
							<img
								// style={{ width: '150px', height: '150px' }}
								src={DocImage}
								alt="Doc file"
							/>
						) : null}{' '}
					</div>
				</div>
				<div className="img-footer-content">
					<span className="front-text">This is front page</span>
					<span>Make it last page</span>
				</div>
			</div>
		);
	};

	private handleRLDDChange = (reorderedItems: Array<IItem>) => {
		this.setState({ preview: reorderedItems });
	};
}

const mapStateToProps = (state: IAppState) => {
	const presentState = state.presentationState;
	return {
		loadingState: presentState.IsLoading,
		successState: presentState.PresentationSuccess,
		userData: presentState.PresentationData,
	};
};

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AnyAction>,
): IDispatchToProps => {
	return {
		onDataPresentation: async (preview: IItem[]) => {
			await dispatch(UserPresentation(preview));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PresentationPage);
