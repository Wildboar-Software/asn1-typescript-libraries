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

/* START_OF_SYMBOL_DEFINITION AuthenticationCheck */
/**
 * @summary AuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationCheck  ::=  INTEGER {validated(1), failed(2)}
 * ```
 */
export type AuthenticationCheck = INTEGER;
/* END_OF_SYMBOL_DEFINITION AuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION AuthenticationCheck_validated */
/**
 * @summary AuthenticationCheck_validated
 * @constant
 * @type {number}
 */
export const AuthenticationCheck_validated: AuthenticationCheck = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationCheck_validated */

/* START_OF_SYMBOL_DEFINITION validated */
/**
 * @summary AuthenticationCheck_validated
 * @constant
 * @type {number}
 */
export const validated: AuthenticationCheck = AuthenticationCheck_validated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION validated */

/* START_OF_SYMBOL_DEFINITION AuthenticationCheck_failed */
/**
 * @summary AuthenticationCheck_failed
 * @constant
 * @type {number}
 */
export const AuthenticationCheck_failed: AuthenticationCheck = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationCheck_failed */

/* START_OF_SYMBOL_DEFINITION failed */
/**
 * @summary AuthenticationCheck_failed
 * @constant
 * @type {number}
 */
export const failed: AuthenticationCheck = AuthenticationCheck_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationCheck */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticationCheck */
export const _decode_AuthenticationCheck = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationCheck */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationCheck */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticationCheck */
export const _encode_AuthenticationCheck = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticationCheck */

/* eslint-enable */
