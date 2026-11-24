/* eslint-disable */
import {
    type OCTET_STRING,
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../../constraints.mjs";

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

export const _decode_BiometricType: $.ASN1Decoder<BiometricType> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 1, 3, "BiometricType");
    return value;
};

export
const _encode_BiometricType: $.ASN1Encoder<BiometricType> = $._encodeOctetString;

/* eslint-enable */
