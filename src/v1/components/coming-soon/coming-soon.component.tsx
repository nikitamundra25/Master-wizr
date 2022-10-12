import React, { FunctionComponent, Fragment } from 'react';
import styles from './comingsoon.module.scss';

const ComingSoonComponent: FunctionComponent = () => {
	return (
		<Fragment>
			<section className="right-side-wrapper">
				<div className={styles.error_page}>
					<div className={styles.container}>
						<h2>Coming soon...</h2>
						<h4>The page you are looking for is under progress.</h4>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default ComingSoonComponent;
