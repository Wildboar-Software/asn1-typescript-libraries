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
 * @summary CallBackMsgNonCallRel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackMsgNonCallRel  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     additionalReqForbidden             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type CallBackMsgNonCallRel = BIT_STRING;

/**
 * @summary CallBackMsgNonCallRel_privateData
 * @constant
 */
export
const CallBackMsgNonCallRel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CallBackMsgNonCallRel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMsgNonCallRel_privateDataInAck
 * @constant
 */
export
const CallBackMsgNonCallRel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = CallBackMsgNonCallRel_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMsgNonCallRel_additionalReqForbidden
 * @constant
 */
export
const CallBackMsgNonCallRel_additionalReqForbidden: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary additionalReqForbidden
 * @constant
 */
export
const additionalReqForbidden: number = CallBackMsgNonCallRel_additionalReqForbidden; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMsgNonCallRel_ackModelMultiStep
 * @constant
 */
export
const CallBackMsgNonCallRel_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = CallBackMsgNonCallRel_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallBackMsgNonCallRel: $.ASN1Decoder<CallBackMsgNonCallRel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackMsgNonCallRel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackMsgNonCallRel (el: _Element): CallBackMsgNonCallRel {
    if (!_cached_decoder_for_CallBackMsgNonCallRel) { _cached_decoder_for_CallBackMsgNonCallRel = $._decodeBitString; }
    return _cached_decoder_for_CallBackMsgNonCallRel(el);
}

let _cached_encoder_for_CallBackMsgNonCallRel: $.ASN1Encoder<CallBackMsgNonCallRel> | null = null;

/**
 * @summary Encodes a(n) CallBackMsgNonCallRel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackMsgNonCallRel, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackMsgNonCallRel (value: CallBackMsgNonCallRel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackMsgNonCallRel) { _cached_encoder_for_CallBackMsgNonCallRel = $._encodeBitString; }
    return _cached_encoder_for_CallBackMsgNonCallRel(value, elGetter);
}


/* eslint-enable */
