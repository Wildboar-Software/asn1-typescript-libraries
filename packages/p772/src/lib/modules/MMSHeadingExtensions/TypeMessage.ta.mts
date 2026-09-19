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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TypeMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeMessage  ::=  INTEGER {exercise(0), operation(1), project(2), drill(3)}
 * ```
 */
export
type TypeMessage = INTEGER;

/**
 * @summary TypeMessage_exercise
 * @constant
 * @type {number}
 */
export
const TypeMessage_exercise: TypeMessage = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_exercise
 * @constant
 * @type {number}
 */
export
const exercise: TypeMessage = TypeMessage_exercise; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_operation
 * @constant
 * @type {number}
 */
export
const TypeMessage_operation: TypeMessage = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_operation
 * @constant
 * @type {number}
 */
export
const operation: TypeMessage = TypeMessage_operation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_project
 * @constant
 * @type {number}
 */
export
const TypeMessage_project: TypeMessage = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_project
 * @constant
 * @type {number}
 */
export
const project: TypeMessage = TypeMessage_project; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_drill
 * @constant
 * @type {number}
 */
export
const TypeMessage_drill: TypeMessage = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_drill
 * @constant
 * @type {number}
 */
export
const drill: TypeMessage = TypeMessage_drill; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_TypeMessage: $.ASN1Decoder<TypeMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeMessage (el: _Element): TypeMessage {
    if (!_cached_decoder_for_TypeMessage) { _cached_decoder_for_TypeMessage = $._decodeInteger; }
    return _cached_decoder_for_TypeMessage(el);
}

let _cached_encoder_for_TypeMessage: $.ASN1Encoder<TypeMessage> | null = null;

/**
 * @summary Encodes a(n) TypeMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeMessage, encoded as an ASN.1 Element.
 */
export
function _encode_TypeMessage (value: TypeMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeMessage) { _cached_encoder_for_TypeMessage = $._encodeInteger; }
    return _cached_encoder_for_TypeMessage(value, elGetter);
}


/* eslint-enable */
