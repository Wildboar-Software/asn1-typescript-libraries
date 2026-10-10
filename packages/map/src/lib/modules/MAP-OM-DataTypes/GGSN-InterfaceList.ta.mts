/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GGSN_InterfaceList
 * @description
 *
 * SIZE (3..8). Other bits than listed shall be discarded (3GPP TS 29.002
 * V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GGSN-InterfaceList  ::=  BIT STRING {
 *     gn (0),
 *     gi (1),
 *     gmb (2)} (SIZE (3..8))
 * ```
 */
export
type GGSN_InterfaceList = BIT_STRING;

/**
 * @summary GGSN_InterfaceList_gn
 * @constant
 */
export
const GGSN_InterfaceList_gn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary gn
 * @constant
 */
export
const gn: number = GGSN_InterfaceList_gn; /* SHORT_NAMED_BIT */

/**
 * @summary GGSN_InterfaceList_gi
 * @constant
 */
export
const GGSN_InterfaceList_gi: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary gi
 * @constant
 */
export
const gi: number = GGSN_InterfaceList_gi; /* SHORT_NAMED_BIT */

/**
 * @summary GGSN_InterfaceList_gmb
 * @constant
 */
export
const GGSN_InterfaceList_gmb: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary gmb
 * @constant
 */
export
const gmb: number = GGSN_InterfaceList_gmb; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) GGSN_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GGSN_InterfaceList = (el: _Element): GGSN_InterfaceList => {
    const value = $._decodeBitString(el);
    if (value.length < 3 || value.length > 8) {
        throw new ASN1SizeError("GGSN_InterfaceList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GGSN_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GGSN_InterfaceList, encoded as an ASN.1 Element.
 */
export const _encode_GGSN_InterfaceList = $._encodeBitString;


/* eslint-enable */
