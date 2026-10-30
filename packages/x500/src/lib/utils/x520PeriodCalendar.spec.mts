import { startOfFirstX520WeekOfMonth } from "./x520PeriodCalendar.mjs";

describe("x520PeriodCalendar", () => {
    // 1 Jan 2021 was Friday. Sunday-start week of the 4th is Sun 3 – Sat 9.
    it("treats the week containing the 4th as week 1 of the month", () => {
        const first = startOfFirstX520WeekOfMonth(2021, 1);
        expect(first.getFullYear()).toBe(2021);
        expect(first.getMonth()).toBe(0);
        expect(first.getDate()).toBe(3);
    });
});
