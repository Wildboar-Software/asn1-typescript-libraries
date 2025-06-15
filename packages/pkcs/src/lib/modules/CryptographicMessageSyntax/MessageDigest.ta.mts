/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION MessageDigest */
/**
 * @summary MessageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDigest  ::=  OCTET STRING
 * ```
 */
export type MessageDigest = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION MessageDigest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDigest */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDigest */

/* START_OF_SYMBOL_DEFINITION _decode_MessageDigest */
export const _decode_MessageDigest = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_MessageDigest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDigest */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDigest */

/* START_OF_SYMBOL_DEFINITION _encode_MessageDigest */
export const _encode_MessageDigest = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_MessageDigest */

/* eslint-enable */
