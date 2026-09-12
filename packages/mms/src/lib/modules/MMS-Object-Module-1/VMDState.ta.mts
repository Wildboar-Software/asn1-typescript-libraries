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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VMDState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMDState  ::=  INTEGER {
 *     idle                                         (0),
 *     loaded                                       (1),
 *     ready                                        (2),
 *     executing                                    (3),
 *     motion-paused                                (4),
 *     manualInterventionRequired                   (5)
 * } (0..5)
 * ```
 */
export
type VMDState = INTEGER;

/**
 * @summary VMDState_idle
 * @constant
 * @type {number}
 */
export
const VMDState_idle: VMDState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_idle
 * @constant
 * @type {number}
 */
export
const idle: VMDState = VMDState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_loaded
 * @constant
 * @type {number}
 */
export
const VMDState_loaded: VMDState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_loaded
 * @constant
 * @type {number}
 */
export
const loaded: VMDState = VMDState_loaded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_ready
 * @constant
 * @type {number}
 */
export
const VMDState_ready: VMDState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_ready
 * @constant
 * @type {number}
 */
export
const ready: VMDState = VMDState_ready; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_executing
 * @constant
 * @type {number}
 */
export
const VMDState_executing: VMDState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_executing
 * @constant
 * @type {number}
 */
export
const executing: VMDState = VMDState_executing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_motion_paused
 * @constant
 * @type {number}
 */
export
const VMDState_motion_paused: VMDState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_motion_paused
 * @constant
 * @type {number}
 */
export
const motion_paused: VMDState = VMDState_motion_paused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_manualInterventionRequired
 * @constant
 * @type {number}
 */
export
const VMDState_manualInterventionRequired: VMDState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary VMDState_manualInterventionRequired
 * @constant
 * @type {number}
 */
export
const manualInterventionRequired: VMDState = VMDState_manualInterventionRequired; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_VMDState: $.ASN1Decoder<VMDState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VMDState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VMDState (el: _Element): VMDState {
    if (!_cached_decoder_for_VMDState) { _cached_decoder_for_VMDState = $._decodeInteger; }
    return _cached_decoder_for_VMDState(el);
}

let _cached_encoder_for_VMDState: $.ASN1Encoder<VMDState> | null = null;

/**
 * @summary Encodes a(n) VMDState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VMDState, encoded as an ASN.1 Element.
 */
export
function _encode_VMDState (value: VMDState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VMDState) { _cached_encoder_for_VMDState = $._encodeInteger; }
    return _cached_encoder_for_VMDState(value, elGetter);
}


/* eslint-enable */
