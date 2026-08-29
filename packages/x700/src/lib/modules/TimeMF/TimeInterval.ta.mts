/* eslint-disable */
import {
    OCTET_STRING,
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
 * @summary TimeInterval
 * @description
 *
 * Eight-octet encoding of a time interval (same packed form
 * as `GlobalTime`; see §8.1). Used as the syntax of
 * precision, drift-related intervals, maximum/estimated
 * error, adjustment interval, and NTP dispersion/skew/age
 * attributes. The rec does not specify the octet layout.
 * ITU-T Rec. X.743 (06/98)
 * [§A.5](https://www.itu.int/rec/T-REC-X.743-199806-I), §8.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeInterval  ::=  OCTET STRING(SIZE (8))
 * ```
 */
export type TimeInterval = OCTET_STRING; // OctetStringType


export const _decode_TimeInterval = $._decodeOctetString;


export const _encode_TimeInterval = $._encodeOctetString;


/* eslint-enable */
