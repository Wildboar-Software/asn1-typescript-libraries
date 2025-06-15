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

/**
 * @summary SecurityAction_unspecified
 * @constant
 */
export const SecurityAction_unspecified: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary unspecified
 * @constant
 */
export const unspecified: number = SecurityAction_unspecified; /* SHORT_NAMED_BIT */

/**
 * @summary SecurityAction_origin_authentication
 * @constant
 */
export const SecurityAction_origin_authentication: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary origin_authentication
 * @constant
 */
export const origin_authentication: number = SecurityAction_origin_authentication; /* SHORT_NAMED_BIT */

/**
 * @summary SecurityAction_security_label_check
 * @constant
 */
export const SecurityAction_security_label_check: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary security_label_check
 * @constant
 */
export const security_label_check: number = SecurityAction_security_label_check; /* SHORT_NAMED_BIT */


export const _decode_SecurityAction = $._decodeBitString;


export const _encode_SecurityAction = $._encodeBitString;


/* eslint-enable */
