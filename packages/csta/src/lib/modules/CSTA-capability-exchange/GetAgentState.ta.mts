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
 * @summary GetAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAgentState  ::=  BIT STRING
 * {     acdGroup                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     agentStateListAgentIDInAck         ( 2),     -- optional parameters
 *     agentGroupInAck             ( 3),     -- optional parameters
 *     pendingAgentStateInAck             ( 4),     -- optional parameters
 *     agentStateConditionForcedPauseInAck     ( 5),     -- optional parameters
 *     agentStateConditionPauseInAck         ( 6),     -- optional parameters
 *     privateDataInAck             ( 7) }
 * ```
 */
export
type GetAgentState = BIT_STRING;

/**
 * @summary GetAgentState_acdGroup
 * @constant
 */
export
const GetAgentState_acdGroup: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 */
export
const acdGroup: number = GetAgentState_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_privateData
 * @constant
 */
export
const GetAgentState_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetAgentState_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_agentStateListAgentIDInAck
 * @constant
 */
export
const GetAgentState_agentStateListAgentIDInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary agentStateListAgentIDInAck
 * @constant
 */
export
const agentStateListAgentIDInAck: number = GetAgentState_agentStateListAgentIDInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_agentGroupInAck
 * @constant
 */
export
const GetAgentState_agentGroupInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary agentGroupInAck
 * @constant
 */
export
const agentGroupInAck: number = GetAgentState_agentGroupInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_pendingAgentStateInAck
 * @constant
 */
export
const GetAgentState_pendingAgentStateInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateInAck
 * @constant
 */
export
const pendingAgentStateInAck: number = GetAgentState_pendingAgentStateInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_agentStateConditionForcedPauseInAck
 * @constant
 */
export
const GetAgentState_agentStateConditionForcedPauseInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary agentStateConditionForcedPauseInAck
 * @constant
 */
export
const agentStateConditionForcedPauseInAck: number = GetAgentState_agentStateConditionForcedPauseInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_agentStateConditionPauseInAck
 * @constant
 */
export
const GetAgentState_agentStateConditionPauseInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary agentStateConditionPauseInAck
 * @constant
 */
export
const agentStateConditionPauseInAck: number = GetAgentState_agentStateConditionPauseInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_privateDataInAck
 * @constant
 */
export
const GetAgentState_privateDataInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetAgentState_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetAgentState: $.ASN1Decoder<GetAgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAgentState (el: _Element): GetAgentState {
    if (!_cached_decoder_for_GetAgentState) { _cached_decoder_for_GetAgentState = $._decodeBitString; }
    return _cached_decoder_for_GetAgentState(el);
}

let _cached_encoder_for_GetAgentState: $.ASN1Encoder<GetAgentState> | null = null;

/**
 * @summary Encodes a(n) GetAgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAgentState, encoded as an ASN.1 Element.
 */
export
function _encode_GetAgentState (value: GetAgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAgentState) { _cached_encoder_for_GetAgentState = $._encodeBitString; }
    return _cached_encoder_for_GetAgentState(value, elGetter);
}


/* eslint-enable */
