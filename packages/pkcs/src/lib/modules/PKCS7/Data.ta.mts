/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Data */
/**
 * @summary Data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data  ::=  OCTET STRING
 * ```
 */
export type Data = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Data */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Data */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Data */

/* START_OF_SYMBOL_DEFINITION _decode_Data */
export const _decode_Data = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_Data */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Data */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Data */

/* START_OF_SYMBOL_DEFINITION _encode_Data */
export const _encode_Data = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_Data */

/* eslint-enable */
