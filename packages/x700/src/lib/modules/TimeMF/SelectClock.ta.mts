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
 * @summary SelectClock
 * @description
 *
 * Peer-count used by NTP selection (0..255). Syntax of
 * `minimumSelectClock` (minimum peers acceptable for
 * synchronization) and `maximumSelectClock` (maximum peers
 * considered for selection). ITU-T Rec. X.743 (06/98)
 * [§B.3.7](https://www.itu.int/rec/T-REC-X.743-199806-I), B.3.12, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectClock  ::=  INTEGER(0..255)
 * ```
 */
export type SelectClock = INTEGER;


export const _decode_SelectClock = $._decodeInteger;


export const _encode_SelectClock = $._encodeInteger;


/* eslint-enable */
