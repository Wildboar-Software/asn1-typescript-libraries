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
 * @summary SetButtonInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetButtonInformation  ::=  BIT STRING
 * {    buttonLabel                 ( 0),     -- optional parameters
 *     buttonAssociatedNumber             ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3),     -- optional parameters
 *     ackModelMultiStep             ( 4) }
 * ```
 */
export
type SetButtonInformation = BIT_STRING;

/**
 * @summary SetButtonInformation_buttonLabel
 * @constant
 */
export
const SetButtonInformation_buttonLabel: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabel
 * @constant
 */
export
const buttonLabel: number = SetButtonInformation_buttonLabel; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_buttonAssociatedNumber
 * @constant
 */
export
const SetButtonInformation_buttonAssociatedNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumber
 * @constant
 */
export
const buttonAssociatedNumber: number = SetButtonInformation_buttonAssociatedNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_privateData
 * @constant
 */
export
const SetButtonInformation_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetButtonInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_privateDataInAck
 * @constant
 */
export
const SetButtonInformation_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetButtonInformation_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetButtonInformation_ackModelMultiStep
 * @constant
 */
export
const SetButtonInformation_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetButtonInformation_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetButtonInformation: $.ASN1Decoder<SetButtonInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetButtonInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetButtonInformation (el: _Element): SetButtonInformation {
    if (!_cached_decoder_for_SetButtonInformation) { _cached_decoder_for_SetButtonInformation = $._decodeBitString; }
    return _cached_decoder_for_SetButtonInformation(el);
}

let _cached_encoder_for_SetButtonInformation: $.ASN1Encoder<SetButtonInformation> | null = null;

/**
 * @summary Encodes a(n) SetButtonInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetButtonInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SetButtonInformation (value: SetButtonInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetButtonInformation) { _cached_encoder_for_SetButtonInformation = $._encodeBitString; }
    return _cached_encoder_for_SetButtonInformation(value, elGetter);
}


/* eslint-enable */
