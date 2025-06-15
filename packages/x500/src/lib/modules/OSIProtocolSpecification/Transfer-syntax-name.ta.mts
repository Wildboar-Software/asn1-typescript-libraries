/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Transfer_syntax_name */
/**
 * @summary Transfer_syntax_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Transfer-syntax-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Transfer_syntax_name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Transfer_syntax_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Transfer_syntax_name */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Transfer_syntax_name */

/* START_OF_SYMBOL_DEFINITION _decode_Transfer_syntax_name */
export const _decode_Transfer_syntax_name = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_Transfer_syntax_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Transfer_syntax_name */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Transfer_syntax_name */

/* START_OF_SYMBOL_DEFINITION _encode_Transfer_syntax_name */
export const _encode_Transfer_syntax_name = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_Transfer_syntax_name */

/* eslint-enable */
