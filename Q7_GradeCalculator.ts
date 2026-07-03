interface StudentMarks {
  studentId: number;
  name: string;
  marks: [number, number, number, number, number];
}

function calculateGrade(percentage: number): string {
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  return "F";
}

const studentMarks: StudentMarks = {
  studentId: 1,
  name: "Areeba",
  marks: [88, 92, 79, 85, 90],
};

const totalMarks = studentMarks.marks.reduce((total, mark) => total + mark, 0);
const percentage = (totalMarks / 500) * 100;
const grade = calculateGrade(percentage);

console.log("Student Grade Information:");
console.table([
  {
    studentId: studentMarks.studentId,
    name: studentMarks.name,
    marks: studentMarks.marks.join(", "),
    totalMarks,
    percentage: `${percentage.toFixed(2)}%`,
    grade,
  },
]);
