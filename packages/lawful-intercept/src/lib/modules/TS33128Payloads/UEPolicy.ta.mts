/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEPolicy  ::=  OCTET STRING (SIZE(16..65540))
 * ```
 */
export
type UEPolicy = OCTET_STRING; // OctetStringType
export const _decode_UEPolicy: $.ASN1Decoder<UEPolicy> = $._decodeOctetString;
export const _encode_UEPolicy: $.ASN1Encoder<UEPolicy> = $._encodeOctetString;


/* eslint-enable */
