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
import { RelocationNumber, _decode_RelocationNumber, _encode_RelocationNumber } from "../MAP-MS-DataTypes/RelocationNumber.ta.mjs";


import { maxNumOfRelocationNumber } from "./maxNumOfRelocationNumber.va.mjs";

/**
 * @summary RelocationNumberList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelocationNumberList  ::=  SEQUENCE SIZE (1..maxNumOfRelocationNumber) OF
 *     RelocationNumber
 * ```
 */
export
type RelocationNumberList = RelocationNumber[]; // SequenceOfType

let _cached_decoder_for_RelocationNumberList: $.ASN1Decoder<RelocationNumberList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelocationNumberList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RelocationNumberList (el: _Element): RelocationNumberList {
    if (!_cached_decoder_for_RelocationNumberList) { _cached_decoder_for_RelocationNumberList = $._decodeSequenceOf<RelocationNumber>(() => _decode_RelocationNumber); }
    const value = _cached_decoder_for_RelocationNumberList(el);
    if (value.length < 1 || value.length > maxNumOfRelocationNumber) {
        throw new ASN1SizeError("RelocationNumberList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_RelocationNumberList: $.ASN1Encoder<RelocationNumberList> | null = null;

/**
 * @summary Encodes a(n) RelocationNumberList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelocationNumberList, encoded as an ASN.1 Element.
 */
export
function _encode_RelocationNumberList (value: RelocationNumberList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RelocationNumberList) { _cached_encoder_for_RelocationNumberList = $._encodeSequenceOf<RelocationNumber>(() => _encode_RelocationNumber, $.BER); }
    return _cached_encoder_for_RelocationNumberList(value, elGetter);
}


/* eslint-enable */
