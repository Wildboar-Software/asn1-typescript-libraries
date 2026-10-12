/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PLMNID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNID  ::=  OCTET STRING (SIZE(3))
 * ```
 */
export
type PLMNID = OCTET_STRING; // OctetStringType
export const _decode_PLMNID: $.ASN1Decoder<PLMNID> = $._decodeOctetString;
export const _encode_PLMNID: $.ASN1Encoder<PLMNID> = $._encodeOctetString;


/* eslint-enable */
