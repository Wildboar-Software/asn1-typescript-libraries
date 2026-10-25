/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary Decipherment
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Decipherment  ::=  INTEGER {success(1), failure(2)}
 * ```
 */
export type Decipherment = INTEGER;

/**
 * @summary Decipherment_success
 * @constant
 * @type {number}
 */
export const Decipherment_success = 1 satisfies Decipherment; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Decipherment_success
 * @constant
 * @type {number}
 */
export const success = Decipherment_success satisfies Decipherment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const Decipherment_failure = 2 satisfies Decipherment; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const failure = Decipherment_failure satisfies Decipherment; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Decipherment = $._decodeInteger;


export const _encode_Decipherment = $._encodeInteger;


/* eslint-enable */
