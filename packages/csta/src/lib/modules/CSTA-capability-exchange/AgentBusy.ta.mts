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
 * @summary AgentBusy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentBusy  ::=  BIT STRING
 * {     agentID                 ( 0),     -- optional parameters
 *     acdGroup                 ( 1),     -- optional parameters
 *     pendingAgentStateWorkingAfterCall     ( 2),     -- optional parameters
 *     pendingAgentStateNotReady         ( 3),     -- optional parameters
 *     pendingAgentStateReady             ( 4),     -- optional parameters
 *     pendingAgentStateNull             ( 5),     -- optional parameters
 *     cause                     ( 6),     -- optional parameters
 *     privateData                 ( 7) }
 * ```
 */
export
type AgentBusy = BIT_STRING;

/**
 * @summary AgentBusy_agentID
 * @constant
 */
export
const AgentBusy_agentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 */
export
const agentID: number = AgentBusy_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary AgentBusy_acdGroup
 * @constant
 */
export
const AgentBusy_acdGroup: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 */
export
const acdGroup: number = AgentBusy_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary AgentBusy_pendingAgentStateWorkingAfterCall
 * @constant
 */
export
const AgentBusy_pendingAgentStateWorkingAfterCall: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateWorkingAfterCall
 * @constant
 */
export
const pendingAgentStateWorkingAfterCall: number = AgentBusy_pendingAgentStateWorkingAfterCall; /* SHORT_NAMED_BIT */

/**
 * @summary AgentBusy_pendingAgentStateNotReady
 * @constant
 */
export
const AgentBusy_pendingAgentStateNotReady: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNotReady
 * @constant
 */
export
const pendingAgentStateNotReady: number = AgentBusy_pendingAgentStateNotReady; /* SHORT_NAMED_BIT */

/**
 * @summary AgentBusy_pendingAgentStateReady
 * @constant
 */
export
const AgentBusy_pendingAgentStateReady: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateReady
 * @constant
 */
export
const pendingAgentStateReady: number = AgentBusy_pendingAgentStateReady; /* SHORT_NAMED_BIT */

/**
 * @summary AgentBusy_pendingAgentStateNull
 * @constant
 */
export
const AgentBusy_pendingAgentStateNull: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNull
 * @constant
 */
export
const pendingAgentStateNull: number = AgentBusy_pendingAgentStateNull; /* SHORT_NAMED_BIT */

/**
 * @summary AgentBusy_cause
 * @constant
 */
export
const AgentBusy_cause: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = AgentBusy_cause; /* SHORT_NAMED_BIT */

/**
 * @summary AgentBusy_privateData
 * @constant
 */
export
const AgentBusy_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AgentBusy_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentBusy: $.ASN1Decoder<AgentBusy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentBusy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentBusy (el: _Element): AgentBusy {
    if (!_cached_decoder_for_AgentBusy) { _cached_decoder_for_AgentBusy = $._decodeBitString; }
    return _cached_decoder_for_AgentBusy(el);
}

let _cached_encoder_for_AgentBusy: $.ASN1Encoder<AgentBusy> | null = null;

/**
 * @summary Encodes a(n) AgentBusy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentBusy, encoded as an ASN.1 Element.
 */
export
function _encode_AgentBusy (value: AgentBusy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentBusy) { _cached_encoder_for_AgentBusy = $._encodeBitString; }
    return _cached_encoder_for_AgentBusy(value, elGetter);
}


/* eslint-enable */
