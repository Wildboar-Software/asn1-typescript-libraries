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
 * @summary AgentStateModels
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentStateModels  ::=  BIT STRING
 * {     multiState                     (0),
 *     multiStateSemiIndependentLinked         (1),
 *     agentOriented                     (2) }
 * ```
 */
export
type AgentStateModels = BIT_STRING;

/**
 * @summary AgentStateModels_multiState
 * @constant
 */
export
const AgentStateModels_multiState: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary multiState
 * @constant
 */
export
const multiState: number = AgentStateModels_multiState; /* SHORT_NAMED_BIT */

/**
 * @summary AgentStateModels_multiStateSemiIndependentLinked
 * @constant
 */
export
const AgentStateModels_multiStateSemiIndependentLinked: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary multiStateSemiIndependentLinked
 * @constant
 */
export
const multiStateSemiIndependentLinked: number = AgentStateModels_multiStateSemiIndependentLinked; /* SHORT_NAMED_BIT */

/**
 * @summary AgentStateModels_agentOriented
 * @constant
 */
export
const AgentStateModels_agentOriented: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary agentOriented
 * @constant
 */
export
const agentOriented: number = AgentStateModels_agentOriented; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentStateModels: $.ASN1Decoder<AgentStateModels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentStateModels
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentStateModels (el: _Element): AgentStateModels {
    if (!_cached_decoder_for_AgentStateModels) { _cached_decoder_for_AgentStateModels = $._decodeBitString; }
    return _cached_decoder_for_AgentStateModels(el);
}

let _cached_encoder_for_AgentStateModels: $.ASN1Encoder<AgentStateModels> | null = null;

/**
 * @summary Encodes a(n) AgentStateModels into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentStateModels, encoded as an ASN.1 Element.
 */
export
function _encode_AgentStateModels (value: AgentStateModels, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentStateModels) { _cached_encoder_for_AgentStateModels = $._encodeBitString; }
    return _cached_encoder_for_AgentStateModels(value, elGetter);
}


/* eslint-enable */
