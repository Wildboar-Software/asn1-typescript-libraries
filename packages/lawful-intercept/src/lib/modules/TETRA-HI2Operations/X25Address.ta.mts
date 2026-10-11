/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X25Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X25Address  ::=  OCTET STRING (SIZE(1..25))
 * ```
 */
export
type X25Address = OCTET_STRING; // OctetStringType

export function _decode_X25Address (el: _Element): X25Address {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 25) {
        throw new ASN1SizeError("X25Address violates the SIZE constraint");
    }
    return value;
}

export const _encode_X25Address: $.ASN1Encoder<X25Address> = $._encodeOctetString;


/* eslint-enable */
