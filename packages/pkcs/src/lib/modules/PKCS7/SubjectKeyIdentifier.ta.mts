/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SubjectKeyIdentifier */
/**
 * @summary SubjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectKeyIdentifier  ::=  OCTET STRING
 * ```
 */
export type SubjectKeyIdentifier = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SubjectKeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectKeyIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectKeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_SubjectKeyIdentifier */
export const _decode_SubjectKeyIdentifier = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_SubjectKeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectKeyIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectKeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_SubjectKeyIdentifier */
export const _encode_SubjectKeyIdentifier = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_SubjectKeyIdentifier */

/* eslint-enable */
