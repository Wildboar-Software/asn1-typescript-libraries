/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { type MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";
// export { MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";


/**
 * @summary MCServiceIDOrGroupID
 * @description
 * 
 * MC service ID of the target user or group ID of the target MC service group.
 *
 * 3GPP TS 33.128, clause 7.20.2.5.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * MC service ID of the target MC service user uploading a file or MC
     * service user uploading a file intended for a target MC service group.
     * (3GPP TS 33.128, clause 7.20.2.6.2.)
     */
    { mCServiceID: MCServiceID } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * MC service group ID of the target MC service group the file is intended
     * for. (3GPP TS 33.128, clause 7.20.2.6.2.)
     */
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
