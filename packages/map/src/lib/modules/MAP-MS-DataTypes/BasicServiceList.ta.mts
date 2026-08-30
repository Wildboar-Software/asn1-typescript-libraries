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
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";


import { maxNumOfBasicServices } from "./maxNumOfBasicServices.va.mjs";

/**
 * @summary BasicServiceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicServiceList  ::=  SEQUENCE SIZE (1..maxNumOfBasicServices) OF
 *     Ext-BasicServiceCode
 * ```
 */
export
type BasicServiceList = Ext_BasicServiceCode[]; // SequenceOfType

let _cached_decoder_for_BasicServiceList: $.ASN1Decoder<BasicServiceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicServiceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicServiceList (el: _Element): BasicServiceList {
    if (!_cached_decoder_for_BasicServiceList) { _cached_decoder_for_BasicServiceList = $._decodeSequenceOf<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode); }
    const value = _cached_decoder_for_BasicServiceList(el);
    if (value.length < 1 || value.length > maxNumOfBasicServices) {
        throw new ASN1SizeError("BasicServiceList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_BasicServiceList: $.ASN1Encoder<BasicServiceList> | null = null;

/**
 * @summary Encodes a(n) BasicServiceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicServiceList, encoded as an ASN.1 Element.
 */
export
function _encode_BasicServiceList (value: BasicServiceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicServiceList) { _cached_encoder_for_BasicServiceList = $._encodeSequenceOf<Ext_BasicServiceCode>(() => _encode_Ext_BasicServiceCode, $.BER); }
    return _cached_encoder_for_BasicServiceList(value, elGetter);
}


/* eslint-enable */
