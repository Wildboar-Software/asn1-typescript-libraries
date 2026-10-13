/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeCCSDSpico
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeCCSDSpico            ::=    OCTET STRING (SIZE(10))
 * ```
 */
export
type TimeCCSDSpico = OCTET_STRING; // OctetStringType
export const _decode_TimeCCSDSpico: $.ASN1Decoder<TimeCCSDSpico> = $._decodeOctetString;
export const _encode_TimeCCSDSpico: $.ASN1Encoder<TimeCCSDSpico> = $._encodeOctetString;


/* eslint-enable */
