/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BiometricType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricType  ::=  OCTET STRING (SIZE(1..3))
 * ```
 */
export
type BiometricType = OCTET_STRING; // OctetStringType

export
const _decode_BiometricType: $.ASN1Decoder<BiometricType> = $._decodeOctetString;

export
const _encode_BiometricType: $.ASN1Encoder<BiometricType> = $._encodeOctetString;

/* eslint-enable */
