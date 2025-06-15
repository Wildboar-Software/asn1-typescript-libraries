/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION KeyIdentifier */
/**
 * @summary KeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyIdentifier  ::=  OCTET STRING
 * ```
 */
export type KeyIdentifier = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION KeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KeyIdentifier */
export const _decode_KeyIdentifier = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_KeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KeyIdentifier */
export const _encode_KeyIdentifier = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_KeyIdentifier */

/* eslint-enable */
