/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OctetTo16
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OctetTo16  ::=  OCTET STRING (SIZE(1..16))
 * ```
 */
export
type OctetTo16 = OCTET_STRING; // OctetStringType
export function _decode_OctetTo16 (el: _Element): OctetTo16 {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("OctetTo16 violates SIZE constraint");
    }
    return value;
}
export const _encode_OctetTo16 = $._encodeOctetString;


/* eslint-enable */
