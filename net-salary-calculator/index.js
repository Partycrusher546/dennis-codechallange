function calcNetSalary() {
            const basicSalary = parseFloat(document.getElementById("basicSalary").value);
            const benefits = parseFloat(document.getElementById("benefits").value);

            const TAX_RATE = 0.25; // Example tax rate (adjust as needed)
            const NHIF_RATE = 150; // Example NHIF rate (adjust as needed)
            const NSSF_RATE = 0.06; // Example NSSF rate (adjust as needed)

            const grossSalary = basicSalary + benefits;

        
            const tax = grossSalary * TAX_RATE;

            
            const nhifDeductions = NHIF_RATE;

            const nssfDeductions = grossSalary * NSSF_RATE;
            const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions
            document.getElementById("result").innerHTML = `
                Gross Salary: KSH${grossSalary.toFixed(2)}<br>
                Tax: KSH${tax.toFixed(2)}<br>
                NHIF Deductions: KSH${nhifDeductions.toFixed(2)}<br>
                NSSF Deductions: KSH${nssfDeductions.toFixed(2)}<br>
                Net Salary: KSH${netSalary.toFixed(2)}
            `;
        }