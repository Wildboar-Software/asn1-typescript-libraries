/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DateOfLeap
 * @description
 *
 * Date/time of the leap second carried in `LeapSecondInfo`
 * (mandatory `Date of Leap` on the leap-second action,
 * Table 2). ITU-T Rec. X.743 (06/98)
 * [§9.7](https://www.itu.int/rec/T-REC-X.743-199806-I), A.3.2, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateOfLeap  ::=  GeneralizedTime
 * ```
 */
export type DateOfLeap = GeneralizedTime; // GeneralizedTime


export const _decode_DateOfLeap = $._decodeGeneralizedTime;


export const _encode_DateOfLeap = $._encodeGeneralizedTime;


/* eslint-enable */
