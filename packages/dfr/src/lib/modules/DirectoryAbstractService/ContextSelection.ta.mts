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
import { TypeAndContextAssertion, _decode_TypeAndContextAssertion, _encode_TypeAndContextAssertion } from "../DirectoryAbstractService/TypeAndContextAssertion.ta.mjs";
// export { TypeAndContextAssertion, _decode_TypeAndContextAssertion, _encode_TypeAndContextAssertion } from "../DirectoryAbstractService/TypeAndContextAssertion.ta.mjs";


/**
 * @summary ContextSelection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextSelection  ::=  CHOICE {
 *   allContexts       NULL,
 *   selectedContexts  SET SIZE (1..MAX) OF TypeAndContextAssertion,
 *   ... }
 * ```
 */
export
type ContextSelection =
    { allContexts: NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: TypeAndContextAssertion[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ContextSelection: $.ASN1Decoder<ContextSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextSelection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContextSelection (el: _Element): ContextSelection {
    if (!_cached_decoder_for_ContextSelection) { _cached_decoder_for_ContextSelection = $._decode_extensible_choice<ContextSelection>({
    "UNIVERSAL 5": [ "allContexts", $._decodeNull ],
    "UNIVERSAL 17": [ "selectedContexts", $._decodeSetOf<TypeAndContextAssertion>(() => _decode_TypeAndContextAssertion) ]
}); }
    return _cached_decoder_for_ContextSelection(el);
}

let _cached_encoder_for_ContextSelection: $.ASN1Encoder<ContextSelection> | null = null;

/**
 * @summary Encodes a(n) ContextSelection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextSelection, encoded as an ASN.1 Element.
 */
export
function _encode_ContextSelection (value: ContextSelection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContextSelection) { _cached_encoder_for_ContextSelection = $._encode_choice<ContextSelection>({
    "allContexts": $._encodeNull,
    "selectedContexts": $._encodeSetOf<TypeAndContextAssertion>(() => _encode_TypeAndContextAssertion, $.BER),
}, $.BER); }
    return _cached_encoder_for_ContextSelection(value, elGetter);
}


/* eslint-enable */
