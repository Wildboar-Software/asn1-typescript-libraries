/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthSessionKeyInfo, _decode_AuthSessionKeyInfo, _encode_AuthSessionKeyInfo } from "../WTM-Authentication-Operations-asn1-97/AuthSessionKeyInfo.ta.mjs";
// export { AuthSessionKeyInfo, _decode_AuthSessionKeyInfo, _encode_AuthSessionKeyInfo } from "../WTM-Authentication-Operations-asn1-97/AuthSessionKeyInfo.ta.mjs";
import { CalcWtatInfo, _decode_CalcWtatInfo, _encode_CalcWtatInfo } from "../WTM-Authentication-Operations-asn1-97/CalcWtatInfo.ta.mjs";
// export { CalcWtatInfo, _decode_CalcWtatInfo, _encode_CalcWtatInfo } from "../WTM-Authentication-Operations-asn1-97/CalcWtatInfo.ta.mjs";
import { AuthKey, _decode_AuthKey, _encode_AuthKey } from "../WTM-Authentication-Operations-asn1-97/AuthKey.ta.mjs";
// export { AuthKey, _decode_AuthKey, _encode_AuthKey } from "../WTM-Authentication-Operations-asn1-97/AuthKey.ta.mjs";


/**
 * @summary WtatParamInfo_wtatParamInfoChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtatParamInfo-wtatParamInfoChoice ::= CHOICE {
 *     authSessionKeyInfo [1] IMPLICIT AuthSessionKeyInfo,
 *     calcWtatInfo [2] IMPLICIT CalcWtatInfo,
 *     authKey [3] IMPLICIT AuthKey,
 *     challLen [4] IMPLICIT INTEGER (1..8)
 * }
 * ```
 */
export
type WtatParamInfo_wtatParamInfoChoice =
    { authSessionKeyInfo: AuthSessionKeyInfo } /* CHOICE_ALT_ROOT */
    | { calcWtatInfo: CalcWtatInfo } /* CHOICE_ALT_ROOT */
    | { authKey: AuthKey } /* CHOICE_ALT_ROOT */
    | { challLen: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_WtatParamInfo_wtatParamInfoChoice: $.ASN1Decoder<WtatParamInfo_wtatParamInfoChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtatParamInfo_wtatParamInfoChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtatParamInfo_wtatParamInfoChoice (el: _Element): WtatParamInfo_wtatParamInfoChoice {
    if (!_cached_decoder_for_WtatParamInfo_wtatParamInfoChoice) { _cached_decoder_for_WtatParamInfo_wtatParamInfoChoice = $._decode_inextensible_choice<WtatParamInfo_wtatParamInfoChoice>({
    "CONTEXT 1": [ "authSessionKeyInfo", $._decode_implicit<AuthSessionKeyInfo>(() => _decode_AuthSessionKeyInfo) ],
    "CONTEXT 2": [ "calcWtatInfo", $._decode_implicit<CalcWtatInfo>(() => _decode_CalcWtatInfo) ],
    "CONTEXT 3": [ "authKey", $._decode_implicit<AuthKey>(() => _decode_AuthKey) ],
    "CONTEXT 4": [ "challLen", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_WtatParamInfo_wtatParamInfoChoice(el);
}

let _cached_encoder_for_WtatParamInfo_wtatParamInfoChoice: $.ASN1Encoder<WtatParamInfo_wtatParamInfoChoice> | null = null;

/**
 * @summary Encodes a(n) WtatParamInfo_wtatParamInfoChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtatParamInfo_wtatParamInfoChoice, encoded as an ASN.1 Element.
 */
export
function _encode_WtatParamInfo_wtatParamInfoChoice (value: WtatParamInfo_wtatParamInfoChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtatParamInfo_wtatParamInfoChoice) { _cached_encoder_for_WtatParamInfo_wtatParamInfoChoice = $._encode_choice<WtatParamInfo_wtatParamInfoChoice>({
    "authSessionKeyInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_AuthSessionKeyInfo, $.BER),
    "calcWtatInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_CalcWtatInfo, $.BER),
    "authKey": $._encode_implicit(_TagClass.context, 3, () => _encode_AuthKey, $.BER),
    "challLen": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_WtatParamInfo_wtatParamInfoChoice(value, elGetter);
}


/* eslint-enable */
