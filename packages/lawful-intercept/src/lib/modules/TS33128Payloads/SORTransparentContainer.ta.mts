/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SORTransparentContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SORTransparentContainer  ::=  OCTET STRING (SIZE (17..65535))
 * ```
 */
export
type SORTransparentContainer = OCTET_STRING; // OctetStringType

export const _decode_SORTransparentContainer: $.ASN1Decoder<SORTransparentContainer> = $._decodeOctetString;

export const _encode_SORTransparentContainer: $.ASN1Encoder<SORTransparentContainer> = $._encodeOctetString;


/* eslint-enable */
