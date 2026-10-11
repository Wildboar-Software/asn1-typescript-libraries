/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSUENetworkCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSUENetworkCapability  ::=  OCTET STRING (SIZE(2..13))
 * ```
 */
export
type EPSUENetworkCapability = OCTET_STRING; // OctetStringType

export const _decode_EPSUENetworkCapability: $.ASN1Decoder<EPSUENetworkCapability> = $._decodeOctetString;

export const _encode_EPSUENetworkCapability: $.ASN1Encoder<EPSUENetworkCapability> = $._encodeOctetString;


/* eslint-enable */
