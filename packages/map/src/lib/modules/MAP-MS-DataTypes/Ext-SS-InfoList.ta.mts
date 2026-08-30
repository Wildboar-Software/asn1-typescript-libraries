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
import { Ext_SS_Info, _decode_Ext_SS_Info, _encode_Ext_SS_Info } from "../MAP-MS-DataTypes/Ext-SS-Info.ta.mjs";
// export { Ext_SS_Info, _decode_Ext_SS_Info, _encode_Ext_SS_Info } from "../MAP-MS-DataTypes/Ext-SS-Info.ta.mjs";


/**
 * @summary Ext_SS_InfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-SS-InfoList  ::=  SEQUENCE SIZE (1..maxNumOfSS) OF
 *     Ext-SS-Info
 * ```
 */
export
type Ext_SS_InfoList = Ext_SS_Info[]; // SequenceOfType

let _cached_decoder_for_Ext_SS_InfoList: $.ASN1Decoder<Ext_SS_InfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_SS_InfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_SS_InfoList (el: _Element): Ext_SS_InfoList {
    if (!_cached_decoder_for_Ext_SS_InfoList) { _cached_decoder_for_Ext_SS_InfoList = $._decodeSequenceOf<Ext_SS_Info>(() => _decode_Ext_SS_Info); }
    return _cached_decoder_for_Ext_SS_InfoList(el);
}

let _cached_encoder_for_Ext_SS_InfoList: $.ASN1Encoder<Ext_SS_InfoList> | null = null;

/**
 * @summary Encodes a(n) Ext_SS_InfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_SS_InfoList, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_SS_InfoList (value: Ext_SS_InfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_SS_InfoList) { _cached_encoder_for_Ext_SS_InfoList = $._encodeSequenceOf<Ext_SS_Info>(() => _encode_Ext_SS_Info, $.BER); }
    return _cached_encoder_for_Ext_SS_InfoList(value, elGetter);
}


/* eslint-enable */
