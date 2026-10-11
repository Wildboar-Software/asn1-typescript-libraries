/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SciDataMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SciDataMode  ::=  OCTET STRING (SIZE (1..256))
 * ```
 */
export
type SciDataMode = OCTET_STRING; // OctetStringType

export const _decode_SciDataMode: $.ASN1Decoder<SciDataMode> = $._decodeOctetString;

export const _encode_SciDataMode: $.ASN1Encoder<SciDataMode> = $._encodeOctetString;


/* eslint-enable */
