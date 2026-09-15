/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ToneDetected
 * @description
 *
 * Telephony tone kind. Frequency/duration/pause apply only when the value is
 * `other` (ECMA-269 §25.1.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ToneDetected  ::=  ENUMERATED
 * {    beep                ( 0),
 *     billing                ( 1),
 *     busy                ( 2),
 *     carrier                ( 3),
 *     confirmation            ( 4),
 *     dial                ( 5),
 *     faxCNG                ( 6),
 *     hold                ( 7),
 *     howler                ( 8),
 *     intrusion            ( 9),
 *     modemCNG            (10),
 *     park                (11),
 *     recordWarning            (12),
 *     reorder                (13),
 *     ringback            (14),
 *     silence                (15),
 *     sitVC                (16),
 *     sitIC                (17),
 *     sitRO                (18),
 *     sitNC                (19),
 *     other                (20) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ToneDetected {
    beep = 0,
    billing = 1,
    busy = 2,
    carrier = 3,
    confirmation = 4,
    dial = 5,
    faxCNG = 6,
    hold = 7,
    howler = 8,
    intrusion = 9,
    modemCNG = 10,
    park = 11,
    recordWarning = 12,
    reorder = 13,
    ringback = 14,
    silence = 15,
    sitVC = 16,
    sitIC = 17,
    sitRO = 18,
    sitNC = 19,
    other = 20,
}

/**
 * @summary ToneDetected
 * @description
 *
 * Telephony tone kind. Frequency/duration/pause apply only when the value is
 * `other` (ECMA-269 §25.1.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ToneDetected  ::=  ENUMERATED
 * {    beep                ( 0),
 *     billing                ( 1),
 *     busy                ( 2),
 *     carrier                ( 3),
 *     confirmation            ( 4),
 *     dial                ( 5),
 *     faxCNG                ( 6),
 *     hold                ( 7),
 *     howler                ( 8),
 *     intrusion            ( 9),
 *     modemCNG            (10),
 *     park                (11),
 *     recordWarning            (12),
 *     reorder                (13),
 *     ringback            (14),
 *     silence                (15),
 *     sitVC                (16),
 *     sitIC                (17),
 *     sitRO                (18),
 *     sitNC                (19),
 *     other                (20) }
 * ```
 * 
 * @enum {number}
 */
export
type ToneDetected = _enum_for_ToneDetected;

/**
 * @summary ToneDetected
 * @description
 *
 * Telephony tone kind. Frequency/duration/pause apply only when the value is
 * `other` (ECMA-269 §25.1.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ToneDetected  ::=  ENUMERATED
 * {    beep                ( 0),
 *     billing                ( 1),
 *     busy                ( 2),
 *     carrier                ( 3),
 *     confirmation            ( 4),
 *     dial                ( 5),
 *     faxCNG                ( 6),
 *     hold                ( 7),
 *     howler                ( 8),
 *     intrusion            ( 9),
 *     modemCNG            (10),
 *     park                (11),
 *     recordWarning            (12),
 *     reorder                (13),
 *     ringback            (14),
 *     silence                (15),
 *     sitVC                (16),
 *     sitIC                (17),
 *     sitRO                (18),
 *     sitNC                (19),
 *     other                (20) }
 * ```
 * 
 * @enum {number}
 */
export
const ToneDetected = _enum_for_ToneDetected;

/**
 * @summary ToneDetected_beep
 * @description
 *
 * Beep tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_beep: ToneDetected = ToneDetected.beep; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary beep
 * @description
 *
 * Beep tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const beep: ToneDetected = ToneDetected.beep; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_billing
 * @description
 *
 * Billing tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_billing: ToneDetected = ToneDetected.billing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary billing
 * @description
 *
 * Billing tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const billing: ToneDetected = ToneDetected.billing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_busy
 * @description
 *
 * Busy tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_busy: ToneDetected = ToneDetected.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description
 *
 * Busy tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const busy: ToneDetected = ToneDetected.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_carrier
 * @description
 *
 * Carrier tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_carrier: ToneDetected = ToneDetected.carrier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary carrier
 * @description
 *
 * Carrier tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const carrier: ToneDetected = ToneDetected.carrier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_confirmation
 * @description
 *
 * Confirmation tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_confirmation: ToneDetected = ToneDetected.confirmation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confirmation
 * @description
 *
 * Confirmation tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const confirmation: ToneDetected = ToneDetected.confirmation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_dial
 * @description
 *
 * Dial tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_dial: ToneDetected = ToneDetected.dial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dial
 * @description
 *
 * Dial tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const dial: ToneDetected = ToneDetected.dial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_faxCNG
 * @description
 *
 * Fax CNG (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_faxCNG: ToneDetected = ToneDetected.faxCNG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxCNG
 * @description
 *
 * Fax CNG (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const faxCNG: ToneDetected = ToneDetected.faxCNG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_hold
 * @description
 *
 * Hold tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_hold: ToneDetected = ToneDetected.hold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hold
 * @description
 *
 * Hold tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const hold: ToneDetected = ToneDetected.hold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_howler
 * @description
 *
 * Howler tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_howler: ToneDetected = ToneDetected.howler; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary howler
 * @description
 *
 * Howler tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const howler: ToneDetected = ToneDetected.howler; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_intrusion
 * @description
 *
 * Intrusion tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_intrusion: ToneDetected = ToneDetected.intrusion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrusion
 * @description
 *
 * Intrusion tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const intrusion: ToneDetected = ToneDetected.intrusion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_modemCNG
 * @description
 *
 * Modem CNG (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_modemCNG: ToneDetected = ToneDetected.modemCNG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modemCNG
 * @description
 *
 * Modem CNG (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const modemCNG: ToneDetected = ToneDetected.modemCNG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_park
 * @description
 *
 * Park tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_park: ToneDetected = ToneDetected.park; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @description
 *
 * Park tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const park: ToneDetected = ToneDetected.park; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_recordWarning
 * @description
 *
 * Record-warning tone (call may be being recorded) (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_recordWarning: ToneDetected = ToneDetected.recordWarning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recordWarning
 * @description
 *
 * Record-warning tone (call may be being recorded) (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const recordWarning: ToneDetected = ToneDetected.recordWarning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_reorder
 * @description
 *
 * Reorder tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_reorder: ToneDetected = ToneDetected.reorder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reorder
 * @description
 *
 * Reorder tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const reorder: ToneDetected = ToneDetected.reorder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_ringback
 * @description
 *
 * Ringback tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_ringback: ToneDetected = ToneDetected.ringback; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringback
 * @description
 *
 * Ringback tone (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ringback: ToneDetected = ToneDetected.ringback; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_silence
 * @description
 *
 * Silence (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_silence: ToneDetected = ToneDetected.silence; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silence
 * @description
 *
 * Silence (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const silence: ToneDetected = ToneDetected.silence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_sitVC
 * @description
 *
 * SIT VC (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_sitVC: ToneDetected = ToneDetected.sitVC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitVC
 * @description
 *
 * SIT VC (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const sitVC: ToneDetected = ToneDetected.sitVC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_sitIC
 * @description
 *
 * SIT IC (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_sitIC: ToneDetected = ToneDetected.sitIC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitIC
 * @description
 *
 * SIT IC (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const sitIC: ToneDetected = ToneDetected.sitIC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_sitRO
 * @description
 *
 * SIT RO (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_sitRO: ToneDetected = ToneDetected.sitRO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitRO
 * @description
 *
 * SIT RO (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const sitRO: ToneDetected = ToneDetected.sitRO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_sitNC
 * @description
 *
 * SIT NC (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_sitNC: ToneDetected = ToneDetected.sitNC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitNC
 * @description
 *
 * SIT NC (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const sitNC: ToneDetected = ToneDetected.sitNC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_other
 * @description
 *
 * Other tone; may carry frequency/duration/pause (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ToneDetected_other: ToneDetected = ToneDetected.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @description
 *
 * Other tone; may carry frequency/duration/pause (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const other: ToneDetected = ToneDetected.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ToneDetected: $.ASN1Decoder<ToneDetected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ToneDetected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ToneDetected (el: _Element): ToneDetected {
    if (!_cached_decoder_for_ToneDetected) { _cached_decoder_for_ToneDetected = $._decodeEnumerated; }
    return _cached_decoder_for_ToneDetected(el);
}

let _cached_encoder_for_ToneDetected: $.ASN1Encoder<ToneDetected> | null = null;

/**
 * @summary Encodes a(n) ToneDetected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToneDetected, encoded as an ASN.1 Element.
 */
export
function _encode_ToneDetected (value: ToneDetected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ToneDetected) { _cached_encoder_for_ToneDetected = $._encodeEnumerated; }
    return _cached_encoder_for_ToneDetected(value, elGetter);
}


/* eslint-enable */
