/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * explicitReservationCreationControl-ArgumentType-controlOption ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_explicitReservationCreationControl_ArgumentType_controlOption {
    noReservationRequired = 0,
    reservationRequiredWithReservationIndicator = 1,
    reservationRequiredWithoutReservationIndicator = 2,
}

/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * explicitReservationCreationControl-ArgumentType-controlOption ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type explicitReservationCreationControl_ArgumentType_controlOption = _enum_for_explicitReservationCreationControl_ArgumentType_controlOption;

/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * explicitReservationCreationControl-ArgumentType-controlOption ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const explicitReservationCreationControl_ArgumentType_controlOption = _enum_for_explicitReservationCreationControl_ArgumentType_controlOption;

/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption_noReservationRequired
 * @constant
 * @type {number}
 */
export
const explicitReservationCreationControl_ArgumentType_controlOption_noReservationRequired: explicitReservationCreationControl_ArgumentType_controlOption = explicitReservationCreationControl_ArgumentType_controlOption.noReservationRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReservationRequired
 * @constant
 * @type {number}
 */
export
const noReservationRequired: explicitReservationCreationControl_ArgumentType_controlOption = explicitReservationCreationControl_ArgumentType_controlOption.noReservationRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithReservationIndicator
 * @constant
 * @type {number}
 */
export
const explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithReservationIndicator: explicitReservationCreationControl_ArgumentType_controlOption = explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithReservationIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservationRequiredWithReservationIndicator
 * @constant
 * @type {number}
 */
export
const reservationRequiredWithReservationIndicator: explicitReservationCreationControl_ArgumentType_controlOption = explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithReservationIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithoutReservationIndicator
 * @constant
 * @type {number}
 */
export
const explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithoutReservationIndicator: explicitReservationCreationControl_ArgumentType_controlOption = explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithoutReservationIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservationRequiredWithoutReservationIndicator
 * @constant
 * @type {number}
 */
export
const reservationRequiredWithoutReservationIndicator: explicitReservationCreationControl_ArgumentType_controlOption = explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithoutReservationIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_explicitReservationCreationControl_ArgumentType_controlOption: $.ASN1Decoder<explicitReservationCreationControl_ArgumentType_controlOption> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) explicitReservationCreationControl_ArgumentType_controlOption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_explicitReservationCreationControl_ArgumentType_controlOption (el: _Element): explicitReservationCreationControl_ArgumentType_controlOption {
    if (!_cached_decoder_for_explicitReservationCreationControl_ArgumentType_controlOption) { _cached_decoder_for_explicitReservationCreationControl_ArgumentType_controlOption = $._decodeEnumerated; }
    return _cached_decoder_for_explicitReservationCreationControl_ArgumentType_controlOption(el);
}

let _cached_encoder_for_explicitReservationCreationControl_ArgumentType_controlOption: $.ASN1Encoder<explicitReservationCreationControl_ArgumentType_controlOption> | null = null;

/**
 * @summary Encodes a(n) explicitReservationCreationControl_ArgumentType_controlOption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The explicitReservationCreationControl_ArgumentType_controlOption, encoded as an ASN.1 Element.
 */
export
function _encode_explicitReservationCreationControl_ArgumentType_controlOption (value: explicitReservationCreationControl_ArgumentType_controlOption, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_explicitReservationCreationControl_ArgumentType_controlOption) { _cached_encoder_for_explicitReservationCreationControl_ArgumentType_controlOption = $._encodeEnumerated; }
    return _cached_encoder_for_explicitReservationCreationControl_ArgumentType_controlOption(value, elGetter);
}


/* eslint-enable */
