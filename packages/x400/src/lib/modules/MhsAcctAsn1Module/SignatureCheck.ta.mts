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
 * @summary SignatureCheck
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureCheck  ::=  INTEGER {valid(1), failed(2)}
 * ```
 */
export type SignatureCheck = INTEGER;

/**
 * @summary SignatureCheck_valid
 * @constant
 * @type {number}
 */
export const SignatureCheck_valid: 1 = 1 satisfies SignatureCheck; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureCheck_valid
 * @constant
 * @type {number}
 */
export const valid: 1 = SignatureCheck_valid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureCheck_failed
 * @constant
 * @type {number}
 */
export const SignatureCheck_failed: 2 = 2 satisfies SignatureCheck; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureCheck_failed
 * @constant
 * @type {number}
 */
export const failed: 2 = SignatureCheck_failed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SignatureCheck: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_SignatureCheck: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
