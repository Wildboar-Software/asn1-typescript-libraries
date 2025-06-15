/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SigncryptionValue */
/**
 * @summary SigncryptionValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptionValue  ::=  OCTET STRING(SIZE(1..MAX))
 * ```
 */
export type SigncryptionValue = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SigncryptionValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptionValue */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptionValue */

/* START_OF_SYMBOL_DEFINITION _decode_SigncryptionValue */
export const _decode_SigncryptionValue = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_SigncryptionValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptionValue */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptionValue */

/* START_OF_SYMBOL_DEFINITION _encode_SigncryptionValue */
export const _encode_SigncryptionValue = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_SigncryptionValue */

/* eslint-enable */
