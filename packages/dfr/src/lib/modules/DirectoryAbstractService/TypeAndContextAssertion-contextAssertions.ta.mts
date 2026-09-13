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
import { ContextAssertion, _decode_ContextAssertion, _encode_ContextAssertion } from "../InformationFramework/ContextAssertion.ta.mjs";
// export { ContextAssertion, _decode_ContextAssertion, _encode_ContextAssertion } from "../InformationFramework/ContextAssertion.ta.mjs";


/**
 * @summary TypeAndContextAssertion_contextAssertions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeAndContextAssertion-contextAssertions ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TypeAndContextAssertion_contextAssertions =
    { preference: ContextAssertion[] } /* CHOICE_ALT_ROOT */
    | { all: ContextAssertion[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TypeAndContextAssertion_contextAssertions: $.ASN1Decoder<TypeAndContextAssertion_contextAssertions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeAndContextAssertion_contextAssertions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeAndContextAssertion_contextAssertions (el: _Element): TypeAndContextAssertion_contextAssertions {
    if (!_cached_decoder_for_TypeAndContextAssertion_contextAssertions) { _cached_decoder_for_TypeAndContextAssertion_contextAssertions = $._decode_extensible_choice<TypeAndContextAssertion_contextAssertions>({
    "UNIVERSAL 16": [ "preference", $._decodeSequenceOf<ContextAssertion>(() => _decode_ContextAssertion) ],
    "UNIVERSAL 17": [ "all", $._decodeSetOf<ContextAssertion>(() => _decode_ContextAssertion) ]
}); }
    return _cached_decoder_for_TypeAndContextAssertion_contextAssertions(el);
}

let _cached_encoder_for_TypeAndContextAssertion_contextAssertions: $.ASN1Encoder<TypeAndContextAssertion_contextAssertions> | null = null;

/**
 * @summary Encodes a(n) TypeAndContextAssertion_contextAssertions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeAndContextAssertion_contextAssertions, encoded as an ASN.1 Element.
 */
export
function _encode_TypeAndContextAssertion_contextAssertions (value: TypeAndContextAssertion_contextAssertions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeAndContextAssertion_contextAssertions) { _cached_encoder_for_TypeAndContextAssertion_contextAssertions = $._encode_choice<TypeAndContextAssertion_contextAssertions>({
    "preference": $._encodeSequenceOf<ContextAssertion>(() => _encode_ContextAssertion, $.BER),
    "all": $._encodeSetOf<ContextAssertion>(() => _encode_ContextAssertion, $.BER),
}, $.BER); }
    return _cached_encoder_for_TypeAndContextAssertion_contextAssertions(value, elGetter);
}


/* eslint-enable */
