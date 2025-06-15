/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION InvokeID */
/**
 * @summary InvokeID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID  ::=  OCTET STRING (SIZE (6))
 * ```
 */
export type InvokeID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION InvokeID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeID */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeID */
export const _decode_InvokeID = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_InvokeID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeID */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeID */
export const _encode_InvokeID = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_InvokeID */

/* eslint-enable */
