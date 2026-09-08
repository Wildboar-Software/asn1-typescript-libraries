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
 * @summary RequestTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestTypes  ::=  BIT STRING
 * {     systemStatus                 ( 0),
 *     requestSystemStatus             ( 1),
 *     switchingFunctionCapsChanged         ( 2),
 *     switchingFunctionDevicesChanged     ( 3) }
 * ```
 */
export
type RequestTypes = BIT_STRING;

/**
 * @summary RequestTypes_systemStatus
 * @constant
 */
export
const RequestTypes_systemStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary systemStatus
 * @constant
 */
export
const systemStatus: number = RequestTypes_systemStatus; /* SHORT_NAMED_BIT */

/**
 * @summary RequestTypes_requestSystemStatus
 * @constant
 */
export
const RequestTypes_requestSystemStatus: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requestSystemStatus
 * @constant
 */
export
const requestSystemStatus: number = RequestTypes_requestSystemStatus; /* SHORT_NAMED_BIT */

/**
 * @summary RequestTypes_switchingFunctionCapsChanged
 * @constant
 */
export
const RequestTypes_switchingFunctionCapsChanged: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionCapsChanged
 * @constant
 */
export
const switchingFunctionCapsChanged: number = RequestTypes_switchingFunctionCapsChanged; /* SHORT_NAMED_BIT */

/**
 * @summary RequestTypes_switchingFunctionDevicesChanged
 * @constant
 */
export
const RequestTypes_switchingFunctionDevicesChanged: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionDevicesChanged
 * @constant
 */
export
const switchingFunctionDevicesChanged: number = RequestTypes_switchingFunctionDevicesChanged; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RequestTypes: $.ASN1Decoder<RequestTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestTypes (el: _Element): RequestTypes {
    if (!_cached_decoder_for_RequestTypes) { _cached_decoder_for_RequestTypes = $._decodeBitString; }
    return _cached_decoder_for_RequestTypes(el);
}

let _cached_encoder_for_RequestTypes: $.ASN1Encoder<RequestTypes> | null = null;

/**
 * @summary Encodes a(n) RequestTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestTypes, encoded as an ASN.1 Element.
 */
export
function _encode_RequestTypes (value: RequestTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestTypes) { _cached_encoder_for_RequestTypes = $._encodeBitString; }
    return _cached_encoder_for_RequestTypes(value, elGetter);
}


/* eslint-enable */
