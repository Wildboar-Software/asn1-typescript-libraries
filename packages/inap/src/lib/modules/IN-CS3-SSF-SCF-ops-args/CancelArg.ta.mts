/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvokeID, _decode_InvokeID, _encode_InvokeID } from "../IN-CS3-common-datatypes/InvokeID.ta.mjs";
// export { InvokeID, _decode_InvokeID, _encode_InvokeID } from "../IN-CS3-common-datatypes/InvokeID.ta.mjs";
import { CancelArg_callSegmentToCancel, _decode_CancelArg_callSegmentToCancel, _encode_CancelArg_callSegmentToCancel } from "../IN-CS3-SSF-SCF-ops-args/CancelArg-callSegmentToCancel.ta.mjs";
// export { CancelArg_callSegmentToCancel, _decode_CancelArg_callSegmentToCancel, _encode_CancelArg_callSegmentToCancel } from "../IN-CS3-SSF-SCF-ops-args/CancelArg-callSegmentToCancel.ta.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary CancelArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelArg  ::=  CHOICE {
 *   invokeID                   [0]  InvokeID,
 *   allRequests                [1]  NULL,
 *   callSegmentToCancel
 *     [2]  SEQUENCE {invokeID       [0]  InvokeID,
 *                    callSegmentID  [1]  CallSegmentID,
 *                    ...},
 *   allRequestsForCallSegment  [3]  CallSegmentID,
 *   ...
 * }
 * ```
 */
export
type CancelArg =
    { invokeID: InvokeID } /* CHOICE_ALT_ROOT */
    | { allRequests: NULL } /* CHOICE_ALT_ROOT */
    | { callSegmentToCancel: CancelArg_callSegmentToCancel } /* CHOICE_ALT_ROOT */
    | { allRequestsForCallSegment: CallSegmentID } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CancelArg: $.ASN1Decoder<CancelArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelArg (el: _Element): CancelArg {
    if (!_cached_decoder_for_CancelArg) { _cached_decoder_for_CancelArg = $._decode_extensible_choice<CancelArg>({
    "CONTEXT 0": [ "invokeID", $._decode_implicit<InvokeID>(() => _decode_InvokeID) ],
    "CONTEXT 1": [ "allRequests", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "callSegmentToCancel", $._decode_implicit<CancelArg_callSegmentToCancel>(() => _decode_CancelArg_callSegmentToCancel) ],
    "CONTEXT 3": [ "allRequestsForCallSegment", $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID) ]
}); }
    return _cached_decoder_for_CancelArg(el);
}

let _cached_encoder_for_CancelArg: $.ASN1Encoder<CancelArg> | null = null;

/**
 * @summary Encodes a(n) CancelArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelArg, encoded as an ASN.1 Element.
 */
export
function _encode_CancelArg (value: CancelArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelArg) { _cached_encoder_for_CancelArg = $._encode_choice<CancelArg>({
    "invokeID": $._encode_implicit(_TagClass.context, 0, () => _encode_InvokeID, $.BER),
    "allRequests": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "callSegmentToCancel": $._encode_implicit(_TagClass.context, 2, () => _encode_CancelArg_callSegmentToCancel, $.BER),
    "allRequestsForCallSegment": $._encode_implicit(_TagClass.context, 3, () => _encode_CallSegmentID, $.BER),
}, $.BER); }
    return _cached_encoder_for_CancelArg(value, elGetter);
}


/* eslint-enable */
