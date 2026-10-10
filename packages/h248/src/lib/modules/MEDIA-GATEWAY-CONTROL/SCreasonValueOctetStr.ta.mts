/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCreasonValueOctetStr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCreasonValueOctetStr  ::=  OCTET STRING
 * ```
 */
export
type SCreasonValueOctetStr = OCTET_STRING; // OctetStringType
export const _decode_SCreasonValueOctetStr = $._decodeOctetString;
export const _encode_SCreasonValueOctetStr = $._encodeOctetString;


/* eslint-enable */
