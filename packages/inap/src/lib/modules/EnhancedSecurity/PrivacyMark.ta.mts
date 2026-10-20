/* eslint-disable */
import {
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivacyMark
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivacyMark  ::=  PrintableString(SIZE (1..ub-privacy-mark-length))
 * ```
 */
export
type PrivacyMark = PrintableString; // PrintableString

export
const _decode_PrivacyMark: $.ASN1Decoder<PrivacyMark> = $._decodePrintableString;

export
const _encode_PrivacyMark: $.ASN1Encoder<PrivacyMark> = $._encodePrintableString;

/* eslint-enable */
