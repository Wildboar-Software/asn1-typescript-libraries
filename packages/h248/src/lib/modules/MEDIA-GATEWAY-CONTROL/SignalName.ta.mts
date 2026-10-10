/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SignalName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalName  ::=  OCTET STRING
 * ```
 */
export
type SignalName = OCTET_STRING; // OctetStringType
export const _decode_SignalName = $._decodeOctetString;
export const _encode_SignalName = $._encodeOctetString;


/* eslint-enable */
