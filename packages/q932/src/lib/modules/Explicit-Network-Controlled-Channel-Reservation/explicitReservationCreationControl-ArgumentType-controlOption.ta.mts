/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * explicitReservationCreationControl-ArgumentType-controlOption ::= ENUMERATED {
 *   noReservationRequired(0),
 *   reservationRequiredWithReservationIndicator(1),
 *   reservationRequiredWithoutReservationIndicator(2)
 * }
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
 * explicitReservationCreationControl-ArgumentType-controlOption ::= ENUMERATED {
 *   noReservationRequired(0),
 *   reservationRequiredWithReservationIndicator(1),
 *   reservationRequiredWithoutReservationIndicator(2)
 * }
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
 * explicitReservationCreationControl-ArgumentType-controlOption ::= ENUMERATED {
 *   noReservationRequired(0),
 *   reservationRequiredWithReservationIndicator(1),
 *   reservationRequiredWithoutReservationIndicator(2)
 * }
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
export const _decode_explicitReservationCreationControl_ArgumentType_controlOption: $.ASN1Decoder<explicitReservationCreationControl_ArgumentType_controlOption> = $._decodeEnumerated;
export const _encode_explicitReservationCreationControl_ArgumentType_controlOption: $.ASN1Encoder<explicitReservationCreationControl_ArgumentType_controlOption> = $._encodeEnumerated;


/* eslint-enable */
