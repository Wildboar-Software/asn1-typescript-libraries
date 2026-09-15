/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MicGainInc
 * @description
 *
 * Relative microphone-gain step. ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicGainInc  ::=  ENUMERATED
 * {     increment                 (0),
 *     decrement                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MicGainInc {
    increment = 0,
    decrement = 1,
}

/**
 * @summary MicGainInc
 * @description
 *
 * Relative microphone-gain step. ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicGainInc  ::=  ENUMERATED
 * {     increment                 (0),
 *     decrement                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
type MicGainInc = _enum_for_MicGainInc;

/**
 * @summary MicGainInc
 * @description
 *
 * Relative microphone-gain step. ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicGainInc  ::=  ENUMERATED
 * {     increment                 (0),
 *     decrement                 (1) }
 * ```
 * 
 * @enum {number}
 */
export
const MicGainInc = _enum_for_MicGainInc;

/**
 * @summary MicGainInc_increment
 * @description
 *
 * Increase microphone gain. ECMA-285 §9.16.
 *
 * @constant
 * @type {number}
 */
export
const MicGainInc_increment: MicGainInc = MicGainInc.increment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary increment
 * @constant
 * @type {number}
 */
export
const increment: MicGainInc = MicGainInc.increment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MicGainInc_decrement
 * @description
 *
 * Decrease microphone gain. ECMA-285 §9.16.
 *
 * @constant
 * @type {number}
 */
export
const MicGainInc_decrement: MicGainInc = MicGainInc.decrement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decrement
 * @constant
 * @type {number}
 */
export
const decrement: MicGainInc = MicGainInc.decrement; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MicGainInc: $.ASN1Decoder<MicGainInc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicGainInc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicGainInc (el: _Element): MicGainInc {
    if (!_cached_decoder_for_MicGainInc) { _cached_decoder_for_MicGainInc = $._decodeEnumerated; }
    return _cached_decoder_for_MicGainInc(el);
}

let _cached_encoder_for_MicGainInc: $.ASN1Encoder<MicGainInc> | null = null;

/**
 * @summary Encodes a(n) MicGainInc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicGainInc, encoded as an ASN.1 Element.
 */
export
function _encode_MicGainInc (value: MicGainInc, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicGainInc) { _cached_encoder_for_MicGainInc = $._encodeEnumerated; }
    return _cached_encoder_for_MicGainInc(value, elGetter);
}


/* eslint-enable */
