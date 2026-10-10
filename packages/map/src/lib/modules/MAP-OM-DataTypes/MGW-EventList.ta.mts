/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MGW_EventList
 * @description
 *
 * SIZE (1..8). Other bits than listed shall be discarded (3GPP TS 29.002
 * V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MGW-EventList  ::=  BIT STRING {
 *     context (0)} (SIZE (1..8))
 * ```
 */
export
type MGW_EventList = BIT_STRING;

/**
 * @summary MGW_EventList_context
 * @constant
 */
export
const MGW_EventList_context: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary context
 * @constant
 */
export
const context: number = MGW_EventList_context; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) MGW_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MGW_EventList = (el: _Element): MGW_EventList => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("MGW_EventList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MGW_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MGW_EventList, encoded as an ASN.1 Element.
 */
export const _encode_MGW_EventList = $._encodeBitString;


/* eslint-enable */
