/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { type ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



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
const ToneDetected: typeof _enum_for_ToneDetected = _enum_for_ToneDetected;

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
const ToneDetected_beep: _enum_for_ToneDetected.beep = ToneDetected.beep; /* LONG_NAMED_ENUMERATED_VALUE */

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
const beep: _enum_for_ToneDetected.beep = ToneDetected.beep; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_billing: _enum_for_ToneDetected.billing = ToneDetected.billing; /* LONG_NAMED_ENUMERATED_VALUE */

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
const billing: _enum_for_ToneDetected.billing = ToneDetected.billing; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_busy: _enum_for_ToneDetected.busy = ToneDetected.busy; /* LONG_NAMED_ENUMERATED_VALUE */

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
const busy: _enum_for_ToneDetected.busy = ToneDetected.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_carrier: _enum_for_ToneDetected.carrier = ToneDetected.carrier; /* LONG_NAMED_ENUMERATED_VALUE */

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
const carrier: _enum_for_ToneDetected.carrier = ToneDetected.carrier; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_confirmation: _enum_for_ToneDetected.confirmation = ToneDetected.confirmation; /* LONG_NAMED_ENUMERATED_VALUE */

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
const confirmation: _enum_for_ToneDetected.confirmation = ToneDetected.confirmation; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_dial: _enum_for_ToneDetected.dial = ToneDetected.dial; /* LONG_NAMED_ENUMERATED_VALUE */

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
const dial: _enum_for_ToneDetected.dial = ToneDetected.dial; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_faxCNG: _enum_for_ToneDetected.faxCNG = ToneDetected.faxCNG; /* LONG_NAMED_ENUMERATED_VALUE */

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
const faxCNG: _enum_for_ToneDetected.faxCNG = ToneDetected.faxCNG; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_hold: _enum_for_ToneDetected.hold = ToneDetected.hold; /* LONG_NAMED_ENUMERATED_VALUE */

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
const hold: _enum_for_ToneDetected.hold = ToneDetected.hold; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_howler: _enum_for_ToneDetected.howler = ToneDetected.howler; /* LONG_NAMED_ENUMERATED_VALUE */

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
const howler: _enum_for_ToneDetected.howler = ToneDetected.howler; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_intrusion: _enum_for_ToneDetected.intrusion = ToneDetected.intrusion; /* LONG_NAMED_ENUMERATED_VALUE */

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
const intrusion: _enum_for_ToneDetected.intrusion = ToneDetected.intrusion; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_modemCNG: _enum_for_ToneDetected.modemCNG = ToneDetected.modemCNG; /* LONG_NAMED_ENUMERATED_VALUE */

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
const modemCNG: _enum_for_ToneDetected.modemCNG = ToneDetected.modemCNG; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_park: _enum_for_ToneDetected.park = ToneDetected.park; /* LONG_NAMED_ENUMERATED_VALUE */

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
const park: _enum_for_ToneDetected.park = ToneDetected.park; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_recordWarning: _enum_for_ToneDetected.recordWarning = ToneDetected.recordWarning; /* LONG_NAMED_ENUMERATED_VALUE */

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
const recordWarning: _enum_for_ToneDetected.recordWarning = ToneDetected.recordWarning; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_reorder: _enum_for_ToneDetected.reorder = ToneDetected.reorder; /* LONG_NAMED_ENUMERATED_VALUE */

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
const reorder: _enum_for_ToneDetected.reorder = ToneDetected.reorder; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_ringback: _enum_for_ToneDetected.ringback = ToneDetected.ringback; /* LONG_NAMED_ENUMERATED_VALUE */

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
const ringback: _enum_for_ToneDetected.ringback = ToneDetected.ringback; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_silence: _enum_for_ToneDetected.silence = ToneDetected.silence; /* LONG_NAMED_ENUMERATED_VALUE */

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
const silence: _enum_for_ToneDetected.silence = ToneDetected.silence; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_sitVC: _enum_for_ToneDetected.sitVC = ToneDetected.sitVC; /* LONG_NAMED_ENUMERATED_VALUE */

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
const sitVC: _enum_for_ToneDetected.sitVC = ToneDetected.sitVC; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_sitIC: _enum_for_ToneDetected.sitIC = ToneDetected.sitIC; /* LONG_NAMED_ENUMERATED_VALUE */

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
const sitIC: _enum_for_ToneDetected.sitIC = ToneDetected.sitIC; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_sitRO: _enum_for_ToneDetected.sitRO = ToneDetected.sitRO; /* LONG_NAMED_ENUMERATED_VALUE */

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
const sitRO: _enum_for_ToneDetected.sitRO = ToneDetected.sitRO; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_sitNC: _enum_for_ToneDetected.sitNC = ToneDetected.sitNC; /* LONG_NAMED_ENUMERATED_VALUE */

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
const sitNC: _enum_for_ToneDetected.sitNC = ToneDetected.sitNC; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ToneDetected_other: _enum_for_ToneDetected.other = ToneDetected.other; /* LONG_NAMED_ENUMERATED_VALUE */

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
const other: _enum_for_ToneDetected.other = ToneDetected.other; /* SHORT_NAMED_ENUMERATED_VALUE */

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
