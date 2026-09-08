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
 * @summary SetDisplay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetDisplay  ::=  BIT STRING
 * {     physBaseRowNumber             ( 0),     -- optional parameters
 *     physColumnRowNumber             ( 1),     -- optional parameters
 *     offset                     ( 2),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     privateDataInAck             ( 4),     -- optional parameters
 *     supportsModifyingPosition        ( 5),     -- misc characteristics
 *     ackModelMultiStep             ( 6) }
 * ```
 */
export
type SetDisplay = BIT_STRING;

/**
 * @summary SetDisplay_physBaseRowNumber
 * @constant
 */
export
const SetDisplay_physBaseRowNumber: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary physBaseRowNumber
 * @constant
 */
export
const physBaseRowNumber: number = SetDisplay_physBaseRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_physColumnRowNumber
 * @constant
 */
export
const SetDisplay_physColumnRowNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary physColumnRowNumber
 * @constant
 */
export
const physColumnRowNumber: number = SetDisplay_physColumnRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_offset
 * @constant
 */
export
const SetDisplay_offset: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary offset
 * @constant
 */
export
const offset: number = SetDisplay_offset; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_privateData
 * @constant
 */
export
const SetDisplay_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetDisplay_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_privateDataInAck
 * @constant
 */
export
const SetDisplay_privateDataInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetDisplay_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_supportsModifyingPosition
 * @constant
 */
export
const SetDisplay_supportsModifyingPosition: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary supportsModifyingPosition
 * @constant
 */
export
const supportsModifyingPosition: number = SetDisplay_supportsModifyingPosition; /* SHORT_NAMED_BIT */

/**
 * @summary SetDisplay_ackModelMultiStep
 * @constant
 */
export
const SetDisplay_ackModelMultiStep: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetDisplay_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetDisplay: $.ASN1Decoder<SetDisplay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetDisplay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetDisplay (el: _Element): SetDisplay {
    if (!_cached_decoder_for_SetDisplay) { _cached_decoder_for_SetDisplay = $._decodeBitString; }
    return _cached_decoder_for_SetDisplay(el);
}

let _cached_encoder_for_SetDisplay: $.ASN1Encoder<SetDisplay> | null = null;

/**
 * @summary Encodes a(n) SetDisplay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetDisplay, encoded as an ASN.1 Element.
 */
export
function _encode_SetDisplay (value: SetDisplay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetDisplay) { _cached_encoder_for_SetDisplay = $._encodeBitString; }
    return _cached_encoder_for_SetDisplay(value, elGetter);
}


/* eslint-enable */
