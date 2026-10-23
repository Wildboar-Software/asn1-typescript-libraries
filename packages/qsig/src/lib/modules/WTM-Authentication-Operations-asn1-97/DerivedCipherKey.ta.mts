/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DerivedCipherKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DerivedCipherKey  ::=  OCTET STRING (SIZE(1..8))
 * ```
 */
export
type DerivedCipherKey = OCTET_STRING; // OctetStringType

export
const _decode_DerivedCipherKey = (el: _Element): DerivedCipherKey => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("DerivedCipherKey violates SIZE constraint");
    }
    return value;
};

export
const _encode_DerivedCipherKey: $.ASN1Encoder<DerivedCipherKey> = $._encodeOctetString;

/* eslint-enable */
