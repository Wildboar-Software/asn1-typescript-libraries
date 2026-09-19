/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMATimeGuard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMATimeGuard  ::=  ENUMERATED{
 *         noTimingGuard(0),
 *         timingGuardExists(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMATimeGuard {
    noTimingGuard = 0,
    timingGuardExists = 1,
}

/**
 * @summary AMATimeGuard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMATimeGuard  ::=  ENUMERATED{
 *         noTimingGuard(0),
 *         timingGuardExists(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type AMATimeGuard = _enum_for_AMATimeGuard;

/**
 * @summary AMATimeGuard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMATimeGuard  ::=  ENUMERATED{
 *         noTimingGuard(0),
 *         timingGuardExists(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const AMATimeGuard = _enum_for_AMATimeGuard;

/**
 * @summary AMATimeGuard_noTimingGuard
 * @constant
 * @type {number}
 */
export
const AMATimeGuard_noTimingGuard: AMATimeGuard = AMATimeGuard.noTimingGuard; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noTimingGuard
 * @constant
 * @type {number}
 */
export
const noTimingGuard: AMATimeGuard = AMATimeGuard.noTimingGuard; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMATimeGuard_timingGuardExists
 * @constant
 * @type {number}
 */
export
const AMATimeGuard_timingGuardExists: AMATimeGuard = AMATimeGuard.timingGuardExists; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timingGuardExists
 * @constant
 * @type {number}
 */
export
const timingGuardExists: AMATimeGuard = AMATimeGuard.timingGuardExists; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AMATimeGuard: $.ASN1Decoder<AMATimeGuard> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMATimeGuard
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMATimeGuard (el: _Element): AMATimeGuard {
    if (!_cached_decoder_for_AMATimeGuard) { _cached_decoder_for_AMATimeGuard = $._decodeEnumerated; }
    return _cached_decoder_for_AMATimeGuard(el);
}

let _cached_encoder_for_AMATimeGuard: $.ASN1Encoder<AMATimeGuard> | null = null;

/**
 * @summary Encodes a(n) AMATimeGuard into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMATimeGuard, encoded as an ASN.1 Element.
 */
export
function _encode_AMATimeGuard (value: AMATimeGuard, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMATimeGuard) { _cached_encoder_for_AMATimeGuard = $._encodeEnumerated; }
    return _cached_encoder_for_AMATimeGuard(value, elGetter);
}


/* eslint-enable */
