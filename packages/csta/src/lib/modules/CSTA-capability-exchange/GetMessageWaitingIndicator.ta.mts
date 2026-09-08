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
 * @summary GetMessageWaitingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMessageWaitingIndicator  ::=  BIT STRING
 * {    privateData                 ( 0),     -- optional parameter
 *     deviceForMsgInAck             ( 1),     -- optional parameter
 *     lampIsPresentInAck             ( 2),     -- optional parameter
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type GetMessageWaitingIndicator = BIT_STRING;

/**
 * @summary GetMessageWaitingIndicator_privateData
 * @constant
 */
export
const GetMessageWaitingIndicator_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetMessageWaitingIndicator_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetMessageWaitingIndicator_deviceForMsgInAck
 * @constant
 */
export
const GetMessageWaitingIndicator_deviceForMsgInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deviceForMsgInAck
 * @constant
 */
export
const deviceForMsgInAck: number = GetMessageWaitingIndicator_deviceForMsgInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetMessageWaitingIndicator_lampIsPresentInAck
 * @constant
 */
export
const GetMessageWaitingIndicator_lampIsPresentInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary lampIsPresentInAck
 * @constant
 */
export
const lampIsPresentInAck: number = GetMessageWaitingIndicator_lampIsPresentInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetMessageWaitingIndicator_privateDataInAck
 * @constant
 */
export
const GetMessageWaitingIndicator_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetMessageWaitingIndicator_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetMessageWaitingIndicator: $.ASN1Decoder<GetMessageWaitingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMessageWaitingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMessageWaitingIndicator (el: _Element): GetMessageWaitingIndicator {
    if (!_cached_decoder_for_GetMessageWaitingIndicator) { _cached_decoder_for_GetMessageWaitingIndicator = $._decodeBitString; }
    return _cached_decoder_for_GetMessageWaitingIndicator(el);
}

let _cached_encoder_for_GetMessageWaitingIndicator: $.ASN1Encoder<GetMessageWaitingIndicator> | null = null;

/**
 * @summary Encodes a(n) GetMessageWaitingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMessageWaitingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_GetMessageWaitingIndicator (value: GetMessageWaitingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMessageWaitingIndicator) { _cached_encoder_for_GetMessageWaitingIndicator = $._encodeBitString; }
    return _cached_encoder_for_GetMessageWaitingIndicator(value, elGetter);
}


/* eslint-enable */
