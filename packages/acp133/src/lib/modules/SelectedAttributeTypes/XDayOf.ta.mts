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
import { NamedDay, _decode_NamedDay, _encode_NamedDay } from "../SelectedAttributeTypes/NamedDay.ta.mjs";
// export { NamedDay, _decode_NamedDay, _encode_NamedDay } from "../SelectedAttributeTypes/NamedDay.ta.mjs";


/**
 * @summary XDayOf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XDayOf  ::=  CHOICE {
 *   first   [1]  NamedDay,
 *   second  [2]  NamedDay,
 *   third   [3]  NamedDay,
 *   fourth  [4]  NamedDay,
 *   fifth   [5]  NamedDay }
 * ```
 */
export
type XDayOf =
    { first: NamedDay } /* CHOICE_ALT_ROOT */
    | { second: NamedDay } /* CHOICE_ALT_ROOT */
    | { third: NamedDay } /* CHOICE_ALT_ROOT */
    | { fourth: NamedDay } /* CHOICE_ALT_ROOT */
    | { fifth: NamedDay } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_XDayOf: $.ASN1Decoder<XDayOf> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) XDayOf
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_XDayOf (el: _Element): XDayOf {
    if (!_cached_decoder_for_XDayOf) { _cached_decoder_for_XDayOf = $._decode_inextensible_choice<XDayOf>({
    "CONTEXT 1": [ "first", $._decode_explicit<NamedDay>(() => _decode_NamedDay) ],
    "CONTEXT 2": [ "second", $._decode_explicit<NamedDay>(() => _decode_NamedDay) ],
    "CONTEXT 3": [ "third", $._decode_explicit<NamedDay>(() => _decode_NamedDay) ],
    "CONTEXT 4": [ "fourth", $._decode_explicit<NamedDay>(() => _decode_NamedDay) ],
    "CONTEXT 5": [ "fifth", $._decode_explicit<NamedDay>(() => _decode_NamedDay) ]
}); }
    return _cached_decoder_for_XDayOf(el);
}

let _cached_encoder_for_XDayOf: $.ASN1Encoder<XDayOf> | null = null;

/**
 * @summary Encodes a(n) XDayOf into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XDayOf, encoded as an ASN.1 Element.
 */
export
function _encode_XDayOf (value: XDayOf, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_XDayOf) { _cached_encoder_for_XDayOf = $._encode_choice<XDayOf>({
    "first": $._encode_explicit(_TagClass.context, 1, () => _encode_NamedDay, $.BER),
    "second": $._encode_explicit(_TagClass.context, 2, () => _encode_NamedDay, $.BER),
    "third": $._encode_explicit(_TagClass.context, 3, () => _encode_NamedDay, $.BER),
    "fourth": $._encode_explicit(_TagClass.context, 4, () => _encode_NamedDay, $.BER),
    "fifth": $._encode_explicit(_TagClass.context, 5, () => _encode_NamedDay, $.BER),
}, $.BER); }
    return _cached_encoder_for_XDayOf(value, elGetter);
}


/* eslint-enable */
