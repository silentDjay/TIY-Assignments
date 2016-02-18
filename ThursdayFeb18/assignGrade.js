function assignGrade (testScore){
    if (testScore >100){
        return "unrealistically high"
    } else {
        switch (true){
            case (testScore > 90):
                return "A. Splendid!"
            break;
            case (testScore >=80 && testScore < 90):
                return "B. Good Job!"
            break;
            case (testScore >=70 && testScore < 80):
                return "C. Nice Try."
            break;
            case (testScore >=60 && testScore < 70):
                return "D. You should have read the instructions."
            break;
            case (testScore < 60):
                return "F. Please try again later"
            break;
    }
    }
}

console.log("Based on your test score, your grade is " + assignGrade(80));
console.log("Based on your test score, your grade is " + assignGrade(73));
console.log("Based on your test score, your grade is " + assignGrade(100));
console.log("Based on your test score, your grade is " + assignGrade(23));
console.log("Based on your test score, your grade is " + assignGrade(78));
console.log("Based on your test score, your grade is " + assignGrade(102));
