/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LawfulInterceptionIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LawfulInterceptionIdentifier  ::=  OCTET STRING (SIZE (1..25))
 * ```
 */
export
type LawfulInterceptionIdentifier = OCTET_STRING; // OctetStringType

export const _decode_LawfulInterceptionIdentifier: $.ASN1Decoder<LawfulInterceptionIdentifier> = $._decodeOctetString;

export const _encode_LawfulInterceptionIdentifier: $.ASN1Encoder<LawfulInterceptionIdentifier> = $._encodeOctetString;


/* eslint-enable */
