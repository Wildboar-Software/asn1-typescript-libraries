/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Abstract_syntax_name */
/**
 * @summary Abstract_syntax_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abstract-syntax-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Abstract_syntax_name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Abstract_syntax_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Abstract_syntax_name */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Abstract_syntax_name */

/* START_OF_SYMBOL_DEFINITION _decode_Abstract_syntax_name */
export const _decode_Abstract_syntax_name = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_Abstract_syntax_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Abstract_syntax_name */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Abstract_syntax_name */

/* START_OF_SYMBOL_DEFINITION _encode_Abstract_syntax_name */
export const _encode_Abstract_syntax_name = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_Abstract_syntax_name */

/* eslint-enable */
