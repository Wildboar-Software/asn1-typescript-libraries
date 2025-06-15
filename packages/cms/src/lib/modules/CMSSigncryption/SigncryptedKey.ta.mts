/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SigncryptedKey */
/**
 * @summary SigncryptedKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedKey  ::=  OCTET STRING
 * ```
 */
export type SigncryptedKey = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SigncryptedKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedKey */

/* START_OF_SYMBOL_DEFINITION _decode_SigncryptedKey */
export const _decode_SigncryptedKey = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_SigncryptedKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedKey */

/* START_OF_SYMBOL_DEFINITION _encode_SigncryptedKey */
export const _encode_SigncryptedKey = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_SigncryptedKey */

/* eslint-enable */
