/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RingMode  ::=  ENUMERATED
 * {     ringing                 (0),
 *     notRinging                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RingMode {
    ringing = 0,
    notRinging = 1,
}

/**
 * @summary RingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RingMode  ::=  ENUMERATED
 * {     ringing                 (0),
 *     notRinging                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
type RingMode = _enum_for_RingMode;

/**
 * @summary RingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RingMode  ::=  ENUMERATED
 * {     ringing                 (0),
 *     notRinging                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
const RingMode = _enum_for_RingMode;

/**
 * @summary RingMode_ringing
 * @constant
 * @type {number}
 */
export
const RingMode_ringing: RingMode = RingMode.ringing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringing
 * @constant
 * @type {number}
 */
export
const ringing: RingMode = RingMode.ringing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RingMode_notRinging
 * @constant
 * @type {number}
 */
export
const RingMode_notRinging: RingMode = RingMode.notRinging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notRinging
 * @constant
 * @type {number}
 */
export
const notRinging: RingMode = RingMode.notRinging; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RingMode: $.ASN1Decoder<RingMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RingMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RingMode (el: _Element): RingMode {
    if (!_cached_decoder_for_RingMode) { _cached_decoder_for_RingMode = $._decodeEnumerated; }
    return _cached_decoder_for_RingMode(el);
}

let _cached_encoder_for_RingMode: $.ASN1Encoder<RingMode> | null = null;

/**
 * @summary Encodes a(n) RingMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RingMode, encoded as an ASN.1 Element.
 */
export
function _encode_RingMode (value: RingMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RingMode) { _cached_encoder_for_RingMode = $._encodeEnumerated; }
    return _cached_encoder_for_RingMode(value, elGetter);
}


/* eslint-enable */
