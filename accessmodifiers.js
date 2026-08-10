"use strict";
class LibraryMember {
    memberName;
    booksBorrowed;
    memberId;
    rewardPoints = 0;
    constructor(name, books, id) {
        this.memberName = name;
        this.booksBorrowed = books;
        this.memberId = id;
    }
    borrowBook(count, enteredId) {
        if (this.verifyMember(enteredId)) {
            this.booksBorrowed += count;
            console.log(`${count} book(s) borrowed successfully.`);
            console.log(`Total Books Borrowed: ${this.booksBorrowed}`);
        }
        else {
            console.log("Invalid Member ID.");
        }
    }
    verifyMember(id) {
        return this.memberId === id;
    }
}
class PremiumMember extends LibraryMember {
    addRewardPoints() {
        this.rewardPoints += 50;
        console.log(`Reward Points Added: ${this.rewardPoints}`);
    }
}
const member = new PremiumMember("Lalitha", 2, 2026);
console.log(`Welcome, ${member.memberName}`);
member.borrowBook(3, 2026);
member.addRewardPoints();
