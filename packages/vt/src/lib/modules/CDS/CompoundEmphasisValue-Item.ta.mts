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



/**
 * @summary CompoundEmphasisValue_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundEmphasisValue-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CompoundEmphasisValue_Item =
    { placeholder: NULL } /* CHOICE_ALT_ROOT */
    | { acceptanceOfEmphasisSubAttr: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CompoundEmphasisValue_Item: $.ASN1Decoder<CompoundEmphasisValue_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundEmphasisValue_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundEmphasisValue_Item (el: _Element): CompoundEmphasisValue_Item {
    if (!_cached_decoder_for_CompoundEmphasisValue_Item) { _cached_decoder_for_CompoundEmphasisValue_Item = $._decode_inextensible_choice<CompoundEmphasisValue_Item>({
    "UNIVERSAL 5": [ "placeholder", $._decodeNull ],
    "UNIVERSAL 19": [ "acceptanceOfEmphasisSubAttr", $._decodePrintableString ]
}); }
    return _cached_decoder_for_CompoundEmphasisValue_Item(el);
}

let _cached_encoder_for_CompoundEmphasisValue_Item: $.ASN1Encoder<CompoundEmphasisValue_Item> | null = null;

/**
 * @summary Encodes a(n) CompoundEmphasisValue_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundEmphasisValue_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundEmphasisValue_Item (value: CompoundEmphasisValue_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundEmphasisValue_Item) { _cached_encoder_for_CompoundEmphasisValue_Item = $._encode_choice<CompoundEmphasisValue_Item>({
    "placeholder": $._encodeNull,
    "acceptanceOfEmphasisSubAttr": $._encodePrintableString,
}, $.BER); }
    return _cached_encoder_for_CompoundEmphasisValue_Item(value, elGetter);
}


/* eslint-enable */
