/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type RAC = OCTET_STRING; // OctetStringType

export function _decode_RAC (el: _Element): RAC {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("RAC violates the SIZE constraint");
    }
    return value;
}

export const _encode_RAC: $.ASN1Encoder<RAC> = $._encodeOctetString;


/* eslint-enable */
