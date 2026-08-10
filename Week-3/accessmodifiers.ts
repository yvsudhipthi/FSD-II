class LibraryMember {
    public memberName: string;
    private booksBorrowed: number;
    private memberId: number;
    protected rewardPoints: number = 0;

    constructor(name: string, books: number, id: number) {
        this.memberName = name;
        this.booksBorrowed = books;
        this.memberId = id;
    }

    public borrowBook(count: number, enteredId: number): void {
        if (this.verifyMember(enteredId)) {
            this.booksBorrowed += count;
            console.log(`${count} book(s) borrowed successfully.`);
            console.log(`Total Books Borrowed: ${this.booksBorrowed}`);
        } else {
            console.log("Invalid Member ID.");
        }
    }

    private verifyMember(id: number): boolean {
        return this.memberId === id;
    }
}

class PremiumMember extends LibraryMember {
    public addRewardPoints(): void {
        this.rewardPoints += 50;
        console.log(`Reward Points Added: ${this.rewardPoints}`);
    }
}

const member = new PremiumMember("Lalitha", 2, 2026);

console.log(`Welcome, ${member.memberName}`);

member.borrowBook(3, 2026);

member.addRewardPoints();