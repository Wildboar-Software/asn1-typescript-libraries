/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * IPAddress-iP-assignment ::= ENUMERATED
 * {
 *     static(1),
 *     -- The static coding shall be used to report a static address.
 *     dynamic(2),
 *     -- The dynamic coding shall be used to report a dynamically allocated address.
 *     notKnown(3),
 *     -- The notKnown coding shall be used to report other then static or dynamically
 *     -- allocated IP addresses.
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

export const _decode_IPAddress_iP_assignment: $.ASN1Decoder<IPAddress_iP_assignment> = $._decodeEnumerated;

export const _encode_IPAddress_iP_assignment: $.ASN1Encoder<IPAddress_iP_assignment> = $._encodeEnumerated;


/* eslint-enable */
