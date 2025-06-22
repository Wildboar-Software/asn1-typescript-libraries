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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary MaximumErrorInNanoseconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumErrorInNanoseconds  ::=  INTEGER {noEstimate(281474976710655)
 * }(0..281474976710655)
 * ```
 */
export type MaximumErrorInNanoseconds = INTEGER;

/**
 * @summary MaximumErrorInNanoseconds_noEstimate
 * @constant
 * @type {number}
 */
export const MaximumErrorInNanoseconds_noEstimate: MaximumErrorInNanoseconds = 281474976710655; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MaximumErrorInNanoseconds_noEstimate
 * @constant
 * @type {number}
 */
export const noEstimate: MaximumErrorInNanoseconds = MaximumErrorInNanoseconds_noEstimate; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_MaximumErrorInNanoseconds = $._decodeInteger;


export const _encode_MaximumErrorInNanoseconds = $._encodeInteger;


/* eslint-enable */
