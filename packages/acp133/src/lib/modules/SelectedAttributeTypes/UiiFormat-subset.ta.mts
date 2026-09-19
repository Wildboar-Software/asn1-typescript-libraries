/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UiiFormat_subset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UiiFormat_subset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}

/**
 * @summary UiiFormat_subset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type UiiFormat_subset = _enum_for_UiiFormat_subset;

/**
 * @summary UiiFormat_subset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const UiiFormat_subset = _enum_for_UiiFormat_subset;

/**
 * @summary UiiFormat_subset_baseObject
 * @constant
 * @type {number}
 */
export
const UiiFormat_subset_baseObject: UiiFormat_subset = UiiFormat_subset.baseObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export
const baseObject: UiiFormat_subset = UiiFormat_subset.baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UiiFormat_subset_oneLevel
 * @constant
 * @type {number}
 */
export
const UiiFormat_subset_oneLevel: UiiFormat_subset = UiiFormat_subset.oneLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export
const oneLevel: UiiFormat_subset = UiiFormat_subset.oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UiiFormat_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const UiiFormat_subset_wholeSubtree: UiiFormat_subset = UiiFormat_subset.wholeSubtree; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export
const wholeSubtree: UiiFormat_subset = UiiFormat_subset.wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UiiFormat_subset: $.ASN1Decoder<UiiFormat_subset> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UiiFormat_subset
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UiiFormat_subset (el: _Element): UiiFormat_subset {
    if (!_cached_decoder_for_UiiFormat_subset) { _cached_decoder_for_UiiFormat_subset = $._decodeEnumerated; }
    return _cached_decoder_for_UiiFormat_subset(el);
}

let _cached_encoder_for_UiiFormat_subset: $.ASN1Encoder<UiiFormat_subset> | null = null;

/**
 * @summary Encodes a(n) UiiFormat_subset into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFormat_subset, encoded as an ASN.1 Element.
 */
export
function _encode_UiiFormat_subset (value: UiiFormat_subset, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UiiFormat_subset) { _cached_encoder_for_UiiFormat_subset = $._encodeEnumerated; }
    return _cached_encoder_for_UiiFormat_subset(value, elGetter);
}


/* eslint-enable */
