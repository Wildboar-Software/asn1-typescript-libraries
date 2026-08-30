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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ReportingPLMN, _decode_ReportingPLMN, _encode_ReportingPLMN } from "../MAP-LCS-DataTypes/ReportingPLMN.ta.mjs";
// export { ReportingPLMN, _decode_ReportingPLMN, _encode_ReportingPLMN } from "../MAP-LCS-DataTypes/ReportingPLMN.ta.mjs";


/**
 * @summary PLMNList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNList ::=  SEQUENCE SIZE (1..maxNumOfReportingPLMN) OF
 *     ReportingPLMN
 * ```
 */
export
type PLMNList = ReportingPLMN[]; // SequenceOfType

let _cached_decoder_for_PLMNList: $.ASN1Decoder<PLMNList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNList (el: _Element): PLMNList {
    if (!_cached_decoder_for_PLMNList) { _cached_decoder_for_PLMNList = $._decodeSequenceOf<ReportingPLMN>(() => _decode_ReportingPLMN); }
    return _cached_decoder_for_PLMNList(el);
}

let _cached_encoder_for_PLMNList: $.ASN1Encoder<PLMNList> | null = null;

/**
 * @summary Encodes a(n) PLMNList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNList, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNList (value: PLMNList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNList) { _cached_encoder_for_PLMNList = $._encodeSequenceOf<ReportingPLMN>(() => _encode_ReportingPLMN, $.BER); }
    return _cached_encoder_for_PLMNList(value, elGetter);
}


/* eslint-enable */
