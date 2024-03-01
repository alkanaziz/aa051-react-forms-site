import { useState } from "react";
import { IFormInfo, initialFormInfo } from "../interfaces";

export const PageStateForm = () => {
	const [formInfo, setformInfo] = useState<IFormInfo>(initialFormInfo);

	return (
		<form>
			<fieldset className="border border-slate-500 p-4 rounded max-w-[25rem]">
				<legend>New Member</legend>

				<div className="mb-4 flex gap-2">
					<label className="w-40" htmlFor="firstName">
						First Name:
					</label>
					<input
						value={formInfo.fields.find(m => m.idCode === 'firstName')?.value}
						type="text"
						id="firstName"
					/>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="lastName">
						Last Name:
					</label>
					<input
						value={formInfo.fields.find(m => m.idCode === 'lastName')?.value}
						type="text"
						id="lastName"
					/>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="age">
						Age:
					</label>
					<input
						value={formInfo.fields.find(m => m.idCode === 'age')?.value}
						type="text"
						id="age"
						className="w-12 text-right"
					/>
				</div>

				<div className="mt-5 flex justify-end pr-3">
					<button>Add Member</button>
				</div>
			</fieldset>
		</form>
	);
};
