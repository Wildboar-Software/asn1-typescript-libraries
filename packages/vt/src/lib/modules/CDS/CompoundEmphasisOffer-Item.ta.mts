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
 * @summary CompoundEmphasisOffer_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundEmphasisOffer-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CompoundEmphasisOffer_Item =
    { placeholder: NULL } /* CHOICE_ALT_ROOT */
    | { multiOfferSingleSubAttr: PrintableString[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CompoundEmphasisOffer_Item: $.ASN1Decoder<CompoundEmphasisOffer_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundEmphasisOffer_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundEmphasisOffer_Item (el: _Element): CompoundEmphasisOffer_Item {
    if (!_cached_decoder_for_CompoundEmphasisOffer_Item) { _cached_decoder_for_CompoundEmphasisOffer_Item = $._decode_inextensible_choice<CompoundEmphasisOffer_Item>({
    "UNIVERSAL 5": [ "placeholder", $._decodeNull ],
    "UNIVERSAL 16": [ "multiOfferSingleSubAttr", $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString) ]
}); }
    return _cached_decoder_for_CompoundEmphasisOffer_Item(el);
}

let _cached_encoder_for_CompoundEmphasisOffer_Item: $.ASN1Encoder<CompoundEmphasisOffer_Item> | null = null;

/**
 * @summary Encodes a(n) CompoundEmphasisOffer_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundEmphasisOffer_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundEmphasisOffer_Item (value: CompoundEmphasisOffer_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundEmphasisOffer_Item) { _cached_encoder_for_CompoundEmphasisOffer_Item = $._encode_choice<CompoundEmphasisOffer_Item>({
    "placeholder": $._encodeNull,
    "multiOfferSingleSubAttr": $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER),
}, $.BER); }
    return _cached_encoder_for_CompoundEmphasisOffer_Item(value, elGetter);
}


/* eslint-enable */
