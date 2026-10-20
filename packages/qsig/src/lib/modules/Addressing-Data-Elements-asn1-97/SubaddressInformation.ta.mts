/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubaddressInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubaddressInformation  ::=  OCTET STRING (SIZE(1..20))
 * ```
 */
export
type SubaddressInformation = OCTET_STRING; // OctetStringType

export
const _decode_SubaddressInformation: $.ASN1Decoder<SubaddressInformation> = $._decodeOctetString;

export
const _encode_SubaddressInformation: $.ASN1Encoder<SubaddressInformation> = $._encodeOctetString;

/* eslint-enable */
