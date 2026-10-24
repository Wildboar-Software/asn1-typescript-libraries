/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CancelSessionResponseOk, _decode_CancelSessionResponseOk, _encode_CancelSessionResponseOk } from "@wildboar/sgp22/RSPDefinitions";
import { CancelSessionResponse_cancelSessionResponseError, _decode_CancelSessionResponse_cancelSessionResponseError, _encode_CancelSessionResponse_cancelSessionResponseError } from "../SGP32Definitions/CancelSessionResponse-cancelSessionResponseError.ta.mjs";
import { CompactCancelSessionResponseOk, _decode_CompactCancelSessionResponseOk, _encode_CompactCancelSessionResponseOk } from "../SGP32Definitions/CompactCancelSessionResponseOk.ta.mjs";


/**
 * @summary CancelSessionResponse
 * @description
 *
 * ES10b.CancelSession response, extended with a compact success form for
 * ESipa. The function matches SGP.22 section 5.7.14, and the eUICC revokes any
 * grant to immediately enable a Profile. CancelSessionReason values
 * endUserRejection(0), postponed(1), and timeout(2) are unused in SGP.32.
 *
 * The eUICC builds euiccCancelSessionSigned from the Transaction ID and the
 * reason, and computes euiccCancelSessionSignature over that object with
 * SK.EUICC.ECDSA for the CI public key identified by
 * euiccCiPKIdentifierToBeUsed during common mutual authentication. If the
 * reason is undefinedReason, the IPAd ignores the eUICC response and stops.
 *
 * Select cancelSessionResponseOk for the full success form,
 * compactCancelSessionResponseOk when an IPA with minimizeEsipaBytes
 * re-encodes that success, and cancelSessionResponseError for an eUICC error.
 *
 * SGP.32 v1.2, sections 3.2.3.3, 5.9.9, and 5.14.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponse  ::=  [65] CHOICE { -- Tag 'BF41'
 *     cancelSessionResponseOk CancelSessionResponseOk,
 *     cancelSessionResponseError INTEGER {invalidTransactionId(5), undefinedError(127)},
 *     compactCancelSessionResponseOk CompactCancelSessionResponseOk
 * }
 * ```
 */
export
type CancelSessionResponse =
    { cancelSessionResponseOk: CancelSessionResponseOk } /* CHOICE_ALT_ROOT */
    | { cancelSessionResponseError: CancelSessionResponse_cancelSessionResponseError } /* CHOICE_ALT_ROOT */
    | { compactCancelSessionResponseOk: CompactCancelSessionResponseOk } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelSessionResponse: $.ASN1Decoder<CancelSessionResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionResponse (el: _Element): CancelSessionResponse {
    if (!_cached_decoder_for_CancelSessionResponse) { _cached_decoder_for_CancelSessionResponse = $._decode_explicit<CancelSessionResponse>(() => $._decode_inextensible_choice<CancelSessionResponse>({
    "CONTEXT 0": [ "cancelSessionResponseOk", _decode_CancelSessionResponseOk ],
    "CONTEXT 1": [ "cancelSessionResponseError", _decode_CancelSessionResponse_cancelSessionResponseError ],
    "CONTEXT 2": [ "compactCancelSessionResponseOk", _decode_CompactCancelSessionResponseOk ]
})); }
    return _cached_decoder_for_CancelSessionResponse(el);
}

let _cached_encoder_for_CancelSessionResponse: $.ASN1Encoder<CancelSessionResponse> | null = null;

/**
 * @summary Encodes a(n) CancelSessionResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionResponse, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionResponse (value: CancelSessionResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionResponse) { _cached_encoder_for_CancelSessionResponse = $._encode_explicit(_TagClass.context, 65, () => $._encode_choice<CancelSessionResponse>({
    "cancelSessionResponseOk": _encode_CancelSessionResponseOk,
    "cancelSessionResponseError": _encode_CancelSessionResponse_cancelSessionResponseError,
    "compactCancelSessionResponseOk": _encode_CompactCancelSessionResponseOk,
}, $.BER), $.BER); }
    return _cached_encoder_for_CancelSessionResponse(value, elGetter);
}


/* eslint-enable */
