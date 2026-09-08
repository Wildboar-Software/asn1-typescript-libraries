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
 * @summary ButtonInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ButtonInformation  ::=  BIT STRING
 * {     buttonLabel                 ( 0),     -- optional parameters
 *     buttonAssociatedNumber             ( 1),     -- optional parameters
 *     buttonPressIndicator             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type ButtonInformation = BIT_STRING;

/**
 * @summary ButtonInformation_buttonLabel
 * @constant
 */
export
const ButtonInformation_buttonLabel: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabel
 * @constant
 */
export
const buttonLabel: number = ButtonInformation_buttonLabel; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonInformation_buttonAssociatedNumber
 * @constant
 */
export
const ButtonInformation_buttonAssociatedNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumber
 * @constant
 */
export
const buttonAssociatedNumber: number = ButtonInformation_buttonAssociatedNumber; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonInformation_buttonPressIndicator
 * @constant
 */
export
const ButtonInformation_buttonPressIndicator: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary buttonPressIndicator
 * @constant
 */
export
const buttonPressIndicator: number = ButtonInformation_buttonPressIndicator; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonInformation_privateData
 * @constant
 */
export
const ButtonInformation_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ButtonInformation_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ButtonInformation: $.ASN1Decoder<ButtonInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ButtonInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ButtonInformation (el: _Element): ButtonInformation {
    if (!_cached_decoder_for_ButtonInformation) { _cached_decoder_for_ButtonInformation = $._decodeBitString; }
    return _cached_decoder_for_ButtonInformation(el);
}

let _cached_encoder_for_ButtonInformation: $.ASN1Encoder<ButtonInformation> | null = null;

/**
 * @summary Encodes a(n) ButtonInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ButtonInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ButtonInformation (value: ButtonInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ButtonInformation) { _cached_encoder_for_ButtonInformation = $._encodeBitString; }
    return _cached_encoder_for_ButtonInformation(value, elGetter);
}


/* eslint-enable */
