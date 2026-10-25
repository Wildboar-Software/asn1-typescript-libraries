/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CivicAddressBytes
 * @description
 * 
 * Contains the original binary data (i.e. the value of the YAML field after the
 * base64 encoding is removed). See 29.571 [17] tables 5.4.4.64-2 and 5.4.4.64-1
 * for additional details.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
