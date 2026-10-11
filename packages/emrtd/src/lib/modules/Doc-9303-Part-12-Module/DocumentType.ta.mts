/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DocumentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentType  ::=  PrintableString(SIZE(1..2))
 * ```
 */
export
type DocumentType = PrintableString; // PrintableString
export function _decode_DocumentType (el: _Element): DocumentType {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > 2) {
        throw new ASN1SizeError("DocumentType violates SIZE constraint");
    }
    return value;
}
export const _encode_DocumentType = $._encodePrintableString;


/* eslint-enable */
