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
 * @summary GetPresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetPresenceState  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     fromTimeInAck                 ( 1),     -- optional parameters
 *     untilTimeInAck                 ( 2),     -- optional parameters
 *     placeInAck                 ( 3),     -- optional parameters
 *     moodInAck                 ( 4),     -- optional parameters
 *     namedPresenceStateInAck         ( 5),     -- optional parameters
 *     privateDataInAck             ( 6) }
 * ```
 */
export
type GetPresenceState = BIT_STRING;

/**
 * @summary GetPresenceState_privateData
 * @constant
 */
export
const GetPresenceState_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetPresenceState_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_fromTimeInAck
 * @constant
 */
export
const GetPresenceState_fromTimeInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary fromTimeInAck
 * @constant
 */
export
const fromTimeInAck: number = GetPresenceState_fromTimeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_untilTimeInAck
 * @constant
 */
export
const GetPresenceState_untilTimeInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary untilTimeInAck
 * @constant
 */
export
const untilTimeInAck: number = GetPresenceState_untilTimeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_placeInAck
 * @constant
 */
export
const GetPresenceState_placeInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary placeInAck
 * @constant
 */
export
const placeInAck: number = GetPresenceState_placeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_moodInAck
 * @constant
 */
export
const GetPresenceState_moodInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary moodInAck
 * @constant
 */
export
const moodInAck: number = GetPresenceState_moodInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_namedPresenceStateInAck
 * @constant
 */
export
const GetPresenceState_namedPresenceStateInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary namedPresenceStateInAck
 * @constant
 */
export
const namedPresenceStateInAck: number = GetPresenceState_namedPresenceStateInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_privateDataInAck
 * @constant
 */
export
const GetPresenceState_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetPresenceState_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetPresenceState: $.ASN1Decoder<GetPresenceState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetPresenceState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetPresenceState (el: _Element): GetPresenceState {
    if (!_cached_decoder_for_GetPresenceState) { _cached_decoder_for_GetPresenceState = $._decodeBitString; }
    return _cached_decoder_for_GetPresenceState(el);
}

let _cached_encoder_for_GetPresenceState: $.ASN1Encoder<GetPresenceState> | null = null;

/**
 * @summary Encodes a(n) GetPresenceState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetPresenceState, encoded as an ASN.1 Element.
 */
export
function _encode_GetPresenceState (value: GetPresenceState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetPresenceState) { _cached_encoder_for_GetPresenceState = $._encodeBitString; }
    return _cached_encoder_for_GetPresenceState(value, elGetter);
}


/* eslint-enable */
