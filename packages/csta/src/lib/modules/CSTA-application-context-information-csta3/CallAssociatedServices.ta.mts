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
 * @summary CallAssociatedServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallAssociatedServices  ::=  BIT STRING
 * {    associateData                        ( 0),
 *         cancelTelephonyTones                    ( 1),
 *         changeConnectionInformation                ( 5),
 *         generateDigits                        ( 2),
 *         generateTelephonyTones                    ( 3),
 *         sendUserInformation                    ( 4) }
 * ```
 */
export
type CallAssociatedServices = BIT_STRING;

/**
 * @summary CallAssociatedServices_associateData
 * @constant
 */
export
const CallAssociatedServices_associateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary associateData
 * @constant
 */
export
const associateData: number = CallAssociatedServices_associateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_cancelTelephonyTones
 * @constant
 */
export
const CallAssociatedServices_cancelTelephonyTones: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cancelTelephonyTones
 * @constant
 */
export
const cancelTelephonyTones: number = CallAssociatedServices_cancelTelephonyTones; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_changeConnectionInformation
 * @constant
 */
export
const CallAssociatedServices_changeConnectionInformation: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary changeConnectionInformation
 * @constant
 */
export
const changeConnectionInformation: number = CallAssociatedServices_changeConnectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_generateDigits
 * @constant
 */
export
const CallAssociatedServices_generateDigits: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary generateDigits
 * @constant
 */
export
const generateDigits: number = CallAssociatedServices_generateDigits; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_generateTelephonyTones
 * @constant
 */
export
const CallAssociatedServices_generateTelephonyTones: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary generateTelephonyTones
 * @constant
 */
export
const generateTelephonyTones: number = CallAssociatedServices_generateTelephonyTones; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_sendUserInformation
 * @constant
 */
export
const CallAssociatedServices_sendUserInformation: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary sendUserInformation
 * @constant
 */
export
const sendUserInformation: number = CallAssociatedServices_sendUserInformation; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallAssociatedServices: $.ASN1Decoder<CallAssociatedServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallAssociatedServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallAssociatedServices (el: _Element): CallAssociatedServices {
    if (!_cached_decoder_for_CallAssociatedServices) { _cached_decoder_for_CallAssociatedServices = $._decodeBitString; }
    return _cached_decoder_for_CallAssociatedServices(el);
}

let _cached_encoder_for_CallAssociatedServices: $.ASN1Encoder<CallAssociatedServices> | null = null;

/**
 * @summary Encodes a(n) CallAssociatedServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallAssociatedServices, encoded as an ASN.1 Element.
 */
export
function _encode_CallAssociatedServices (value: CallAssociatedServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallAssociatedServices) { _cached_encoder_for_CallAssociatedServices = $._encodeBitString; }
    return _cached_encoder_for_CallAssociatedServices(value, elGetter);
}


/* eslint-enable */
