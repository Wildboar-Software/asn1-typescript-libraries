/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RNC_InterfaceList
 * @description
 *
 * SIZE (4..8). Other bits than listed shall be discarded (3GPP TS 29.002
 * V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RNC-InterfaceList  ::=  BIT STRING {
 *     iu (0),
 *     iur (1),
 *     iub (2),
 *     uu (3)} (SIZE (4..8))
 * ```
 */
export
type RNC_InterfaceList = BIT_STRING;

/**
 * @summary RNC_InterfaceList_iu
 * @constant
 */
export
const RNC_InterfaceList_iu: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary iu
 * @constant
 */
export
const iu: number = RNC_InterfaceList_iu; /* SHORT_NAMED_BIT */

/**
 * @summary RNC_InterfaceList_iur
 * @constant
 */
export
const RNC_InterfaceList_iur: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary iur
 * @constant
 */
export
const iur: number = RNC_InterfaceList_iur; /* SHORT_NAMED_BIT */

/**
 * @summary RNC_InterfaceList_iub
 * @constant
 */
export
const RNC_InterfaceList_iub: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary iub
 * @constant
 */
export
const iub: number = RNC_InterfaceList_iub; /* SHORT_NAMED_BIT */

/**
 * @summary RNC_InterfaceList_uu
 * @constant
 */
export
const RNC_InterfaceList_uu: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary uu
 * @constant
 */
export
const uu: number = RNC_InterfaceList_uu; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) RNC_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RNC_InterfaceList = (el: _Element): RNC_InterfaceList => {
    const value = $._decodeBitString(el);
    if (value.length < 4 || value.length > 8) {
        throw new ASN1SizeError("RNC_InterfaceList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RNC_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RNC_InterfaceList, encoded as an ASN.1 Element.
 */
export const _encode_RNC_InterfaceList = $._encodeBitString;


/* eslint-enable */
