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
 * @summary AgentLoggedOff
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentLoggedOff  ::=  BIT STRING
 * {     agentID                 ( 0),     -- optional parameters
 *     acdGroup                 ( 1),     -- optional parameters
 *     agentPassword                 ( 2),     -- optional parameters
 *     cause                     ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type AgentLoggedOff = BIT_STRING;

/**
 * @summary AgentLoggedOff_agentID
 * @constant
 */
export
const AgentLoggedOff_agentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 */
export
const agentID: number = AgentLoggedOff_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOff_acdGroup
 * @constant
 */
export
const AgentLoggedOff_acdGroup: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 */
export
const acdGroup: number = AgentLoggedOff_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOff_agentPassword
 * @constant
 */
export
const AgentLoggedOff_agentPassword: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary agentPassword
 * @constant
 */
export
const agentPassword: number = AgentLoggedOff_agentPassword; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOff_cause
 * @constant
 */
export
const AgentLoggedOff_cause: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = AgentLoggedOff_cause; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOff_privateData
 * @constant
 */
export
const AgentLoggedOff_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AgentLoggedOff_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentLoggedOff: $.ASN1Decoder<AgentLoggedOff> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentLoggedOff
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentLoggedOff (el: _Element): AgentLoggedOff {
    if (!_cached_decoder_for_AgentLoggedOff) { _cached_decoder_for_AgentLoggedOff = $._decodeBitString; }
    return _cached_decoder_for_AgentLoggedOff(el);
}

let _cached_encoder_for_AgentLoggedOff: $.ASN1Encoder<AgentLoggedOff> | null = null;

/**
 * @summary Encodes a(n) AgentLoggedOff into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentLoggedOff, encoded as an ASN.1 Element.
 */
export
function _encode_AgentLoggedOff (value: AgentLoggedOff, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentLoggedOff) { _cached_encoder_for_AgentLoggedOff = $._encodeBitString; }
    return _cached_encoder_for_AgentLoggedOff(value, elGetter);
}


/* eslint-enable */
