import { DERElement } from "@wildboar/asn1";
import { DayTime } from "./DayTime.ta.mjs";

describe("DayTime.compare() / isEqualTo()", () => {
    it("treats missing minute and second as DEFAULT 0", () => {
        expect(new DayTime(9).isEqualTo(new DayTime(9, 0, 0))).toBe(true);
        expect(new DayTime(9).compare(new DayTime(9, 0, 0))).toBe(0);
    });

    it("orders by hour, then minute, then second", () => {
        expect(new DayTime(8).compare(new DayTime(9)) < 0).toBe(true);
        expect(new DayTime(9, 1).compare(new DayTime(9, 2)) < 0).toBe(true);
        expect(new DayTime(9, 0, 1).compare(new DayTime(9, 0, 2)) < 0).toBe(true);
        expect(new DayTime(17).compare(new DayTime(9)) > 0).toBe(true);
    });
});

describe("DayTime.isBefore() / isAfter()", () => {
    const nine = new DayTime(9);
    const ten = new DayTime(10);

    it("isBefore is strict", () => {
        expect(nine.isBefore(ten)).toBe(true);
        expect(nine.isBefore(nine)).toBe(false);
        expect(ten.isBefore(nine)).toBe(false);
    });

    it("isBeforeOrEqual includes equality", () => {
        expect(nine.isBeforeOrEqual(ten)).toBe(true);
        expect(nine.isBeforeOrEqual(nine)).toBe(true);
        expect(ten.isBeforeOrEqual(nine)).toBe(false);
    });

    it("isAfter is strict", () => {
        expect(ten.isAfter(nine)).toBe(true);
        expect(ten.isAfter(ten)).toBe(false);
        expect(nine.isAfter(ten)).toBe(false);
    });

    it("isAfterOrEqual includes equality", () => {
        expect(ten.isAfterOrEqual(nine)).toBe(true);
        expect(ten.isAfterOrEqual(ten)).toBe(true);
        expect(nine.isAfterOrEqual(ten)).toBe(false);
    });
});

describe("DayTime.toSeconds() / fromSeconds()", () => {
    it("maps midnight and 23:59:59 to 0 and 86399", () => {
        expect(new DayTime(0).toSeconds()).toBe(0);
        expect(new DayTime(23, 59, 59).toSeconds()).toBe(86399);
        expect(DayTime.fromSeconds(0).isEqualTo(new DayTime(0))).toBe(true);
        expect(DayTime.fromSeconds(86399).isEqualTo(new DayTime(23, 59, 59)))
            .toBe(true);
    });

    it("round-trips a time that uses minute and second", () => {
        const original = new DayTime(14, 30, 5);
        expect(DayTime.fromSeconds(original.toSeconds()).isEqualTo(original))
            .toBe(true);
    });

    it("rejects a second-of-day outside 0..86399", () => {
        expect(() => DayTime.fromSeconds(-1)).toThrow();
        expect(() => DayTime.fromSeconds(86400)).toThrow();
        expect(() => DayTime.fromSeconds(1.5)).toThrow();
    });
});

describe("DayTime.toTimeOfDay() / fromTimeOfDay()", () => {
    it("round-trips through TIME_OF_DAY UTC fields", () => {
        const original = new DayTime(14, 30, 5);
        const tod = original.toTimeOfDay();
        expect(tod.getHours()).toBe(14);
        expect(tod.getMinutes()).toBe(30);
        expect(tod.getSeconds()).toBe(5);
        expect(DayTime.fromTimeOfDay(tod).isEqualTo(original)).toBe(true);
    });

    it("round-trips through ASN1Element.timeOfDay", () => {
        const original = new DayTime(7, 8, 9);
        const el = new DERElement();
        el.timeOfDay = original.toTimeOfDay();
        expect(DayTime.fromTimeOfDay(el.timeOfDay).isEqualTo(original))
            .toBe(true);
    });

    it("reads UTC fields from an arbitrary Date", () => {
        const date = new Date(2021, 4, 17, 23, 59, 59);
        expect(DayTime.fromTimeOfDay(date).isEqualTo(new DayTime(23, 59, 59)))
            .toBe(true);
    });

    it("rejects an invalid Date", () => {
        expect(() => DayTime.fromTimeOfDay(new Date(Number.NaN))).toThrow();
    });
});

describe("DayTime.translate() / with() / Min() / Max()", () => {
    const noon = new DayTime(12, 0, 0);

    it("translate() adds hour, minute, and second deltas", () => {
        expect(noon.translate(1).isEqualTo(new DayTime(13, 0, 0))).toBe(true);
        expect(noon.translate(0, 1, 1).isEqualTo(new DayTime(12, 1, 1)))
            .toBe(true);
        expect(noon.translate({ minuteDelta: -1 }).isEqualTo(
            new DayTime(11, 59, 0),
        )).toBe(true);
    });

    it("translate() returns this when all deltas are 0", () => {
        expect(noon.translate()).toBe(noon);
        expect(noon.translate({})).toBe(noon);
    });

    it("translate() rejects a result outside the day", () => {
        expect(() => noon.translate(12)).toThrow();
        expect(() => new DayTime(0).translate(0, 0, -1)).toThrow();
    });

    it("with() replaces selected components", () => {
        expect(noon.with(9).isEqualTo(new DayTime(9, 0, 0))).toBe(true);
        expect(noon.with({ minute: 30 }).isEqualTo(new DayTime(12, 30, 0)))
            .toBe(true);
        expect(noon.with()).toBe(noon);
    });

    it("Min and Max pick earliest and latest", () => {
        const a = new DayTime(8);
        const b = new DayTime(17, 30);
        const c = new DayTime(12);
        expect(DayTime.Min(b, a, c).isEqualTo(a)).toBe(true);
        expect(DayTime.Max(b, a, c).isEqualTo(b)).toBe(true);
        expect(() => DayTime.Min()).toThrow();
        expect(() => DayTime.Max()).toThrow();
    });
});
