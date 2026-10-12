/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGGUTI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGGUTI  ::=  OCTET STRING (SIZE(10))
 * ```
 */
export
type FiveGGUTI = OCTET_STRING; // OctetStringType
export const _decode_FiveGGUTI: $.ASN1Decoder<FiveGGUTI> = $._decodeOctetString;
export const _encode_FiveGGUTI: $.ASN1Encoder<FiveGGUTI> = $._encodeOctetString;


/* eslint-enable */
