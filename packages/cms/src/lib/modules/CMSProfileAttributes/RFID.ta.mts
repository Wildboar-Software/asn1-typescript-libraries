/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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




export const _decode_RFID = $._decodeOctetString;




export const _encode_RFID = $._encodeOctetString;


/* eslint-enable */
