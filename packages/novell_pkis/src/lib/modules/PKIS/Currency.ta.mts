/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../assertIntegerRange.mjs";



/**
 * @summary Currency
 * @description
 *
 * ISO 4217 numeric currency code, from 1 through 999. Appendix E is a
 * non-authoritative copy of ISO 4217 table A.1 as updated through
 * 17 April 1998, ordered by English country name. US Dollar (USD) is
 * 840. Euro (EUR) is 978, effective 1 January 1999. For a reliance
 * limit, gold (XAU, 959), palladium (XPD, 964), platinum (XPT, 962),
 * and silver (XAG, 961) are denominated in grams; ISO 4217 itself does
 * not define a unit for those codes. Later codes belong to the ISO
 * 4217 maintenance agency. §2, Appendix E.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Currency  ::=  INTEGER (1..999)
 * ```
 */
export
type Currency = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) Currency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Currency (el: _Element): Currency {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 1n, 999n, "Currency");
    return value;
}

/**
 * @summary Encodes a(n) Currency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Currency, encoded as an ASN.1 Element.
 */
export const _encode_Currency = $._encodeInteger;


/* eslint-enable */
