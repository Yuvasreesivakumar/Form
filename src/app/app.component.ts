import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  userArray: Array<any> = [];
  user: any = {};
  age: number | null = null;
  

  Dept=['FullStack','Cybersecurity','Data Analyst','Software Development','Cloud Computing']


  onClick() {
    this.calculateAge();
    this.userArray.push({
      name: this.user.name,
      id: this.user.id,
      dept: this.user.dept,
      salary: this.user.salary,
      experience: this.user.experience,
      dob:this.user.dob,
      age:this.age,


    });

  }

  calculateAge() {
    if (this.user.dob) {
      const today = new Date();
      const birthDate = new Date(this.user.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      this.age = age;
    } else {
      this.age = null;
    }
  }
  onDelete(index: number) {
    if (index >= 0 && index < this.userArray.length) {
      this.userArray.splice(index, 1);
    }
  }

  onSubmit(eform: any) {
    console.log(eform.value);
  }
}
