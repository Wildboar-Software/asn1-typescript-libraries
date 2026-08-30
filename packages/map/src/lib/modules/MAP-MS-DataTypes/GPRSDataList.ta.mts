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
import { PDP_Context, _decode_PDP_Context, _encode_PDP_Context } from "../MAP-MS-DataTypes/PDP-Context.ta.mjs";
// export { PDP_Context, _decode_PDP_Context, _encode_PDP_Context } from "../MAP-MS-DataTypes/PDP-Context.ta.mjs";


/**
 * @summary GPRSDataList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSDataList  ::=  SEQUENCE SIZE (1..maxNumOfPDP-Contexts) OF
 *     PDP-Context
 * ```
 */
export
type GPRSDataList = PDP_Context[]; // SequenceOfType

let _cached_decoder_for_GPRSDataList: $.ASN1Decoder<GPRSDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRSDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRSDataList (el: _Element): GPRSDataList {
    if (!_cached_decoder_for_GPRSDataList) { _cached_decoder_for_GPRSDataList = $._decodeSequenceOf<PDP_Context>(() => _decode_PDP_Context); }
    return _cached_decoder_for_GPRSDataList(el);
}

let _cached_encoder_for_GPRSDataList: $.ASN1Encoder<GPRSDataList> | null = null;

/**
 * @summary Encodes a(n) GPRSDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRSDataList, encoded as an ASN.1 Element.
 */
export
function _encode_GPRSDataList (value: GPRSDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRSDataList) { _cached_encoder_for_GPRSDataList = $._encodeSequenceOf<PDP_Context>(() => _encode_PDP_Context, $.BER); }
    return _cached_encoder_for_GPRSDataList(value, elGetter);
}


/* eslint-enable */
