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
import { DfrEntryList_Item, _decode_DfrEntryList_Item, _encode_DfrEntryList_Item } from "../DFRAbstractService/DfrEntryList-Item.ta.mjs";
// export { DfrEntryList_Item, _decode_DfrEntryList_Item, _encode_DfrEntryList_Item } from "../DFRAbstractService/DfrEntryList-Item.ta.mjs";


/**
 * @summary DfrEntryList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrEntryList  ::=  SEQUENCE OF SEQUENCE {
 *     upi                 [0] DfrUniquePermanentIdentifier,
 *     class               [1] DfrObjectClass,
 *     ordering-attribute  [2] SEQUENCE OF Attribute OPTIONAL, -- ordered as specified in the OrderingRule
 *     other-attributes    [3] SEQUENCE OF Attribute OPTIONAL
 * }
 * ```
 */
export
type DfrEntryList = DfrEntryList_Item[]; // SequenceOfType

let _cached_decoder_for_DfrEntryList: $.ASN1Decoder<DfrEntryList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrEntryList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrEntryList (el: _Element): DfrEntryList {
    if (!_cached_decoder_for_DfrEntryList) { _cached_decoder_for_DfrEntryList = $._decodeSequenceOf<DfrEntryList_Item>(() => _decode_DfrEntryList_Item); }
    return _cached_decoder_for_DfrEntryList(el);
}

let _cached_encoder_for_DfrEntryList: $.ASN1Encoder<DfrEntryList> | null = null;

/**
 * @summary Encodes a(n) DfrEntryList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrEntryList, encoded as an ASN.1 Element.
 */
export
function _encode_DfrEntryList (value: DfrEntryList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrEntryList) { _cached_encoder_for_DfrEntryList = $._encodeSequenceOf<DfrEntryList_Item>(() => _encode_DfrEntryList_Item, $.BER); }
    return _cached_encoder_for_DfrEntryList(value, elGetter);
}


/* eslint-enable */
