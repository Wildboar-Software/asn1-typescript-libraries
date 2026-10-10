/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventName  ::=  OCTET STRING
 * ```
 */
export
type EventName = OCTET_STRING; // OctetStringType
export const _decode_EventName = $._decodeOctetString;
export const _encode_EventName = $._encodeOctetString;


/* eslint-enable */
