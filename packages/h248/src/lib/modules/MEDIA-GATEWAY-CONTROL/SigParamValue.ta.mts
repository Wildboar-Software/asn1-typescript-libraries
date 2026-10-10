/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SigParamValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParamValue  ::=  OCTET STRING
 * ```
 */
export
type SigParamValue = OCTET_STRING; // OctetStringType
export const _decode_SigParamValue = $._decodeOctetString;
export const _encode_SigParamValue = $._encodeOctetString;


/* eslint-enable */
