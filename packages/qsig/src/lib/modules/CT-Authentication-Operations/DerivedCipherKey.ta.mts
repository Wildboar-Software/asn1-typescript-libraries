/* eslint-disable */
import {
    OCTET_STRING
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
const _decode_DerivedCipherKey: $.ASN1Decoder<DerivedCipherKey> = $._decodeOctetString;

export
const _encode_DerivedCipherKey: $.ASN1Encoder<DerivedCipherKey> = $._encodeOctetString;

/* eslint-enable */
