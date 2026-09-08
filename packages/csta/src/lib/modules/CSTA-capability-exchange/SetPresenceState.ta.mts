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
 * @summary SetPresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetPresenceState  ::=  BIT STRING
 * {     fromTime                 ( 0),     -- optional parameters
 *     untilTime                 ( 1),     -- optional parameters
 *     place                     ( 2),     -- optional parameters
 *     mood                     ( 3),     -- optional parameters
 *     namedPresenceState            ( 4),     -- optional parameters
 *     privateData                 ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     ackModelMultiStep             ( 7) }
 * ```
 */
export
type SetPresenceState = BIT_STRING;

/**
 * @summary SetPresenceState_fromTime
 * @constant
 */
export
const SetPresenceState_fromTime: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary fromTime
 * @constant
 */
export
const fromTime: number = SetPresenceState_fromTime; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_untilTime
 * @constant
 */
export
const SetPresenceState_untilTime: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary untilTime
 * @constant
 */
export
const untilTime: number = SetPresenceState_untilTime; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_place
 * @constant
 */
export
const SetPresenceState_place: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary place
 * @constant
 */
export
const place: number = SetPresenceState_place; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_mood
 * @constant
 */
export
const SetPresenceState_mood: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mood
 * @constant
 */
export
const mood: number = SetPresenceState_mood; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_namedPresenceState
 * @constant
 */
export
const SetPresenceState_namedPresenceState: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary namedPresenceState
 * @constant
 */
export
const namedPresenceState: number = SetPresenceState_namedPresenceState; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_privateData
 * @constant
 */
export
const SetPresenceState_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetPresenceState_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_privateDataInAck
 * @constant
 */
export
const SetPresenceState_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetPresenceState_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_ackModelMultiStep
 * @constant
 */
export
const SetPresenceState_ackModelMultiStep: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetPresenceState_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetPresenceState: $.ASN1Decoder<SetPresenceState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetPresenceState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetPresenceState (el: _Element): SetPresenceState {
    if (!_cached_decoder_for_SetPresenceState) { _cached_decoder_for_SetPresenceState = $._decodeBitString; }
    return _cached_decoder_for_SetPresenceState(el);
}

let _cached_encoder_for_SetPresenceState: $.ASN1Encoder<SetPresenceState> | null = null;

/**
 * @summary Encodes a(n) SetPresenceState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetPresenceState, encoded as an ASN.1 Element.
 */
export
function _encode_SetPresenceState (value: SetPresenceState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetPresenceState) { _cached_encoder_for_SetPresenceState = $._encodeBitString; }
    return _cached_encoder_for_SetPresenceState(value, elGetter);
}


/* eslint-enable */
