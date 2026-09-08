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
 * @summary GetRegistrations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRegistrations  ::=  BIT STRING
 * {    requestedReqTypes            ( 0),
 *     privateData                ( 1),
 *     privateDataInAck            ( 2),
 *     segmentedResponseProvided        ( 3) }
 * ```
 */
export
type GetRegistrations = BIT_STRING;

/**
 * @summary GetRegistrations_requestedReqTypes
 * @constant
 */
export
const GetRegistrations_requestedReqTypes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary requestedReqTypes
 * @constant
 */
export
const requestedReqTypes: number = GetRegistrations_requestedReqTypes; /* SHORT_NAMED_BIT */

/**
 * @summary GetRegistrations_privateData
 * @constant
 */
export
const GetRegistrations_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetRegistrations_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetRegistrations_privateDataInAck
 * @constant
 */
export
const GetRegistrations_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetRegistrations_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRegistrations_segmentedResponseProvided
 * @constant
 */
export
const GetRegistrations_segmentedResponseProvided: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary segmentedResponseProvided
 * @constant
 */
export
const segmentedResponseProvided: number = GetRegistrations_segmentedResponseProvided; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetRegistrations: $.ASN1Decoder<GetRegistrations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRegistrations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRegistrations (el: _Element): GetRegistrations {
    if (!_cached_decoder_for_GetRegistrations) { _cached_decoder_for_GetRegistrations = $._decodeBitString; }
    return _cached_decoder_for_GetRegistrations(el);
}

let _cached_encoder_for_GetRegistrations: $.ASN1Encoder<GetRegistrations> | null = null;

/**
 * @summary Encodes a(n) GetRegistrations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRegistrations, encoded as an ASN.1 Element.
 */
export
function _encode_GetRegistrations (value: GetRegistrations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRegistrations) { _cached_encoder_for_GetRegistrations = $._encodeBitString; }
    return _cached_encoder_for_GetRegistrations(value, elGetter);
}


/* eslint-enable */
