/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ID */
/**
 * @summary ID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ID  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ID = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ID */

/* START_OF_SYMBOL_DEFINITION _decode_ID */
export const _decode_ID = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_ID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ID */

/* START_OF_SYMBOL_DEFINITION _encode_ID */
export const _encode_ID = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_ID */

/* eslint-enable */
