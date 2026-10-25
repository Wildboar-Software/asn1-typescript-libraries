/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption
 * @description
 * 
 * What explicit reservation creation should do.
 *
 * `noReservationRequired`: do not reserve a channel.
 * `reservationRequiredWithReservationIndicator`: reserve a channel and return a
 * `ReservationIndicator`, which later management and cancellation must repeat.
 * `reservationRequiredWithoutReservationIndicator`: reserve a channel and do
 * not allocate an indicator. If the creation invoke has no argument, the
 * network assumes this last option.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2.1; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 6-1 bis.
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
 * What explicit reservation creation should do.
 *
 * `noReservationRequired`: do not reserve a channel.
 * `reservationRequiredWithReservationIndicator`: reserve a channel and return a
 * `ReservationIndicator`, which later management and cancellation must repeat.
 * `reservationRequiredWithoutReservationIndicator`: reserve a channel and do
 * not allocate an indicator. If the creation invoke has no argument, the
 * network assumes this last option.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2.1; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 6-1 bis.
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
 * What explicit reservation creation should do.
 *
 * `noReservationRequired`: do not reserve a channel.
 * `reservationRequiredWithReservationIndicator`: reserve a channel and return a
 * `ReservationIndicator`, which later management and cancellation must repeat.
 * `reservationRequiredWithoutReservationIndicator`: reserve a channel and do
 * not allocate an indicator. If the creation invoke has no argument, the
 * network assumes this last option.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2.1; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 6-1 bis.
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
const explicitReservationCreationControl_ArgumentType_controlOption: typeof _enum_for_explicitReservationCreationControl_ArgumentType_controlOption = _enum_for_explicitReservationCreationControl_ArgumentType_controlOption;

/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption_noReservationRequired
 * @description
 * 
 * Do not create a channel reservation. ITU-T Rec. Q.932 (05/1998) §6.4.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const explicitReservationCreationControl_ArgumentType_controlOption_noReservationRequired: _enum_for_explicitReservationCreationControl_ArgumentType_controlOption.noReservationRequired = explicitReservationCreationControl_ArgumentType_controlOption.noReservationRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReservationRequired
 * @description
 * 
 * Do not create a channel reservation. ITU-T Rec. Q.932 (05/1998) §6.4.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const noReservationRequired: _enum_for_explicitReservationCreationControl_ArgumentType_controlOption.noReservationRequired = explicitReservationCreationControl_ArgumentType_controlOption.noReservationRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithReservationIndicator
 * @description
 * 
 * Create a reservation and return a `ReservationIndicator`. Later use or
 * cancellation of that reservation includes the same value. ITU-T Rec. Q.932
 * (05/1998) §6.4.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithReservationIndicator: _enum_for_explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithReservationIndicator = explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithReservationIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservationRequiredWithReservationIndicator
 * @description
 * 
 * Create a reservation and return a `ReservationIndicator`. Later use or
 * cancellation of that reservation includes the same value. ITU-T Rec. Q.932
 * (05/1998) §6.4.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const reservationRequiredWithReservationIndicator: _enum_for_explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithReservationIndicator = explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithReservationIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithoutReservationIndicator
 * @description
 * 
 * Create a reservation and do not allocate an indicator. If the creation invoke
 * has no argument, the network assumes this option. ITU-T Rec. Q.932 (05/1998)
 * §6.4.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithoutReservationIndicator: _enum_for_explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithoutReservationIndicator = explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithoutReservationIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservationRequiredWithoutReservationIndicator
 * @description
 * 
 * Create a reservation and do not allocate an indicator. If the creation invoke
 * has no argument, the network assumes this option. ITU-T Rec. Q.932 (05/1998)
 * §6.4.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const reservationRequiredWithoutReservationIndicator: _enum_for_explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithoutReservationIndicator = explicitReservationCreationControl_ArgumentType_controlOption.reservationRequiredWithoutReservationIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_explicitReservationCreationControl_ArgumentType_controlOption: $.ASN1Decoder<explicitReservationCreationControl_ArgumentType_controlOption> = $._decodeEnumerated;
export const _encode_explicitReservationCreationControl_ArgumentType_controlOption: $.ASN1Encoder<explicitReservationCreationControl_ArgumentType_controlOption> = $._encodeEnumerated;


/* eslint-enable */
