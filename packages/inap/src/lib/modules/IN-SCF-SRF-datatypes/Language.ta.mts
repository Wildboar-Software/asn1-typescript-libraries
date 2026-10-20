/* eslint-disable */
import {
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Language
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Language  ::=  PrintableString(SIZE (3))
 * ```
 */
export
type Language = PrintableString; // PrintableString

export
const _decode_Language: $.ASN1Decoder<Language> = $._decodePrintableString;

export
const _encode_Language: $.ASN1Encoder<Language> = $._encodePrintableString;

/* eslint-enable */
