/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMStateFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStateFlag  ::=  ENUMERATED
 * {
 *     add(1),
 *     remove(2),
 *     filter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMStateFlag {
    add = 1,
    remove = 2,
    filter = 3,
}

/**
 * @summary MMStateFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStateFlag  ::=  ENUMERATED
 * {
 *     add(1),
 *     remove(2),
 *     filter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMStateFlag = _enum_for_MMStateFlag;

/**
 * @summary MMStateFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStateFlag  ::=  ENUMERATED
 * {
 *     add(1),
 *     remove(2),
 *     filter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMStateFlag = _enum_for_MMStateFlag;

/**
 * @summary MMStateFlag_add
 * @constant
 * @type {number}
 */
export
const MMStateFlag_add: MMStateFlag = MMStateFlag.add; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary add
 * @constant
 * @type {number}
 */
export
const add: MMStateFlag = MMStateFlag.add; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStateFlag_remove
 * @constant
 * @type {number}
 */
export
const MMStateFlag_remove: MMStateFlag = MMStateFlag.remove; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remove
 * @constant
 * @type {number}
 */
export
const remove: MMStateFlag = MMStateFlag.remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStateFlag_filter
 * @constant
 * @type {number}
 */
export
const MMStateFlag_filter: MMStateFlag = MMStateFlag.filter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary filter
 * @constant
 * @type {number}
 */
export
const filter: MMStateFlag = MMStateFlag.filter; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMStateFlag: $.ASN1Decoder<MMStateFlag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMStateFlag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMStateFlag (el: _Element): MMStateFlag {
    if (!_cached_decoder_for_MMStateFlag) { _cached_decoder_for_MMStateFlag = $._decodeEnumerated; }
    return _cached_decoder_for_MMStateFlag(el);
}

let _cached_encoder_for_MMStateFlag: $.ASN1Encoder<MMStateFlag> | null = null;

/**
 * @summary Encodes a(n) MMStateFlag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMStateFlag, encoded as an ASN.1 Element.
 */
export
function _encode_MMStateFlag (value: MMStateFlag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMStateFlag) { _cached_encoder_for_MMStateFlag = $._encodeEnumerated; }
    return _cached_encoder_for_MMStateFlag(value, elGetter);
}


/* eslint-enable */
