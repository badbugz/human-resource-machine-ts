import { describe } from 'mocha';
import { expect } from 'chai';
import { Solutions } from '../solutions/solutions';

describe('Human Resource Machine Tests', () => {
    describe('Level 1: Mail Room', () => {
        it('Your program should tell your worker to grab each thing from the inbox, and drop it into the outbox', () => {
            const inbox: Inbox = [1, 'a', 9, 8, 3, 'b', 'g'];
            expect(Solutions.Level1(inbox)).to.deep.equal([
                1,
                'a',
                9,
                8,
                3,
                'b',
                'g',
            ]);
        });
    });
    describe('Level 2: Busy Mail Room', () => {
        it('Grab each thing from the inbox, and drop each one into the outbox.', () => {
            const inbox: Inbox = [5, 1, 9, 0, 8, 4, 3];
            expect(Solutions.Level2(inbox)).to.deep.equal([
                5,
                1,
                9,
                0,
                8,
                4,
                3,
            ]);
        });
    });
    describe('Level 3: Copy Floor', () => {
        it('Ignore the inbox for now, and just send the following 3 letters to the outbox: B U G.', () => {
            const inbox: Inbox = [1, 2, 3, 4, 5, 6, 7, 8];
            expect(Solutions.Level3(inbox)).to.deep.equal(['B', 'U', 'G']);
        });
    });
    describe('Level 4: Scrambler Handler', () => {
        it(' Grab the first TWO things from the inbox and drop them into the outbox in the reverse order. Repeat until the inbox is empty.', () => {
            const inbox: Inbox = [1, 2, 3, 4, 5, 6, 7, 8];
            expect(Solutions.Level4(inbox)).to.deep.equal([
                2,
                1,
                4,
                3,
                6,
                5,
                8,
                7,
            ]);
        });
    });
    describe('Level 5: Coffee Break', () => {
        it('Is time for a quick break', () => {});
    });
    describe('Level 6: Rainy Summer', () => {
        it('For each two things in the INBOX, add them together, and put the result in the OUTBOX.', () => {
            const inbox: Inbox = [1, 2, 3, 4, 5, 6, 7, 8];
            expect(Solutions.Level6(inbox)).to.deep.equal([3, 7, 11, 15]);
        });
    });
    describe('Level 7: Zero Exterminator', () => {
        it('Send all things that ARE NOT ZERO to the OUTBOX', () => {
            const inbox: Inbox = [0, 2, 3, 0, 0, 0, 7, 8];
            expect(Solutions.Level7(inbox)).to.deep.equal([2, 3, 7, 8]);
        });
    });
    describe('Level 8: Tripler Room', () => {
        it('For each thing in the inbox, triple it. And outbox the result.', () => {
            const inbox: Inbox = [1, 2, 3, 4, 5, 6];
            expect(Solutions.Level8(inbox)).to.deep.equal([
                3,
                6,
                9,
                12,
                15,
                18,
            ]);
        });
    });
    describe('Level 9: Zero Preservation Initiative', () => {
        it('Send only the ZEROS to the OUTBOX.', () => {
            const inbox: Inbox = [0, 2, 3, 0, 0, 0, 7, 8];
            expect(Solutions.Level9(inbox)).to.deep.equal([0, 0, 0, 0]);
        });
    });
    describe('Level 10: Octoplier Suite', () => {
        it('For each thing in the inbox multiply it by 8, and put the result in the outbox', () => {
            const inbox: Inbox = [1, 2, 3, 4, 5];
            expect(Solutions.Level10(inbox)).to.deep.equal([8, 16, 24, 32, 40]);
        });
    });
    describe('Level 11: Sub Hallway', () => {
        it('For each two things in the inbox, first subtract the 1st from the 2nd and put the result in the outbox. Repeat.', () => {
            const inbox: Inbox = [9, 2, 5, 1, 6, 2, 8, 3];
            expect(Solutions.Level11(inbox)).to.deep.equal([7, 4, 4, 5]);
        });
    });
    describe('Level 12: Tetracontiplier', () => {
        it('For each thing in the inbox, multiply it by 40, and put the result in the outbox.', () => {
            const inbox: Inbox = [9, 2, 5, 1, 0, 6, 2, 8, 10];
            expect(Solutions.Level12(inbox)).to.deep.equal([
                360,
                80,
                200,
                40,
                0,
                240,
                80,
                320,
                400,
            ]);
        });
    });
    describe('Level 13: Equalization Room', () => {
        it('Get two things from the inbox. If they are equal, put one of them in the outbox. Discard not-equal pairs. Repeat!', () => {
            const inbox: Inbox = [1, 1, 5, 1, 0, 0, 4, 3, 1, 0, 8, 8];
            expect(Solutions.Level13(inbox)).to.deep.equal([1, 0, 8]);
        });
    });
    describe('Level 14: Maximization Room', () => {
        it('Grab TWO things from the inbox, and put only the bigger of the two in the outbox. If they are equal, just pick either one. Repeat!', () => {
            const inbox: Inbox = [1, 1, 5, 1, 0, 0, 4, 3, 1, 0, 8, 8];
            expect(Solutions.Level14(inbox)).to.deep.equal([1, 5, 0, 4, 1, 8]);
        });
    });
    describe('Level 15: Employee Moral Insertion', () => {
        it('Another break', () => {});
    });
    describe('Level 16: Absolute Positivity', () => {
        it('Send each thing from the inbox to the outbox. But, if a number is negative, first remove its negative sign', () => {
            const inbox: Inbox = [5, -1, -9, 0, 8, 4, -3];
            expect(Solutions.Level16(inbox)).to.deep.equal([
                5,
                1,
                9,
                0,
                8,
                4,
                3,
            ]);
        });
    });
    describe('Level 17: Exclusive Lounge', () => {
        it('For each two things in the inbox: Send a 0 to the outbox if they have the same sign. (Both positive or both negative.) Send a 1 to the outbox if their signs are different. Repeat until the inbox is empty', () => {
            const inbox: Inbox = [5, -1, -9, -2, 8, 4, -3, 3];
            expect(Solutions.Level17(inbox)).to.deep.equal([1, 0, 0, 1]);
        });
    });
    describe('Level 18: Sabbatical Beach Paradise', () => {
        it('Another break', () => {});
    });
    describe('Level 19: Countdown', () => {
        it("For each number in the inbox, send that number to the outbox, followed by all numbers down to (or up to) zero. It's a countdown", () => {
            const inbox: Inbox = [5, -1, -9, -2, 8, 4, -3, 3];
            expect(Solutions.Level19(inbox)).to.deep.equal([
                5,
                4,
                3,
                2,
                1,
                0,
                -1,
                0,
                -9,
                -8,
                -7,
                -6,
                -5,
                -4,
                -3,
                -2,
                -1,
                0,
                -2,
                -1,
                0,
                8,
                7,
                6,
                5,
                4,
                3,
                2,
                1,
                0,
                4,
                3,
                2,
                1,
                0,
                -3,
                -2,
                -1,
                0,
                3,
                2,
                1,
                0,
            ]);
        });
    });
});
