/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthSessionKeyInfo, _decode_AuthSessionKeyInfo, _encode_AuthSessionKeyInfo } from "../WTM-Authentication-Operations-asn1-97/AuthSessionKeyInfo.ta.mjs";
// export { AuthSessionKeyInfo, _decode_AuthSessionKeyInfo, _encode_AuthSessionKeyInfo } from "../WTM-Authentication-Operations-asn1-97/AuthSessionKeyInfo.ta.mjs";
import { CalcWtanInfo, _decode_CalcWtanInfo, _encode_CalcWtanInfo } from "../WTM-Authentication-Operations-asn1-97/CalcWtanInfo.ta.mjs";
// export { CalcWtanInfo, _decode_CalcWtanInfo, _encode_CalcWtanInfo } from "../WTM-Authentication-Operations-asn1-97/CalcWtanInfo.ta.mjs";


/**
 * @summary WtanParamInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtanParamInfo  ::=  CHOICE {
 *     authSessionKeyInfo [1] IMPLICIT AuthSessionKeyInfo,
 *     calcWtanInfo [2] IMPLICIT CalcWtanInfo
 * }
 * ```
 */
export
type WtanParamInfo =
    { authSessionKeyInfo: AuthSessionKeyInfo } /* CHOICE_ALT_ROOT */
    | { calcWtanInfo: CalcWtanInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_WtanParamInfo: $.ASN1Decoder<WtanParamInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtanParamInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtanParamInfo (el: _Element): WtanParamInfo {
    if (!_cached_decoder_for_WtanParamInfo) { _cached_decoder_for_WtanParamInfo = $._decode_inextensible_choice<WtanParamInfo>({
    "CONTEXT 1": [ "authSessionKeyInfo", $._decode_implicit<AuthSessionKeyInfo>(() => _decode_AuthSessionKeyInfo) ],
    "CONTEXT 2": [ "calcWtanInfo", $._decode_implicit<CalcWtanInfo>(() => _decode_CalcWtanInfo) ]
}); }
    return _cached_decoder_for_WtanParamInfo(el);
}

let _cached_encoder_for_WtanParamInfo: $.ASN1Encoder<WtanParamInfo> | null = null;

/**
 * @summary Encodes a(n) WtanParamInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtanParamInfo, encoded as an ASN.1 Element.
 */
export
function _encode_WtanParamInfo (value: WtanParamInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtanParamInfo) { _cached_encoder_for_WtanParamInfo = $._encode_choice<WtanParamInfo>({
    "authSessionKeyInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_AuthSessionKeyInfo, $.BER),
    "calcWtanInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_CalcWtanInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_WtanParamInfo(value, elGetter);
}


/* eslint-enable */
