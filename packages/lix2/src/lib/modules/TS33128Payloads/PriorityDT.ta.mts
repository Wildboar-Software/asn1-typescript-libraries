/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PriorityDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityDT  ::=  ENUMERATED
 * {
 *     noPriority(1),
 *     priority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PriorityDT {
    noPriority = 1,
    priority = 2,
}

/**
 * @summary PriorityDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityDT  ::=  ENUMERATED
 * {
 *     noPriority(1),
 *     priority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PriorityDT = _enum_for_PriorityDT;

/**
 * @summary PriorityDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityDT  ::=  ENUMERATED
 * {
 *     noPriority(1),
 *     priority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PriorityDT = _enum_for_PriorityDT;

/**
 * @summary PriorityDT_noPriority
 * @constant
 * @type {number}
 */
export
const PriorityDT_noPriority: PriorityDT = PriorityDT.noPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noPriority
 * @constant
 * @type {number}
 */
export
const noPriority: PriorityDT = PriorityDT.noPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PriorityDT_priority
 * @constant
 * @type {number}
 */
export
const PriorityDT_priority: PriorityDT = PriorityDT.priority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary priority
 * @constant
 * @type {number}
 */
export
const priority: PriorityDT = PriorityDT.priority; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PriorityDT: $.ASN1Decoder<PriorityDT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PriorityDT
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PriorityDT (el: _Element): PriorityDT {
    if (!_cached_decoder_for_PriorityDT) { _cached_decoder_for_PriorityDT = $._decodeEnumerated; }
    return _cached_decoder_for_PriorityDT(el);
}

let _cached_encoder_for_PriorityDT: $.ASN1Encoder<PriorityDT> | null = null;

/**
 * @summary Encodes a(n) PriorityDT into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PriorityDT, encoded as an ASN.1 Element.
 */
export
function _encode_PriorityDT (value: PriorityDT, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PriorityDT) { _cached_encoder_for_PriorityDT = $._encodeEnumerated; }
    return _cached_encoder_for_PriorityDT(value, elGetter);
}


/* eslint-enable */
