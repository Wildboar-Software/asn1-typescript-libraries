/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CRLs */
/**
 * @summary CRLs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLs      ::=  [XER:BASE64] OCTET STRING
 * ```
 */
export type CRLs = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CRLs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLs */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLs */

/* START_OF_SYMBOL_DEFINITION _decode_CRLs */
export const _decode_CRLs = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_CRLs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLs */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLs */

/* START_OF_SYMBOL_DEFINITION _encode_CRLs */
export const _encode_CRLs = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_CRLs */

/* eslint-enable */
