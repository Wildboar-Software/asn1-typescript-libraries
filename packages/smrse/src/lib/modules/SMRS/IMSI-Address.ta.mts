/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSI_Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI-Address  ::=  OCTET STRING
 * ```
 */
export
type IMSI_Address = OCTET_STRING; // OctetStringType
export const _decode_IMSI_Address = $._decodeOctetString;
export const _encode_IMSI_Address = $._encodeOctetString;


/* eslint-enable */
