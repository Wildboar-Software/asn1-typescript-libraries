/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary ToneDetected
 * @description
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
 * @constant
 * @type {number}
 */
export
const ToneDetected_beep: ToneDetected = ToneDetected.beep; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary beep
 * @constant
 * @type {number}
 */
export
const beep: ToneDetected = ToneDetected.beep; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_billing
 * @constant
 * @type {number}
 */
export
const ToneDetected_billing: ToneDetected = ToneDetected.billing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary billing
 * @constant
 * @type {number}
 */
export
const billing: ToneDetected = ToneDetected.billing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_busy
 * @constant
 * @type {number}
 */
export
const ToneDetected_busy: ToneDetected = ToneDetected.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @constant
 * @type {number}
 */
export
const busy: ToneDetected = ToneDetected.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_carrier
 * @constant
 * @type {number}
 */
export
const ToneDetected_carrier: ToneDetected = ToneDetected.carrier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary carrier
 * @constant
 * @type {number}
 */
export
const carrier: ToneDetected = ToneDetected.carrier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_confirmation
 * @constant
 * @type {number}
 */
export
const ToneDetected_confirmation: ToneDetected = ToneDetected.confirmation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confirmation
 * @constant
 * @type {number}
 */
export
const confirmation: ToneDetected = ToneDetected.confirmation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_dial
 * @constant
 * @type {number}
 */
export
const ToneDetected_dial: ToneDetected = ToneDetected.dial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dial
 * @constant
 * @type {number}
 */
export
const dial: ToneDetected = ToneDetected.dial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_faxCNG
 * @constant
 * @type {number}
 */
export
const ToneDetected_faxCNG: ToneDetected = ToneDetected.faxCNG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxCNG
 * @constant
 * @type {number}
 */
export
const faxCNG: ToneDetected = ToneDetected.faxCNG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_hold
 * @constant
 * @type {number}
 */
export
const ToneDetected_hold: ToneDetected = ToneDetected.hold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hold
 * @constant
 * @type {number}
 */
export
const hold: ToneDetected = ToneDetected.hold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_howler
 * @constant
 * @type {number}
 */
export
const ToneDetected_howler: ToneDetected = ToneDetected.howler; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary howler
 * @constant
 * @type {number}
 */
export
const howler: ToneDetected = ToneDetected.howler; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_intrusion
 * @constant
 * @type {number}
 */
export
const ToneDetected_intrusion: ToneDetected = ToneDetected.intrusion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrusion
 * @constant
 * @type {number}
 */
export
const intrusion: ToneDetected = ToneDetected.intrusion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_modemCNG
 * @constant
 * @type {number}
 */
export
const ToneDetected_modemCNG: ToneDetected = ToneDetected.modemCNG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modemCNG
 * @constant
 * @type {number}
 */
export
const modemCNG: ToneDetected = ToneDetected.modemCNG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_park
 * @constant
 * @type {number}
 */
export
const ToneDetected_park: ToneDetected = ToneDetected.park; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @constant
 * @type {number}
 */
export
const park: ToneDetected = ToneDetected.park; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_recordWarning
 * @constant
 * @type {number}
 */
export
const ToneDetected_recordWarning: ToneDetected = ToneDetected.recordWarning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recordWarning
 * @constant
 * @type {number}
 */
export
const recordWarning: ToneDetected = ToneDetected.recordWarning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_reorder
 * @constant
 * @type {number}
 */
export
const ToneDetected_reorder: ToneDetected = ToneDetected.reorder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reorder
 * @constant
 * @type {number}
 */
export
const reorder: ToneDetected = ToneDetected.reorder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_ringback
 * @constant
 * @type {number}
 */
export
const ToneDetected_ringback: ToneDetected = ToneDetected.ringback; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringback
 * @constant
 * @type {number}
 */
export
const ringback: ToneDetected = ToneDetected.ringback; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_silence
 * @constant
 * @type {number}
 */
export
const ToneDetected_silence: ToneDetected = ToneDetected.silence; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silence
 * @constant
 * @type {number}
 */
export
const silence: ToneDetected = ToneDetected.silence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_sitVC
 * @constant
 * @type {number}
 */
export
const ToneDetected_sitVC: ToneDetected = ToneDetected.sitVC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitVC
 * @constant
 * @type {number}
 */
export
const sitVC: ToneDetected = ToneDetected.sitVC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_sitIC
 * @constant
 * @type {number}
 */
export
const ToneDetected_sitIC: ToneDetected = ToneDetected.sitIC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitIC
 * @constant
 * @type {number}
 */
export
const sitIC: ToneDetected = ToneDetected.sitIC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_sitRO
 * @constant
 * @type {number}
 */
export
const ToneDetected_sitRO: ToneDetected = ToneDetected.sitRO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitRO
 * @constant
 * @type {number}
 */
export
const sitRO: ToneDetected = ToneDetected.sitRO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_sitNC
 * @constant
 * @type {number}
 */
export
const ToneDetected_sitNC: ToneDetected = ToneDetected.sitNC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitNC
 * @constant
 * @type {number}
 */
export
const sitNC: ToneDetected = ToneDetected.sitNC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ToneDetected_other
 * @constant
 * @type {number}
 */
export
const ToneDetected_other: ToneDetected = ToneDetected.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
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
