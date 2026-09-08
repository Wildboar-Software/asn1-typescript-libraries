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
 * @summary DestinationCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationCondition  ::=  ENUMERATED
 * {     humanVoice             (0),
 *     answeringMachine         (1),
 *     facsimileMachine         (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DestinationCondition {
    humanVoice = 0,
    answeringMachine = 1,
    facsimileMachine = 2,
}

/**
 * @summary DestinationCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationCondition  ::=  ENUMERATED
 * {     humanVoice             (0),
 *     answeringMachine         (1),
 *     facsimileMachine         (2) }
 * ```
 * 
 * @enum {number}
 */
export
type DestinationCondition = _enum_for_DestinationCondition;

/**
 * @summary DestinationCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationCondition  ::=  ENUMERATED
 * {     humanVoice             (0),
 *     answeringMachine         (1),
 *     facsimileMachine         (2) }
 * ```
 * 
 * @enum {number}
 */
export
const DestinationCondition = _enum_for_DestinationCondition;

/**
 * @summary DestinationCondition_humanVoice
 * @constant
 * @type {number}
 */
export
const DestinationCondition_humanVoice: DestinationCondition = DestinationCondition.humanVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary humanVoice
 * @constant
 * @type {number}
 */
export
const humanVoice: DestinationCondition = DestinationCondition.humanVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DestinationCondition_answeringMachine
 * @constant
 * @type {number}
 */
export
const DestinationCondition_answeringMachine: DestinationCondition = DestinationCondition.answeringMachine; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answeringMachine
 * @constant
 * @type {number}
 */
export
const answeringMachine: DestinationCondition = DestinationCondition.answeringMachine; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DestinationCondition_facsimileMachine
 * @constant
 * @type {number}
 */
export
const DestinationCondition_facsimileMachine: DestinationCondition = DestinationCondition.facsimileMachine; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary facsimileMachine
 * @constant
 * @type {number}
 */
export
const facsimileMachine: DestinationCondition = DestinationCondition.facsimileMachine; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DestinationCondition: $.ASN1Decoder<DestinationCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationCondition (el: _Element): DestinationCondition {
    if (!_cached_decoder_for_DestinationCondition) { _cached_decoder_for_DestinationCondition = $._decodeEnumerated; }
    return _cached_decoder_for_DestinationCondition(el);
}

let _cached_encoder_for_DestinationCondition: $.ASN1Encoder<DestinationCondition> | null = null;

/**
 * @summary Encodes a(n) DestinationCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationCondition, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationCondition (value: DestinationCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationCondition) { _cached_encoder_for_DestinationCondition = $._encodeEnumerated; }
    return _cached_encoder_for_DestinationCondition(value, elGetter);
}


/* eslint-enable */
