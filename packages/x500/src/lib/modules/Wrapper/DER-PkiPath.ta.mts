/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/* START_OF_SYMBOL_DEFINITION DER_PkiPath */
/**
 * @summary DER_PkiPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DER-PkiPath  ::=  OCTET STRING
 *   (CONTAINING PkiPath ENCODED BY der)
 * ```
 */
export type DER_PkiPath = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION DER_PkiPath */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DER_PkiPath */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DER_PkiPath */

/* START_OF_SYMBOL_DEFINITION _decode_DER_PkiPath */
export const _decode_DER_PkiPath = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_DER_PkiPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DER_PkiPath */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DER_PkiPath */

/* START_OF_SYMBOL_DEFINITION _encode_DER_PkiPath */
export const _encode_DER_PkiPath = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_DER_PkiPath */

/* eslint-enable */
