interface Patient {
  patientId: number;
  name: string;
  disease: string;
  age: number;
  admitted: boolean;
}

const patients: Patient[] = [
  { patientId: 1, name: "Bilal", disease: "Fever", age: 28, admitted: true },
  { patientId: 2, name: "Hina", disease: "Flu", age: 34, admitted: false },
  { patientId: 3, name: "Usman", disease: "Diabetes", age: 51, admitted: true },
  { patientId: 4, name: "Nimra", disease: "Migraine", age: 25, admitted: false },
  { patientId: 5, name: "Zain", disease: "Asthma", age: 40, admitted: true },
];

console.log("All Patients:");
console.table(patients);

console.log("Admitted Patients:");
console.table(patients.filter((patient) => patient.admitted));
