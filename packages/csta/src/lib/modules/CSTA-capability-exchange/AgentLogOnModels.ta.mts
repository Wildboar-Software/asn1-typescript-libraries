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
 * @summary AgentLogOnModels
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentLogOnModels  ::=  BIT STRING
 * {     logOnToACDDevice             ( 0),
 *     logOnToACDGroupExplOneStep         ( 1),
 *     logOnToACDGroupExplTwoSteps         ( 2),
 *     logOnToACDImplOneStep             ( 3) }
 * ```
 */
export
type AgentLogOnModels = BIT_STRING;

/**
 * @summary AgentLogOnModels_logOnToACDDevice
 * @constant
 */
export
const AgentLogOnModels_logOnToACDDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDDevice
 * @constant
 */
export
const logOnToACDDevice: number = AgentLogOnModels_logOnToACDDevice; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnToACDGroupExplOneStep
 * @constant
 */
export
const AgentLogOnModels_logOnToACDGroupExplOneStep: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDGroupExplOneStep
 * @constant
 */
export
const logOnToACDGroupExplOneStep: number = AgentLogOnModels_logOnToACDGroupExplOneStep; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnToACDGroupExplTwoSteps
 * @constant
 */
export
const AgentLogOnModels_logOnToACDGroupExplTwoSteps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDGroupExplTwoSteps
 * @constant
 */
export
const logOnToACDGroupExplTwoSteps: number = AgentLogOnModels_logOnToACDGroupExplTwoSteps; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnToACDImplOneStep
 * @constant
 */
export
const AgentLogOnModels_logOnToACDImplOneStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDImplOneStep
 * @constant
 */
export
const logOnToACDImplOneStep: number = AgentLogOnModels_logOnToACDImplOneStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentLogOnModels: $.ASN1Decoder<AgentLogOnModels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentLogOnModels
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentLogOnModels (el: _Element): AgentLogOnModels {
    if (!_cached_decoder_for_AgentLogOnModels) { _cached_decoder_for_AgentLogOnModels = $._decodeBitString; }
    return _cached_decoder_for_AgentLogOnModels(el);
}

let _cached_encoder_for_AgentLogOnModels: $.ASN1Encoder<AgentLogOnModels> | null = null;

/**
 * @summary Encodes a(n) AgentLogOnModels into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentLogOnModels, encoded as an ASN.1 Element.
 */
export
function _encode_AgentLogOnModels (value: AgentLogOnModels, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentLogOnModels) { _cached_encoder_for_AgentLogOnModels = $._encodeBitString; }
    return _cached_encoder_for_AgentLogOnModels(value, elGetter);
}


/* eslint-enable */
