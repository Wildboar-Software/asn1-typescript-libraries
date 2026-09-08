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
 * @summary GetButtonInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetButtonInformation  ::=  BIT STRING
 * {     button                     ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     buttonLabelInAck             ( 2),     -- optional parameters
 *     buttonLabelSettableInAck         ( 3),     -- optional parameters
 *     buttonFunctionInAck             ( 4),     -- optional parameters
 *     buttonAssociatedNumberInAck         ( 5),     -- optional parameters
 *     buttonAssociatedNumberSettableInAck     ( 6),     -- optional parameters
 *     listOfLampsInAck             ( 7),     -- optional parameters
 *     privateDataInAck             ( 8) }
 * ```
 */
export
type GetButtonInformation = BIT_STRING;

/**
 * @summary GetButtonInformation_button
 * @constant
 */
export
const GetButtonInformation_button: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary button
 * @constant
 */
export
const button: number = GetButtonInformation_button; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_privateData
 * @constant
 */
export
const GetButtonInformation_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetButtonInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonLabelInAck
 * @constant
 */
export
const GetButtonInformation_buttonLabelInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabelInAck
 * @constant
 */
export
const buttonLabelInAck: number = GetButtonInformation_buttonLabelInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonLabelSettableInAck
 * @constant
 */
export
const GetButtonInformation_buttonLabelSettableInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabelSettableInAck
 * @constant
 */
export
const buttonLabelSettableInAck: number = GetButtonInformation_buttonLabelSettableInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonFunctionInAck
 * @constant
 */
export
const GetButtonInformation_buttonFunctionInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary buttonFunctionInAck
 * @constant
 */
export
const buttonFunctionInAck: number = GetButtonInformation_buttonFunctionInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonAssociatedNumberInAck
 * @constant
 */
export
const GetButtonInformation_buttonAssociatedNumberInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumberInAck
 * @constant
 */
export
const buttonAssociatedNumberInAck: number = GetButtonInformation_buttonAssociatedNumberInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonAssociatedNumberSettableInAck
 * @constant
 */
export
const GetButtonInformation_buttonAssociatedNumberSettableInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumberSettableInAck
 * @constant
 */
export
const buttonAssociatedNumberSettableInAck: number = GetButtonInformation_buttonAssociatedNumberSettableInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_listOfLampsInAck
 * @constant
 */
export
const GetButtonInformation_listOfLampsInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary listOfLampsInAck
 * @constant
 */
export
const listOfLampsInAck: number = GetButtonInformation_listOfLampsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_privateDataInAck
 * @constant
 */
export
const GetButtonInformation_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetButtonInformation_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetButtonInformation: $.ASN1Decoder<GetButtonInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetButtonInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetButtonInformation (el: _Element): GetButtonInformation {
    if (!_cached_decoder_for_GetButtonInformation) { _cached_decoder_for_GetButtonInformation = $._decodeBitString; }
    return _cached_decoder_for_GetButtonInformation(el);
}

let _cached_encoder_for_GetButtonInformation: $.ASN1Encoder<GetButtonInformation> | null = null;

/**
 * @summary Encodes a(n) GetButtonInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetButtonInformation, encoded as an ASN.1 Element.
 */
export
function _encode_GetButtonInformation (value: GetButtonInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetButtonInformation) { _cached_encoder_for_GetButtonInformation = $._encodeBitString; }
    return _cached_encoder_for_GetButtonInformation(value, elGetter);
}


/* eslint-enable */
