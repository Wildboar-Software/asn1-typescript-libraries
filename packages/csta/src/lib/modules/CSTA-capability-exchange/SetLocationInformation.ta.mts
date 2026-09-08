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
 * @summary SetLocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetLocationInformation  ::=  BIT STRING
 * {    locationInfo                ( 0),
 *     replaceMode                ( 1),
 *     privateData                ( 2),
 *     privateDataInAck            ( 3) }
 * ```
 */
export
type SetLocationInformation = BIT_STRING;

/**
 * @summary SetLocationInformation_locationInfo
 * @constant
 */
export
const SetLocationInformation_locationInfo: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary locationInfo
 * @constant
 */
export
const locationInfo: number = SetLocationInformation_locationInfo; /* SHORT_NAMED_BIT */

/**
 * @summary SetLocationInformation_replaceMode
 * @constant
 */
export
const SetLocationInformation_replaceMode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary replaceMode
 * @constant
 */
export
const replaceMode: number = SetLocationInformation_replaceMode; /* SHORT_NAMED_BIT */

/**
 * @summary SetLocationInformation_privateData
 * @constant
 */
export
const SetLocationInformation_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetLocationInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetLocationInformation_privateDataInAck
 * @constant
 */
export
const SetLocationInformation_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetLocationInformation_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetLocationInformation: $.ASN1Decoder<SetLocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetLocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetLocationInformation (el: _Element): SetLocationInformation {
    if (!_cached_decoder_for_SetLocationInformation) { _cached_decoder_for_SetLocationInformation = $._decodeBitString; }
    return _cached_decoder_for_SetLocationInformation(el);
}

let _cached_encoder_for_SetLocationInformation: $.ASN1Encoder<SetLocationInformation> | null = null;

/**
 * @summary Encodes a(n) SetLocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetLocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SetLocationInformation (value: SetLocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetLocationInformation) { _cached_encoder_for_SetLocationInformation = $._encodeBitString; }
    return _cached_encoder_for_SetLocationInformation(value, elGetter);
}


/* eslint-enable */
