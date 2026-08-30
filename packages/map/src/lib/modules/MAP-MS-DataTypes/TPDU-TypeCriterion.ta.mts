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
import { MT_SMS_TPDU_Type, _enum_for_MT_SMS_TPDU_Type, MT_SMS_TPDU_Type_sms_DELIVER /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_DELIVER /* IMPORTED_SHORT_ENUMERATION_ITEM */, MT_SMS_TPDU_Type_sms_SUBMIT_REPORT /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_SUBMIT_REPORT /* IMPORTED_SHORT_ENUMERATION_ITEM */, MT_SMS_TPDU_Type_sms_STATUS_REPORT /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_STATUS_REPORT /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MT_SMS_TPDU_Type, _encode_MT_SMS_TPDU_Type } from "../MAP-MS-DataTypes/MT-SMS-TPDU-Type.ta.mjs";
// export { MT_SMS_TPDU_Type, _enum_for_MT_SMS_TPDU_Type, MT_SMS_TPDU_Type_sms_DELIVER /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_DELIVER /* IMPORTED_SHORT_ENUMERATION_ITEM */, MT_SMS_TPDU_Type_sms_SUBMIT_REPORT /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_SUBMIT_REPORT /* IMPORTED_SHORT_ENUMERATION_ITEM */, MT_SMS_TPDU_Type_sms_STATUS_REPORT /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_STATUS_REPORT /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MT_SMS_TPDU_Type, _encode_MT_SMS_TPDU_Type } from "../MAP-MS-DataTypes/MT-SMS-TPDU-Type.ta.mjs";


/**
 * @summary TPDU_TypeCriterion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-TypeCriterion  ::=  SEQUENCE SIZE (1..maxNumOfTPDUTypes) OF
 *     MT-SMS-TPDU-Type
 * ```
 */
export
type TPDU_TypeCriterion = MT_SMS_TPDU_Type[]; // SequenceOfType

let _cached_decoder_for_TPDU_TypeCriterion: $.ASN1Decoder<TPDU_TypeCriterion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TPDU_TypeCriterion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TPDU_TypeCriterion (el: _Element): TPDU_TypeCriterion {
    if (!_cached_decoder_for_TPDU_TypeCriterion) { _cached_decoder_for_TPDU_TypeCriterion = $._decodeSequenceOf<MT_SMS_TPDU_Type>(() => _decode_MT_SMS_TPDU_Type); }
    return _cached_decoder_for_TPDU_TypeCriterion(el);
}

let _cached_encoder_for_TPDU_TypeCriterion: $.ASN1Encoder<TPDU_TypeCriterion> | null = null;

/**
 * @summary Encodes a(n) TPDU_TypeCriterion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TPDU_TypeCriterion, encoded as an ASN.1 Element.
 */
export
function _encode_TPDU_TypeCriterion (value: TPDU_TypeCriterion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TPDU_TypeCriterion) { _cached_encoder_for_TPDU_TypeCriterion = $._encodeSequenceOf<MT_SMS_TPDU_Type>(() => _encode_MT_SMS_TPDU_Type, $.BER); }
    return _cached_encoder_for_TPDU_TypeCriterion(value, elGetter);
}


/* eslint-enable */
