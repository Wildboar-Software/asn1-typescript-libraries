/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet16
 * @description
 * 
 * Sixteen octets. Used for the eUICC challenge, the RSP Server challenge, and
 * the EID returned by ES10c.GetEID. SGP.22 v3.1 Annex H, §5.7.7, §5.7.20.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet16  ::=  OCTET STRING (SIZE(16))
 * ```
 */
export
type Octet16 = OCTET_STRING; // OctetStringType
export function _decode_Octet16 (el: _Element): Octet16 {
    const value = $._decodeOctetString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("Octet16 violates SIZE constraint");
    }
    return value;
}
export const _encode_Octet16 = $._encodeOctetString;


/* eslint-enable */
