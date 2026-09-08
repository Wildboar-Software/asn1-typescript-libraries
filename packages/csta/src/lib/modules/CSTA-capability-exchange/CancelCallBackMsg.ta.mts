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
 * @summary CancelCallBackMsg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelCallBackMsg  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2),     -- misc characteristics
 *     supportsClearing             ( 3) }
 * ```
 */
export
type CancelCallBackMsg = BIT_STRING;

/**
 * @summary CancelCallBackMsg_privateData
 * @constant
 */
export
const CancelCallBackMsg_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CancelCallBackMsg_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBackMsg_privateDataInAck
 * @constant
 */
export
const CancelCallBackMsg_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = CancelCallBackMsg_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBackMsg_ackModelMultiStep
 * @constant
 */
export
const CancelCallBackMsg_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = CancelCallBackMsg_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBackMsg_supportsClearing
 * @constant
 */
export
const CancelCallBackMsg_supportsClearing: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary supportsClearing
 * @constant
 */
export
const supportsClearing: number = CancelCallBackMsg_supportsClearing; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CancelCallBackMsg: $.ASN1Decoder<CancelCallBackMsg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelCallBackMsg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelCallBackMsg (el: _Element): CancelCallBackMsg {
    if (!_cached_decoder_for_CancelCallBackMsg) { _cached_decoder_for_CancelCallBackMsg = $._decodeBitString; }
    return _cached_decoder_for_CancelCallBackMsg(el);
}

let _cached_encoder_for_CancelCallBackMsg: $.ASN1Encoder<CancelCallBackMsg> | null = null;

/**
 * @summary Encodes a(n) CancelCallBackMsg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelCallBackMsg, encoded as an ASN.1 Element.
 */
export
function _encode_CancelCallBackMsg (value: CancelCallBackMsg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelCallBackMsg) { _cached_encoder_for_CancelCallBackMsg = $._encodeBitString; }
    return _cached_encoder_for_CancelCallBackMsg(value, elGetter);
}


/* eslint-enable */
