/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiscretionaryHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiscretionaryHandling  ::=  BIT STRING {
 *     cosmic (0),
 *     management (1),
 *     staff (2),
 *     personal (3),
 *     medical (4),
 *     commercial (5),
 *     releasable-to-internet (6)
 * }
 * ```
 */
export
type DiscretionaryHandling = BIT_STRING;

/**
 * @summary DiscretionaryHandling_cosmic
 * @constant
 */
export
const DiscretionaryHandling_cosmic: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cosmic
 * @constant
 */
export
const cosmic: number = DiscretionaryHandling_cosmic; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_management
 * @constant
 */
export
const DiscretionaryHandling_management: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary management
 * @constant
 */
export
const management: number = DiscretionaryHandling_management; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_staff
 * @constant
 */
export
const DiscretionaryHandling_staff: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary staff
 * @constant
 */
export
const staff: number = DiscretionaryHandling_staff; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_personal
 * @constant
 */
export
const DiscretionaryHandling_personal: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary personal
 * @constant
 */
export
const personal: number = DiscretionaryHandling_personal; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_medical
 * @constant
 */
export
const DiscretionaryHandling_medical: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary medical
 * @constant
 */
export
const medical: number = DiscretionaryHandling_medical; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_commercial
 * @constant
 */
export
const DiscretionaryHandling_commercial: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary commercial
 * @constant
 */
export
const commercial: number = DiscretionaryHandling_commercial; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_releasable_to_internet
 * @constant
 */
export
const DiscretionaryHandling_releasable_to_internet: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary releasable_to_internet
 * @constant
 */
export
const releasable_to_internet: number = DiscretionaryHandling_releasable_to_internet; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DiscretionaryHandling: $.ASN1Decoder<DiscretionaryHandling> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiscretionaryHandling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiscretionaryHandling (el: _Element): DiscretionaryHandling {
    if (!_cached_decoder_for_DiscretionaryHandling) { _cached_decoder_for_DiscretionaryHandling = $._decodeBitString; }
    return _cached_decoder_for_DiscretionaryHandling(el);
}

let _cached_encoder_for_DiscretionaryHandling: $.ASN1Encoder<DiscretionaryHandling> | null = null;

/**
 * @summary Encodes a(n) DiscretionaryHandling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiscretionaryHandling, encoded as an ASN.1 Element.
 */
export
function _encode_DiscretionaryHandling (value: DiscretionaryHandling, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiscretionaryHandling) { _cached_encoder_for_DiscretionaryHandling = $._encodeBitString; }
    return _cached_encoder_for_DiscretionaryHandling(value, elGetter);
}


/* eslint-enable */
