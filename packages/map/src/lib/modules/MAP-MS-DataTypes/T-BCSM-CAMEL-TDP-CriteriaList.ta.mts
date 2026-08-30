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
import { T_BCSM_CAMEL_TDP_Criteria, _decode_T_BCSM_CAMEL_TDP_Criteria, _encode_T_BCSM_CAMEL_TDP_Criteria } from "../MAP-MS-DataTypes/T-BCSM-CAMEL-TDP-Criteria.ta.mjs";


import { maxNumOfCamelTDPData } from "./maxNumOfCamelTDPData.va.mjs";

/**
 * @summary T_BCSM_CAMEL_TDP_CriteriaList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-BCSM-CAMEL-TDP-CriteriaList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     T-BCSM-CAMEL-TDP-Criteria
 * ```
 */
export
type T_BCSM_CAMEL_TDP_CriteriaList = T_BCSM_CAMEL_TDP_Criteria[]; // SequenceOfType

let _cached_decoder_for_T_BCSM_CAMEL_TDP_CriteriaList: $.ASN1Decoder<T_BCSM_CAMEL_TDP_CriteriaList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) T_BCSM_CAMEL_TDP_CriteriaList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_T_BCSM_CAMEL_TDP_CriteriaList (el: _Element): T_BCSM_CAMEL_TDP_CriteriaList {
    if (!_cached_decoder_for_T_BCSM_CAMEL_TDP_CriteriaList) { _cached_decoder_for_T_BCSM_CAMEL_TDP_CriteriaList = $._decodeSequenceOf<T_BCSM_CAMEL_TDP_Criteria>(() => _decode_T_BCSM_CAMEL_TDP_Criteria); }
    const value = _cached_decoder_for_T_BCSM_CAMEL_TDP_CriteriaList(el);
    if (value.length < 1 || value.length > maxNumOfCamelTDPData) {
        throw new ASN1SizeError("T_BCSM_CAMEL_TDP_CriteriaList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_T_BCSM_CAMEL_TDP_CriteriaList: $.ASN1Encoder<T_BCSM_CAMEL_TDP_CriteriaList> | null = null;

/**
 * @summary Encodes a(n) T_BCSM_CAMEL_TDP_CriteriaList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_BCSM_CAMEL_TDP_CriteriaList, encoded as an ASN.1 Element.
 */
export
function _encode_T_BCSM_CAMEL_TDP_CriteriaList (value: T_BCSM_CAMEL_TDP_CriteriaList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_T_BCSM_CAMEL_TDP_CriteriaList) { _cached_encoder_for_T_BCSM_CAMEL_TDP_CriteriaList = $._encodeSequenceOf<T_BCSM_CAMEL_TDP_Criteria>(() => _encode_T_BCSM_CAMEL_TDP_Criteria, $.BER); }
    return _cached_encoder_for_T_BCSM_CAMEL_TDP_CriteriaList(value, elGetter);
}


/* eslint-enable */
