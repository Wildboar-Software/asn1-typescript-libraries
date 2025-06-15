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
 * @summary EDINStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINStatus  ::=  BIT STRING {
 *   nn-requested(0), fn-requested(1), pn-requested(2), nn-issued(3),
 *   fn-issued(4), pn-issued(5)}
 * ```
 */
export type EDINStatus = BIT_STRING;

/**
 * @summary EDINStatus_nn_requested
 * @constant
 */
export const EDINStatus_nn_requested: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary nn_requested
 * @constant
 */
export const nn_requested: number = EDINStatus_nn_requested; /* SHORT_NAMED_BIT */

/**
 * @summary EDINStatus_fn_requested
 * @constant
 */
export const EDINStatus_fn_requested: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary fn_requested
 * @constant
 */
export const fn_requested: number = EDINStatus_fn_requested; /* SHORT_NAMED_BIT */

/**
 * @summary EDINStatus_pn_requested
 * @constant
 */
export const EDINStatus_pn_requested: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary pn_requested
 * @constant
 */
export const pn_requested: number = EDINStatus_pn_requested; /* SHORT_NAMED_BIT */

/**
 * @summary EDINStatus_nn_issued
 * @constant
 */
export const EDINStatus_nn_issued: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nn_issued
 * @constant
 */
export const nn_issued: number = EDINStatus_nn_issued; /* SHORT_NAMED_BIT */

/**
 * @summary EDINStatus_fn_issued
 * @constant
 */
export const EDINStatus_fn_issued: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary fn_issued
 * @constant
 */
export const fn_issued: number = EDINStatus_fn_issued; /* SHORT_NAMED_BIT */

/**
 * @summary EDINStatus_pn_issued
 * @constant
 */
export const EDINStatus_pn_issued: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary pn_issued
 * @constant
 */
export const pn_issued: number = EDINStatus_pn_issued; /* SHORT_NAMED_BIT */


export const _decode_EDINStatus = $._decodeBitString;


export const _encode_EDINStatus = $._encodeBitString;


/* eslint-enable */
