import { ASN1Element, type INTEGER } from "@wildboar/asn1";
import type { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import type { Period_days } from "../modules/SelectedAttributeTypes/Period-days.ta.mjs";
import type { Period_weeks } from "../modules/SelectedAttributeTypes/Period-weeks.ta.mjs";
import type { Period_months } from "../modules/SelectedAttributeTypes/Period-months.ta.mjs";
import type { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import type { NamedDay } from "../modules/SelectedAttributeTypes/NamedDay.ta.mjs";
import type { XDayOf } from "../modules/SelectedAttributeTypes/XDayOf.ta.mjs";
import compareElements from "../comparators/compareElements.mjs";
import { bytesEqual } from "../matching/constantTime.mjs";
import { normalizePeriod } from "./normalizePeriod.mjs";

/**
 * @summary Whether two `SET OF INTEGER` values contain the same numbers.
 * @param {INTEGER[]} a One SET, already unique and sorted.
 * @param {INTEGER[]} b The other SET, already unique and sorted.
 * @param {boolean | number} constantTime `MATCH_FLAG_CONSTANT_TIME`.
 * @returns {boolean} `true` iff both sequences have the same values.
 * @function
 * @author Cursor Grok 4.6
 */
function integersEqual (
    a: readonly INTEGER[],
    b: readonly INTEGER[],
    constantTime: boolean | number,
): boolean {
    const len = a.length;
    if (len !== b.length) {
        return false;
    }
    if (constantTime) {
        let diff = 0;
        for (let i = 0; i < len; i++) {
            diff |= Number(a[i]) ^ Number(b[i]);
        }
        return diff === 0;
    }
    for (let i = 0; i < len; i++) {
        if (Number(a[i]) !== Number(b[i])) {
            return false;
        }
    }
    return true;
}

/**
 * @summary Whether two extension lists are the same SEQUENCE of elements.
 * @param {ASN1Element[]} a One list.
 * @param {ASN1Element[]} b The other list.
 * @returns {boolean} `true` iff both lists compare element-for-element.
 * @function
 * @author Cursor Grok 4.6
 */
function extensionListsEqual (
    a: readonly ASN1Element[] | undefined,
    b: readonly ASN1Element[] | undefined,
): boolean {
    const left = a ?? [];
    const right = b ?? [];
    const len = left.length;
    if (len !== right.length) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        if (!compareElements(left[i], right[i])) {
            return false;
        }
    }
    return true;
}

/**
 * @summary Whether two `NamedDay` CHOICE values are the same alternative.
 * @param {NamedDay} a One named day.
 * @param {NamedDay} b The other named day.
 * @param {boolean | number} constantTime `MATCH_FLAG_CONSTANT_TIME`.
 * @returns {boolean} `true` iff both denote the same day encoding.
 * @function
 * @author Cursor Grok 4.6
 */
function namedDaysEqual (
    a: NamedDay,
    b: NamedDay,
    constantTime: boolean | number,
): boolean {
    if ("intNamedDays" in a) {
        return ("intNamedDays" in b)
            && (Number(a.intNamedDays) === Number(b.intNamedDays));
    }
    if ("bitNamedDays" in a) {
        return ("bitNamedDays" in b)
            && bytesEqual(a.bitNamedDays, b.bitNamedDays, constantTime);
    }
    return false;
}

/**
 * @summary Whether two `XDayOf` CHOICE values name the same occurrence.
 * @param {XDayOf} a One `dayOf` value.
 * @param {XDayOf} b The other `dayOf` value.
 * @param {boolean | number} constantTime `MATCH_FLAG_CONSTANT_TIME`.
 * @returns {boolean} `true` iff the occurrence tag and `NamedDay` match.
 * @function
 * @author Cursor Grok 4.6
 */
function xDayOfEqual (
    a: XDayOf,
    b: XDayOf,
    constantTime: boolean | number,
): boolean {
    if ("first" in a) {
        return ("first" in b) && namedDaysEqual(a.first, b.first, constantTime);
    }
    if ("second" in a) {
        return ("second" in b) && namedDaysEqual(a.second, b.second, constantTime);
    }
    if ("third" in a) {
        return ("third" in b) && namedDaysEqual(a.third, b.third, constantTime);
    }
    if ("fourth" in a) {
        return ("fourth" in b) && namedDaysEqual(a.fourth, b.fourth, constantTime);
    }
    if ("fifth" in a) {
        return ("fifth" in b) && namedDaysEqual(a.fifth, b.fifth, constantTime);
    }
    return false;
}

/**
 * @summary Whether two canonical `Period.days` values match.
 * @param {Period_days | undefined} a One `days` component.
 * @param {Period_days | undefined} b The other `days` component.
 * @param {boolean | number} constantTime `MATCH_FLAG_CONSTANT_TIME`.
 * @returns {boolean} `true` iff both are absent or the same CHOICE.
 * @function
 * @author Cursor Grok 4.6
 */
function daysEqual (
    a: Period_days | undefined,
    b: Period_days | undefined,
    constantTime: boolean | number,
): boolean {
    if (a === undefined) {
        return b === undefined;
    }
    if (b === undefined) {
        return false;
    }
    if (ASN1Element.isElement(a) || ASN1Element.isElement(b)) {
        return ASN1Element.isElement(a)
            && ASN1Element.isElement(b)
            && compareElements(a, b);
    }
    if ("intDay" in a) {
        return ("intDay" in b) && integersEqual(a.intDay, b.intDay, constantTime);
    }
    if ("bitDay" in a) {
        return ("bitDay" in b) && bytesEqual(a.bitDay, b.bitDay, constantTime);
    }
    if ("dayOf" in a) {
        return ("dayOf" in b) && xDayOfEqual(a.dayOf, b.dayOf, constantTime);
    }
    return false;
}

/**
 * @summary Whether two canonical `Period.weeks` values match.
 * @param {Period_weeks | undefined} a One `weeks` component.
 * @param {Period_weeks | undefined} b The other `weeks` component.
 * @param {boolean | number} constantTime `MATCH_FLAG_CONSTANT_TIME`.
 * @returns {boolean} `true` iff both are absent or the same CHOICE.
 * @function
 * @author Cursor Grok 4.6
 */
function weeksEqual (
    a: Period_weeks | undefined,
    b: Period_weeks | undefined,
    constantTime: boolean | number,
): boolean {
    if (a === undefined) {
        return b === undefined;
    }
    if (b === undefined) {
        return false;
    }
    if (ASN1Element.isElement(a) || ASN1Element.isElement(b)) {
        return ASN1Element.isElement(a)
            && ASN1Element.isElement(b)
            && compareElements(a, b);
    }
    if ("allWeeks" in a) {
        return ("allWeeks" in b);
    }
    if ("intWeek" in a) {
        return ("intWeek" in b) && integersEqual(a.intWeek, b.intWeek, constantTime);
    }
    if ("bitWeek" in a) {
        return ("bitWeek" in b) && bytesEqual(a.bitWeek, b.bitWeek, constantTime);
    }
    return false;
}

/**
 * @summary Whether two canonical `Period.months` values match.
 * @param {Period_months | undefined} a One `months` component.
 * @param {Period_months | undefined} b The other `months` component.
 * @param {boolean | number} constantTime `MATCH_FLAG_CONSTANT_TIME`.
 * @returns {boolean} `true` iff both are absent or the same CHOICE.
 * @function
 * @author Cursor Grok 4.6
 */
function monthsEqual (
    a: Period_months | undefined,
    b: Period_months | undefined,
    constantTime: boolean | number,
): boolean {
    if (a === undefined) {
        return b === undefined;
    }
    if (b === undefined) {
        return false;
    }
    if (ASN1Element.isElement(a) || ASN1Element.isElement(b)) {
        return ASN1Element.isElement(a)
            && ASN1Element.isElement(b)
            && compareElements(a, b);
    }
    if ("allMonths" in a) {
        return ("allMonths" in b);
    }
    if ("intMonth" in a) {
        return ("intMonth" in b) && integersEqual(a.intMonth, b.intMonth, constantTime);
    }
    if ("bitMonth" in a) {
        return ("bitMonth" in b) && bytesEqual(a.bitMonth, b.bitMonth, constantTime);
    }
    return false;
}

/**
 * @summary Whether two canonical `DayTimeBand` values match.
 * @description
 *
 * `isEqualTo` applies start/end DEFAULTs. Unrecognized extensions are
 * compared separately so a canonical DER difference is not ignored.
 *
 * @param {DayTimeBand} a One band.
 * @param {DayTimeBand} b The other band.
 * @returns {boolean} `true` iff the bands cover the same times and
 *  extensions.
 * @function
 * @author Cursor Grok 4.6
 */
function dayTimeBandsEqual (a: DayTimeBand, b: DayTimeBand): boolean {
    return a.isEqualTo(b)
        && extensionListsEqual(a._unrecognizedExtensionsList, b._unrecognizedExtensionsList)
        && extensionListsEqual(
            a.startDayTime?._unrecognizedExtensionsList,
            b.startDayTime?._unrecognizedExtensionsList,
        )
        && extensionListsEqual(
            a.endDayTime?._unrecognizedExtensionsList,
            b.endDayTime?._unrecognizedExtensionsList,
        );
}

/**
 * @summary Whether two canonical `timesOfDay` SETs match.
 * @description
 *
 * After `normalizePeriod`, the SET is sorted by start then end, so
 * pairwise comparison is enough.
 *
 * @param {DayTimeBand[] | undefined} a One SET.
 * @param {DayTimeBand[] | undefined} b The other SET.
 * @returns {boolean} `true` iff both are absent or the same bands.
 * @function
 * @author Cursor Grok 4.6
 */
function timesOfDayEqual (
    a: readonly DayTimeBand[] | undefined,
    b: readonly DayTimeBand[] | undefined,
): boolean {
    if (a === undefined) {
        return b === undefined;
    }
    if (b === undefined) {
        return false;
    }
    const len = a.length;
    if (len !== b.length) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        if (!dayTimeBandsEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

/**
 * @summary Structural equality of two already-canonical `Period` values.
 * @param {Period} a One canonical `Period`.
 * @param {Period} b The other canonical `Period`.
 * @param {boolean | number} constantTime `MATCH_FLAG_CONSTANT_TIME`.
 * @returns {boolean} `true` iff every component matches.
 * @function
 * @author Cursor Grok 4.6
 */
function canonicalPeriodsEqual (
    a: Period,
    b: Period,
    constantTime: boolean | number,
): boolean {
    return timesOfDayEqual(a.timesOfDay, b.timesOfDay)
        && daysEqual(a.days, b.days, constantTime)
        && weeksEqual(a.weeks, b.weeks, constantTime)
        && monthsEqual(a.months, b.months, constantTime)
        && integersEqual(a.years ?? [], b.years ?? [], constantTime)
        && ((a.years === undefined) === (b.years === undefined))
        && extensionListsEqual(a._unrecognizedExtensionsList, b._unrecognizedExtensionsList);
}

/**
 * @summary Whether two `Period` values denote the same times.
 * @description
 *
 * Applies {@link normalizePeriod} so INTEGER vs BIT STRING and
 * complete-set vs `allWeeks`/`allMonths` compare equal when they
 * denote the same times, then compares the canonical fields without
 * DER-encoding.
 *
 * @param {Period} a One `Period`.
 * @param {Period} b The other `Period`.
 * @param {boolean | number} constantTime `MATCH_FLAG_CONSTANT_TIME`.
 * @returns {boolean} `true` iff the periods are encoding-equivalent.
 * @function
 * @author Cursor Grok 4.6
 */
export
function periodsEquivalent (
    a: Period,
    b: Period,
    constantTime: boolean | number = 0,
): boolean {
    return canonicalPeriodsEqual(normalizePeriod(a), normalizePeriod(b), constantTime);
}

/**
 * @summary SET equality of `Period` values after X.520 clause 10.2
 *  canonicalization.
 * @description
 *
 * `TimeSpecification.time.periodic` is `SET OF Period`. Members are
 * unordered. Each member is canonicalized with {@link normalizePeriod},
 * then matched with an O(n²) pairing so equivalent encodings compare
 * equal without DER-encoding or hashing.
 *
 * @param {Period[]} asserted Presented SET.
 * @param {Period[]} stored Stored SET.
 * @param {boolean | number} constantTime `MATCH_FLAG_CONSTANT_TIME`.
 * @returns {boolean} `true` iff both SETs have the same members.
 * @function
 * @author Cursor Grok 4.6
 */
export
function periodSetsEquivalent (
    asserted: readonly Period[],
    stored: readonly Period[],
    constantTime: boolean | number = 0,
): boolean {
    const len = asserted.length;
    if (len !== stored.length) {
        return false;
    }
    if (len === 0) {
        return true;
    }
    const assertedCanonical: Period[] = new Array(len);
    const storedCanonical: Period[] = new Array(len);
    for (let i = 0; i < len; i++) {
        assertedCanonical[i] = normalizePeriod(asserted[i]);
        storedCanonical[i] = normalizePeriod(stored[i]);
    }
    const used: Uint8Array = new Uint8Array(len);
    let matched = true;
    for (let i = 0; i < len; i++) {
        let found = false;
        for (let j = 0; j < len; j++) {
            if (used[j]) {
                continue;
            }
            if (canonicalPeriodsEqual(assertedCanonical[i], storedCanonical[j], constantTime)) {
                used[j] = 1;
                found = true;
                break;
            }
        }
        if (!found) {
            if (!constantTime) {
                return false;
            }
            matched = false;
        }
    }
    return matched;
}

export default periodsEquivalent;
