/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RandomNonce
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RandomNonce  ::=  OCTET STRING (SIZE(4..MAX))
 * ```
 */
export
type RandomNonce = OCTET_STRING; // OctetStringType

export
const _decode_RandomNonce = (el: _Element): RandomNonce => {
    const value = $._decodeOctetString(el);
    if (value.length < 4) {
        throw new ASN1SizeError("RandomNonce violates SIZE constraint");
    }
    return value;
};

export
const _encode_RandomNonce: $.ASN1Encoder<RandomNonce> = $._encodeOctetString;

/* eslint-enable */
