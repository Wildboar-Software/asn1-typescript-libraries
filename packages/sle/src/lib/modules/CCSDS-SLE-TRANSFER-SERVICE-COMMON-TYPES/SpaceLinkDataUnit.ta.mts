/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpaceLinkDataUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpaceLinkDataUnit       ::=    OCTET STRING (SIZE (1 .. 65536))
 * ```
 */
export
type SpaceLinkDataUnit = OCTET_STRING; // OctetStringType
export const _decode_SpaceLinkDataUnit: $.ASN1Decoder<SpaceLinkDataUnit> = $._decodeOctetString;
export const _encode_SpaceLinkDataUnit: $.ASN1Encoder<SpaceLinkDataUnit> = $._encodeOctetString;


/* eslint-enable */
