/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SignatureValue */
/**
 * @summary SignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureValue  ::=  OCTET STRING
 * ```
 */
export type SignatureValue = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureValue */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureValue */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureValue */
export const _decode_SignatureValue = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_SignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureValue */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureValue */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureValue */
export const _encode_SignatureValue = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_SignatureValue */

/* eslint-enable */
