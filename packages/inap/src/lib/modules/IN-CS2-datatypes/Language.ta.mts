/* eslint-disable */
import {
    type PrintableString,
    ASN1Element as _Element,
    ASN1SizeError,
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
function _decode_Language (el: _Element): Language {
    const value = $._decodePrintableString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("Language violates SIZE constraint");
    }
    return value;
}

export
const _encode_Language: $.ASN1Encoder<Language> = $._encodePrintableString;

/* eslint-enable */
