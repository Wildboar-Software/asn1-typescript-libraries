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
 * @summary SetAutoAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetAutoAnswer  ::=  BIT STRING
 * {     numberOfRings                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type SetAutoAnswer = BIT_STRING;

/**
 * @summary SetAutoAnswer_numberOfRings
 * @constant
 */
export
const SetAutoAnswer_numberOfRings: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary numberOfRings
 * @constant
 */
export
const numberOfRings: number = SetAutoAnswer_numberOfRings; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoAnswer_privateData
 * @constant
 */
export
const SetAutoAnswer_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetAutoAnswer_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoAnswer_privateDataInAck
 * @constant
 */
export
const SetAutoAnswer_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetAutoAnswer_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoAnswer_ackModelMultiStep
 * @constant
 */
export
const SetAutoAnswer_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetAutoAnswer_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetAutoAnswer: $.ASN1Decoder<SetAutoAnswer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAutoAnswer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAutoAnswer (el: _Element): SetAutoAnswer {
    if (!_cached_decoder_for_SetAutoAnswer) { _cached_decoder_for_SetAutoAnswer = $._decodeBitString; }
    return _cached_decoder_for_SetAutoAnswer(el);
}

let _cached_encoder_for_SetAutoAnswer: $.ASN1Encoder<SetAutoAnswer> | null = null;

/**
 * @summary Encodes a(n) SetAutoAnswer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAutoAnswer, encoded as an ASN.1 Element.
 */
export
function _encode_SetAutoAnswer (value: SetAutoAnswer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAutoAnswer) { _cached_encoder_for_SetAutoAnswer = $._encodeBitString; }
    return _cached_encoder_for_SetAutoAnswer(value, elGetter);
}


/* eslint-enable */
