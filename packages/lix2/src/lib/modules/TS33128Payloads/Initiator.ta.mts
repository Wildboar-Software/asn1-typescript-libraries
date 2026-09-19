/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiator  ::=  ENUMERATED
 * {
 *     uE(1),
 *     network(2),
 *     unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Initiator {
    uE = 1,
    network = 2,
    unknown = 3,
}

/**
 * @summary Initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiator  ::=  ENUMERATED
 * {
 *     uE(1),
 *     network(2),
 *     unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Initiator = _enum_for_Initiator;

/**
 * @summary Initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiator  ::=  ENUMERATED
 * {
 *     uE(1),
 *     network(2),
 *     unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Initiator = _enum_for_Initiator;

/**
 * @summary Initiator_uE
 * @constant
 * @type {number}
 */
export
const Initiator_uE: Initiator = Initiator.uE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uE
 * @constant
 * @type {number}
 */
export
const uE: Initiator = Initiator.uE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Initiator_network
 * @constant
 * @type {number}
 */
export
const Initiator_network: Initiator = Initiator.network; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary network
 * @constant
 * @type {number}
 */
export
const network: Initiator = Initiator.network; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Initiator_unknown
 * @constant
 * @type {number}
 */
export
const Initiator_unknown: Initiator = Initiator.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: Initiator = Initiator.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Initiator: $.ASN1Decoder<Initiator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Initiator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Initiator (el: _Element): Initiator {
    if (!_cached_decoder_for_Initiator) { _cached_decoder_for_Initiator = $._decodeEnumerated; }
    return _cached_decoder_for_Initiator(el);
}

let _cached_encoder_for_Initiator: $.ASN1Encoder<Initiator> | null = null;

/**
 * @summary Encodes a(n) Initiator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Initiator, encoded as an ASN.1 Element.
 */
export
function _encode_Initiator (value: Initiator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Initiator) { _cached_encoder_for_Initiator = $._encodeEnumerated; }
    return _cached_encoder_for_Initiator(value, elGetter);
}


/* eslint-enable */
