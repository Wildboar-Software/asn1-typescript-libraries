/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/* START_OF_SYMBOL_DEFINITION DER_AttributeCertificate */
/**
 * @summary DER_AttributeCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DER-AttributeCertificate  ::=  OCTET STRING
 *   (CONTAINING AttributeCertificate ENCODED BY der)
 * ```
 */
export type DER_AttributeCertificate = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION DER_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DER_AttributeCertificate */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DER_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_DER_AttributeCertificate */
export const _decode_DER_AttributeCertificate = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_DER_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DER_AttributeCertificate */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DER_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_DER_AttributeCertificate */
export const _encode_DER_AttributeCertificate = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_DER_AttributeCertificate */

/* eslint-enable */
