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
 * IPAddress-iP-assignment ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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

let _cached_decoder_for_IPAddress_iP_assignment: $.ASN1Decoder<IPAddress_iP_assignment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddress_iP_assignment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPAddress_iP_assignment (el: _Element): IPAddress_iP_assignment {
    if (!_cached_decoder_for_IPAddress_iP_assignment) { _cached_decoder_for_IPAddress_iP_assignment = $._decodeEnumerated; }
    return _cached_decoder_for_IPAddress_iP_assignment(el);
}

let _cached_encoder_for_IPAddress_iP_assignment: $.ASN1Encoder<IPAddress_iP_assignment> | null = null;

/**
 * @summary Encodes a(n) IPAddress_iP_assignment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddress_iP_assignment, encoded as an ASN.1 Element.
 */
export
function _encode_IPAddress_iP_assignment (value: IPAddress_iP_assignment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPAddress_iP_assignment) { _cached_encoder_for_IPAddress_iP_assignment = $._encodeEnumerated; }
    return _cached_encoder_for_IPAddress_iP_assignment(value, elGetter);
}


/* eslint-enable */
