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
import { CallMediaInfoList_Item, _decode_CallMediaInfoList_Item, _encode_CallMediaInfoList_Item } from "../CSTA-status-reporting/CallMediaInfoList-Item.ta.mjs";
// export { CallMediaInfoList_Item, _decode_CallMediaInfoList_Item, _encode_CallMediaInfoList_Item } from "../CSTA-status-reporting/CallMediaInfoList-Item.ta.mjs";


/**
 * @summary CallMediaInfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallMediaInfoList  ::=  SEQUENCE OF SEQUENCE
 * {     mediaServiceType         [0] IMPLICIT MediaServiceType,
 *     mediaServiceVersion         [1] IMPLICIT INTEGER             OPTIONAL,
 *     mediaServiceInstance         [2] IMPLICIT MediaServiceInstanceID    OPTIONAL,
 *     mediaStreamID             [3] IMPLICIT MediaStreamID         OPTIONAL,
 *     connectionInformation         [4] IMPLICIT ConnectionInformation     OPTIONAL }
 * ```
 */
export
type CallMediaInfoList = CallMediaInfoList_Item[]; // SequenceOfType

let _cached_decoder_for_CallMediaInfoList: $.ASN1Decoder<CallMediaInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallMediaInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallMediaInfoList (el: _Element): CallMediaInfoList {
    if (!_cached_decoder_for_CallMediaInfoList) { _cached_decoder_for_CallMediaInfoList = $._decodeSequenceOf<CallMediaInfoList_Item>(() => _decode_CallMediaInfoList_Item); }
    return _cached_decoder_for_CallMediaInfoList(el);
}

let _cached_encoder_for_CallMediaInfoList: $.ASN1Encoder<CallMediaInfoList> | null = null;

/**
 * @summary Encodes a(n) CallMediaInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallMediaInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_CallMediaInfoList (value: CallMediaInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallMediaInfoList) { _cached_encoder_for_CallMediaInfoList = $._encodeSequenceOf<CallMediaInfoList_Item>(() => _encode_CallMediaInfoList_Item, $.BER); }
    return _cached_encoder_for_CallMediaInfoList(value, elGetter);
}


/* eslint-enable */
