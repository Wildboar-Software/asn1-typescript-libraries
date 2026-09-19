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
import { PromptId_enummeratedPrompt, _decode_PromptId_enummeratedPrompt, _encode_PromptId_enummeratedPrompt } from "../AccessControlFormat-Prompt-1/PromptId-enummeratedPrompt.ta.mjs";
// export { PromptId_enummeratedPrompt, _decode_PromptId_enummeratedPrompt, _encode_PromptId_enummeratedPrompt } from "../AccessControlFormat-Prompt-1/PromptId-enummeratedPrompt.ta.mjs";


/**
 * @summary PromptId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptId  ::=  CHOICE{
 *    enummeratedPrompt      [1] IMPLICIT SEQUENCE{
 *                                  type                  [1] IMPLICIT INTEGER{
 *                                                                  groupId      (0),
 *                                                                  userId       (1),
 *                                                                  password     (2),
 *                                                                  newPassword  (3),
 *                                                                  copyright    (4),
 *                                           -- When type on Challenge is
 *                                           -- 'copyright', promptInfo has text of
 *                                           -- copyright message to be displayed
 *                                           -- verbatim to the user. If
 *                                           -- promptResponse indicates
 *                                           -- 'acceptance', this indicates the
 *                                           -- user has been shown, and accepted,
 *                                           -- the terms of the copyright. This is
 *                                           -- not intended to be legally binding,
 *                                           -- but provides a good-faith attempt
 *                                           -- on the part of the target to inform
 *                                           -- the user of the copyright.
 *                                                                  sessionId    (5)},
 *                                  suggestedString       [2] IMPLICIT
 *                                              InternationalString OPTIONAL},
 *     nonEnumeratedPrompt   [2] IMPLICIT InternationalString}
 * ```
 */
export
type PromptId =
    { enummeratedPrompt: PromptId_enummeratedPrompt } /* CHOICE_ALT_ROOT */
    | { nonEnumeratedPrompt: InternationalString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PromptId: $.ASN1Decoder<PromptId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PromptId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PromptId (el: _Element): PromptId {
    if (!_cached_decoder_for_PromptId) { _cached_decoder_for_PromptId = $._decode_inextensible_choice<PromptId>({
    "CONTEXT 1": [ "enummeratedPrompt", $._decode_implicit<PromptId_enummeratedPrompt>(() => _decode_PromptId_enummeratedPrompt) ],
    "CONTEXT 2": [ "nonEnumeratedPrompt", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ]
}); }
    return _cached_decoder_for_PromptId(el);
}

let _cached_encoder_for_PromptId: $.ASN1Encoder<PromptId> | null = null;

/**
 * @summary Encodes a(n) PromptId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PromptId, encoded as an ASN.1 Element.
 */
export
function _encode_PromptId (value: PromptId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PromptId) { _cached_encoder_for_PromptId = $._encode_choice<PromptId>({
    "enummeratedPrompt": $._encode_implicit(_TagClass.context, 1, () => _encode_PromptId_enummeratedPrompt, $.BER),
    "nonEnumeratedPrompt": $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER),
}, $.BER); }
    return _cached_encoder_for_PromptId(value, elGetter);
}


/* eslint-enable */
