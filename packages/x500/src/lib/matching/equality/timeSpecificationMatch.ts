import EqualityMatcher from "../../types/EqualityMatcher.js";
import { ASN1Element, DERElement } from "asn1-ts";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.js";
import {
    TimeSpecification,
    _decode_TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta.js";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.js";
import {
    id_ce_timeSpecification,
} from "../../modules/AttributeCertificateDefinitions/id-ce-timeSpecification.va.js";
import type {
    Period,
} from "../../modules/SelectedAttributeTypes/Period.ta.js";
import type {
    NamedDay,
} from "../../modules/SelectedAttributeTypes/NamedDay.ta.js";
import {
    DayTimeBand,
} from "../../modules/SelectedAttributeTypes/DayTimeBand.ta.js";

const SOUGHT_OID: string = id_ce_timeSpecification.toString();

function compareDayTimeBand (a: DayTimeBand, b: DayTimeBand): boolean {
    const startA = a.startDayTime ?? DayTimeBand._default_value_for_startDayTime;
    const startB = b.startDayTime ?? DayTimeBand._default_value_for_startDayTime;
    const endA = a.endDayTime ?? DayTimeBand._default_value_for_endDayTime;
    const endB = b.endDayTime ?? DayTimeBand._default_value_for_endDayTime;
    return (
        (startA.hour === startB.hour)
        && (startA.minute === startB.minute)
        && (startA.second === startB.second)
        && (endA.hour === endB.hour)
        && (endA.minute === endB.minute)
        && (endA.second === endB.second)
    );
}

function compareNamedDay (a: NamedDay, b: NamedDay): boolean {
    if (("intNamedDays" in a) && ("intNamedDays" in b)) {
        if (a.intNamedDays !== b.intNamedDays) {
            return false;
        }
    } else if (("bitNamedDays" in a) && ("bitNamedDays" in b)) {
        const daysA = a.bitNamedDays;
        const daysB = b.bitNamedDays;
        const len: number = Math.max(daysA.length, daysB.length);
        for (let i = 0; i < len; i++) {
            if (Boolean(daysA[i]) !== Boolean(daysB[i])) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

function comparePeriod (a: Period, b: Period): boolean {
    if (a.timesOfDay?.length !== b.timesOfDay?.length) {
        return false;
    }
    if (a.years?.length !== b.years?.length) {
        return false;
    }
    if (Boolean(a.days) !== Boolean(b.days)) {
        return false;
    }
    if (Boolean(a.weeks) !== Boolean(b.weeks)) {
        return false;
    }
    if (Boolean(a.months) !== Boolean(b.months)) {
        return false;
    }
    if (a.timesOfDay && b.timesOfDay) {
        for (let i = 0; i < a.timesOfDay.length; i++) {
            if (!compareDayTimeBand(a.timesOfDay[i], b.timesOfDay[i])) {
                return false;
            }
        }
    }
    if (a.days && b.days) {
        if (("intDay" in a.days) && ("intDay" in b.days)) {
            if (a.days.intDay.length !== b.days.intDay.length) {
                return false;
            }
            const sortedDaysA = a.days.intDay.sort((a, b) => (Number(a) - Number(b)));
            const sortedDaysB = b.days.intDay.sort((a, b) => (Number(a) - Number(b)));
            for (let i = 0; i < sortedDaysA.length; i++) {
                if (sortedDaysA[i] !== sortedDaysB[i]) {
                    return false;
                }
            }
        } else if (("bitDay" in a.days) && ("bitDay" in b.days)) {
            const daysA = a.days.bitDay;
            const daysB = b.days.bitDay;
            const len = Math.max(daysA.length, daysB.length);
            for (let i = 0; i < len; i++) {
                if (Boolean(daysA[i]) !== Boolean(daysB[i])) {
                    return false;
                }
            }
        } else if (("dayOf" in a.days) && ("dayOf" in b.days)) {
            if (("first" in a.days.dayOf) && ("first" in b.days.dayOf)) {
                const dayA = a.days.dayOf.first;
                const dayB = b.days.dayOf.first;
                if (!compareNamedDay(dayA, dayB)) {
                    return false;
                }
            } else if (("second" in a.days.dayOf) && ("second" in b.days.dayOf)) {
                const dayA = a.days.dayOf.second;
                const dayB = b.days.dayOf.second;
                if (!compareNamedDay(dayA, dayB)) {
                    return false;
                }
            } else if (("third" in a.days.dayOf) && ("third" in b.days.dayOf)) {
                const dayA = a.days.dayOf.third;
                const dayB = b.days.dayOf.third;
                if (!compareNamedDay(dayA, dayB)) {
                    return false;
                }
            } else if (("fourth" in a.days.dayOf) && ("fourth" in b.days.dayOf)) {
                const dayA = a.days.dayOf.fourth;
                const dayB = b.days.dayOf.fourth;
                if (!compareNamedDay(dayA, dayB)) {
                    return false;
                }
            } else if (("fifth" in a.days.dayOf) && ("fifth" in b.days.dayOf)) {
                const dayA = a.days.dayOf.fifth;
                const dayB = b.days.dayOf.fifth;
                if (!compareNamedDay(dayA, dayB)) {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false; // We don't know how to compare anything else.
        }
    }
    if (a.weeks && b.weeks) {
        if (("intWeek" in a.weeks) && ("intWeek" in b.weeks)) {
            if (a.weeks.intWeek.length !== b.weeks.intWeek.length) {
                return false;
            }
            const weeksA = a.weeks.intWeek.sort((a, b) => (Number(a) - Number(b)));
            const weeksB = b.weeks.intWeek.sort((a, b) => (Number(a) - Number(b)));
            for (let i = 0; i < weeksA.length; i++) {
                if (weeksA[i] !== weeksB[i]) {
                    return false;
                }
            }
        } else if (("bitWeek" in a.weeks) && ("bitWeek" in b.weeks)) {
            const weeksA = a.weeks.bitWeek;
            const weeksB = b.weeks.bitWeek;
            const len = Math.max(weeksA.length, weeksB.length);
            for (let i = 0; i < len; i++) {
                if (Boolean(weeksA[i]) !== Boolean(weeksB[i])) {
                    return false;
                }
            }
        } else if (!(("allWeeks" in a.weeks) && ("allWeeks" in b.weeks))) {
            return false;
        }
    }
    if (a.months && b.months) {
        if (("intMonth" in a.months) && ("intMonth" in b.months)) {
            if (a.months.intMonth.length !== b.months.intMonth.length) {
                return false;
            }
            const monthsA = a.months.intMonth.sort((a, b) => (Number(a) - Number(b)));
            const monthsB = b.months.intMonth.sort((a, b) => (Number(a) - Number(b)));
            for (let i = 0; i < monthsA.length; i++) {
                if (monthsA[i] !== monthsB[i]) {
                    return false;
                }
            }
        } else if (("bitMonth" in a.months) && ("bitMonth" in b.months)) {
            const monthsA = a.months.bitMonth;
            const monthsB = b.months.bitMonth;
            const len = Math.max(monthsA.length, monthsB.length);
            for (let i = 0; i < len; i++) {
                if (Boolean(monthsA[i]) !== Boolean(monthsB[i])) {
                    return false;
                }
            }
        } else if (!(("allMonths" in a.months) && ("allMonths" in b.months))) {
            return false;
        }
    }
    if (a.years && b.years) {
        const yearsA = a.years.sort((a, b) => (Number(a) - Number(b)));
        const yearsB = b.years.sort((a, b) => (Number(a) - Number(b)));
        for (let i = 0; i < yearsA.length; i++) {
            if (yearsA[i] !== yearsB[i]) {
                return false;
            }
        }
    }
    return true;
}

export
const timeSpecificationMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
    const ext: Extension | undefined = v.toBeSigned.extensions
        .find((ext: Extension): boolean => ext.extnId.isEqualTo(id_ce_timeSpecification));
    if (!ext) {
        return false;
    }

    const assertedTime: TimeSpecification = _decode_TimeSpecification(assertion);
    const storedTime: TimeSpecification = ((): TimeSpecification => {
        const el: DERElement = new DERElement();
        el.fromBytes(ext.extnValue);
        return _decode_TimeSpecification(el);
    })();

    if (
        (storedTime.notThisTime ?? TimeSpecification._default_value_for_notThisTime)
        !== (assertedTime.notThisTime ?? TimeSpecification._default_value_for_notThisTime)
    ) {
        return false;
    }

    if (storedTime.timeZone !== assertedTime.timeZone) {
        return false;
    }

    if (("absolute" in storedTime.time) && ("absolute" in assertedTime.time)) {
        const storedStart   = storedTime.time.absolute.startTime;
        const storedEnd     = storedTime.time.absolute.endTime;
        const assertedStart = assertedTime.time.absolute.startTime;
        const assertedEnd   = assertedTime.time.absolute.endTime;
        if (storedStart?.valueOf() !== assertedStart?.valueOf()) {
            return false;
        }
        if (storedEnd?.valueOf() !== assertedEnd?.valueOf()) {
            return false;
        }
    } else if (("periodic" in storedTime.time) && ("periodic" in assertedTime.time)) {
        if (storedTime.time.periodic.length !== assertedTime.time.periodic.length) {
            return false;
        }
        const storedPeriods = storedTime.time.periodic;
        const assertedPeriods = assertedTime.time.periodic;
        for (let i = 0; i < storedPeriods.length; i++) {
            if (!comparePeriod(storedPeriods[i], assertedPeriods[i])) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

export default timeSpecificationMatch;
