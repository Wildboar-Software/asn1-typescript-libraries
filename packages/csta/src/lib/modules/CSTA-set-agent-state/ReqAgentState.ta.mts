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
 * @summary ReqAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReqAgentState  ::=  ENUMERATED
 * {    loggedOn            (0),
 *     loggedOff            (1),
 *     notReady            (2),
 *     ready                (3),
 *     workingAfterCall        (4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReqAgentState {
    loggedOn = 0,
    loggedOff = 1,
    notReady = 2,
    ready = 3,
    workingAfterCall = 4,
}

/**
 * @summary ReqAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReqAgentState  ::=  ENUMERATED
 * {    loggedOn            (0),
 *     loggedOff            (1),
 *     notReady            (2),
 *     ready                (3),
 *     workingAfterCall        (4) }
 * ```
 * 
 * @enum {number}
 */
export
type ReqAgentState = _enum_for_ReqAgentState;

/**
 * @summary ReqAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReqAgentState  ::=  ENUMERATED
 * {    loggedOn            (0),
 *     loggedOff            (1),
 *     notReady            (2),
 *     ready                (3),
 *     workingAfterCall        (4) }
 * ```
 * 
 * @enum {number}
 */
export
const ReqAgentState = _enum_for_ReqAgentState;

/**
 * @summary ReqAgentState_loggedOn
 * @constant
 * @type {number}
 */
export
const ReqAgentState_loggedOn: ReqAgentState = ReqAgentState.loggedOn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loggedOn
 * @constant
 * @type {number}
 */
export
const loggedOn: ReqAgentState = ReqAgentState.loggedOn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqAgentState_loggedOff
 * @constant
 * @type {number}
 */
export
const ReqAgentState_loggedOff: ReqAgentState = ReqAgentState.loggedOff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loggedOff
 * @constant
 * @type {number}
 */
export
const loggedOff: ReqAgentState = ReqAgentState.loggedOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqAgentState_notReady
 * @constant
 * @type {number}
 */
export
const ReqAgentState_notReady: ReqAgentState = ReqAgentState.notReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notReady
 * @constant
 * @type {number}
 */
export
const notReady: ReqAgentState = ReqAgentState.notReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqAgentState_ready
 * @constant
 * @type {number}
 */
export
const ReqAgentState_ready: ReqAgentState = ReqAgentState.ready; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ready
 * @constant
 * @type {number}
 */
export
const ready: ReqAgentState = ReqAgentState.ready; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqAgentState_workingAfterCall
 * @constant
 * @type {number}
 */
export
const ReqAgentState_workingAfterCall: ReqAgentState = ReqAgentState.workingAfterCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary workingAfterCall
 * @constant
 * @type {number}
 */
export
const workingAfterCall: ReqAgentState = ReqAgentState.workingAfterCall; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReqAgentState: $.ASN1Decoder<ReqAgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReqAgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReqAgentState (el: _Element): ReqAgentState {
    if (!_cached_decoder_for_ReqAgentState) { _cached_decoder_for_ReqAgentState = $._decodeEnumerated; }
    return _cached_decoder_for_ReqAgentState(el);
}

let _cached_encoder_for_ReqAgentState: $.ASN1Encoder<ReqAgentState> | null = null;

/**
 * @summary Encodes a(n) ReqAgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReqAgentState, encoded as an ASN.1 Element.
 */
export
function _encode_ReqAgentState (value: ReqAgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReqAgentState) { _cached_encoder_for_ReqAgentState = $._encodeEnumerated; }
    return _cached_encoder_for_ReqAgentState(value, elGetter);
}


/* eslint-enable */
