/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CivicAddressBytes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CivicAddressBytes  ::=  OCTET STRING
 * ```
 */
export
type CivicAddressBytes = OCTET_STRING; // OctetStringType
export const _decode_CivicAddressBytes: $.ASN1Decoder<CivicAddressBytes> = $._decodeOctetString;
export const _encode_CivicAddressBytes: $.ASN1Encoder<CivicAddressBytes> = $._encodeOctetString;


/* eslint-enable */
