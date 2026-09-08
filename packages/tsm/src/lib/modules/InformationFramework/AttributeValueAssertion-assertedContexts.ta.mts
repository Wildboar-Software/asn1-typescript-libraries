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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ContextAssertion, _decode_ContextAssertion, _encode_ContextAssertion } from "../InformationFramework/ContextAssertion.ta.mjs";
// export { ContextAssertion, _decode_ContextAssertion, _encode_ContextAssertion } from "../InformationFramework/ContextAssertion.ta.mjs";


/**
 * @summary AttributeValueAssertion_assertedContexts
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeValueAssertion-assertedContexts ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AttributeValueAssertion_assertedContexts =
    { allContexts: NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: ContextAssertion[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeValueAssertion_assertedContexts: $.ASN1Decoder<AttributeValueAssertion_assertedContexts> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion_assertedContexts
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeValueAssertion_assertedContexts (el: _Element): AttributeValueAssertion_assertedContexts {
    if (!_cached_decoder_for_AttributeValueAssertion_assertedContexts) { _cached_decoder_for_AttributeValueAssertion_assertedContexts = $._decode_inextensible_choice<AttributeValueAssertion_assertedContexts>({
    "CONTEXT 0": [ "allContexts", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "selectedContexts", $._decode_implicit<ContextAssertion[]>(() => $._decodeSetOf<ContextAssertion>(() => _decode_ContextAssertion)) ]
}); }
    return _cached_decoder_for_AttributeValueAssertion_assertedContexts(el);
}

let _cached_encoder_for_AttributeValueAssertion_assertedContexts: $.ASN1Encoder<AttributeValueAssertion_assertedContexts> | null = null;

/**
 * @summary Encodes a(n) AttributeValueAssertion_assertedContexts into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion_assertedContexts, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeValueAssertion_assertedContexts (value: AttributeValueAssertion_assertedContexts, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeValueAssertion_assertedContexts) { _cached_encoder_for_AttributeValueAssertion_assertedContexts = $._encode_choice<AttributeValueAssertion_assertedContexts>({
    "allContexts": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "selectedContexts": $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<ContextAssertion>(() => _encode_ContextAssertion, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeValueAssertion_assertedContexts(value, elGetter);
}


/* eslint-enable */
