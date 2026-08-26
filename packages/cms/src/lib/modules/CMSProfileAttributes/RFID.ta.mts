/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary RFID
 * @description
 *
 * OCTET STRING RFID location pointer (ITU-T X.894 | ISO/IEC 24824-4 Annex A.17).
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
