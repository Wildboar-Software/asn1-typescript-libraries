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
import { ForwardList_Item, _decode_ForwardList_Item, _encode_ForwardList_Item } from "../CSTA-device-feature-types/ForwardList-Item.ta.mjs";
// export { ForwardList_Item, _decode_ForwardList_Item, _encode_ForwardList_Item } from "../CSTA-device-feature-types/ForwardList-Item.ta.mjs";


/**
 * @summary ForwardList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardList  ::=  SEQUENCE OF SEQUENCE
 * {     forwardingType             ForwardingType             OPTIONAL,
 *     forwardStatus             BOOLEAN,
 *     forwardDN             DeviceID             OPTIONAL,
 *     forwardDefault             ForwardDefault             OPTIONAL,
 *     ringDuration            [0] IMPLICIT INTEGER        OPTIONAL,
 *     ringCount             INTEGER (1..100)         OPTIONAL }
 * ```
 */
export
type ForwardList = ForwardList_Item[]; // SequenceOfType

let _cached_decoder_for_ForwardList: $.ASN1Decoder<ForwardList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardList (el: _Element): ForwardList {
    if (!_cached_decoder_for_ForwardList) { _cached_decoder_for_ForwardList = $._decodeSequenceOf<ForwardList_Item>(() => _decode_ForwardList_Item); }
    return _cached_decoder_for_ForwardList(el);
}

let _cached_encoder_for_ForwardList: $.ASN1Encoder<ForwardList> | null = null;

/**
 * @summary Encodes a(n) ForwardList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardList, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardList (value: ForwardList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardList) { _cached_encoder_for_ForwardList = $._encodeSequenceOf<ForwardList_Item>(() => _encode_ForwardList_Item, $.BER); }
    return _cached_encoder_for_ForwardList(value, elGetter);
}


/* eslint-enable */
