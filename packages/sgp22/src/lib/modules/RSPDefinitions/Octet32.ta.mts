/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet32
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet32  ::=  OCTET STRING (SIZE(32))
 * ```
 */
export
type Octet32 = OCTET_STRING; // OctetStringType
export function _decode_Octet32 (el: _Element): Octet32 {
    const value = $._decodeOctetString(el);
    if (value.length < 32 || value.length > 32) {
        throw new ASN1SizeError("Octet32 violates SIZE constraint");
    }
    return value;
}
export const _encode_Octet32 = $._encodeOctetString;


/* eslint-enable */
