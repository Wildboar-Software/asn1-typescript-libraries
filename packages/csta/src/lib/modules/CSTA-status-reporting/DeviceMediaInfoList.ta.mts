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
import { DeviceMediaInfoList_Item, _decode_DeviceMediaInfoList_Item, _encode_DeviceMediaInfoList_Item } from "../CSTA-status-reporting/DeviceMediaInfoList-Item.ta.mjs";
// export { DeviceMediaInfoList_Item, _decode_DeviceMediaInfoList_Item, _encode_DeviceMediaInfoList_Item } from "../CSTA-status-reporting/DeviceMediaInfoList-Item.ta.mjs";


/**
 * @summary DeviceMediaInfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceMediaInfoList  ::=  SEQUENCE OF SEQUENCE
 * {     mediaStreamID            MediaStreamID                OPTIONAL,
 *     connectionInformation         ConnectionInformation             OPTIONAL }
 * ```
 */
export
type DeviceMediaInfoList = DeviceMediaInfoList_Item[]; // SequenceOfType

let _cached_decoder_for_DeviceMediaInfoList: $.ASN1Decoder<DeviceMediaInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceMediaInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceMediaInfoList (el: _Element): DeviceMediaInfoList {
    if (!_cached_decoder_for_DeviceMediaInfoList) { _cached_decoder_for_DeviceMediaInfoList = $._decodeSequenceOf<DeviceMediaInfoList_Item>(() => _decode_DeviceMediaInfoList_Item); }
    return _cached_decoder_for_DeviceMediaInfoList(el);
}

let _cached_encoder_for_DeviceMediaInfoList: $.ASN1Encoder<DeviceMediaInfoList> | null = null;

/**
 * @summary Encodes a(n) DeviceMediaInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceMediaInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceMediaInfoList (value: DeviceMediaInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceMediaInfoList) { _cached_encoder_for_DeviceMediaInfoList = $._encodeSequenceOf<DeviceMediaInfoList_Item>(() => _encode_DeviceMediaInfoList_Item, $.BER); }
    return _cached_encoder_for_DeviceMediaInfoList(value, elGetter);
}


/* eslint-enable */
