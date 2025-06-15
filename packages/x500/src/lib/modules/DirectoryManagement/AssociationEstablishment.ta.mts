/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AssociationEstablishment */
/**
 * @summary AssociationEstablishment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationEstablishment  ::=  BIT STRING {inward(0), outward(1)}
 * ```
 */
export type AssociationEstablishment = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AssociationEstablishment */

/* START_OF_SYMBOL_DEFINITION AssociationEstablishment_inward */
/**
 * @summary AssociationEstablishment_inward
 * @constant
 */
export const AssociationEstablishment_inward: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AssociationEstablishment_inward */

/* START_OF_SYMBOL_DEFINITION inward */
/**
 * @summary inward
 * @constant
 */
export const inward: number = AssociationEstablishment_inward; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION inward */

/* START_OF_SYMBOL_DEFINITION AssociationEstablishment_outward */
/**
 * @summary AssociationEstablishment_outward
 * @constant
 */
export const AssociationEstablishment_outward: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AssociationEstablishment_outward */

/* START_OF_SYMBOL_DEFINITION outward */
/**
 * @summary outward
 * @constant
 */
export const outward: number = AssociationEstablishment_outward; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION outward */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationEstablishment */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationEstablishment */

/* START_OF_SYMBOL_DEFINITION _decode_AssociationEstablishment */
export const _decode_AssociationEstablishment = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_AssociationEstablishment */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationEstablishment */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationEstablishment */

/* START_OF_SYMBOL_DEFINITION _encode_AssociationEstablishment */
export const _encode_AssociationEstablishment = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_AssociationEstablishment */

/* eslint-enable */
