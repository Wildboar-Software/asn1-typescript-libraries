/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    DaysOfMonth,
    _decode_DaysOfMonth,
    _encode_DaysOfMonth,
} from '../Schedulerev1-ASN1Module/DaysOfMonth.ta.mjs';

/**
 * @summary defaultDaysOfMonth
 * @description
 *
 * Default of `daysOfMonth`: all 31 bits set in both strings,
 * i.e. every day of the month. ITU-T Rec. X.746 (02/00)
 * [§8.3.6.2](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultDaysOfMonth DaysOfMonth ::= {daysFromFirst '1111111111111111111111111111111'B, daysFromLast
 *     '1111111111111111111111111111111'B}
 * ```
 *
 * @constant
 */
export const defaultDaysOfMonth: DaysOfMonth = DaysOfMonth._from_object({
    daysFromFirst: new Uint8ClampedArray([
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
    ]),
    daysFromLast: new Uint8ClampedArray([
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
    ]),
});

/* eslint-enable */
