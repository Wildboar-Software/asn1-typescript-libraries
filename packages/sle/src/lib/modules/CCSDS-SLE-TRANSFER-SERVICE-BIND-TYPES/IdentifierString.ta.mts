/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IdentifierString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IdentifierString         ::=    VisibleString (FROM (ALL EXCEPT " "))
 * ```
 */
export
type IdentifierString = VisibleString; // VisibleString
export const _decode_IdentifierString: $.ASN1Decoder<IdentifierString> = $._decodeVisibleString;
export const _encode_IdentifierString: $.ASN1Encoder<IdentifierString> = $._encodeVisibleString;


/* eslint-enable */
