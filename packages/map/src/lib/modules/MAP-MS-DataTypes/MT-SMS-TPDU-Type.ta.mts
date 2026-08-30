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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MT_SMS_TPDU_Type {
    sms_DELIVER = 0,
    sms_SUBMIT_REPORT = 1,
    sms_STATUS_REPORT = 2,
}

/**
 * @summary MT_SMS_TPDU_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MT-SMS-TPDU-Type  ::=  ENUMERATED {
 *     sms-DELIVER    (0),
 *     sms-SUBMIT-REPORT    (1),
 *     sms-STATUS-REPORT    (2),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type MT_SMS_TPDU_Type = _enum_for_MT_SMS_TPDU_Type | ENUMERATED;

/**
 * @summary MT_SMS_TPDU_Type_sms_DELIVER
 * @constant
 * @type {number}
 */
export
const MT_SMS_TPDU_Type_sms_DELIVER: MT_SMS_TPDU_Type = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_DELIVER
 * @constant
 * @type {number}
 */
export
const sms_DELIVER: MT_SMS_TPDU_Type = MT_SMS_TPDU_Type_sms_DELIVER; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MT_SMS_TPDU_Type_sms_SUBMIT_REPORT
 * @constant
 * @type {number}
 */
export
const MT_SMS_TPDU_Type_sms_SUBMIT_REPORT: MT_SMS_TPDU_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_SUBMIT_REPORT
 * @constant
 * @type {number}
 */
export
const sms_SUBMIT_REPORT: MT_SMS_TPDU_Type = MT_SMS_TPDU_Type_sms_SUBMIT_REPORT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MT_SMS_TPDU_Type_sms_STATUS_REPORT
 * @constant
 * @type {number}
 */
export
const MT_SMS_TPDU_Type_sms_STATUS_REPORT: MT_SMS_TPDU_Type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_STATUS_REPORT
 * @constant
 * @type {number}
 */
export
const sms_STATUS_REPORT: MT_SMS_TPDU_Type = MT_SMS_TPDU_Type_sms_STATUS_REPORT; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MT_SMS_TPDU_Type: $.ASN1Decoder<MT_SMS_TPDU_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MT_SMS_TPDU_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MT_SMS_TPDU_Type (el: _Element): MT_SMS_TPDU_Type {
    if (!_cached_decoder_for_MT_SMS_TPDU_Type) { _cached_decoder_for_MT_SMS_TPDU_Type = $._decodeEnumerated; }
    return _cached_decoder_for_MT_SMS_TPDU_Type(el);
}

let _cached_encoder_for_MT_SMS_TPDU_Type: $.ASN1Encoder<MT_SMS_TPDU_Type> | null = null;

/**
 * @summary Encodes a(n) MT_SMS_TPDU_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MT_SMS_TPDU_Type, encoded as an ASN.1 Element.
 */
export
function _encode_MT_SMS_TPDU_Type (value: MT_SMS_TPDU_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MT_SMS_TPDU_Type) { _cached_encoder_for_MT_SMS_TPDU_Type = $._encodeEnumerated; }
    return _cached_encoder_for_MT_SMS_TPDU_Type(value, elGetter);
}


/* eslint-enable */
