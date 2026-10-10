/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IPAddress_iP_assignment {
    static_ = 1,
    dynamic = 2,
    notKnown = 3,
}

/**
 * @summary IPAddress_iP_assignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddress-iP-assignment ::= ENUMERATED {
 *     static(1),
 *         -- The static coding shall be used to report a static address.
 *     dynamic(2),
 *         -- The dynamic coding shall be used to report a dynamically allocated address.
 *     notKnown(3),
 *         -- The notKnown coding shall be used to report other than static or dynamically
 *         -- allocated IP addresses.
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPAddress_iP_assignment = _enum_for_IPAddress_iP_assignment | ENUMERATED;

/**
 * @summary IPAddress_iP_assignment_static_
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_assignment_static_: IPAddress_iP_assignment = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary static_
 * @constant
 * @type {number}
 */
export
const static_: IPAddress_iP_assignment = IPAddress_iP_assignment_static_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPAddress_iP_assignment_dynamic
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_assignment_dynamic: IPAddress_iP_assignment = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic
 * @constant
 * @type {number}
 */
export
const dynamic: IPAddress_iP_assignment = IPAddress_iP_assignment_dynamic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPAddress_iP_assignment_notKnown
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_assignment_notKnown: IPAddress_iP_assignment = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notKnown
 * @constant
 * @type {number}
 */
export
const notKnown: IPAddress_iP_assignment = IPAddress_iP_assignment_notKnown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddress_iP_assignment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IPAddress_iP_assignment = $._decodeEnumerated;

/**
 * @summary Encodes a(n) IPAddress_iP_assignment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddress_iP_assignment, encoded as an ASN.1 Element.
 */
export const _encode_IPAddress_iP_assignment = $._encodeEnumerated;


/* eslint-enable */
