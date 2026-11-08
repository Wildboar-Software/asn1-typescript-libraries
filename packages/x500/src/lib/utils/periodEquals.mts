import {
    ASN1Construction, ASN1Element, ASN1TagClass, ASN1UniversalType, DERElement,
} from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { Buffer } from "node:buffer";
import { Period, _encode_Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import { DayTime } from "../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { MATCH_FLAG_CONSTANT_TIME } from "../types/matching.mjs";
import { stringsEqual } from "../matching/constantTime.mjs";
import { normalizePeriod } from "./normalizePeriod.mjs";
import { sortedKeyMultisetsEqual } from "./sortedKeyMultisetsEqual.mjs";

const stringTypes = new Set<number>([
    ASN1UniversalType.octetString, ASN1UniversalType.objectDescriptor,
    ASN1UniversalType.utf8String, ASN1UniversalType.numericString,
    ASN1UniversalType.printableString, ASN1UniversalType.teletexString,
    ASN1UniversalType.videotexString, ASN1UniversalType.ia5String,
    ASN1UniversalType.utcTime, ASN1UniversalType.generalizedTime,
    ASN1UniversalType.graphicString, ASN1UniversalType.visibleString,
    ASN1UniversalType.generalString, ASN1UniversalType.universalString,
    ASN1UniversalType.bmpString,
]);

/**
 * Canonicalize an open extension's outer encoding. Understood universal strings
 * are deconstructed so equivalent BER fragmentations share a key (M19).
 * Other open values retain their construction and raw content; their unknown
 * internal schema is not guessed. The original element is never changed.
 */
function canonicalElement (value: ASN1Element): ASN1Element {
    const deconstruct = value.tagClass === ASN1TagClass.universal
        && stringTypes.has(value.tagNumber);
    const result = new DERElement(
        value.tagClass,
        deconstruct ? ASN1Construction.primitive : value.construction,
        value.tagNumber,
    );
    const content = deconstruct && value.construction === ASN1Construction.constructed
        ? value.deconstruct("Period extension")
        : value.value;
    result.value = new Uint8Array(content);
    return result;
}

function canonicalExtensions (values: readonly ASN1Element[] = []): ASN1Element[] {
    return values.map(canonicalElement);
}

function canonicalDayTime (value: DayTime | undefined): DayTime | undefined {
    return value && new DayTime(
        value.hour, value.minute, value.second, canonicalExtensions(value._unrecognizedExtensionsList),
    );
}

/** Stable key after X.520 clause 10.2 normalization, including open extensions. */
function periodKey (value: Period): string {
    const period = normalizePeriod(value);
    const canonical = new Period(
        period.timesOfDay?.map((band) => new DayTimeBand(
            canonicalDayTime(band.startDayTime), canonicalDayTime(band.endDayTime),
            canonicalExtensions(band._unrecognizedExtensionsList),
        )),
        ASN1Element.isElement(period.days) ? canonicalElement(period.days) : period.days,
        ASN1Element.isElement(period.weeks) ? canonicalElement(period.weeks) : period.weeks,
        ASN1Element.isElement(period.months) ? canonicalElement(period.months) : period.months,
        period.years,
        canonicalExtensions(period._unrecognizedExtensionsList),
    );
    return Buffer.from(_encode_Period(canonical, DER).toBytes()).toString("hex");
}

/** Compare two normalized Periods, preserving their extension contents. */
export function periodsEquivalent (
    a: Period,
    b: Period,
    constantTime: boolean | number = 0,
): boolean {
    return stringsEqual(periodKey(a), periodKey(b), constantTime);
}

/**
 * Compare SET OF Period as a multiset of canonical keys (M28).
 * Normalization handles INTEGER/BIT STRING alternatives, defaults, SET order,
 * and duplicate integer members before encoding. Sorting temporary keys avoids
 * quadratic pairing and arbitrary work-budget cutoffs. Duplicate Periods still
 * count separately. MATCH_FLAG_HIGH_WORK_BUDGET is accepted but unnecessary.
 * MATCH_FLAG_CONSTANT_TIME scans all aligned keys; normalization and sorting
 * are not themselves timing-independent.
 */
export function periodSetsEquivalent (
    asserted: readonly Period[],
    stored: readonly Period[],
    flags: number = 0,
): boolean {
    if (asserted.length !== stored.length) return false;
    return sortedKeyMultisetsEqual(
        asserted.map(periodKey), stored.map(periodKey), flags & MATCH_FLAG_CONSTANT_TIME,
    );
}

export default periodsEquivalent;
