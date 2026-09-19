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
import { Period_weeks_bitWeek, Period_weeks_bitWeek_week1 /* IMPORTED_LONG_NAMED_BIT */, week1 /* IMPORTED_SHORT_NAMED_BIT */, Period_weeks_bitWeek_week2 /* IMPORTED_LONG_NAMED_BIT */, week2 /* IMPORTED_SHORT_NAMED_BIT */, Period_weeks_bitWeek_week3 /* IMPORTED_LONG_NAMED_BIT */, week3 /* IMPORTED_SHORT_NAMED_BIT */, Period_weeks_bitWeek_week4 /* IMPORTED_LONG_NAMED_BIT */, week4 /* IMPORTED_SHORT_NAMED_BIT */, Period_weeks_bitWeek_week5 /* IMPORTED_LONG_NAMED_BIT */, week5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_Period_weeks_bitWeek, _encode_Period_weeks_bitWeek } from "../SelectedAttributeTypes/Period-weeks-bitWeek.ta.mjs";
// export { Period_weeks_bitWeek, Period_weeks_bitWeek_week1 /* IMPORTED_LONG_NAMED_BIT */, week1 /* IMPORTED_SHORT_NAMED_BIT */, Period_weeks_bitWeek_week2 /* IMPORTED_LONG_NAMED_BIT */, week2 /* IMPORTED_SHORT_NAMED_BIT */, Period_weeks_bitWeek_week3 /* IMPORTED_LONG_NAMED_BIT */, week3 /* IMPORTED_SHORT_NAMED_BIT */, Period_weeks_bitWeek_week4 /* IMPORTED_LONG_NAMED_BIT */, week4 /* IMPORTED_SHORT_NAMED_BIT */, Period_weeks_bitWeek_week5 /* IMPORTED_LONG_NAMED_BIT */, week5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_Period_weeks_bitWeek, _encode_Period_weeks_bitWeek } from "../SelectedAttributeTypes/Period-weeks-bitWeek.ta.mjs";


/**
 * @summary Period_weeks
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-weeks ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Period_weeks =
    { allWeeks: NULL } /* CHOICE_ALT_ROOT */
    | { intWeek: INTEGER[] } /* CHOICE_ALT_ROOT */
    | { bitWeek: Period_weeks_bitWeek } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Period_weeks: $.ASN1Decoder<Period_weeks> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period_weeks
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Period_weeks (el: _Element): Period_weeks {
    if (!_cached_decoder_for_Period_weeks) { _cached_decoder_for_Period_weeks = $._decode_extensible_choice<Period_weeks>({
    "UNIVERSAL 5": [ "allWeeks", $._decodeNull ],
    "UNIVERSAL 17": [ "intWeek", $._decodeSetOf<INTEGER>(() => $._decodeInteger) ],
    "UNIVERSAL 3": [ "bitWeek", _decode_Period_weeks_bitWeek ]
}); }
    return _cached_decoder_for_Period_weeks(el);
}

let _cached_encoder_for_Period_weeks: $.ASN1Encoder<Period_weeks> | null = null;

/**
 * @summary Encodes a(n) Period_weeks into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_weeks, encoded as an ASN.1 Element.
 */
export
function _encode_Period_weeks (value: Period_weeks, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Period_weeks) { _cached_encoder_for_Period_weeks = $._encode_choice<Period_weeks>({
    "allWeeks": $._encodeNull,
    "intWeek": $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER),
    "bitWeek": _encode_Period_weeks_bitWeek,
}, $.BER); }
    return _cached_encoder_for_Period_weeks(value, elGetter);
}


/* eslint-enable */
