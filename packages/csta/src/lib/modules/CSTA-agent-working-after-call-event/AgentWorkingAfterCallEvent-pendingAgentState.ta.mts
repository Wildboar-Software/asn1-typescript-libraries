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
 * @summary AgentWorkingAfterCallEvent_pendingAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentWorkingAfterCallEvent-pendingAgentState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AgentWorkingAfterCallEvent_pendingAgentState {
    notReady = 0,
    ready = 1,
    null_ = 2,
}

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentWorkingAfterCallEvent-pendingAgentState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type AgentWorkingAfterCallEvent_pendingAgentState = _enum_for_AgentWorkingAfterCallEvent_pendingAgentState;

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentWorkingAfterCallEvent-pendingAgentState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const AgentWorkingAfterCallEvent_pendingAgentState = _enum_for_AgentWorkingAfterCallEvent_pendingAgentState;

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState_notReady
 * @constant
 * @type {number}
 */
export
const AgentWorkingAfterCallEvent_pendingAgentState_notReady: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.notReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notReady
 * @constant
 * @type {number}
 */
export
const notReady: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.notReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState_ready
 * @constant
 * @type {number}
 */
export
const AgentWorkingAfterCallEvent_pendingAgentState_ready: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.ready; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ready
 * @constant
 * @type {number}
 */
export
const ready: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.ready; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState_null_
 * @constant
 * @type {number}
 */
export
const AgentWorkingAfterCallEvent_pendingAgentState_null_: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.null_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary null_
 * @constant
 * @type {number}
 */
export
const null_: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.null_; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AgentWorkingAfterCallEvent_pendingAgentState: $.ASN1Decoder<AgentWorkingAfterCallEvent_pendingAgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentWorkingAfterCallEvent_pendingAgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentWorkingAfterCallEvent_pendingAgentState (el: _Element): AgentWorkingAfterCallEvent_pendingAgentState {
    if (!_cached_decoder_for_AgentWorkingAfterCallEvent_pendingAgentState) { _cached_decoder_for_AgentWorkingAfterCallEvent_pendingAgentState = $._decodeEnumerated; }
    return _cached_decoder_for_AgentWorkingAfterCallEvent_pendingAgentState(el);
}

let _cached_encoder_for_AgentWorkingAfterCallEvent_pendingAgentState: $.ASN1Encoder<AgentWorkingAfterCallEvent_pendingAgentState> | null = null;

/**
 * @summary Encodes a(n) AgentWorkingAfterCallEvent_pendingAgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentWorkingAfterCallEvent_pendingAgentState, encoded as an ASN.1 Element.
 */
export
function _encode_AgentWorkingAfterCallEvent_pendingAgentState (value: AgentWorkingAfterCallEvent_pendingAgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentWorkingAfterCallEvent_pendingAgentState) { _cached_encoder_for_AgentWorkingAfterCallEvent_pendingAgentState = $._encodeEnumerated; }
    return _cached_encoder_for_AgentWorkingAfterCallEvent_pendingAgentState(value, elGetter);
}


/* eslint-enable */
