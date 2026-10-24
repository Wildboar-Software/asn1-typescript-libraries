/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary DisconnectForwardConnectionWithArgumentArg_partyToDisconnect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisconnectForwardConnectionWithArgumentArg-partyToDisconnect ::=
 * CHOICE {
 *   legID [0] LegID,
 *   callSegmentID [1] CallSegmentID
 * }
 * ```
 */
export
type DisconnectForwardConnectionWithArgumentArg_partyToDisconnect =
    { legID: LegID } /* CHOICE_ALT_ROOT */
    | { callSegmentID: CallSegmentID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect: $.ASN1Decoder<DisconnectForwardConnectionWithArgumentArg_partyToDisconnect> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisconnectForwardConnectionWithArgumentArg_partyToDisconnect
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect (el: _Element): DisconnectForwardConnectionWithArgumentArg_partyToDisconnect {
    if (!_cached_decoder_for_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect) { _cached_decoder_for_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect = $._decode_inextensible_choice<DisconnectForwardConnectionWithArgumentArg_partyToDisconnect>({
    "CONTEXT 0": [ "legID", $._decode_explicit<LegID>(() => _decode_LegID) ],
    "CONTEXT 1": [ "callSegmentID", $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID) ]
}); }
    return _cached_decoder_for_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect(el);
}

let _cached_encoder_for_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect: $.ASN1Encoder<DisconnectForwardConnectionWithArgumentArg_partyToDisconnect> | null = null;

/**
 * @summary Encodes a(n) DisconnectForwardConnectionWithArgumentArg_partyToDisconnect into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisconnectForwardConnectionWithArgumentArg_partyToDisconnect, encoded as an ASN.1 Element.
 */
export
function _encode_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect (value: DisconnectForwardConnectionWithArgumentArg_partyToDisconnect, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect) { _cached_encoder_for_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect = $._encode_choice<DisconnectForwardConnectionWithArgumentArg_partyToDisconnect>({
    "legID": $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER),
    "callSegmentID": $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER),
}, $.BER); }
    return _cached_encoder_for_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect(value, elGetter);
}


/* eslint-enable */
