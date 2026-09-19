/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Community
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Community  ::=  ENUMERATED { genser(0), si(1), both(2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Community {
    genser = 0,
    si = 1,
    both = 2,
}

/**
 * @summary Community
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Community  ::=  ENUMERATED { genser(0), si(1), both(2) }
 * ```
 * 
 * @enum {number}
 */
export
type Community = _enum_for_Community;

/**
 * @summary Community
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Community  ::=  ENUMERATED { genser(0), si(1), both(2) }
 * ```
 * 
 * @enum {number}
 */
export
const Community = _enum_for_Community;

/**
 * @summary Community_genser
 * @constant
 * @type {number}
 */
export
const Community_genser: Community = Community.genser; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genser
 * @constant
 * @type {number}
 */
export
const genser: Community = Community.genser; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Community_si
 * @constant
 * @type {number}
 */
export
const Community_si: Community = Community.si; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary si
 * @constant
 * @type {number}
 */
export
const si: Community = Community.si; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Community_both
 * @constant
 * @type {number}
 */
export
const Community_both: Community = Community.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: Community = Community.both; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Community: $.ASN1Decoder<Community> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Community
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Community (el: _Element): Community {
    if (!_cached_decoder_for_Community) { _cached_decoder_for_Community = $._decodeEnumerated; }
    return _cached_decoder_for_Community(el);
}

let _cached_encoder_for_Community: $.ASN1Encoder<Community> | null = null;

/**
 * @summary Encodes a(n) Community into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Community, encoded as an ASN.1 Element.
 */
export
function _encode_Community (value: Community, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Community) { _cached_encoder_for_Community = $._encodeEnumerated; }
    return _cached_encoder_for_Community(value, elGetter);
}


/* eslint-enable */
