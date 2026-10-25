/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfileInfo, _decode_ProfileInfo, _encode_ProfileInfo } from "../SGP32Definitions/ProfileInfo.ta.mjs";
import { type ProfileInfoListError, _decode_ProfileInfoListError, _encode_ProfileInfoListError } from "../SGP32Definitions/ProfileInfoListError.ta.mjs";


/**
 * @summary ProfileInfoListResponse
 * @description
 * 
 * Result of listProfileInfo. profileInfoListOk is the list of ProfileInfo for
 * the installed Profiles, including Enabled or Disabled state and Profile
 * metadata. The section 2.11.2.1 comment points at SGP.22; section 4.4
 * replaces that ProfileInfo. profileInfoListError is selected on failure,
 * including profileChangeOngoing when this command follows an enable, disable,
 * or delete in the same eUICC Package. When the request has no tag list, each
 * ProfileInfo contains the default objects listed in section 2.11.1.1. SGP.32
 * v1.2, sections 2.11.1.1, 2.11.2.1, 5.9.14, and 5.13.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfoListResponse  ::=  [45] CHOICE {
 *     profileInfoListOk SEQUENCE OF ProfileInfo, -- see SGP.22
 *     profileInfoListError ProfileInfoListError
 * }
 * ```
 */
export
type ProfileInfoListResponse =
    { profileInfoListOk: ProfileInfo[] } /* CHOICE_ALT_ROOT */
    | { profileInfoListError: ProfileInfoListError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProfileInfoListResponse: $.ASN1Decoder<ProfileInfoListResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInfoListResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInfoListResponse (el: _Element): ProfileInfoListResponse {
    if (!_cached_decoder_for_ProfileInfoListResponse) { _cached_decoder_for_ProfileInfoListResponse = $._decode_explicit<ProfileInfoListResponse>(() => $._decode_inextensible_choice<ProfileInfoListResponse>({
    "CONTEXT 0": [ "profileInfoListOk", $._decodeSequenceOf<ProfileInfo>(() => _decode_ProfileInfo) ],
    "CONTEXT 1": [ "profileInfoListError", _decode_ProfileInfoListError ]
})); }
    return _cached_decoder_for_ProfileInfoListResponse(el);
}

let _cached_encoder_for_ProfileInfoListResponse: $.ASN1Encoder<ProfileInfoListResponse> | null = null;

/**
 * @summary Encodes a(n) ProfileInfoListResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInfoListResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInfoListResponse (value: ProfileInfoListResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInfoListResponse) { _cached_encoder_for_ProfileInfoListResponse = $._encode_explicit(_TagClass.context, 45, () => $._encode_choice<ProfileInfoListResponse>({
    "profileInfoListOk": $._encodeSequenceOf<ProfileInfo>(() => _encode_ProfileInfo, $.BER),
    "profileInfoListError": _encode_ProfileInfoListError,
}, $.BER), $.BER); }
    return _cached_encoder_for_ProfileInfoListResponse(value, elGetter);
}


/* eslint-enable */
