/* eslint-disable */
import {
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
 * @summary X25PLEMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X25PLEMode  ::=  ENUMERATED {dTE(0), dCE(1), dTEasDCE(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_X25PLEMode {
    dTE = 0,
    dCE = 1,
    dTEasDCE = 2,
}


/**
 * @summary X25PLEMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X25PLEMode  ::=  ENUMERATED {dTE(0), dCE(1), dTEasDCE(2)}
 * ```
 *
 * @enum {number}
 */
export type X25PLEMode = _enum_for_X25PLEMode;


/**
 * @summary X25PLEMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X25PLEMode  ::=  ENUMERATED {dTE(0), dCE(1), dTEasDCE(2)}
 * ```
 *
 * @enum {number}
 */
export const X25PLEMode = _enum_for_X25PLEMode;


/**
 * @summary X25PLEMode_dTE
 * @constant
 * @type {number}
 */
export const X25PLEMode_dTE: X25PLEMode =
    X25PLEMode.dTE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dTE
 * @constant
 * @type {number}
 */
export const dTE: X25PLEMode =
    X25PLEMode.dTE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary X25PLEMode_dCE
 * @constant
 * @type {number}
 */
export const X25PLEMode_dCE: X25PLEMode =
    X25PLEMode.dCE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dCE
 * @constant
 * @type {number}
 */
export const dCE: X25PLEMode =
    X25PLEMode.dCE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary X25PLEMode_dTEasDCE
 * @constant
 * @type {number}
 */
export const X25PLEMode_dTEasDCE: X25PLEMode =
    X25PLEMode.dTEasDCE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dTEasDCE
 * @constant
 * @type {number}
 */
export const dTEasDCE: X25PLEMode =
    X25PLEMode.dTEasDCE; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_X25PLEMode = $._decodeEnumerated;




export const _encode_X25PLEMode = $._encodeEnumerated;


/* eslint-enable */
