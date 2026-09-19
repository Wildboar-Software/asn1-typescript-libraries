/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMEIUpdateInfo, _decode_IMEIUpdateInfo, _encode_IMEIUpdateInfo } from "../TS33128Payloads/IMEIUpdateInfo.ta.mjs";
// export { IMEIUpdateInfo, _decode_IMEIUpdateInfo, _encode_IMEIUpdateInfo } from "../TS33128Payloads/IMEIUpdateInfo.ta.mjs";
import { IMEIUpdateResponse, _decode_IMEIUpdateResponse, _encode_IMEIUpdateResponse } from "../TS33128Payloads/IMEIUpdateResponse.ta.mjs";
// export { IMEIUpdateResponse, _decode_IMEIUpdateResponse, _encode_IMEIUpdateResponse } from "../TS33128Payloads/IMEIUpdateResponse.ta.mjs";
import { RoamingStatusUpdateInfo, _decode_RoamingStatusUpdateInfo, _encode_RoamingStatusUpdateInfo } from "../TS33128Payloads/RoamingStatusUpdateInfo.ta.mjs";
// export { RoamingStatusUpdateInfo, _decode_RoamingStatusUpdateInfo, _encode_RoamingStatusUpdateInfo } from "../TS33128Payloads/RoamingStatusUpdateInfo.ta.mjs";


/**
 * @summary SubscriberRecordChangePayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberRecordChangePayload  ::=  CHOICE
 * {
 *     iMEIUpdateInfo          [1] IMEIUpdateInfo,
 *     iMEIUpdateResponse      [2] IMEIUpdateResponse,
 *     roamingStatusUpdateInfo [3] RoamingStatusUpdateInfo
 * }
 * ```
 */
export
type SubscriberRecordChangePayload =
    { iMEIUpdateInfo: IMEIUpdateInfo } /* CHOICE_ALT_ROOT */
    | { iMEIUpdateResponse: IMEIUpdateResponse } /* CHOICE_ALT_ROOT */
    | { roamingStatusUpdateInfo: RoamingStatusUpdateInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SubscriberRecordChangePayload: $.ASN1Decoder<SubscriberRecordChangePayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberRecordChangePayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberRecordChangePayload (el: _Element): SubscriberRecordChangePayload {
    if (!_cached_decoder_for_SubscriberRecordChangePayload) { _cached_decoder_for_SubscriberRecordChangePayload = $._decode_inextensible_choice<SubscriberRecordChangePayload>({
    "CONTEXT 1": [ "iMEIUpdateInfo", $._decode_implicit<IMEIUpdateInfo>(() => _decode_IMEIUpdateInfo) ],
    "CONTEXT 2": [ "iMEIUpdateResponse", $._decode_implicit<IMEIUpdateResponse>(() => _decode_IMEIUpdateResponse) ],
    "CONTEXT 3": [ "roamingStatusUpdateInfo", $._decode_implicit<RoamingStatusUpdateInfo>(() => _decode_RoamingStatusUpdateInfo) ]
}); }
    return _cached_decoder_for_SubscriberRecordChangePayload(el);
}

let _cached_encoder_for_SubscriberRecordChangePayload: $.ASN1Encoder<SubscriberRecordChangePayload> | null = null;

/**
 * @summary Encodes a(n) SubscriberRecordChangePayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberRecordChangePayload, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberRecordChangePayload (value: SubscriberRecordChangePayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberRecordChangePayload) { _cached_encoder_for_SubscriberRecordChangePayload = $._encode_choice<SubscriberRecordChangePayload>({
    "iMEIUpdateInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_IMEIUpdateInfo, $.BER),
    "iMEIUpdateResponse": $._encode_implicit(_TagClass.context, 2, () => _encode_IMEIUpdateResponse, $.BER),
    "roamingStatusUpdateInfo": $._encode_implicit(_TagClass.context, 3, () => _encode_RoamingStatusUpdateInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_SubscriberRecordChangePayload(value, elGetter);
}


/* eslint-enable */
