/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BMSC_EventList
 * @description
 *
 * SIZE (1..8). Other bits than listed shall be discarded (3GPP TS 29.002
 * V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BMSC-EventList  ::=  BIT STRING {
 *     mbmsMulticastServiceActivation (0)} (SIZE (1..8))
 * ```
 */
export
type BMSC_EventList = BIT_STRING;

/**
 * @summary BMSC_EventList_mbmsMulticastServiceActivation
 * @constant
 */
export
const BMSC_EventList_mbmsMulticastServiceActivation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mbmsMulticastServiceActivation
 * @constant
 */
export
const mbmsMulticastServiceActivation: number = BMSC_EventList_mbmsMulticastServiceActivation; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) BMSC_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BMSC_EventList = (el: _Element): BMSC_EventList => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("BMSC_EventList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) BMSC_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BMSC_EventList, encoded as an ASN.1 Element.
 */
export const _encode_BMSC_EventList = $._encodeBitString;


/* eslint-enable */
