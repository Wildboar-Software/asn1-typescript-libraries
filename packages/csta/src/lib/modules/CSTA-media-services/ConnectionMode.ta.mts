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
 * @summary ConnectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionMode  ::=  ENUMERATED
 * {     consultationConference             (0),
 *     consultationConferenceHold         (1),
 *     deflect                 (2),
 *     directedPickup                 (3),
 *     join                     (4),
 *     singleStepConference             (5),
 *     singleStepConferenceHold         (6),
 *     singleStepTransfer             (7),
 *     transfer                 (8),
 *     direct                     (9) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ConnectionMode {
    consultationConference = 0,
    consultationConferenceHold = 1,
    deflect = 2,
    directedPickup = 3,
    join = 4,
    singleStepConference = 5,
    singleStepConferenceHold = 6,
    singleStepTransfer = 7,
    transfer = 8,
    direct = 9,
}

/**
 * @summary ConnectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionMode  ::=  ENUMERATED
 * {     consultationConference             (0),
 *     consultationConferenceHold         (1),
 *     deflect                 (2),
 *     directedPickup                 (3),
 *     join                     (4),
 *     singleStepConference             (5),
 *     singleStepConferenceHold         (6),
 *     singleStepTransfer             (7),
 *     transfer                 (8),
 *     direct                     (9) }
 * ```
 * 
 * @enum {number}
 */
export
type ConnectionMode = _enum_for_ConnectionMode;

/**
 * @summary ConnectionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionMode  ::=  ENUMERATED
 * {     consultationConference             (0),
 *     consultationConferenceHold         (1),
 *     deflect                 (2),
 *     directedPickup                 (3),
 *     join                     (4),
 *     singleStepConference             (5),
 *     singleStepConferenceHold         (6),
 *     singleStepTransfer             (7),
 *     transfer                 (8),
 *     direct                     (9) }
 * ```
 * 
 * @enum {number}
 */
export
const ConnectionMode = _enum_for_ConnectionMode;

/**
 * @summary ConnectionMode_consultationConference
 * @constant
 * @type {number}
 */
export
const ConnectionMode_consultationConference: ConnectionMode = ConnectionMode.consultationConference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultationConference
 * @constant
 * @type {number}
 */
export
const consultationConference: ConnectionMode = ConnectionMode.consultationConference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_consultationConferenceHold
 * @constant
 * @type {number}
 */
export
const ConnectionMode_consultationConferenceHold: ConnectionMode = ConnectionMode.consultationConferenceHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultationConferenceHold
 * @constant
 * @type {number}
 */
export
const consultationConferenceHold: ConnectionMode = ConnectionMode.consultationConferenceHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_deflect
 * @constant
 * @type {number}
 */
export
const ConnectionMode_deflect: ConnectionMode = ConnectionMode.deflect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deflect
 * @constant
 * @type {number}
 */
export
const deflect: ConnectionMode = ConnectionMode.deflect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_directedPickup
 * @constant
 * @type {number}
 */
export
const ConnectionMode_directedPickup: ConnectionMode = ConnectionMode.directedPickup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directedPickup
 * @constant
 * @type {number}
 */
export
const directedPickup: ConnectionMode = ConnectionMode.directedPickup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_join
 * @constant
 * @type {number}
 */
export
const ConnectionMode_join: ConnectionMode = ConnectionMode.join; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary join
 * @constant
 * @type {number}
 */
export
const join: ConnectionMode = ConnectionMode.join; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_singleStepConference
 * @constant
 * @type {number}
 */
export
const ConnectionMode_singleStepConference: ConnectionMode = ConnectionMode.singleStepConference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepConference
 * @constant
 * @type {number}
 */
export
const singleStepConference: ConnectionMode = ConnectionMode.singleStepConference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_singleStepConferenceHold
 * @constant
 * @type {number}
 */
export
const ConnectionMode_singleStepConferenceHold: ConnectionMode = ConnectionMode.singleStepConferenceHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepConferenceHold
 * @constant
 * @type {number}
 */
export
const singleStepConferenceHold: ConnectionMode = ConnectionMode.singleStepConferenceHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_singleStepTransfer
 * @constant
 * @type {number}
 */
export
const ConnectionMode_singleStepTransfer: ConnectionMode = ConnectionMode.singleStepTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepTransfer
 * @constant
 * @type {number}
 */
export
const singleStepTransfer: ConnectionMode = ConnectionMode.singleStepTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_transfer
 * @constant
 * @type {number}
 */
export
const ConnectionMode_transfer: ConnectionMode = ConnectionMode.transfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transfer
 * @constant
 * @type {number}
 */
export
const transfer: ConnectionMode = ConnectionMode.transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionMode_direct
 * @constant
 * @type {number}
 */
export
const ConnectionMode_direct: ConnectionMode = ConnectionMode.direct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary direct
 * @constant
 * @type {number}
 */
export
const direct: ConnectionMode = ConnectionMode.direct; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ConnectionMode: $.ASN1Decoder<ConnectionMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionMode (el: _Element): ConnectionMode {
    if (!_cached_decoder_for_ConnectionMode) { _cached_decoder_for_ConnectionMode = $._decodeEnumerated; }
    return _cached_decoder_for_ConnectionMode(el);
}

let _cached_encoder_for_ConnectionMode: $.ASN1Encoder<ConnectionMode> | null = null;

/**
 * @summary Encodes a(n) ConnectionMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionMode, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionMode (value: ConnectionMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionMode) { _cached_encoder_for_ConnectionMode = $._encodeEnumerated; }
    return _cached_encoder_for_ConnectionMode(value, elGetter);
}


/* eslint-enable */
