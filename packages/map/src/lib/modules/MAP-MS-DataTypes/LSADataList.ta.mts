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
import { LSAData, _decode_LSAData, _encode_LSAData } from "../MAP-MS-DataTypes/LSAData.ta.mjs";


import { maxNumOfLSAs } from "./maxNumOfLSAs.va.mjs";

/**
 * @summary LSADataList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSADataList  ::=  SEQUENCE SIZE (1..maxNumOfLSAs) OF
 *     LSAData
 * ```
 */
export
type LSADataList = LSAData[]; // SequenceOfType

let _cached_decoder_for_LSADataList: $.ASN1Decoder<LSADataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LSADataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LSADataList (el: _Element): LSADataList {
    if (!_cached_decoder_for_LSADataList) { _cached_decoder_for_LSADataList = $._decodeSequenceOf<LSAData>(() => _decode_LSAData); }
    const value = _cached_decoder_for_LSADataList(el);
    if (value.length < 1 || value.length > maxNumOfLSAs) {
        throw new ASN1SizeError("LSADataList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_LSADataList: $.ASN1Encoder<LSADataList> | null = null;

/**
 * @summary Encodes a(n) LSADataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSADataList, encoded as an ASN.1 Element.
 */
export
function _encode_LSADataList (value: LSADataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LSADataList) { _cached_encoder_for_LSADataList = $._encodeSequenceOf<LSAData>(() => _encode_LSAData, $.BER); }
    return _cached_encoder_for_LSADataList(value, elGetter);
}


/* eslint-enable */
