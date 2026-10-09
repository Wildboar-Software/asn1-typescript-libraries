/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    PrintableString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    lb_military_sic,
} from "../MMSUpperBounds/lb-military-sic.va.mjs";
import {
    ub_military_sic,
} from "../MMSUpperBounds/ub-military-sic.va.mjs";

/**
 * @summary Sic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sic  ::=  PrintableString(SIZE (lb-military-sic..ub-military-sic))
 * ```
 */
export
type Sic = PrintableString; // PrintableString
export function _decode_Sic (el: _Element): Sic {
    const value = $._decodePrintableString(el);
    if (value.length < lb_military_sic || value.length > ub_military_sic) {
        throw new ASN1SizeError("Sic violates SIZE constraint");
    }
    return value;
}
export const _encode_Sic = $._encodePrintableString;

/* eslint-enable */
