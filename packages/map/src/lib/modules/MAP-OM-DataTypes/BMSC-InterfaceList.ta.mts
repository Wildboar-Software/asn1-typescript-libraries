/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BMSC_InterfaceList
 * @description
 *
 * SIZE (1..8). Other bits than listed shall be discarded (3GPP TS 29.002
 * V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BMSC-InterfaceList  ::=  BIT STRING {
 *     gmb (0)} (SIZE (1..8))
 * ```
 */
export
type BMSC_InterfaceList = BIT_STRING;

/**
 * @summary BMSC_InterfaceList_gmb
 * @constant
 */
export
const BMSC_InterfaceList_gmb: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary gmb
 * @constant
 */
export
const gmb: number = BMSC_InterfaceList_gmb; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) BMSC_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BMSC_InterfaceList = (el: _Element): BMSC_InterfaceList => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("BMSC_InterfaceList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) BMSC_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BMSC_InterfaceList, encoded as an ASN.1 Element.
 */
export const _encode_BMSC_InterfaceList = $._encodeBitString;


/* eslint-enable */
