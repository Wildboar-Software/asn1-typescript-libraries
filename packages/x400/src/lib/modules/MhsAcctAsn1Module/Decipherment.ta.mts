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
 * @summary Decipherment
 * @description
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
export const Decipherment_success: Decipherment = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Decipherment_success
 * @constant
 * @type {number}
 */
export const success: Decipherment = Decipherment_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const Decipherment_failure: Decipherment = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const failure: Decipherment = Decipherment_failure; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Decipherment = $._decodeInteger;


export const _encode_Decipherment = $._encodeInteger;


/* eslint-enable */
