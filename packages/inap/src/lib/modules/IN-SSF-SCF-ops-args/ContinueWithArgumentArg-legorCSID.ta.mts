/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary ContinueWithArgumentArg_legorCSID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContinueWithArgumentArg-legorCSID ::=
 * CHOICE {
 *   legID [0] LegID,
 *   csID [9] CallSegmentID
 * }
 * ```
 */
export
type ContinueWithArgumentArg_legorCSID =
    { legID: LegID } /* CHOICE_ALT_ROOT */
    | { csID: CallSegmentID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ContinueWithArgumentArg_legorCSID: $.ASN1Decoder<ContinueWithArgumentArg_legorCSID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContinueWithArgumentArg_legorCSID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContinueWithArgumentArg_legorCSID (el: _Element): ContinueWithArgumentArg_legorCSID {
    if (!_cached_decoder_for_ContinueWithArgumentArg_legorCSID) { _cached_decoder_for_ContinueWithArgumentArg_legorCSID = $._decode_inextensible_choice<ContinueWithArgumentArg_legorCSID>({
    "CONTEXT 0": [ "legID", $._decode_explicit<LegID>(() => _decode_LegID) ],
    "CONTEXT 9": [ "csID", $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID) ]
}); }
    return _cached_decoder_for_ContinueWithArgumentArg_legorCSID(el);
}

let _cached_encoder_for_ContinueWithArgumentArg_legorCSID: $.ASN1Encoder<ContinueWithArgumentArg_legorCSID> | null = null;

/**
 * @summary Encodes a(n) ContinueWithArgumentArg_legorCSID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinueWithArgumentArg_legorCSID, encoded as an ASN.1 Element.
 */
export
function _encode_ContinueWithArgumentArg_legorCSID (value: ContinueWithArgumentArg_legorCSID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContinueWithArgumentArg_legorCSID) { _cached_encoder_for_ContinueWithArgumentArg_legorCSID = $._encode_choice<ContinueWithArgumentArg_legorCSID>({
    "legID": $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER),
    "csID": $._encode_implicit(_TagClass.context, 9, () => _encode_CallSegmentID, $.BER),
}, $.BER); }
    return _cached_encoder_for_ContinueWithArgumentArg_legorCSID(value, elGetter);
}


/* eslint-enable */
