/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SBType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBType  ::=  OCTET STRING (SIZE(0..4294967295))
 * ```
 */
export
type SBType = OCTET_STRING; // OctetStringType

export
const _decode_SBType: $.ASN1Decoder<SBType> = $._decodeOctetString;

export
const _encode_SBType: $.ASN1Encoder<SBType> = $._encodeOctetString;

/* eslint-enable */
