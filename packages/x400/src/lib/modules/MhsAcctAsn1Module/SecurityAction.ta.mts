/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION SecurityAction */
/**
 * @summary SecurityAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityAction  ::=  BIT STRING {
 *   unspecified(0), origin-authentication(1), security-label-check(2)}
 * ```
 */
export type SecurityAction = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION SecurityAction */

/* START_OF_SYMBOL_DEFINITION SecurityAction_unspecified */
/**
 * @summary SecurityAction_unspecified
 * @constant
 */
export const SecurityAction_unspecified: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SecurityAction_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary unspecified
 * @constant
 */
export const unspecified: number = SecurityAction_unspecified; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION SecurityAction_origin_authentication */
/**
 * @summary SecurityAction_origin_authentication
 * @constant
 */
export const SecurityAction_origin_authentication: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SecurityAction_origin_authentication */

/* START_OF_SYMBOL_DEFINITION origin_authentication */
/**
 * @summary origin_authentication
 * @constant
 */
export const origin_authentication: number = SecurityAction_origin_authentication; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION origin_authentication */

/* START_OF_SYMBOL_DEFINITION SecurityAction_security_label_check */
/**
 * @summary SecurityAction_security_label_check
 * @constant
 */
export const SecurityAction_security_label_check: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SecurityAction_security_label_check */

/* START_OF_SYMBOL_DEFINITION security_label_check */
/**
 * @summary security_label_check
 * @constant
 */
export const security_label_check: number = SecurityAction_security_label_check; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION security_label_check */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAction */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAction */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityAction */
export const _decode_SecurityAction = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_SecurityAction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAction */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAction */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityAction */
export const _encode_SecurityAction = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_SecurityAction */

/* eslint-enable */
