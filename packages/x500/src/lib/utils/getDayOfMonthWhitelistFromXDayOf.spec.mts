import {
    type XDayOf,
    NamedDay_intNamedDays_monday,
    NamedDay_bitNamedDays_monday,
    NamedDay_bitNamedDays_thursday,
} from "../modules/SelectedAttributeTypes/index.mjs";
import { type BIT_STRING, TRUE_BIT } from "@wildboar/asn1";
import getDayOfMonthWhitelistFromXDayOf from "./getDayOfMonthWhitelistFromXDayOf.mjs";

describe("getDayOfMonthWhitelistFromXDayOf", () => {

    it("returns the correct whitelist of days of month using int-named days", () => {
        const xDayOf: XDayOf = {
            second: {
                intNamedDays: NamedDay_intNamedDays_monday, 
            },
        };
        const point = new Date(2026, 0, 1); // Basically, just makes the month January.
        const whitelist = getDayOfMonthWhitelistFromXDayOf(xDayOf, point);
        // The second Monday is January 12th.
        expect(whitelist).toEqual(new Set([12]));
    });

    it("returns the correct whitelist of days of month using bit-named days", () => {
        const days: BIT_STRING = new Uint8ClampedArray(7);
        days[NamedDay_bitNamedDays_monday] = TRUE_BIT;
        days[NamedDay_bitNamedDays_thursday] = TRUE_BIT;
        const xDayOf: XDayOf = {
            second: {
                bitNamedDays: days, 
            },
        };
        const point = new Date(2026, 0, 1); // Basically, just makes the month January.
        const whitelist = getDayOfMonthWhitelistFromXDayOf(xDayOf, point);
        // The second Monday is January 12th, and the second Thursday is January 8th.
        // Note that the "second" does not mean the second week: it means the second
        // occurrence of the day of the week in the month. So this behavior is correct.
        expect(whitelist).toEqual(new Set([12, 8]));
    });

    it("returns the correct whitelist of days of month using int-named days of the last week", () => {
        const xDayOf: XDayOf = {
            fifth: {
                intNamedDays: NamedDay_intNamedDays_monday, 
            },
        };
        const point = new Date(2026, 0, 1); // Basically, just makes the month January.
        const whitelist = getDayOfMonthWhitelistFromXDayOf(xDayOf, point);
        // The last Monday is January 26th.
        expect(whitelist).toEqual(new Set([26]));
    });

    it("returns the correct whitelist of days of month using bit-named days of the last week", () => {
        const days: BIT_STRING = new Uint8ClampedArray(7);
        days[NamedDay_bitNamedDays_monday] = TRUE_BIT;
        days[NamedDay_bitNamedDays_thursday] = TRUE_BIT;
        const xDayOf: XDayOf = {
            fifth: {
                bitNamedDays: days, 
            },
        };
        const point = new Date(2026, 0, 1); // Basically, just makes the month January.
        const whitelist = getDayOfMonthWhitelistFromXDayOf(xDayOf, point);
        // The last Monday is January 26th, and the last Thursday is January 29th.
        expect(whitelist).toEqual(new Set([26, 29]));
    });

});
