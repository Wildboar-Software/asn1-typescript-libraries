/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Identifier */
/**
 * @summary Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identifier  ::=  OCTET STRING (SIZE (0..pkcs15-ub-identifier))
 * ```
 */
export type Identifier = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Identifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Identifier */
export const _decode_Identifier = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Identifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Identifier */
export const _encode_Identifier = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_Identifier */

/* eslint-enable */
