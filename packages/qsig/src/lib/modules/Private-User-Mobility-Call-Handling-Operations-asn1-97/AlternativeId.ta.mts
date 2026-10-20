/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlternativeId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternativeId  ::=  OCTET STRING (SIZE(1..20))
 * ```
 */
export
type AlternativeId = OCTET_STRING; // OctetStringType

export
const _decode_AlternativeId: $.ASN1Decoder<AlternativeId> = $._decodeOctetString;

export
const _encode_AlternativeId: $.ASN1Encoder<AlternativeId> = $._encodeOctetString;

/* eslint-enable */
