/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNConnectionIndicationFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNConnectionIndicationFlags  ::=  OCTET STRING
 * ```
 */
export
type PDNConnectionIndicationFlags = OCTET_STRING; // OctetStringType
export const _decode_PDNConnectionIndicationFlags: $.ASN1Decoder<PDNConnectionIndicationFlags> = $._decodeOctetString;
export const _encode_PDNConnectionIndicationFlags: $.ASN1Encoder<PDNConnectionIndicationFlags> = $._encodeOctetString;


/* eslint-enable */
