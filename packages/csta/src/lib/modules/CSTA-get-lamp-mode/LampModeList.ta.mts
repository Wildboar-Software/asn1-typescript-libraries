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
import { LampModeList_Item, _decode_LampModeList_Item, _encode_LampModeList_Item } from "../CSTA-get-lamp-mode/LampModeList-Item.ta.mjs";
// export { LampModeList_Item, _decode_LampModeList_Item, _encode_LampModeList_Item } from "../CSTA-get-lamp-mode/LampModeList-Item.ta.mjs";


/**
 * @summary LampModeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampModeList  ::=  SEQUENCE OF SEQUENCE
 * {    lamp                LampID,
 *     lampMode            LampMode,
 *     lampBrightness            [0] IMPLICIT LampBrightness        OPTIONAL,
 *     lampColor            [1] IMPLICIT LampColor            OPTIONAL,
 *     button                [2] IMPLICIT ButtonID            OPTIONAL }
 * ```
 */
export
type LampModeList = LampModeList_Item[]; // SequenceOfType

let _cached_decoder_for_LampModeList: $.ASN1Decoder<LampModeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampModeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampModeList (el: _Element): LampModeList {
    if (!_cached_decoder_for_LampModeList) { _cached_decoder_for_LampModeList = $._decodeSequenceOf<LampModeList_Item>(() => _decode_LampModeList_Item); }
    return _cached_decoder_for_LampModeList(el);
}

let _cached_encoder_for_LampModeList: $.ASN1Encoder<LampModeList> | null = null;

/**
 * @summary Encodes a(n) LampModeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampModeList, encoded as an ASN.1 Element.
 */
export
function _encode_LampModeList (value: LampModeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampModeList) { _cached_encoder_for_LampModeList = $._encodeSequenceOf<LampModeList_Item>(() => _encode_LampModeList_Item, $.BER); }
    return _cached_encoder_for_LampModeList(value, elGetter);
}


/* eslint-enable */
