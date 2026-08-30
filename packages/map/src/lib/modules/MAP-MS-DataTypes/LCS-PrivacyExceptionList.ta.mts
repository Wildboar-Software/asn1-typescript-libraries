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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LCS_PrivacyClass, _decode_LCS_PrivacyClass, _encode_LCS_PrivacyClass } from "../MAP-MS-DataTypes/LCS-PrivacyClass.ta.mjs";


import { maxNumOfPrivacyClass } from "./maxNumOfPrivacyClass.va.mjs";

/**
 * @summary LCS_PrivacyExceptionList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-PrivacyExceptionList  ::=  SEQUENCE SIZE (1..maxNumOfPrivacyClass) OF
 *     LCS-PrivacyClass
 * ```
 */
export
type LCS_PrivacyExceptionList = LCS_PrivacyClass[]; // SequenceOfType

let _cached_decoder_for_LCS_PrivacyExceptionList: $.ASN1Decoder<LCS_PrivacyExceptionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_PrivacyExceptionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCS_PrivacyExceptionList (el: _Element): LCS_PrivacyExceptionList {
    if (!_cached_decoder_for_LCS_PrivacyExceptionList) { _cached_decoder_for_LCS_PrivacyExceptionList = $._decodeSequenceOf<LCS_PrivacyClass>(() => _decode_LCS_PrivacyClass); }
    const value = _cached_decoder_for_LCS_PrivacyExceptionList(el);
    if (value.length < 1 || value.length > maxNumOfPrivacyClass) {
        throw new ASN1SizeError("LCS_PrivacyExceptionList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_LCS_PrivacyExceptionList: $.ASN1Encoder<LCS_PrivacyExceptionList> | null = null;

/**
 * @summary Encodes a(n) LCS_PrivacyExceptionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_PrivacyExceptionList, encoded as an ASN.1 Element.
 */
export
function _encode_LCS_PrivacyExceptionList (value: LCS_PrivacyExceptionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCS_PrivacyExceptionList) { _cached_encoder_for_LCS_PrivacyExceptionList = $._encodeSequenceOf<LCS_PrivacyClass>(() => _encode_LCS_PrivacyClass, $.BER); }
    return _cached_encoder_for_LCS_PrivacyExceptionList(value, elGetter);
}


/* eslint-enable */
