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
import { IMSSubscriberIDs, _decode_IMSSubscriberIDs, _encode_IMSSubscriberIDs } from "../TS33128Payloads/IMSSubscriberIDs.ta.mjs";
// export { IMSSubscriberIDs, _decode_IMSSubscriberIDs, _encode_IMSSubscriberIDs } from "../TS33128Payloads/IMSSubscriberIDs.ta.mjs";


/**
 * @summary TranslationInput
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TranslationInput  ::=  CHOICE
 * {
 *     iMSIdentities [1] IMSSubscriberIDs
 * }
 * ```
 */
export
type TranslationInput =
    { iMSIdentities: IMSSubscriberIDs } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TranslationInput: $.ASN1Decoder<TranslationInput> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TranslationInput
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TranslationInput (el: _Element): TranslationInput {
    if (!_cached_decoder_for_TranslationInput) { _cached_decoder_for_TranslationInput = $._decode_inextensible_choice<TranslationInput>({
    "CONTEXT 1": [ "iMSIdentities", $._decode_explicit<IMSSubscriberIDs>(() => _decode_IMSSubscriberIDs) ]
}); }
    return _cached_decoder_for_TranslationInput(el);
}

let _cached_encoder_for_TranslationInput: $.ASN1Encoder<TranslationInput> | null = null;

/**
 * @summary Encodes a(n) TranslationInput into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TranslationInput, encoded as an ASN.1 Element.
 */
export
function _encode_TranslationInput (value: TranslationInput, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TranslationInput) { _cached_encoder_for_TranslationInput = $._encode_choice<TranslationInput>({
    "iMSIdentities": $._encode_explicit(_TagClass.context, 1, () => _encode_IMSSubscriberIDs, $.BER),
}, $.BER); }
    return _cached_encoder_for_TranslationInput(value, elGetter);
}


/* eslint-enable */
