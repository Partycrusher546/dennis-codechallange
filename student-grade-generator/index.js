 function generatorGrade() {
            const marks = parseFloat(document.getElementById("marks").value);

            let grade;
            if (marks >= 80) {
                grade = "A";
            } else if (marks >= 60) {
                grade = "B";
            } else if (marks >= 50) {
                grade = "C";
            } else if (marks >= 40) {
                grade = "D";
            } else {
                grade = "E";
            }

            document.getElementById("result").textContent = `Grade: ${grade}`;
        }