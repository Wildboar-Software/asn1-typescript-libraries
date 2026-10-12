/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";
// export { MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";


/**
 * @summary MCServiceIDOrGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceIDOrGroupID  ::=  CHOICE
 * {
 *     mCServiceID           [1] MCServiceID,
 *     mCServiceGroupID      [2] MCServiceGroupID
 * }
 * ```
 */
export
type MCServiceIDOrGroupID =
    { mCServiceID: MCServiceID } /* CHOICE_ALT_ROOT */
    | { mCServiceGroupID: MCServiceGroupID } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MCServiceIDOrGroupID: $.ASN1Decoder<MCServiceIDOrGroupID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCServiceIDOrGroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCServiceIDOrGroupID (el: _Element): MCServiceIDOrGroupID {
    if (!_cached_decoder_for_MCServiceIDOrGroupID) { _cached_decoder_for_MCServiceIDOrGroupID = $._decode_extensible_choice<MCServiceIDOrGroupID>({
    "CONTEXT 1": [ "mCServiceID", $._decode_implicit<MCServiceID>(() => _decode_MCServiceID) ],
    "CONTEXT 2": [ "mCServiceGroupID", $._decode_implicit<MCServiceGroupID>(() => _decode_MCServiceGroupID) ]
}); }
    return _cached_decoder_for_MCServiceIDOrGroupID(el);
}

let _cached_encoder_for_MCServiceIDOrGroupID: $.ASN1Encoder<MCServiceIDOrGroupID> | null = null;

/**
 * @summary Encodes a(n) MCServiceIDOrGroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCServiceIDOrGroupID, encoded as an ASN.1 Element.
 */
export
function _encode_MCServiceIDOrGroupID (value: MCServiceIDOrGroupID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCServiceIDOrGroupID) { _cached_encoder_for_MCServiceIDOrGroupID = $._encode_choice<MCServiceIDOrGroupID>({
    "mCServiceID": $._encode_implicit(_TagClass.context, 1, () => _encode_MCServiceID, $.BER),
    "mCServiceGroupID": $._encode_implicit(_TagClass.context, 2, () => _encode_MCServiceGroupID, $.BER),
}, $.BER); }
    return _cached_encoder_for_MCServiceIDOrGroupID(value, elGetter);
}


/* eslint-enable */
