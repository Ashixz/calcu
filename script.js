// Define the grade scale
const gradeScale = {
    'A+': 4.33,
    'A': 4.0,
    'A-': 3.67,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.67,
    'C+': 2.33,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 0.67,
    'F': 0.0,
};

// Get the elements from the HTML
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const gradeSelects = document.querySelectorAll('.grade');

// Calculate GPA when the "Calculate GPA" button is clicked
calculateButton.addEventListener('click', () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    gradeSelects.forEach((select, index) => {
        const selectedGrade = select.value;
        const credits = getCredits(index);

        if (selectedGrade in gradeScale) {
            const gradePoints = gradeScale[selectedGrade];
            totalCredits += credits;
            totalGradePoints += gradePoints * credits;
        }
    });

    if (totalCredits > 0) {
        const gpa = (totalGradePoints / totalCredits).toFixed(2);
        resultDiv.textContent = `Your GPA is: ${gpa}`;
    } else {
        resultDiv.textContent = 'No valid grades entered. GPA cannot be calculated.';
    }
});

// Function to get the credits for a subject based on its index
function getCredits(index) {
    const creditsArray = [3, 3, 3, 3, 1.5, 1, 1]; // Update with your credit values
    return creditsArray[index];
}
