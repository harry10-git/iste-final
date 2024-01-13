import React from "react";
import Membersnav from "../membersnav/Membersnav";
import "../../pages/members/Members.css";
import "./WorkingComitee.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MembersName from "../membersname/MembersName";
const WorkingComittee = () => {
	const [myrepo, SetRepo] = useState([]);
	const url = "api/MCWC/getWC";

	useEffect(() => {
		const getrepo = async () => {
			try {
				const response = await axios.get(url);
				console.log(response);
				const data = response.data;
				SetRepo(data);
			} catch (error) {
				console.log(error);
			}
		};
		getrepo();
	}, [url]);
	return (
		<>
			<section className="members-container">
				<Membersnav />
				<div className="mancomm">
					<h1>List of Working Committee</h1>
				</div>
				<div className="members-list">
					<div className="members-list-card">
						{myrepo.map((WC) => {
							return <MembersName name={WC.name} />;
						})}
						{/* <MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" />
						<MembersName name="FirstName LastName WC" /> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default WorkingComittee;
