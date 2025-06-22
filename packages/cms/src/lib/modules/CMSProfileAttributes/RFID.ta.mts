/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


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
