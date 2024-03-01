import { ChangeEvent, useState } from "react";
import { IFormInfo, initialFormInfo } from "../interfaces";
import * as config from '../config';

export const PageStateForm = () => {
	const [formInfo, setFormInfo] = useState<IFormInfo>(initialFormInfo);

	const handleFieldFirstName = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _formInfo = structuredClone(formInfo); //structuredClone(formInfo);
		const firstNameField = _formInfo.fields.find(
			(m) => m.idCode === "firstName"
		);
		if (firstNameField) {
			firstNameField.value = value;
		}
		setFormInfo(_formInfo);
	};

	const handleFieldLastName = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _setFormInfo = structuredClone(formInfo);
		const lastNameField = _setFormInfo.fields.find(
			(m) => m.idCode === "lastName"
		);
		if (lastNameField) {
			lastNameField.value = value;
		}
		setFormInfo(_setFormInfo);
	};

	const handleFieldAge = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _setFormInfo = structuredClone(formInfo);
		const ageField = _setFormInfo.fields.find((m) => m.idCode === "age");
		if (ageField) {
			ageField.value = value;
		}
		setFormInfo(_setFormInfo);
	};

	return (
		<section className="flex gap-6">
			<form>
				<fieldset className="border border-slate-500 p-4 rounded max-w-[25rem]">
					<legend>New Member</legend>

					<div className="mb-4 flex gap-2">
						<label className="w-40" htmlFor="firstName">
							First Name:
						</label>
						<input
							value={
								formInfo.fields.find(
									(m) => m.idCode === "firstName"
								)?.value
							}
							type="text"
							id="firstName"
							onChange={handleFieldFirstName}
						/>
					</div>

					<div className="mb-4 flex gap-2">
						<label className="w-[10rem]" htmlFor="lastName">
							Last Name:
						</label>
						<input
							value={
								formInfo.fields.find(
									(m) => m.idCode === "lastName"
								)?.value
							}
							type="text"
							id="lastName"
							onChange={handleFieldLastName}
						/>
					</div>

					<div className="mb-4 flex gap-2">
						<label className="w-[10rem]" htmlFor="age">
							Age:
						</label>
						<input
							value={
								formInfo.fields.find((m) => m.idCode === "age")
									?.value
							}
							type="text"
							id="age"
							className="w-12 text-right"
							onChange={handleFieldAge}
						/>
					</div>
					<div className="mt-5 flex justify-end pr-3">
						<button>Add Member</button>
					</div>
				</fieldset>
			</form>
			<section>
				{config.debugging && (
				<pre>{JSON.stringify(formInfo, null, 2)}</pre>
				)}
			</section>
		</section>
	);
};
