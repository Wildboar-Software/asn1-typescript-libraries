/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Kmid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Kmid  ::=  OCTET STRING
 * ```
 */
export
type Kmid = OCTET_STRING; // OctetStringType
export const _decode_Kmid = $._decodeOctetString;
export const _encode_Kmid = $._encodeOctetString;


/* eslint-enable */
