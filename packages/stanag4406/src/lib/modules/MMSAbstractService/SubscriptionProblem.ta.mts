/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscriptionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0), mts-eos-not-subcribed(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriptionProblem {
    mms_eos_not_subcribed = 0,
    mts_eos_not_subcribed = 1,
}

/**
 * @summary SubscriptionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0), mts-eos-not-subcribed(1)}
 * ```
 * 
 * @enum {number}
 */
export
type SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   mms-eos-not-subcribed(0), mts-eos-not-subcribed(1)}
 * ```
 * 
 * @enum {number}
 */
export
const SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem_mms_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const SubscriptionProblem_mms_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mms_eos_not_subcribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mms_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const mms_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mms_eos_not_subcribed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionProblem_mts_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const SubscriptionProblem_mts_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mts_eos_not_subcribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mts_eos_not_subcribed
 * @constant
 * @type {number}
 */
export
const mts_eos_not_subcribed: SubscriptionProblem = SubscriptionProblem.mts_eos_not_subcribed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SubscriptionProblem: $.ASN1Decoder<SubscriptionProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriptionProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriptionProblem (el: _Element): SubscriptionProblem {
    if (!_cached_decoder_for_SubscriptionProblem) { _cached_decoder_for_SubscriptionProblem = $._decodeEnumerated; }
    return _cached_decoder_for_SubscriptionProblem(el);
}

let _cached_encoder_for_SubscriptionProblem: $.ASN1Encoder<SubscriptionProblem> | null = null;

/**
 * @summary Encodes a(n) SubscriptionProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriptionProblem, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriptionProblem (value: SubscriptionProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriptionProblem) { _cached_encoder_for_SubscriptionProblem = $._encodeEnumerated; }
    return _cached_encoder_for_SubscriptionProblem(value, elGetter);
}


/* eslint-enable */
