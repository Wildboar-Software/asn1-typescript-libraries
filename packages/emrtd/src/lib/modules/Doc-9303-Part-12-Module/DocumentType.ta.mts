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
 * Document type as it appears in the MRZ, one or two characters, for example
 * `P` or `ID`. A single letter denotes every document type that starts with
 * that letter.
 *
 * Doc 9303-12, section 7.1.1.6.
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
