/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DerivedCipherKey
 * @description
 *
 * May be computed while computing a challenge and the expected response
 * (ECMA-243 §6.3.1). Included in `CalcCtatInfoUnit` only when the algorithm in
 * use requires it. ECMA-243 does not define the derivation (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
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
const _decode_DerivedCipherKey: $.ASN1Decoder<DerivedCipherKey> = $._decodeOctetString;

export
const _encode_DerivedCipherKey: $.ASN1Encoder<DerivedCipherKey> = $._encodeOctetString;

/* eslint-enable */
