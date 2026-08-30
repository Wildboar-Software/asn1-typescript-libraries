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
import { T_BcsmCamelTDPData, _decode_T_BcsmCamelTDPData, _encode_T_BcsmCamelTDPData } from "../MAP-MS-DataTypes/T-BcsmCamelTDPData.ta.mjs";


import { maxNumOfCamelTDPData } from "./maxNumOfCamelTDPData.va.mjs";

/**
 * @summary T_BcsmCamelTDPDataList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-BcsmCamelTDPDataList  ::=  SEQUENCE SIZE (1..maxNumOfCamelTDPData) OF
 *     T-BcsmCamelTDPData
 * ```
 */
export
type T_BcsmCamelTDPDataList = T_BcsmCamelTDPData[]; // SequenceOfType

let _cached_decoder_for_T_BcsmCamelTDPDataList: $.ASN1Decoder<T_BcsmCamelTDPDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) T_BcsmCamelTDPDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_T_BcsmCamelTDPDataList (el: _Element): T_BcsmCamelTDPDataList {
    if (!_cached_decoder_for_T_BcsmCamelTDPDataList) { _cached_decoder_for_T_BcsmCamelTDPDataList = $._decodeSequenceOf<T_BcsmCamelTDPData>(() => _decode_T_BcsmCamelTDPData); }
    const value = _cached_decoder_for_T_BcsmCamelTDPDataList(el);
    if (value.length < 1 || value.length > maxNumOfCamelTDPData) {
        throw new ASN1SizeError("T_BcsmCamelTDPDataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_T_BcsmCamelTDPDataList: $.ASN1Encoder<T_BcsmCamelTDPDataList> | null = null;

/**
 * @summary Encodes a(n) T_BcsmCamelTDPDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_BcsmCamelTDPDataList, encoded as an ASN.1 Element.
 */
export
function _encode_T_BcsmCamelTDPDataList (value: T_BcsmCamelTDPDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_T_BcsmCamelTDPDataList) { _cached_encoder_for_T_BcsmCamelTDPDataList = $._encodeSequenceOf<T_BcsmCamelTDPData>(() => _encode_T_BcsmCamelTDPData, $.BER); }
    return _cached_encoder_for_T_BcsmCamelTDPDataList(value, elGetter);
}


/* eslint-enable */
