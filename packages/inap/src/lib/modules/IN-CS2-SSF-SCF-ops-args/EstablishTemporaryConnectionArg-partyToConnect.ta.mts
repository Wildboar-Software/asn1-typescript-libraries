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
 * @summary EstablishTemporaryConnectionArg_partyToConnect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishTemporaryConnectionArg-partyToConnect ::=
 * CHOICE {
 *   legID [2] LegID,
 *   callSegmentID [7] CallSegmentID
 * }
 * ```
 */
export
type EstablishTemporaryConnectionArg_partyToConnect =
    { legID: LegID } /* CHOICE_ALT_ROOT */
    | { callSegmentID: CallSegmentID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EstablishTemporaryConnectionArg_partyToConnect: $.ASN1Decoder<EstablishTemporaryConnectionArg_partyToConnect> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishTemporaryConnectionArg_partyToConnect
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishTemporaryConnectionArg_partyToConnect (el: _Element): EstablishTemporaryConnectionArg_partyToConnect {
    if (!_cached_decoder_for_EstablishTemporaryConnectionArg_partyToConnect) { _cached_decoder_for_EstablishTemporaryConnectionArg_partyToConnect = $._decode_inextensible_choice<EstablishTemporaryConnectionArg_partyToConnect>({
    "CONTEXT 2": [ "legID", $._decode_explicit<LegID>(() => _decode_LegID) ],
    "CONTEXT 7": [ "callSegmentID", $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID) ]
}); }
    return _cached_decoder_for_EstablishTemporaryConnectionArg_partyToConnect(el);
}

let _cached_encoder_for_EstablishTemporaryConnectionArg_partyToConnect: $.ASN1Encoder<EstablishTemporaryConnectionArg_partyToConnect> | null = null;

/**
 * @summary Encodes a(n) EstablishTemporaryConnectionArg_partyToConnect into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishTemporaryConnectionArg_partyToConnect, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishTemporaryConnectionArg_partyToConnect (value: EstablishTemporaryConnectionArg_partyToConnect, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishTemporaryConnectionArg_partyToConnect) { _cached_encoder_for_EstablishTemporaryConnectionArg_partyToConnect = $._encode_choice<EstablishTemporaryConnectionArg_partyToConnect>({
    "legID": $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER),
    "callSegmentID": $._encode_implicit(_TagClass.context, 7, () => _encode_CallSegmentID, $.BER),
}, $.BER); }
    return _cached_encoder_for_EstablishTemporaryConnectionArg_partyToConnect(value, elGetter);
}


/* eslint-enable */
