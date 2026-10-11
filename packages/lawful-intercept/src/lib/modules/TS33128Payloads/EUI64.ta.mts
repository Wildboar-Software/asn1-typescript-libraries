/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUI64
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUI64  ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type EUI64 = OCTET_STRING; // OctetStringType

export function _decode_EUI64 (el: _Element): EUI64 {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("EUI64 violates the SIZE constraint");
    }
    return value;
}

export const _encode_EUI64: $.ASN1Encoder<EUI64> = $._encodeOctetString;


/* eslint-enable */
