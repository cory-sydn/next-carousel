import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.footerItem}>
				<h3 className={styles.footerTitle}>Verlith</h3>
				<ul className={styles.column}>
					<li>NFT</li>
					<li>Privacy Policy</li>
					<li>Terms Of Use</li>
				</ul>
			</div>
			<div className={styles.footerItem}>
				<h3 className={styles.footerTitle}>HX13 Company</h3>
				<ul className={styles.column}>
					<li>FAQ</li>
					<li>Governance</li>
					<li>HC Token</li>
				</ul>
			</div>
			<div className={styles.footerItem}>
				<ul className={styles.socialColumn}>
					<li>
						<Link href="https://www.linkedin.com/company/hate-company/" >
              <img
                src="https://api.iconify.design/entypo-social:twitter.svg"
                alt=""
              />
            </Link>
					</li>
					<li>
						<Link href="https://www.linkedin.com/company/hate-company/" >
              <img
                src="https://api.iconify.design/entypo-social:linkedin.svg"
                alt=""
              />
            </Link>
					</li>
					<li>
						<Link href="https://www.linkedin.com/company/hate-company/" >
              <img
                src="https://api.iconify.design/entypo-social:medium.svg"
                alt=""
              />
            </Link>
					</li>
					<li>
						<Link href="https://www.linkedin.com/company/hate-company/" >
              <img
                src="https://api.iconify.design/entypo-social:facebook.svg"
                alt=""
              />
            </Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
