/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SigParamValueV1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParamValueV1  ::=  OCTET STRING
 * ```
 */
export
type SigParamValueV1 = OCTET_STRING; // OctetStringType
export const _decode_SigParamValueV1 = $._decodeOctetString;
export const _encode_SigParamValueV1 = $._encodeOctetString;


/* eslint-enable */
