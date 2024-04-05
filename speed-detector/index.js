
function calculatePoints() {
            const speed = parseFloat(document.getElementById("speed").value);
            const speedLimit = 70;
            const pointsPerExcess = 1;
            const maxPoints = 12;

            if (speed < speedLimit) {
                document.getElementById("result").textContent = "Speed Is Okay ";
            } else {
                const excessSpeed = speed - speedLimit;
                const demeritPoints = Math.floor(excessSpeed / 5) * pointsPerExcess;

                if (demeritPoints > maxPoints) {
                    document.getElementById("result").textContent = "Your Is License suspended";
                } else {
                    document.getElementById("result").textContent = `Your Have Points: ${demeritPoints}`;
                }
            }
        }