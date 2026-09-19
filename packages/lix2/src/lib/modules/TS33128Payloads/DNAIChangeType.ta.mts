/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNAIChangeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNAIChangeType  ::=  ENUMERATED
 * {
 *     early(1),
 *     earlyAndLate(2),
 *     late(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DNAIChangeType {
    early = 1,
    earlyAndLate = 2,
    late = 3,
}

/**
 * @summary DNAIChangeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNAIChangeType  ::=  ENUMERATED
 * {
 *     early(1),
 *     earlyAndLate(2),
 *     late(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DNAIChangeType = _enum_for_DNAIChangeType;

/**
 * @summary DNAIChangeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNAIChangeType  ::=  ENUMERATED
 * {
 *     early(1),
 *     earlyAndLate(2),
 *     late(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DNAIChangeType = _enum_for_DNAIChangeType;

/**
 * @summary DNAIChangeType_early
 * @constant
 * @type {number}
 */
export
const DNAIChangeType_early: DNAIChangeType = DNAIChangeType.early; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary early
 * @constant
 * @type {number}
 */
export
const early: DNAIChangeType = DNAIChangeType.early; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNAIChangeType_earlyAndLate
 * @constant
 * @type {number}
 */
export
const DNAIChangeType_earlyAndLate: DNAIChangeType = DNAIChangeType.earlyAndLate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlyAndLate
 * @constant
 * @type {number}
 */
export
const earlyAndLate: DNAIChangeType = DNAIChangeType.earlyAndLate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DNAIChangeType_late
 * @constant
 * @type {number}
 */
export
const DNAIChangeType_late: DNAIChangeType = DNAIChangeType.late; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary late
 * @constant
 * @type {number}
 */
export
const late: DNAIChangeType = DNAIChangeType.late; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DNAIChangeType: $.ASN1Decoder<DNAIChangeType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNAIChangeType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNAIChangeType (el: _Element): DNAIChangeType {
    if (!_cached_decoder_for_DNAIChangeType) { _cached_decoder_for_DNAIChangeType = $._decodeEnumerated; }
    return _cached_decoder_for_DNAIChangeType(el);
}

let _cached_encoder_for_DNAIChangeType: $.ASN1Encoder<DNAIChangeType> | null = null;

/**
 * @summary Encodes a(n) DNAIChangeType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNAIChangeType, encoded as an ASN.1 Element.
 */
export
function _encode_DNAIChangeType (value: DNAIChangeType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNAIChangeType) { _cached_encoder_for_DNAIChangeType = $._encodeEnumerated; }
    return _cached_encoder_for_DNAIChangeType(value, elGetter);
}


/* eslint-enable */
