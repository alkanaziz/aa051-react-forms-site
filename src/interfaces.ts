export interface IFrontendEmployee {
	firstName: string;
	lastName: string;
	age: number;
	hireDate: string;
	employeeNumber: string;
	notes: string;
}

export interface IBackendEmployee extends IFrontendEmployee {
	id: number;
}

export interface IFormInfoField {
	idCode: string;
	label: string;
	value: string;
	isRequired: boolean;
	isValid: boolean;
}

export interface IFormInfo {
	fields: IFormInfoField[];
}

export const initialFormInfo = {
	fields: [
		{
			idCode: "firstName",
			label: "First Name",
			value: "",
			isRequired: true,
			isValid: false,
		},
		{
			idCode: "lastName",
			label: "Last Name",
			value: "",
			isRequired: true,
			isValid: false,
		},
		{
			idCode: "age",
			label: "Age",
			value: "",
			isRequired: true,
			isValid: false,
		},
	],
};
