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
import { HookswitchStatusList_Item, _decode_HookswitchStatusList_Item, _encode_HookswitchStatusList_Item } from "../CSTA-get-hookswitch-status/HookswitchStatusList-Item.ta.mjs";
// export { HookswitchStatusList_Item, _decode_HookswitchStatusList_Item, _encode_HookswitchStatusList_Item } from "../CSTA-get-hookswitch-status/HookswitchStatusList-Item.ta.mjs";


/**
 * @summary HookswitchStatusList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HookswitchStatusList  ::=  SEQUENCE OF SEQUENCE
 * {    hookswitch            HookswitchID,
 *     hookswitchOnHook        BOOLEAN }
 * ```
 */
export
type HookswitchStatusList = HookswitchStatusList_Item[]; // SequenceOfType

let _cached_decoder_for_HookswitchStatusList: $.ASN1Decoder<HookswitchStatusList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HookswitchStatusList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HookswitchStatusList (el: _Element): HookswitchStatusList {
    if (!_cached_decoder_for_HookswitchStatusList) { _cached_decoder_for_HookswitchStatusList = $._decodeSequenceOf<HookswitchStatusList_Item>(() => _decode_HookswitchStatusList_Item); }
    return _cached_decoder_for_HookswitchStatusList(el);
}

let _cached_encoder_for_HookswitchStatusList: $.ASN1Encoder<HookswitchStatusList> | null = null;

/**
 * @summary Encodes a(n) HookswitchStatusList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HookswitchStatusList, encoded as an ASN.1 Element.
 */
export
function _encode_HookswitchStatusList (value: HookswitchStatusList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HookswitchStatusList) { _cached_encoder_for_HookswitchStatusList = $._encodeSequenceOf<HookswitchStatusList_Item>(() => _encode_HookswitchStatusList_Item, $.BER); }
    return _cached_encoder_for_HookswitchStatusList(value, elGetter);
}


/* eslint-enable */
