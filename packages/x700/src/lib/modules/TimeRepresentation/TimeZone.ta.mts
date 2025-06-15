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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary TimeZone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeZone  ::=  INTEGER {unknown(781)}(-780..781)
 * ```
 */
export type TimeZone = INTEGER;

/**
 * @summary TimeZone_unknown
 * @constant
 * @type {number}
 */
export const TimeZone_unknown: TimeZone = 781; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TimeZone_unknown
 * @constant
 * @type {number}
 */
export const unknown: TimeZone = TimeZone_unknown; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TimeZone = $._decodeInteger;


export const _encode_TimeZone = $._encodeInteger;


/* eslint-enable */
