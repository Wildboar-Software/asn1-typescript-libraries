/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfileInfo, _decode_ProfileInfo, _encode_ProfileInfo } from "../RSPDefinitions/ProfileInfo.ta.mjs";
import { ProfileInfoListError, _decode_ProfileInfoListError, _encode_ProfileInfoListError } from "../RSPDefinitions/ProfileInfoListError.ta.mjs";


/**
 * @summary ProfileInfoListResponse
 * @description
 * 
 * ES10c.GetProfilesInfo response. One `ProfileInfo` per matching Profile, or an
 * error. An empty success list means no Profile matched. If a state change is
 * still waiting for REFRESH, a request that asks for profile state fails with
 * status word `'6985'` for local management. SGP.22 v3.1 §5.7.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfoListResponse  ::=  [45] CHOICE { -- Tag 'BF2D'
 *     profileInfoListOk SEQUENCE OF ProfileInfo,
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
