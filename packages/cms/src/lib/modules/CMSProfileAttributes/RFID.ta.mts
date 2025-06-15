/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION RFID */
/**
 * @summary RFID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RFID  ::=  OCTET STRING
 * ```
 */
export type RFID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION RFID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RFID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RFID */

/* START_OF_SYMBOL_DEFINITION _decode_RFID */
export const _decode_RFID = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_RFID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RFID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RFID */

/* START_OF_SYMBOL_DEFINITION _encode_RFID */
export const _encode_RFID = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_RFID */

/* eslint-enable */
