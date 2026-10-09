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
