/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Counter */
/**
 * @summary Counter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Counter  ::=  OCTET STRING (SIZE (4))
 * ```
 */
export type Counter = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Counter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Counter */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Counter */

/* START_OF_SYMBOL_DEFINITION _decode_Counter */
export const _decode_Counter = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_Counter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Counter */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Counter */

/* START_OF_SYMBOL_DEFINITION _encode_Counter */
export const _encode_Counter = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_Counter */

/* eslint-enable */
