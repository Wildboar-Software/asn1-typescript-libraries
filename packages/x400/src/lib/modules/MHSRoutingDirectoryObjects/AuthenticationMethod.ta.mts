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

/* START_OF_SYMBOL_DEFINITION AuthenticationMethod */
/**
 * @summary AuthenticationMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationMethod  ::=  INTEGER {
 *   no-authentication(0), simple-password(1), strong-authentication(2)}
 * ```
 */
export type AuthenticationMethod = INTEGER;
/* END_OF_SYMBOL_DEFINITION AuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION AuthenticationMethod_no_authentication */
/**
 * @summary AuthenticationMethod_no_authentication
 * @constant
 * @type {number}
 */
export const AuthenticationMethod_no_authentication: AuthenticationMethod = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationMethod_no_authentication */

/* START_OF_SYMBOL_DEFINITION no_authentication */
/**
 * @summary AuthenticationMethod_no_authentication
 * @constant
 * @type {number}
 */
export const no_authentication: AuthenticationMethod = AuthenticationMethod_no_authentication; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_authentication */

/* START_OF_SYMBOL_DEFINITION AuthenticationMethod_simple_password */
/**
 * @summary AuthenticationMethod_simple_password
 * @constant
 * @type {number}
 */
export const AuthenticationMethod_simple_password: AuthenticationMethod = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationMethod_simple_password */

/* START_OF_SYMBOL_DEFINITION simple_password */
/**
 * @summary AuthenticationMethod_simple_password
 * @constant
 * @type {number}
 */
export const simple_password: AuthenticationMethod = AuthenticationMethod_simple_password; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION simple_password */

/* START_OF_SYMBOL_DEFINITION AuthenticationMethod_strong_authentication */
/**
 * @summary AuthenticationMethod_strong_authentication
 * @constant
 * @type {number}
 */
export const AuthenticationMethod_strong_authentication: AuthenticationMethod = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationMethod_strong_authentication */

/* START_OF_SYMBOL_DEFINITION strong_authentication */
/**
 * @summary AuthenticationMethod_strong_authentication
 * @constant
 * @type {number}
 */
export const strong_authentication: AuthenticationMethod = AuthenticationMethod_strong_authentication; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION strong_authentication */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationMethod */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticationMethod */
export const _decode_AuthenticationMethod = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationMethod */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticationMethod */
export const _encode_AuthenticationMethod = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticationMethod */

/* eslint-enable */
