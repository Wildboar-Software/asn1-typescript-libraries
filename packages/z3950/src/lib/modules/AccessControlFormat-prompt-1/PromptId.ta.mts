/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PromptId_enummeratedPrompt, _decode_PromptId_enummeratedPrompt, _encode_PromptId_enummeratedPrompt } from "../AccessControlFormat-prompt-1/PromptId-enummeratedPrompt.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary PromptId
 * @description
 * 
 * Correlates a prompt with its answer (ASN1.9.1 comments 1 and 6). The server
 * sends an enumerated number or a non-enumerated string; the client returns the
 * same value.
 * 
 * - enummeratedPrompt: one of the registered prompt ids (the standard spells it
 *   with two m's), plus an optional suggested string.
 * - nonEnumeratedPrompt: the prompt string. On a response to such a prompt,
 *   echo the string from the challenge.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptId  ::=  CHOICE {
 *     enummeratedPrompt   [1] IMPLICIT SEQUENCE {
 *         type        [1] IMPLICIT INTEGER {
 *             groupId           (0),
 *             userId            (1),
 *             password          (2),
 *             newPassword       (3),
 *             copyright         (4),
 *             -- See comment 7
 *             sessionId         (5)
 *         },
 *     suggestedString [2] IMPLICIT InternationalString OPTIONAL},
 *     nonEnumeratedPrompt [2] IMPLICIT InternationalString
 * }
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
