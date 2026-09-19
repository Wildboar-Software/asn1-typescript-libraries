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
import { Period_months_bitMonth, Period_months_bitMonth_january /* IMPORTED_LONG_NAMED_BIT */, january /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_february /* IMPORTED_LONG_NAMED_BIT */, february /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_march /* IMPORTED_LONG_NAMED_BIT */, march /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_april /* IMPORTED_LONG_NAMED_BIT */, april /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_may /* IMPORTED_LONG_NAMED_BIT */, may /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_june /* IMPORTED_LONG_NAMED_BIT */, june /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_july /* IMPORTED_LONG_NAMED_BIT */, july /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_august /* IMPORTED_LONG_NAMED_BIT */, august /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_september /* IMPORTED_LONG_NAMED_BIT */, september /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_october /* IMPORTED_LONG_NAMED_BIT */, october /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_november /* IMPORTED_LONG_NAMED_BIT */, november /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_december /* IMPORTED_LONG_NAMED_BIT */, december /* IMPORTED_SHORT_NAMED_BIT */, _decode_Period_months_bitMonth, _encode_Period_months_bitMonth } from "../SelectedAttributeTypes/Period-months-bitMonth.ta.mjs";
// export { Period_months_bitMonth, Period_months_bitMonth_january /* IMPORTED_LONG_NAMED_BIT */, january /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_february /* IMPORTED_LONG_NAMED_BIT */, february /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_march /* IMPORTED_LONG_NAMED_BIT */, march /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_april /* IMPORTED_LONG_NAMED_BIT */, april /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_may /* IMPORTED_LONG_NAMED_BIT */, may /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_june /* IMPORTED_LONG_NAMED_BIT */, june /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_july /* IMPORTED_LONG_NAMED_BIT */, july /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_august /* IMPORTED_LONG_NAMED_BIT */, august /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_september /* IMPORTED_LONG_NAMED_BIT */, september /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_october /* IMPORTED_LONG_NAMED_BIT */, october /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_november /* IMPORTED_LONG_NAMED_BIT */, november /* IMPORTED_SHORT_NAMED_BIT */, Period_months_bitMonth_december /* IMPORTED_LONG_NAMED_BIT */, december /* IMPORTED_SHORT_NAMED_BIT */, _decode_Period_months_bitMonth, _encode_Period_months_bitMonth } from "../SelectedAttributeTypes/Period-months-bitMonth.ta.mjs";


/**
 * @summary Period_months
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-months ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Period_months =
    { allMonths: NULL } /* CHOICE_ALT_ROOT */
    | { intMonth: INTEGER[] } /* CHOICE_ALT_ROOT */
    | { bitMonth: Period_months_bitMonth } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Period_months: $.ASN1Decoder<Period_months> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period_months
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Period_months (el: _Element): Period_months {
    if (!_cached_decoder_for_Period_months) { _cached_decoder_for_Period_months = $._decode_extensible_choice<Period_months>({
    "UNIVERSAL 5": [ "allMonths", $._decodeNull ],
    "UNIVERSAL 17": [ "intMonth", $._decodeSetOf<INTEGER>(() => $._decodeInteger) ],
    "UNIVERSAL 3": [ "bitMonth", _decode_Period_months_bitMonth ]
}); }
    return _cached_decoder_for_Period_months(el);
}

let _cached_encoder_for_Period_months: $.ASN1Encoder<Period_months> | null = null;

/**
 * @summary Encodes a(n) Period_months into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_months, encoded as an ASN.1 Element.
 */
export
function _encode_Period_months (value: Period_months, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Period_months) { _cached_encoder_for_Period_months = $._encode_choice<Period_months>({
    "allMonths": $._encodeNull,
    "intMonth": $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER),
    "bitMonth": _encode_Period_months_bitMonth,
}, $.BER); }
    return _cached_encoder_for_Period_months(value, elGetter);
}


/* eslint-enable */
