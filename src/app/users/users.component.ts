import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  allUsers: any[] = [
    { id: 1, name: "Akhil", age: 28, salary: 75000, department: "Frontend", isActive: true, rating: 4.5 },
    { id: 2, name: "Ravi", age: 32, salary: 90000, department: "Backend", isActive: false, rating: 4.2 },
    { id: 3, name: "Sneha", age: 26, salary: 65000, department: "UI/UX", isActive: true, rating: 4.8 },
    { id: 4, name: "Kiran", age: 30, salary: 85000, department: "Frontend", isActive: true, rating: 4.1 },
    { id: 5, name: "Divya", age: 27, salary: 70000, department: "QA", isActive: false, rating: 3.9 },
    { id: 6, name: "Arjun", age: 35, salary: 120000, department: "DevOps", isActive: true, rating: 4.7 },
    { id: 7, name: "Pooja", age: 24, salary: 60000, department: "UI/UX", isActive: true, rating: 4.3 },
    { id: 8, name: "Rahul", age: 29, salary: 80000, department: "Backend", isActive: false, rating: 4.0 },
    { id: 9, name: "Meena", age: 31, salary: 95000, department: "QA", isActive: true, rating: 4.6 },
    { id: 10, name: "Vikram", age: 33, salary: 110000, department: "Frontend", isActive: true, rating: 4.4 }
  ];

  users: any[] = [...this.allUsers];

  name: string = "";
  age: number = 0;
  salary: number = 0;
  department: string = "";
  rating: number = 0;
  term: string = "";

  // CREATE USER
  create() {
    const user = {
      id: Date.now(),
      name: this.name,
      age: this.age,
      salary: this.salary,
      department: this.department,
      isActive: true,
      rating: this.rating
    };

    this.allUsers.unshift(user);
    this.reset();
  }

  // DELETE USER
  delete(i: number) {
    const id = this.users[i].id;
    this.allUsers = this.allUsers.filter(u => u.id !== id);
    this.reset();
  }

  // ADD BONUS
  addBonus() {
    this.allUsers = this.allUsers.map(u => ({
      ...u,
      salary: u.salary + 2000
    }));
    this.reset();
  }

  // FILTER ACTIVE USERS
  activeUsers() {
    this.users = this.allUsers.filter(u => u.isActive);
  }

  // SORT LOW → HIGH
  salaryLH() {
    this.users = [...this.users].sort((a, b) => a.salary - b.salary);
  }

  // SORT HIGH → LOW
  salaryHL() {
    this.users = [...this.users].sort((a, b) => b.salary - a.salary);
  }

  // TOTAL SALARIES
  totalSalaries() {
    const total = this.users.reduce((sum, u) => sum + u.salary, 0);
    alert("Total salaries: " + total);
  }

  // SEARCH
  search() {
    this.users = this.allUsers.filter(u =>
      u.name.toLowerCase().includes(this.term.toLowerCase())
    );
  }

  // RESET
  reset() {
    this.users = [...this.allUsers];
    this.term = "";
  }
}