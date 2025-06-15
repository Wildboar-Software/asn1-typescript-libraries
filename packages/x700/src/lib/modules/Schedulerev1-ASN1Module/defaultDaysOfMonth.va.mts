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
} from 'asn1-ts';
import {
    DaysOfMonth,
    _decode_DaysOfMonth,
    _encode_DaysOfMonth,
} from '../Schedulerev1-ASN1Module/DaysOfMonth.ta.mjs';

/**
 * @summary defaultDaysOfMonth
 * @description
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
