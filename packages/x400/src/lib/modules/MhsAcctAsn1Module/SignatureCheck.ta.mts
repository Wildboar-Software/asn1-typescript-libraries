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

/* START_OF_SYMBOL_DEFINITION SignatureCheck */
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
/* END_OF_SYMBOL_DEFINITION SignatureCheck */

/* START_OF_SYMBOL_DEFINITION SignatureCheck_valid */
/**
 * @summary SignatureCheck_valid
 * @constant
 * @type {number}
 */
export const SignatureCheck_valid: SignatureCheck = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureCheck_valid */

/* START_OF_SYMBOL_DEFINITION valid */
/**
 * @summary SignatureCheck_valid
 * @constant
 * @type {number}
 */
export const valid: SignatureCheck = SignatureCheck_valid; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION valid */

/* START_OF_SYMBOL_DEFINITION SignatureCheck_failed */
/**
 * @summary SignatureCheck_failed
 * @constant
 * @type {number}
 */
export const SignatureCheck_failed: SignatureCheck = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureCheck_failed */

/* START_OF_SYMBOL_DEFINITION failed */
/**
 * @summary SignatureCheck_failed
 * @constant
 * @type {number}
 */
export const failed: SignatureCheck = SignatureCheck_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureCheck */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureCheck */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureCheck */
export const _decode_SignatureCheck = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SignatureCheck */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureCheck */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureCheck */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureCheck */
export const _encode_SignatureCheck = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SignatureCheck */

/* eslint-enable */
