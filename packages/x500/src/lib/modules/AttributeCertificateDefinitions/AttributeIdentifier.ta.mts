/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/* START_OF_SYMBOL_DEFINITION AttributeIdentifier */
/**
 * @summary AttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIdentifier  ::=  ATTRIBUTE.&id({AttributeIDs})
 * ```
 */
export type AttributeIdentifier = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AttributeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeIdentifier */
export const _decode_AttributeIdentifier = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeIdentifier */
export const _encode_AttributeIdentifier = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeIdentifier */

/* eslint-enable */
