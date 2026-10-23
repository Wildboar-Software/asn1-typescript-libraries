/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthSessionKeyInfo, _decode_AuthSessionKeyInfo, _encode_AuthSessionKeyInfo } from "../CT-Authentication-Operations/AuthSessionKeyInfo.ta.mjs";
// export { AuthSessionKeyInfo, _decode_AuthSessionKeyInfo, _encode_AuthSessionKeyInfo } from "../CT-Authentication-Operations/AuthSessionKeyInfo.ta.mjs";
import { CalcCtanInfo, _decode_CalcCtanInfo, _encode_CalcCtanInfo } from "../CT-Authentication-Operations/CalcCtanInfo.ta.mjs";
// export { CalcCtanInfo, _decode_CalcCtanInfo, _encode_CalcCtanInfo } from "../CT-Authentication-Operations/CalcCtanInfo.ta.mjs";


/**
 * @summary CtanParamInfo
 * @description
 *
 * SS-CTAN parameters (ECMA-243 §7.5.3.1). `authSessionKeyInfo` when the Visitor
 * PINX computes the response from the session key and the CTM user's challenge.
 * `calcCtanInfo` when the Authentication Server PINX computed the response.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtanParamInfo  ::=  CHOICE {
 *     authSessionKeyInfo [1] IMPLICIT AuthSessionKeyInfo,
 *     calcCtanInfo [2] IMPLICIT CalcCtanInfo
 * }
 * ```
 */
export
type CtanParamInfo =
    { authSessionKeyInfo: AuthSessionKeyInfo } /* CHOICE_ALT_ROOT */
    | { calcCtanInfo: CalcCtanInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CtanParamInfo: $.ASN1Decoder<CtanParamInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtanParamInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtanParamInfo (el: _Element): CtanParamInfo {
    if (!_cached_decoder_for_CtanParamInfo) { _cached_decoder_for_CtanParamInfo = $._decode_inextensible_choice<CtanParamInfo>({
    "CONTEXT 1": [ "authSessionKeyInfo", $._decode_implicit<AuthSessionKeyInfo>(() => _decode_AuthSessionKeyInfo) ],
    "CONTEXT 2": [ "calcCtanInfo", $._decode_implicit<CalcCtanInfo>(() => _decode_CalcCtanInfo) ]
}); }
    return _cached_decoder_for_CtanParamInfo(el);
}

let _cached_encoder_for_CtanParamInfo: $.ASN1Encoder<CtanParamInfo> | null = null;

/**
 * @summary Encodes a(n) CtanParamInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtanParamInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CtanParamInfo (value: CtanParamInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtanParamInfo) { _cached_encoder_for_CtanParamInfo = $._encode_choice<CtanParamInfo>({
    "authSessionKeyInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_AuthSessionKeyInfo, $.BER),
    "calcCtanInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_CalcCtanInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_CtanParamInfo(value, elGetter);
}


/* eslint-enable */
