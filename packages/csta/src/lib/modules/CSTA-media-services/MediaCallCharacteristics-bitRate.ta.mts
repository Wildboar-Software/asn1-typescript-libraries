/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaCallCharacteristics_bitRate
 * @description
 *
 * Digital data bit-rate of the call. ECMA-269 §12.2.20.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics_bitRate ::= ENUMERATED {
 *     constant (0),
 *     variable (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MediaCallCharacteristics_bitRate {
    constant = 0,
    variable = 1,
}

/**
 * @summary MediaCallCharacteristics_bitRate
 * @description
 *
 * Digital data bit-rate of the call. ECMA-269 §12.2.20.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics_bitRate ::= ENUMERATED {
 *     constant (0),
 *     variable (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MediaCallCharacteristics_bitRate = _enum_for_MediaCallCharacteristics_bitRate;

/**
 * @summary MediaCallCharacteristics_bitRate
 * @description
 *
 * Digital data bit-rate of the call. ECMA-269 §12.2.20.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics_bitRate ::= ENUMERATED {
 *     constant (0),
 *     variable (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MediaCallCharacteristics_bitRate = _enum_for_MediaCallCharacteristics_bitRate;

/**
 * @summary MediaCallCharacteristics_bitRate_constant
 * @description
 *
 * Dedicated bandwidth and constant delivery rate. Default. ECMA-269 §12.2.20.
 *
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_bitRate_constant: MediaCallCharacteristics_bitRate = MediaCallCharacteristics_bitRate.constant; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary constant
 * @constant
 * @type {number}
 */
export
const constant: MediaCallCharacteristics_bitRate = MediaCallCharacteristics_bitRate.constant; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaCallCharacteristics_bitRate_variable
 * @description
 *
 * Bit rate may vary during the call. ECMA-269 §12.2.20.
 *
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_bitRate_variable: MediaCallCharacteristics_bitRate = MediaCallCharacteristics_bitRate.variable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary variable
 * @constant
 * @type {number}
 */
export
const variable: MediaCallCharacteristics_bitRate = MediaCallCharacteristics_bitRate.variable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MediaCallCharacteristics_bitRate: $.ASN1Decoder<MediaCallCharacteristics_bitRate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaCallCharacteristics_bitRate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaCallCharacteristics_bitRate (el: _Element): MediaCallCharacteristics_bitRate {
    if (!_cached_decoder_for_MediaCallCharacteristics_bitRate) { _cached_decoder_for_MediaCallCharacteristics_bitRate = $._decodeEnumerated; }
    return _cached_decoder_for_MediaCallCharacteristics_bitRate(el);
}

let _cached_encoder_for_MediaCallCharacteristics_bitRate: $.ASN1Encoder<MediaCallCharacteristics_bitRate> | null = null;

/**
 * @summary Encodes a(n) MediaCallCharacteristics_bitRate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaCallCharacteristics_bitRate, encoded as an ASN.1 Element.
 */
export
function _encode_MediaCallCharacteristics_bitRate (value: MediaCallCharacteristics_bitRate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaCallCharacteristics_bitRate) { _cached_encoder_for_MediaCallCharacteristics_bitRate = $._encodeEnumerated; }
    return _cached_encoder_for_MediaCallCharacteristics_bitRate(value, elGetter);
}


/* eslint-enable */
