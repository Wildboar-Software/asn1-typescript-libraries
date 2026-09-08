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
 * @summary AgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentState  ::=  ENUMERATED
 * {    agentNotReady             (0),
 *     agentNull             (1),
 *     agentReady             (2),
 *     agentBusy             (3),
 *     agentWorkingAfterCall         (4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AgentState {
    agentNotReady = 0,
    agentNull = 1,
    agentReady = 2,
    agentBusy = 3,
    agentWorkingAfterCall = 4,
}

/**
 * @summary AgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentState  ::=  ENUMERATED
 * {    agentNotReady             (0),
 *     agentNull             (1),
 *     agentReady             (2),
 *     agentBusy             (3),
 *     agentWorkingAfterCall         (4) }
 * ```
 * 
 * @enum {number}
 */
export
type AgentState = _enum_for_AgentState;

/**
 * @summary AgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentState  ::=  ENUMERATED
 * {    agentNotReady             (0),
 *     agentNull             (1),
 *     agentReady             (2),
 *     agentBusy             (3),
 *     agentWorkingAfterCall         (4) }
 * ```
 * 
 * @enum {number}
 */
export
const AgentState = _enum_for_AgentState;

/**
 * @summary AgentState_agentNotReady
 * @constant
 * @type {number}
 */
export
const AgentState_agentNotReady: AgentState = AgentState.agentNotReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentNotReady
 * @constant
 * @type {number}
 */
export
const agentNotReady: AgentState = AgentState.agentNotReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentState_agentNull
 * @constant
 * @type {number}
 */
export
const AgentState_agentNull: AgentState = AgentState.agentNull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentNull
 * @constant
 * @type {number}
 */
export
const agentNull: AgentState = AgentState.agentNull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentState_agentReady
 * @constant
 * @type {number}
 */
export
const AgentState_agentReady: AgentState = AgentState.agentReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentReady
 * @constant
 * @type {number}
 */
export
const agentReady: AgentState = AgentState.agentReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentState_agentBusy
 * @constant
 * @type {number}
 */
export
const AgentState_agentBusy: AgentState = AgentState.agentBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentBusy
 * @constant
 * @type {number}
 */
export
const agentBusy: AgentState = AgentState.agentBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentState_agentWorkingAfterCall
 * @constant
 * @type {number}
 */
export
const AgentState_agentWorkingAfterCall: AgentState = AgentState.agentWorkingAfterCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentWorkingAfterCall
 * @constant
 * @type {number}
 */
export
const agentWorkingAfterCall: AgentState = AgentState.agentWorkingAfterCall; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AgentState: $.ASN1Decoder<AgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentState (el: _Element): AgentState {
    if (!_cached_decoder_for_AgentState) { _cached_decoder_for_AgentState = $._decodeEnumerated; }
    return _cached_decoder_for_AgentState(el);
}

let _cached_encoder_for_AgentState: $.ASN1Encoder<AgentState> | null = null;

/**
 * @summary Encodes a(n) AgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentState, encoded as an ASN.1 Element.
 */
export
function _encode_AgentState (value: AgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentState) { _cached_encoder_for_AgentState = $._encodeEnumerated; }
    return _cached_encoder_for_AgentState(value, elGetter);
}


/* eslint-enable */
