/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReRegRequiredIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReRegRequiredIndicator  ::=  ENUMERATED
 * {
 *     reRegistrationRequired(1),
 *     reRegistrationNotRequired(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReRegRequiredIndicator {
    reRegistrationRequired = 1,
    reRegistrationNotRequired = 2,
}

/**
 * @summary ReRegRequiredIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReRegRequiredIndicator  ::=  ENUMERATED
 * {
 *     reRegistrationRequired(1),
 *     reRegistrationNotRequired(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReRegRequiredIndicator = _enum_for_ReRegRequiredIndicator;

/**
 * @summary ReRegRequiredIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReRegRequiredIndicator  ::=  ENUMERATED
 * {
 *     reRegistrationRequired(1),
 *     reRegistrationNotRequired(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReRegRequiredIndicator = _enum_for_ReRegRequiredIndicator;

/**
 * @summary ReRegRequiredIndicator_reRegistrationRequired
 * @constant
 * @type {number}
 */
export
const ReRegRequiredIndicator_reRegistrationRequired: ReRegRequiredIndicator = ReRegRequiredIndicator.reRegistrationRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegistrationRequired
 * @constant
 * @type {number}
 */
export
const reRegistrationRequired: ReRegRequiredIndicator = ReRegRequiredIndicator.reRegistrationRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReRegRequiredIndicator_reRegistrationNotRequired
 * @constant
 * @type {number}
 */
export
const ReRegRequiredIndicator_reRegistrationNotRequired: ReRegRequiredIndicator = ReRegRequiredIndicator.reRegistrationNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegistrationNotRequired
 * @constant
 * @type {number}
 */
export
const reRegistrationNotRequired: ReRegRequiredIndicator = ReRegRequiredIndicator.reRegistrationNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReRegRequiredIndicator: $.ASN1Decoder<ReRegRequiredIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReRegRequiredIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReRegRequiredIndicator (el: _Element): ReRegRequiredIndicator {
    if (!_cached_decoder_for_ReRegRequiredIndicator) { _cached_decoder_for_ReRegRequiredIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_ReRegRequiredIndicator(el);
}

let _cached_encoder_for_ReRegRequiredIndicator: $.ASN1Encoder<ReRegRequiredIndicator> | null = null;

/**
 * @summary Encodes a(n) ReRegRequiredIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReRegRequiredIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_ReRegRequiredIndicator (value: ReRegRequiredIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReRegRequiredIndicator) { _cached_encoder_for_ReRegRequiredIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_ReRegRequiredIndicator(value, elGetter);
}


/* eslint-enable */
