/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary PlayAnnouncementArg_connectedParty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlayAnnouncementArg-connectedParty ::=
 * CHOICE {
 *   legID [4] LegID,
 *   callSegmentID [5] CallSegmentID
 * }
 * ```
 */
export
type PlayAnnouncementArg_connectedParty =
    { legID: LegID } /* CHOICE_ALT_ROOT */
    | { callSegmentID: CallSegmentID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PlayAnnouncementArg_connectedParty: $.ASN1Decoder<PlayAnnouncementArg_connectedParty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PlayAnnouncementArg_connectedParty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlayAnnouncementArg_connectedParty (el: _Element): PlayAnnouncementArg_connectedParty {
    if (!_cached_decoder_for_PlayAnnouncementArg_connectedParty) { _cached_decoder_for_PlayAnnouncementArg_connectedParty = $._decode_inextensible_choice<PlayAnnouncementArg_connectedParty>({
    "CONTEXT 4": [ "legID", $._decode_explicit<LegID>(() => _decode_LegID) ],
    "CONTEXT 5": [ "callSegmentID", $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID) ]
}); }
    return _cached_decoder_for_PlayAnnouncementArg_connectedParty(el);
}

let _cached_encoder_for_PlayAnnouncementArg_connectedParty: $.ASN1Encoder<PlayAnnouncementArg_connectedParty> | null = null;

/**
 * @summary Encodes a(n) PlayAnnouncementArg_connectedParty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlayAnnouncementArg_connectedParty, encoded as an ASN.1 Element.
 */
export
function _encode_PlayAnnouncementArg_connectedParty (value: PlayAnnouncementArg_connectedParty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlayAnnouncementArg_connectedParty) { _cached_encoder_for_PlayAnnouncementArg_connectedParty = $._encode_choice<PlayAnnouncementArg_connectedParty>({
    "legID": $._encode_explicit(_TagClass.context, 4, () => _encode_LegID, $.BER),
    "callSegmentID": $._encode_implicit(_TagClass.context, 5, () => _encode_CallSegmentID, $.BER),
}, $.BER); }
    return _cached_encoder_for_PlayAnnouncementArg_connectedParty(value, elGetter);
}


/* eslint-enable */
