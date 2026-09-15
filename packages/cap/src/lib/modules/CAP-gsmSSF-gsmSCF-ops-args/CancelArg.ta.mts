/* eslint-disable */
import {
    NULL,
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
import { CallSegmentToCancel, _decode_CallSegmentToCancel, _encode_CallSegmentToCancel } from "../CAP-datatypes/CallSegmentToCancel.ta.mjs";
import { type InvokeID, _decode_InvokeID, _encode_InvokeID } from "../CAP-datatypes/InvokeID.ta.mjs";



/**
 * @summary CancelArg
 * @description
 * 
 * Argument of Cancel. CHOICE of which previous request(s) to cancel. (3GPP TS
 * 29.078 V19.0.0 clause 11.8.1.1).
 *
 * - `invokeID`: Operation invocation to cancel (PromptAndCollectUserInformation
 *   or PlayAnnouncement). Same invoke id as the operation being cancelled.
 *
 * - `allRequests`: Disarm all armed EDPs and cancel pending ApplyChargingReport
 *   and CallInformationReport (gsmSSF).
 *
 * - `callSegmentToCancel`: User-interaction cancel for a Call Segment
 *   (`invokeID` and `callSegmentID` of the PA/PACUI to abort).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelArg {PARAMETERS-BOUND : bound}  ::=  CHOICE {
 *     invokeID                [0] InvokeID,
 *     allRequests                [1] NULL,
 *     callSegmentToCancel            [2]    CallSegmentToCancel {bound}
 *     }
 * ```
 */
export
type CancelArg =
    { invokeID: InvokeID } /* CHOICE_ALT_ROOT */
    | { allRequests: NULL } /* CHOICE_ALT_ROOT */
    | { callSegmentToCancel: CallSegmentToCancel } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelArg: $.ASN1Decoder<CancelArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelArg (el: _Element): CancelArg {
    if (!_cached_decoder_for_CancelArg) { _cached_decoder_for_CancelArg = $._decode_inextensible_choice<CancelArg>({
    "CONTEXT 0": [ "invokeID", $._decode_implicit<InvokeID>(() => _decode_InvokeID) ],
    "CONTEXT 1": [ "allRequests", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "callSegmentToCancel", $._decode_implicit<CallSegmentToCancel>(() => _decode_CallSegmentToCancel) ]
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
    "callSegmentToCancel": $._encode_implicit(_TagClass.context, 2, () => _encode_CallSegmentToCancel, $.BER),
}, $.BER); }
    return _cached_encoder_for_CancelArg(value, elGetter);
}


/* eslint-enable */
