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
 * @summary AgentWorkingAfterCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentWorkingAfterCall  ::=  BIT STRING
 * {     agentID                 ( 0),     -- optional parameters
 *     acdGroup                 ( 1),     -- optional parameters
 *     pendingAgentStateNotReady         ( 2),     -- optional parameters
 *     pendingAgentStateReady             ( 3),     -- optional parameters
 *     pendingAgentStateNull             ( 4),     -- optional parameters
 *     cause                     ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type AgentWorkingAfterCall = BIT_STRING;

/**
 * @summary AgentWorkingAfterCall_agentID
 * @constant
 */
export
const AgentWorkingAfterCall_agentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 */
export
const agentID: number = AgentWorkingAfterCall_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_acdGroup
 * @constant
 */
export
const AgentWorkingAfterCall_acdGroup: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 */
export
const acdGroup: number = AgentWorkingAfterCall_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_pendingAgentStateNotReady
 * @constant
 */
export
const AgentWorkingAfterCall_pendingAgentStateNotReady: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNotReady
 * @constant
 */
export
const pendingAgentStateNotReady: number = AgentWorkingAfterCall_pendingAgentStateNotReady; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_pendingAgentStateReady
 * @constant
 */
export
const AgentWorkingAfterCall_pendingAgentStateReady: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateReady
 * @constant
 */
export
const pendingAgentStateReady: number = AgentWorkingAfterCall_pendingAgentStateReady; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_pendingAgentStateNull
 * @constant
 */
export
const AgentWorkingAfterCall_pendingAgentStateNull: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNull
 * @constant
 */
export
const pendingAgentStateNull: number = AgentWorkingAfterCall_pendingAgentStateNull; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_cause
 * @constant
 */
export
const AgentWorkingAfterCall_cause: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = AgentWorkingAfterCall_cause; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_privateData
 * @constant
 */
export
const AgentWorkingAfterCall_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AgentWorkingAfterCall_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentWorkingAfterCall: $.ASN1Decoder<AgentWorkingAfterCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentWorkingAfterCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentWorkingAfterCall (el: _Element): AgentWorkingAfterCall {
    if (!_cached_decoder_for_AgentWorkingAfterCall) { _cached_decoder_for_AgentWorkingAfterCall = $._decodeBitString; }
    return _cached_decoder_for_AgentWorkingAfterCall(el);
}

let _cached_encoder_for_AgentWorkingAfterCall: $.ASN1Encoder<AgentWorkingAfterCall> | null = null;

/**
 * @summary Encodes a(n) AgentWorkingAfterCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentWorkingAfterCall, encoded as an ASN.1 Element.
 */
export
function _encode_AgentWorkingAfterCall (value: AgentWorkingAfterCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentWorkingAfterCall) { _cached_encoder_for_AgentWorkingAfterCall = $._encodeBitString; }
    return _cached_encoder_for_AgentWorkingAfterCall(value, elGetter);
}


/* eslint-enable */
