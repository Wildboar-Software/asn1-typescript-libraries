/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SwitchOffIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchOffIndicator  ::=  ENUMERATED
 * {
 *     normalDetach(1),
 *     switchOff(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SwitchOffIndicator {
    normalDetach = 1,
    switchOff = 2,
}

/**
 * @summary SwitchOffIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchOffIndicator  ::=  ENUMERATED
 * {
 *     normalDetach(1),
 *     switchOff(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SwitchOffIndicator = _enum_for_SwitchOffIndicator;

/**
 * @summary SwitchOffIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchOffIndicator  ::=  ENUMERATED
 * {
 *     normalDetach(1),
 *     switchOff(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SwitchOffIndicator = _enum_for_SwitchOffIndicator;

/**
 * @summary SwitchOffIndicator_normalDetach
 * @constant
 * @type {number}
 */
export
const SwitchOffIndicator_normalDetach: SwitchOffIndicator = SwitchOffIndicator.normalDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalDetach
 * @constant
 * @type {number}
 */
export
const normalDetach: SwitchOffIndicator = SwitchOffIndicator.normalDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SwitchOffIndicator_switchOff
 * @constant
 * @type {number}
 */
export
const SwitchOffIndicator_switchOff: SwitchOffIndicator = SwitchOffIndicator.switchOff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchOff
 * @constant
 * @type {number}
 */
export
const switchOff: SwitchOffIndicator = SwitchOffIndicator.switchOff; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SwitchOffIndicator: $.ASN1Decoder<SwitchOffIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwitchOffIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwitchOffIndicator (el: _Element): SwitchOffIndicator {
    if (!_cached_decoder_for_SwitchOffIndicator) { _cached_decoder_for_SwitchOffIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_SwitchOffIndicator(el);
}

let _cached_encoder_for_SwitchOffIndicator: $.ASN1Encoder<SwitchOffIndicator> | null = null;

/**
 * @summary Encodes a(n) SwitchOffIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchOffIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_SwitchOffIndicator (value: SwitchOffIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwitchOffIndicator) { _cached_encoder_for_SwitchOffIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_SwitchOffIndicator(value, elGetter);
}


/* eslint-enable */
