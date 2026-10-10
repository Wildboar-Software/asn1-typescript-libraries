/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventParamValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParamValue  ::=  OCTET STRING
 * ```
 */
export
type EventParamValue = OCTET_STRING; // OctetStringType
export const _decode_EventParamValue = $._decodeOctetString;
export const _encode_EventParamValue = $._encodeOctetString;


/* eslint-enable */
