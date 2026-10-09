/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    PrintableString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ub_military_string,
} from "../MMSUpperBounds/ub-military-string.va.mjs";

/**
 * @summary MilitaryString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MilitaryString  ::=  PrintableString(SIZE (1..ub-military-string))
 * ```
 */
export
type MilitaryString = PrintableString; // PrintableString
export function _decode_MilitaryString (el: _Element): MilitaryString {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > ub_military_string) {
        throw new ASN1SizeError("MilitaryString violates SIZE constraint");
    }
    return value;
}
export const _encode_MilitaryString = $._encodePrintableString;

/* eslint-enable */
