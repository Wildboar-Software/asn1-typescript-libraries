import { getDay, subDays, getDaysInMonth, lastDayOfMonth } from "date-fns";
import type { XDayOf } from "../modules/SelectedAttributeTypes/XDayOf.ta.mjs";
import type { NamedDay } from "../modules/SelectedAttributeTypes/NamedDay.ta.mjs";
import { TRUE_BIT } from "@wildboar/asn1";

function destructureXDayOf (x: XDayOf): [ number, NamedDay ] {
    if ("first" in x) {
        return [ 1, x.first ];
    } else if ("second" in x) {
        return [ 2, x.second ];
    } else if ("third" in x) {
        return [ 3, x.third ];
    } else if ("fourth" in x) {
        return [ 4, x.fourth ];
    } else if ("fifth" in x) {
        return [ 5, x.fifth ];
    } else {
        throw new Error();
    }
}

function getDaysOfWeekWhitelist (nd: NamedDay): Set<number> {
    if ("intNamedDays" in nd) {
        return new Set([ (nd.intNamedDays - 1) ]);
    } else {
        return new Set(
            Array.from(nd.bitNamedDays)
                .map((b: number, i: number): number => (b === TRUE_BIT) ? i : -1)
                .filter((d: number): boolean => (d > -1))
        );
    }
}

export
function getDayOfMonthWhitelistFromXDayOf (x: XDayOf, point: Date): Set<number> {
    const [ occurrence, nd ] = destructureXDayOf(x);
    const daysOfWeekWhitelist = getDaysOfWeekWhitelist(nd);
    const ret: Set<number> = new Set([]);
    if (occurrence === 5) {
        const lastDay = lastDayOfMonth(point);
        let i = 0;
        while (i < 7) {
            const a: Date = subDays(lastDay, i);
            if (daysOfWeekWhitelist.has(getDay(a))) {
                ret.add(a.getDate());
            }
            i++;
        }
    } else {
        const daysInMonth = getDaysInMonth(point);
        let d = (((occurrence - 1) * 7) + 1);
        let i = 0;
        while ((d < daysInMonth) && (i < 7)) {
            const a: Date = new Date(point);
            a.setDate(d);
            if (daysOfWeekWhitelist.has(getDay(a))) {
                ret.add(d);
            }
            d++;
            i++;
        }
    }
    return ret;
}

export default getDayOfMonthWhitelistFromXDayOf;
