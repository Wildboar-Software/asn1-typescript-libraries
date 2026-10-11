/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet8
 * @description
 * 
 * Eight octets. `DeviceInfo.imei` is the IMEI including the check digit, in
 * telephony BCD, with the check digit in the low nibble of the last octet and
 * an 'F' filler in the high nibble. SGP.22 v3.1 §4.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet8  ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type Octet8 = OCTET_STRING; // OctetStringType
export function _decode_Octet8 (el: _Element): Octet8 {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("Octet8 violates SIZE constraint");
    }
    return value;
}
export const _encode_Octet8 = $._encodeOctetString;


/* eslint-enable */
