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
 * @summary CancelCallBack
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelCallBack  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2),     -- misc characteristics
 *     supportsClearing             ( 3) }
 * ```
 */
export
type CancelCallBack = BIT_STRING;

/**
 * @summary CancelCallBack_privateData
 * @constant
 */
export
const CancelCallBack_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CancelCallBack_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBack_privateDataInAck
 * @constant
 */
export
const CancelCallBack_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = CancelCallBack_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBack_ackModelMultiStep
 * @constant
 */
export
const CancelCallBack_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = CancelCallBack_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBack_supportsClearing
 * @constant
 */
export
const CancelCallBack_supportsClearing: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary supportsClearing
 * @constant
 */
export
const supportsClearing: number = CancelCallBack_supportsClearing; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CancelCallBack: $.ASN1Decoder<CancelCallBack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelCallBack
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelCallBack (el: _Element): CancelCallBack {
    if (!_cached_decoder_for_CancelCallBack) { _cached_decoder_for_CancelCallBack = $._decodeBitString; }
    return _cached_decoder_for_CancelCallBack(el);
}

let _cached_encoder_for_CancelCallBack: $.ASN1Encoder<CancelCallBack> | null = null;

/**
 * @summary Encodes a(n) CancelCallBack into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelCallBack, encoded as an ASN.1 Element.
 */
export
function _encode_CancelCallBack (value: CancelCallBack, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelCallBack) { _cached_encoder_for_CancelCallBack = $._encodeBitString; }
    return _cached_encoder_for_CancelCallBack(value, elGetter);
}


/* eslint-enable */
