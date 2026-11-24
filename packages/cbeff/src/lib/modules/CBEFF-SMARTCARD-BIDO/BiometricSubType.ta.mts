/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BiometricSubType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricSubType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type BiometricSubType = OCTET_STRING; // OctetStringType

export
const _decode_BiometricSubType: $.ASN1Decoder<BiometricSubType> = $._decodeOctetString;

export
const _encode_BiometricSubType: $.ASN1Encoder<BiometricSubType> = $._encodeOctetString;

/* eslint-enable */
