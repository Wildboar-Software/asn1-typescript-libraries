/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PeriodicCommunicationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicCommunicationIndicator  ::=  ENUMERATED
 * {
 *     periodic(1),
 *     nonPeriodic(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PeriodicCommunicationIndicator {
    periodic = 1,
    nonPeriodic = 2,
}

/**
 * @summary PeriodicCommunicationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicCommunicationIndicator  ::=  ENUMERATED
 * {
 *     periodic(1),
 *     nonPeriodic(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PeriodicCommunicationIndicator = _enum_for_PeriodicCommunicationIndicator;

/**
 * @summary PeriodicCommunicationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicCommunicationIndicator  ::=  ENUMERATED
 * {
 *     periodic(1),
 *     nonPeriodic(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PeriodicCommunicationIndicator = _enum_for_PeriodicCommunicationIndicator;

/**
 * @summary PeriodicCommunicationIndicator_periodic
 * @constant
 * @type {number}
 */
export
const PeriodicCommunicationIndicator_periodic: PeriodicCommunicationIndicator = PeriodicCommunicationIndicator.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic: PeriodicCommunicationIndicator = PeriodicCommunicationIndicator.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodicCommunicationIndicator_nonPeriodic
 * @constant
 * @type {number}
 */
export
const PeriodicCommunicationIndicator_nonPeriodic: PeriodicCommunicationIndicator = PeriodicCommunicationIndicator.nonPeriodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonPeriodic
 * @constant
 * @type {number}
 */
export
const nonPeriodic: PeriodicCommunicationIndicator = PeriodicCommunicationIndicator.nonPeriodic; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PeriodicCommunicationIndicator: $.ASN1Decoder<PeriodicCommunicationIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodicCommunicationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeriodicCommunicationIndicator (el: _Element): PeriodicCommunicationIndicator {
    if (!_cached_decoder_for_PeriodicCommunicationIndicator) { _cached_decoder_for_PeriodicCommunicationIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_PeriodicCommunicationIndicator(el);
}

let _cached_encoder_for_PeriodicCommunicationIndicator: $.ASN1Encoder<PeriodicCommunicationIndicator> | null = null;

/**
 * @summary Encodes a(n) PeriodicCommunicationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodicCommunicationIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_PeriodicCommunicationIndicator (value: PeriodicCommunicationIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeriodicCommunicationIndicator) { _cached_encoder_for_PeriodicCommunicationIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_PeriodicCommunicationIndicator(value, elGetter);
}


/* eslint-enable */
