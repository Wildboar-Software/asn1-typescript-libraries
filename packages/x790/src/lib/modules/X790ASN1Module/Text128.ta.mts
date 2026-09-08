/* eslint-disable */
import {
    PrintableString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Text128
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Text128  ::=  PrintableString(SIZE (0..128))
 * ```
 */
export
type Text128 = PrintableString; // PrintableString
export function _decode_Text128 (el: _Element): Text128 {
    const value = ($._decodePrintableString)(el);
    if (value.length < 0 || value.length > 128) {
        throw new ASN1SizeError("Text128 violates SIZE constraint");
    }
    return value;
}
export const _encode_Text128 = $._encodePrintableString;


/* eslint-enable */
