/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION MechType */
/**
 * @summary MechType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MechType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MechType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION MechType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MechType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MechType */

/* START_OF_SYMBOL_DEFINITION _decode_MechType */
export const _decode_MechType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_MechType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MechType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MechType */

/* START_OF_SYMBOL_DEFINITION _encode_MechType */
export const _encode_MechType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_MechType */

/* eslint-enable */
