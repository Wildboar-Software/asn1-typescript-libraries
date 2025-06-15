/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION HoldInstruction */
/**
 * @summary HoldInstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldInstruction  ::=  OBJECT IDENTIFIER
 * ```
 */
export type HoldInstruction = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION HoldInstruction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HoldInstruction */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HoldInstruction */

/* START_OF_SYMBOL_DEFINITION _decode_HoldInstruction */
export const _decode_HoldInstruction = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_HoldInstruction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HoldInstruction */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HoldInstruction */

/* START_OF_SYMBOL_DEFINITION _encode_HoldInstruction */
export const _encode_HoldInstruction = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_HoldInstruction */

/* eslint-enable */
