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
import { PDP_ContextInfo, _decode_PDP_ContextInfo, _encode_PDP_ContextInfo } from "../MAP-MS-DataTypes/PDP-ContextInfo.ta.mjs";
// export { PDP_ContextInfo, _decode_PDP_ContextInfo, _encode_PDP_ContextInfo } from "../MAP-MS-DataTypes/PDP-ContextInfo.ta.mjs";


/**
 * @summary PDP_ContextInfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDP-ContextInfoList  ::=  SEQUENCE SIZE (1..maxNumOfPDP-Contexts) OF
 *     PDP-ContextInfo
 * ```
 */
export
type PDP_ContextInfoList = PDP_ContextInfo[]; // SequenceOfType

let _cached_decoder_for_PDP_ContextInfoList: $.ASN1Decoder<PDP_ContextInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDP_ContextInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDP_ContextInfoList (el: _Element): PDP_ContextInfoList {
    if (!_cached_decoder_for_PDP_ContextInfoList) { _cached_decoder_for_PDP_ContextInfoList = $._decodeSequenceOf<PDP_ContextInfo>(() => _decode_PDP_ContextInfo); }
    return _cached_decoder_for_PDP_ContextInfoList(el);
}

let _cached_encoder_for_PDP_ContextInfoList: $.ASN1Encoder<PDP_ContextInfoList> | null = null;

/**
 * @summary Encodes a(n) PDP_ContextInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDP_ContextInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_PDP_ContextInfoList (value: PDP_ContextInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDP_ContextInfoList) { _cached_encoder_for_PDP_ContextInfoList = $._encodeSequenceOf<PDP_ContextInfo>(() => _encode_PDP_ContextInfo, $.BER); }
    return _cached_encoder_for_PDP_ContextInfoList(value, elGetter);
}


/* eslint-enable */
