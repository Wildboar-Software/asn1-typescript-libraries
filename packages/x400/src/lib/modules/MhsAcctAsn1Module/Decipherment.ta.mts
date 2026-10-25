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
export const Decipherment_success: 1 = 1 satisfies Decipherment; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Decipherment_success
 * @constant
 * @type {number}
 */
export const success: 1 = Decipherment_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const Decipherment_failure: 2 = 2 satisfies Decipherment; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const failure: 2 = Decipherment_failure; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Decipherment: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_Decipherment: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
