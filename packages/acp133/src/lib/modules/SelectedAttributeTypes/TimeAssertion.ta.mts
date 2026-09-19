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
import { TimeAssertion_between, _decode_TimeAssertion_between, _encode_TimeAssertion_between } from "../SelectedAttributeTypes/TimeAssertion-between.ta.mjs";
// export { TimeAssertion_between, _decode_TimeAssertion_between, _encode_TimeAssertion_between } from "../SelectedAttributeTypes/TimeAssertion-between.ta.mjs";


/**
 * @summary TimeAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeAssertion  ::=  CHOICE {
 *   now             NULL,
 *   at              GeneralizedTime,
 *   between         SEQUENCE {
 *     startTime  [0]  GeneralizedTime,
 *     endTime    [1]  GeneralizedTime OPTIONAL,
 *     entirely        BOOLEAN DEFAULT FALSE,
 *     ...},
 *   ... }
 * ```
 */
export
type TimeAssertion =
    { now: NULL } /* CHOICE_ALT_ROOT */
    | { at: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { between: TimeAssertion_between } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TimeAssertion: $.ASN1Decoder<TimeAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeAssertion (el: _Element): TimeAssertion {
    if (!_cached_decoder_for_TimeAssertion) { _cached_decoder_for_TimeAssertion = $._decode_extensible_choice<TimeAssertion>({
    "UNIVERSAL 5": [ "now", $._decodeNull ],
    "UNIVERSAL 24": [ "at", $._decodeGeneralizedTime ],
    "UNIVERSAL 16": [ "between", _decode_TimeAssertion_between ]
}); }
    return _cached_decoder_for_TimeAssertion(el);
}

let _cached_encoder_for_TimeAssertion: $.ASN1Encoder<TimeAssertion> | null = null;

/**
 * @summary Encodes a(n) TimeAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_TimeAssertion (value: TimeAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeAssertion) { _cached_encoder_for_TimeAssertion = $._encode_choice<TimeAssertion>({
    "now": $._encodeNull,
    "at": $._encodeGeneralizedTime,
    "between": _encode_TimeAssertion_between,
}, $.BER); }
    return _cached_encoder_for_TimeAssertion(value, elGetter);
}


/* eslint-enable */
