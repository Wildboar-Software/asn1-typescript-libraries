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
 * @summary GetCallerIDStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCallerIDStatus  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type GetCallerIDStatus = BIT_STRING;

/**
 * @summary GetCallerIDStatus_privateData
 * @constant
 */
export
const GetCallerIDStatus_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetCallerIDStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetCallerIDStatus_privateDataInAck
 * @constant
 */
export
const GetCallerIDStatus_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetCallerIDStatus_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetCallerIDStatus: $.ASN1Decoder<GetCallerIDStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCallerIDStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCallerIDStatus (el: _Element): GetCallerIDStatus {
    if (!_cached_decoder_for_GetCallerIDStatus) { _cached_decoder_for_GetCallerIDStatus = $._decodeBitString; }
    return _cached_decoder_for_GetCallerIDStatus(el);
}

let _cached_encoder_for_GetCallerIDStatus: $.ASN1Encoder<GetCallerIDStatus> | null = null;

/**
 * @summary Encodes a(n) GetCallerIDStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCallerIDStatus, encoded as an ASN.1 Element.
 */
export
function _encode_GetCallerIDStatus (value: GetCallerIDStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCallerIDStatus) { _cached_encoder_for_GetCallerIDStatus = $._encodeBitString; }
    return _cached_encoder_for_GetCallerIDStatus(value, elGetter);
}


/* eslint-enable */
