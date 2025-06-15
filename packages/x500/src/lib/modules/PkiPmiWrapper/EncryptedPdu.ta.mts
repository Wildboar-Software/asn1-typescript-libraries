/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION EncryptedPdu */
/**
 * @summary EncryptedPdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPdu  ::=  OCTET STRING
 * ```
 */
export type EncryptedPdu = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncryptedPdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedPdu */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedPdu */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedPdu */
export const _decode_EncryptedPdu = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedPdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedPdu */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedPdu */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedPdu */
export const _encode_EncryptedPdu = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedPdu */

/* eslint-enable */
