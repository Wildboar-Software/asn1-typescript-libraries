/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
// export { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
import { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
// export { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
import { AuditResult, _decode_AuditResult, _encode_AuditResult } from "../MEDIA-GATEWAY-CONTROL/AuditResult.ta.mjs";
// export { AuditResult, _decode_AuditResult, _encode_AuditResult } from "../MEDIA-GATEWAY-CONTROL/AuditResult.ta.mjs";
import { TermListAuditResult, _decode_TermListAuditResult, _encode_TermListAuditResult } from "../MEDIA-GATEWAY-CONTROL/TermListAuditResult.ta.mjs";
// export { TermListAuditResult, _decode_TermListAuditResult, _encode_TermListAuditResult } from "../MEDIA-GATEWAY-CONTROL/TermListAuditResult.ta.mjs";


/**
 * @summary AuditReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditReply  ::=  CHOICE
 *     {
 *         contextAuditResult            [0] TerminationIDList,
 *         error                        [1] ErrorDescriptor,
 *         auditResult                    [2] AuditResult,
 *         ...,
 *         auditResultTermList            [3] TermListAuditResult
 *     }
 * ```
 */
export
type AuditReply =
    { contextAuditResult: TerminationIDList } /* CHOICE_ALT_ROOT */
    | { error: ErrorDescriptor } /* CHOICE_ALT_ROOT */
    | { auditResult: AuditResult } /* CHOICE_ALT_ROOT */
    | { auditResultTermList: TermListAuditResult } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AuditReply: $.ASN1Decoder<AuditReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditReply
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditReply (el: _Element): AuditReply {
    if (!_cached_decoder_for_AuditReply) { _cached_decoder_for_AuditReply = $._decode_extensible_choice<AuditReply>({
    "CONTEXT 0": [ "contextAuditResult", $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList) ],
    "CONTEXT 1": [ "error", $._decode_implicit<ErrorDescriptor>(() => _decode_ErrorDescriptor) ],
    "CONTEXT 2": [ "auditResult", $._decode_implicit<AuditResult>(() => _decode_AuditResult) ],
    "CONTEXT 3": [ "auditResultTermList", $._decode_implicit<TermListAuditResult>(() => _decode_TermListAuditResult) ]
}); }
    return _cached_decoder_for_AuditReply(el);
}

let _cached_encoder_for_AuditReply: $.ASN1Encoder<AuditReply> | null = null;

/**
 * @summary Encodes a(n) AuditReply into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditReply, encoded as an ASN.1 Element.
 */
export
function _encode_AuditReply (value: AuditReply, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditReply) { _cached_encoder_for_AuditReply = $._encode_choice<AuditReply>({
    "contextAuditResult": $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationIDList, $.BER),
    "error": $._encode_implicit(_TagClass.context, 1, () => _encode_ErrorDescriptor, $.BER),
    "auditResult": $._encode_implicit(_TagClass.context, 2, () => _encode_AuditResult, $.BER),
    "auditResultTermList": $._encode_implicit(_TagClass.context, 3, () => _encode_TermListAuditResult, $.BER),
}, $.BER); }
    return _cached_encoder_for_AuditReply(value, elGetter);
}


/* eslint-enable */
