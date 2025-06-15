/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_IrisScan_eye */
/**
 * @summary IrisScan_eye
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan-eye ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_IrisScan_eye {
    left = 0,
    right = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION IrisScan_eye */
/**
 * @summary IrisScan_eye
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan-eye ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type IrisScan_eye = _enum_for_IrisScan_eye;
/* END_OF_SYMBOL_DEFINITION IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION IrisScan_eye */
/**
 * @summary IrisScan_eye
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan-eye ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const IrisScan_eye = _enum_for_IrisScan_eye;
/* END_OF_SYMBOL_DEFINITION IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION IrisScan_eye_left */
/**
 * @summary IrisScan_eye_left
 * @constant
 * @type {number}
 */
export const IrisScan_eye_left: IrisScan_eye =
    IrisScan_eye.left; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IrisScan_eye_left */

/* START_OF_SYMBOL_DEFINITION left */
/**
 * @summary left
 * @constant
 * @type {number}
 */
export const left: IrisScan_eye =
    IrisScan_eye.left; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION left */

/* START_OF_SYMBOL_DEFINITION IrisScan_eye_right */
/**
 * @summary IrisScan_eye_right
 * @constant
 * @type {number}
 */
export const IrisScan_eye_right: IrisScan_eye =
    IrisScan_eye.right; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IrisScan_eye_right */

/* START_OF_SYMBOL_DEFINITION right */
/**
 * @summary right
 * @constant
 * @type {number}
 */
export const right: IrisScan_eye =
    IrisScan_eye.right; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION right */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IrisScan_eye */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION _decode_IrisScan_eye */
export const _decode_IrisScan_eye = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IrisScan_eye */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION _encode_IrisScan_eye */
export const _encode_IrisScan_eye = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_IrisScan_eye */

/* eslint-enable */
