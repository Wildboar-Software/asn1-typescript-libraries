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
import { RingerStatusList_Item, _decode_RingerStatusList_Item, _encode_RingerStatusList_Item } from "../CSTA-get-ringer-status/RingerStatusList-Item.ta.mjs";
// export { RingerStatusList_Item, _decode_RingerStatusList_Item, _encode_RingerStatusList_Item } from "../CSTA-get-ringer-status/RingerStatusList-Item.ta.mjs";


/**
 * @summary RingerStatusList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RingerStatusList  ::=  SEQUENCE OF SEQUENCE
 * {    ringer                 RingerID,
 *     ringMode             RingMode,
 *     ringCount             [0] IMPLICIT INTEGER (0..1000)         OPTIONAL,
 *     ringDuration            [3] IMPLICIT INTEGER            OPTIONAL,
 *     ringPattern             [1] IMPLICIT INTEGER             OPTIONAL,
 *     ringVolAbs             [2] IMPLICIT INTEGER (0..100)         OPTIONAL }
 * ```
 */
export
type RingerStatusList = RingerStatusList_Item[]; // SequenceOfType

let _cached_decoder_for_RingerStatusList: $.ASN1Decoder<RingerStatusList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RingerStatusList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RingerStatusList (el: _Element): RingerStatusList {
    if (!_cached_decoder_for_RingerStatusList) { _cached_decoder_for_RingerStatusList = $._decodeSequenceOf<RingerStatusList_Item>(() => _decode_RingerStatusList_Item); }
    return _cached_decoder_for_RingerStatusList(el);
}

let _cached_encoder_for_RingerStatusList: $.ASN1Encoder<RingerStatusList> | null = null;

/**
 * @summary Encodes a(n) RingerStatusList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RingerStatusList, encoded as an ASN.1 Element.
 */
export
function _encode_RingerStatusList (value: RingerStatusList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RingerStatusList) { _cached_encoder_for_RingerStatusList = $._encodeSequenceOf<RingerStatusList_Item>(() => _encode_RingerStatusList_Item, $.BER); }
    return _cached_encoder_for_RingerStatusList(value, elGetter);
}


/* eslint-enable */
