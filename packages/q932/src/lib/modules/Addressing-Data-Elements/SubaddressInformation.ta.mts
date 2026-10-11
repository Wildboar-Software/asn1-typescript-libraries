/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubaddressInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubaddressInformation  ::=  OCTET STRING(SIZE (1..20))
 * ```
 */
export
type SubaddressInformation = OCTET_STRING; // OctetStringType
export function _decode_SubaddressInformation (el: _Element): SubaddressInformation {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("SubaddressInformation violates SIZE constraint");
    }
    return value;
}
export const _encode_SubaddressInformation: $.ASN1Encoder<SubaddressInformation> = $._encodeOctetString;


/* eslint-enable */
