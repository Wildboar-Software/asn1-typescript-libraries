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
import { TimeOffer_Item_value, _decode_TimeOffer_Item_value, _encode_TimeOffer_Item_value } from "../DEV/TimeOffer-Item-value.ta.mjs";
// export { TimeOffer_Item_value, _decode_TimeOffer_Item_value, _encode_TimeOffer_Item_value } from "../DEV/TimeOffer-Item-value.ta.mjs";
import { TimeOffer_Item_range, _decode_TimeOffer_Item_range, _encode_TimeOffer_Item_range } from "../DEV/TimeOffer-Item-range.ta.mjs";
// export { TimeOffer_Item_range, _decode_TimeOffer_Item_range, _encode_TimeOffer_Item_range } from "../DEV/TimeOffer-Item-range.ta.mjs";


/**
 * @summary TimeOffer_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeOffer-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TimeOffer_Item =
    { value: TimeOffer_Item_value } /* CHOICE_ALT_ROOT */
    | { range: TimeOffer_Item_range } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TimeOffer_Item: $.ASN1Decoder<TimeOffer_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeOffer_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeOffer_Item (el: _Element): TimeOffer_Item {
    if (!_cached_decoder_for_TimeOffer_Item) { _cached_decoder_for_TimeOffer_Item = $._decode_inextensible_choice<TimeOffer_Item>({
    "CONTEXT 0": [ "value", $._decode_implicit<TimeOffer_Item_value>(() => _decode_TimeOffer_Item_value) ],
    "CONTEXT 1": [ "range", $._decode_implicit<TimeOffer_Item_range>(() => _decode_TimeOffer_Item_range) ]
}); }
    return _cached_decoder_for_TimeOffer_Item(el);
}

let _cached_encoder_for_TimeOffer_Item: $.ASN1Encoder<TimeOffer_Item> | null = null;

/**
 * @summary Encodes a(n) TimeOffer_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeOffer_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TimeOffer_Item (value: TimeOffer_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeOffer_Item) { _cached_encoder_for_TimeOffer_Item = $._encode_choice<TimeOffer_Item>({
    "value": $._encode_implicit(_TagClass.context, 0, () => _encode_TimeOffer_Item_value, $.BER),
    "range": $._encode_implicit(_TagClass.context, 1, () => _encode_TimeOffer_Item_range, $.BER),
}, $.BER); }
    return _cached_encoder_for_TimeOffer_Item(value, elGetter);
}


/* eslint-enable */
