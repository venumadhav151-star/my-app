import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  // 🔍 search input
  searchtype: string = "";

  // ➕ form inputs
  name: string = "";
  price: number = 0;
  rating: number = 0;
  delivery: boolean = false;

  // 🧱 original data
  allItems: any[] = [
    { id: 1, name: "pen", price: 10, rating: 3, delivery: true },
    { id: 2, name: "phone", price: 100, rating: 2, delivery: false },
    { id: 3, name: "shirt", price: 400, rating: 4, delivery: true },
    { id: 4, name: "cap", price: 200, rating: 5, delivery: false },
    { id: 5, name: "mobile phone", price: 300, rating: 2, delivery: true },
    { id: 6, name: "remote", price: 400, rating: 2.5, delivery: false }
  ];

  // 📊 display data
  items: any[] = [...this.allItems];

  // 🔍 SEARCH
  search() {
    this.items = this.allItems.filter(item =>
      item.name.toLowerCase().includes(this.searchtype.toLowerCase())
    );
  }

  // ❌ DELETE
  delete(i: number) {
    const id = this.items[i].id;
    this.items.splice(i, 1);
    this.allItems = this.allItems.filter(item => item.id !== id);
  }

  // ➕ ADD ITEM
  addItem() {
    const item = {
      id: Date.now(),
      name: this.name,
      price: this.price,
      rating: this.rating,
      delivery: this.delivery
    };

    this.items.unshift(item);
    this.allItems.unshift(item);

    // reset form
    this.name = "";
    this.price = 0;
    this.rating = 0;
    this.delivery = false;
  }

  // 🔃 SORTING
  priceHighToLow() {
    this.items.sort((a, b) => b.price - a.price);
  }

  ratingLowToHigh() {
    this.items.sort((a, b) => a.rating - b.rating);
  }

  ratingHighToLow() {
    this.items.sort((a, b) => b.rating - a.rating);
  }

  // 🚚 FILTER
  onlyFreeDelivery() {
    this.items = this.allItems.filter(item => item.delivery);
  }

  // 💰 TOTAL PRICE
  totalPrice() {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    alert("Total price: " + total);
  }

  // 🔢 TOTAL ITEMS
  totalItems() {
    alert("Total items: " + this.items.length);
  }

}