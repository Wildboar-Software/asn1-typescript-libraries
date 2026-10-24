/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Invoke, _decode_Invoke, _encode_Invoke } from "../PSS1-Service-APDUs-asn1-97/Invoke.ta.mjs";
import { ReturnResult, _decode_ReturnResult, _encode_ReturnResult } from "../PSS1-Service-APDUs-asn1-97/ReturnResult.ta.mjs";
import { ReturnError, _decode_ReturnError, _encode_ReturnError } from "../PSS1-Service-APDUs-asn1-97/ReturnError.ta.mjs";
import { Reject, _decode_Reject, _encode_Reject } from "../PSS1-Service-APDUs-asn1-97/Reject.ta.mjs";

/**
 * @summary RoseAPDU
 * @description
 *
 * One ROSE APDU in a Facility information element, or inside a DSE
 * remote-operations portion (ECMA-165 §6.4, §11.3.3.4). `invoke` requests an
 * operation. `returnResult` reports success. `returnError` reports an error the
 * operation defines. `reject` reports that the APDU itself is unacceptable
 * (Annex G). When the protocol profile is ROSE, the Coordination Function
 * delivers these APDUs to ROSE, skipping a leading Interpretation APDU
 * (§8.1.2). A value that does not conform to this choice is rejected as
 * `general-unrecognisedPDU`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoseAPDU {
 *     InvokeId: InvokeIdSet,
 *     OPERATION: Invokable,
 *     OPERATION: Returnable
 * }  ::=  CHOICE {
 *     invoke [1] Invoke {{InvokeIdSet}, {Invokable}},
 *     returnResult [2] ReturnResult {{Returnable}},
 *     returnError [3] ReturnError {{ Errors {{Returnable}} }},
 *     reject [4] Reject
 * }
 *     (
 *         CONSTRAINED BY {
 *             -- must conform to the above definition --
 *         }
 *         ! RejectProblem: general-unrecognisedPDU
 *     )
 * ```
 */
export
type RoseAPDU =
    { invoke: Invoke } /* CHOICE_ALT_ROOT */
    | { returnResult: ReturnResult } /* CHOICE_ALT_ROOT */
    | { returnError: ReturnError } /* CHOICE_ALT_ROOT */
    | { reject: Reject } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RoseAPDU: $.ASN1Decoder<RoseAPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoseAPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoseAPDU (el: _Element): RoseAPDU {
    if (!_cached_decoder_for_RoseAPDU) { _cached_decoder_for_RoseAPDU = $._decode_inextensible_choice<RoseAPDU>({
    "CONTEXT 1": [ "invoke", $._decode_implicit<Invoke>(() => _decode_Invoke) ],
    "CONTEXT 2": [ "returnResult", $._decode_implicit<ReturnResult>(() => _decode_ReturnResult) ],
    "CONTEXT 3": [ "returnError", $._decode_implicit<ReturnError>(() => _decode_ReturnError) ],
    "CONTEXT 4": [ "reject", $._decode_implicit<Reject>(() => _decode_Reject) ]
}); }
    return _cached_decoder_for_RoseAPDU(el);
}

let _cached_encoder_for_RoseAPDU: $.ASN1Encoder<RoseAPDU> | null = null;

/**
 * @summary Encodes a(n) RoseAPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoseAPDU, encoded as an ASN.1 Element.
 */
export
function _encode_RoseAPDU (value: RoseAPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoseAPDU) { _cached_encoder_for_RoseAPDU = $._encode_choice<RoseAPDU>({
    "invoke": $._encode_implicit(_TagClass.context, 1, () => _encode_Invoke, $.BER),
    "returnResult": $._encode_implicit(_TagClass.context, 2, () => _encode_ReturnResult, $.BER),
    "returnError": $._encode_implicit(_TagClass.context, 3, () => _encode_ReturnError, $.BER),
    "reject": $._encode_implicit(_TagClass.context, 4, () => _encode_Reject, $.BER),
}, $.BER); }
    return _cached_encoder_for_RoseAPDU(value, elGetter);
}

/* eslint-enable */
