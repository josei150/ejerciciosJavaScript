class GradeSchool {
  constructor() {
    this.school = {}
  }

  roster() {
    const newList = {}
    for (let student in this.school) {
      newList[student] = [...this.school[student]]
    }
    return newList
  }

  add(nameStudent, grade) {
    for (let student in this.school) {
      if (this.school[student].includes(nameStudent)) {
        const index = this.school[student].indexOf(nameStudent)
        this.school[student].splice(index, 1)
      }
    }

    if (!(grade in this.school)) {
      this.school[grade] = [];
      this.school[grade].push(nameStudent)
      return
    }


    this.school[grade].push(nameStudent)
    this.school[grade].sort();
  }

  grade(numGrade) {
    return this.school[numGrade] ? this.school[numGrade] : []
  }
}

const gradeSchool = new GradeSchool()
gradeSchool.add('Logan', 7)
gradeSchool.add('Paul', 2)
gradeSchool.add('Blair', 2)
gradeSchool.add('Aimee', 2)
gradeSchool.add('Aimee', 1)
gradeSchool.add('Chelsea', 3)
//gradeSchool.add('Chelsea', 3)

console.log(gradeSchool.roster())
console.log(gradeSchool.grade(2))

