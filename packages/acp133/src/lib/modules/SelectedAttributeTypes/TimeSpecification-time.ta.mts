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
import { TimeSpecification_time_absolute, _decode_TimeSpecification_time_absolute, _encode_TimeSpecification_time_absolute } from "../SelectedAttributeTypes/TimeSpecification-time-absolute.ta.mjs";
// export { TimeSpecification_time_absolute, _decode_TimeSpecification_time_absolute, _encode_TimeSpecification_time_absolute } from "../SelectedAttributeTypes/TimeSpecification-time-absolute.ta.mjs";
import { Period, _decode_Period, _encode_Period } from "../SelectedAttributeTypes/Period.ta.mjs";
// export { Period, _decode_Period, _encode_Period } from "../SelectedAttributeTypes/Period.ta.mjs";


/**
 * @summary TimeSpecification_time
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeSpecification-time ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TimeSpecification_time =
    { absolute: TimeSpecification_time_absolute } /* CHOICE_ALT_ROOT */
    | { periodic: Period[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TimeSpecification_time: $.ASN1Decoder<TimeSpecification_time> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeSpecification_time
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeSpecification_time (el: _Element): TimeSpecification_time {
    if (!_cached_decoder_for_TimeSpecification_time) { _cached_decoder_for_TimeSpecification_time = $._decode_inextensible_choice<TimeSpecification_time>({
    "UNIVERSAL 16": [ "absolute", _decode_TimeSpecification_time_absolute ],
    "UNIVERSAL 17": [ "periodic", $._decodeSetOf<Period>(() => _decode_Period) ]
}); }
    return _cached_decoder_for_TimeSpecification_time(el);
}

let _cached_encoder_for_TimeSpecification_time: $.ASN1Encoder<TimeSpecification_time> | null = null;

/**
 * @summary Encodes a(n) TimeSpecification_time into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeSpecification_time, encoded as an ASN.1 Element.
 */
export
function _encode_TimeSpecification_time (value: TimeSpecification_time, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeSpecification_time) { _cached_encoder_for_TimeSpecification_time = $._encode_choice<TimeSpecification_time>({
    "absolute": _encode_TimeSpecification_time_absolute,
    "periodic": $._encodeSetOf<Period>(() => _encode_Period, $.BER),
}, $.BER); }
    return _cached_encoder_for_TimeSpecification_time(value, elGetter);
}


/* eslint-enable */
