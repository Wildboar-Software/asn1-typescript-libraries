/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PIDProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PIDProfile  ::=  ENUMERATED
 * {    pidProfileOption1        (0),
 *     pidProfileOption2        (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PIDProfile {
    pidProfileOption1 = 0,
    pidProfileOption2 = 1,
}

/**
 * @summary PIDProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PIDProfile  ::=  ENUMERATED
 * {    pidProfileOption1        (0),
 *     pidProfileOption2        (1) }
 * ```
 * 
 * @enum {number}
 */
export
type PIDProfile = _enum_for_PIDProfile;

/**
 * @summary PIDProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PIDProfile  ::=  ENUMERATED
 * {    pidProfileOption1        (0),
 *     pidProfileOption2        (1) }
 * ```
 * 
 * @enum {number}
 */
export
const PIDProfile = _enum_for_PIDProfile;

/**
 * @summary PIDProfile_pidProfileOption1
 * @constant
 * @type {number}
 */
export
const PIDProfile_pidProfileOption1: PIDProfile = PIDProfile.pidProfileOption1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pidProfileOption1
 * @constant
 * @type {number}
 */
export
const pidProfileOption1: PIDProfile = PIDProfile.pidProfileOption1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PIDProfile_pidProfileOption2
 * @constant
 * @type {number}
 */
export
const PIDProfile_pidProfileOption2: PIDProfile = PIDProfile.pidProfileOption2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pidProfileOption2
 * @constant
 * @type {number}
 */
export
const pidProfileOption2: PIDProfile = PIDProfile.pidProfileOption2; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PIDProfile: $.ASN1Decoder<PIDProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PIDProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PIDProfile (el: _Element): PIDProfile {
    if (!_cached_decoder_for_PIDProfile) { _cached_decoder_for_PIDProfile = $._decodeEnumerated; }
    return _cached_decoder_for_PIDProfile(el);
}

let _cached_encoder_for_PIDProfile: $.ASN1Encoder<PIDProfile> | null = null;

/**
 * @summary Encodes a(n) PIDProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PIDProfile, encoded as an ASN.1 Element.
 */
export
function _encode_PIDProfile (value: PIDProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PIDProfile) { _cached_encoder_for_PIDProfile = $._encodeEnumerated; }
    return _cached_encoder_for_PIDProfile(value, elGetter);
}


/* eslint-enable */
