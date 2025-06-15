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

/* START_OF_SYMBOL_DEFINITION EDINStatus */
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
/* END_OF_SYMBOL_DEFINITION EDINStatus */

/* START_OF_SYMBOL_DEFINITION EDINStatus_nn_requested */
/**
 * @summary EDINStatus_nn_requested
 * @constant
 */
export const EDINStatus_nn_requested: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINStatus_nn_requested */

/* START_OF_SYMBOL_DEFINITION nn_requested */
/**
 * @summary nn_requested
 * @constant
 */
export const nn_requested: number = EDINStatus_nn_requested; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nn_requested */

/* START_OF_SYMBOL_DEFINITION EDINStatus_fn_requested */
/**
 * @summary EDINStatus_fn_requested
 * @constant
 */
export const EDINStatus_fn_requested: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINStatus_fn_requested */

/* START_OF_SYMBOL_DEFINITION fn_requested */
/**
 * @summary fn_requested
 * @constant
 */
export const fn_requested: number = EDINStatus_fn_requested; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fn_requested */

/* START_OF_SYMBOL_DEFINITION EDINStatus_pn_requested */
/**
 * @summary EDINStatus_pn_requested
 * @constant
 */
export const EDINStatus_pn_requested: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINStatus_pn_requested */

/* START_OF_SYMBOL_DEFINITION pn_requested */
/**
 * @summary pn_requested
 * @constant
 */
export const pn_requested: number = EDINStatus_pn_requested; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION pn_requested */

/* START_OF_SYMBOL_DEFINITION EDINStatus_nn_issued */
/**
 * @summary EDINStatus_nn_issued
 * @constant
 */
export const EDINStatus_nn_issued: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINStatus_nn_issued */

/* START_OF_SYMBOL_DEFINITION nn_issued */
/**
 * @summary nn_issued
 * @constant
 */
export const nn_issued: number = EDINStatus_nn_issued; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nn_issued */

/* START_OF_SYMBOL_DEFINITION EDINStatus_fn_issued */
/**
 * @summary EDINStatus_fn_issued
 * @constant
 */
export const EDINStatus_fn_issued: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINStatus_fn_issued */

/* START_OF_SYMBOL_DEFINITION fn_issued */
/**
 * @summary fn_issued
 * @constant
 */
export const fn_issued: number = EDINStatus_fn_issued; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fn_issued */

/* START_OF_SYMBOL_DEFINITION EDINStatus_pn_issued */
/**
 * @summary EDINStatus_pn_issued
 * @constant
 */
export const EDINStatus_pn_issued: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINStatus_pn_issued */

/* START_OF_SYMBOL_DEFINITION pn_issued */
/**
 * @summary pn_issued
 * @constant
 */
export const pn_issued: number = EDINStatus_pn_issued; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION pn_issued */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINStatus */

/* START_OF_SYMBOL_DEFINITION _decode_EDINStatus */
export const _decode_EDINStatus = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_EDINStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINStatus */

/* START_OF_SYMBOL_DEFINITION _encode_EDINStatus */
export const _encode_EDINStatus = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_EDINStatus */

/* eslint-enable */
