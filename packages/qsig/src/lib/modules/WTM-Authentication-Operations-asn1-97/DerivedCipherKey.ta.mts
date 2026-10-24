/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DerivedCipherKey
 * @description
 *
 * May be computed while computing a challenge and the expected response
 * (ECMA-306 §6.3.1). Included in `CalcWtatInfoUnit` only when the algorithm in
 * use requires it. ECMA-306 does not define the derivation (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
