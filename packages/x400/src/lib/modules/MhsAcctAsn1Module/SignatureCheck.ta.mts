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
 * @summary SignatureCheck
 * @description
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
export const SignatureCheck_valid: SignatureCheck = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureCheck_valid
 * @constant
 * @type {number}
 */
export const valid: SignatureCheck = SignatureCheck_valid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureCheck_failed
 * @constant
 * @type {number}
 */
export const SignatureCheck_failed: SignatureCheck = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureCheck_failed
 * @constant
 * @type {number}
 */
export const failed: SignatureCheck = SignatureCheck_failed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SignatureCheck = $._decodeInteger;


export const _encode_SignatureCheck = $._encodeInteger;


/* eslint-enable */
