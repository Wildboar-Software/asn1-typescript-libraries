/* eslint-disable */
import {
    INTEGER,
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
 * @summary ClockEventCounter
 * @description
 *
 * Count of system exception events since the counter was last
 * checked and cleared (0..255). Syntax of
 * `clockEventCounter` (`MATCHES FOR EQUALITY, ORDERING`).
 * ITU-T Rec. X.743 (06/98)
 * [§8.3.5](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockEventCounter  ::=  INTEGER(0..255)
 * ```
 */
export type ClockEventCounter = INTEGER;


export const _decode_ClockEventCounter = $._decodeInteger;


export const _encode_ClockEventCounter = $._encodeInteger;


/* eslint-enable */
