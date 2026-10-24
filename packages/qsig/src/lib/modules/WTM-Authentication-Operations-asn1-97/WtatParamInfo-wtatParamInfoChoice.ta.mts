/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthSessionKeyInfo, _decode_AuthSessionKeyInfo, _encode_AuthSessionKeyInfo } from "../WTM-Authentication-Operations-asn1-97/AuthSessionKeyInfo.ta.mjs";
import { CalcWtatInfo, _decode_CalcWtatInfo, _encode_CalcWtatInfo } from "../WTM-Authentication-Operations-asn1-97/CalcWtatInfo.ta.mjs";
import { AuthKey, _decode_AuthKey, _encode_AuthKey } from "../WTM-Authentication-Operations-asn1-97/AuthKey.ta.mjs";

/**
 * @summary WtatParamInfo_wtatParamInfoChoice
 * @description
 *
 * Choice inside `WtatParamInfo` (ECMA-306 §6.3.1). `authSessionKeyInfo` and
 * `calcWtatInfo` are fetch results (§6.5.7.1). `authKey` and `challLen` are for
 * `transferAuthParam` during ANF-WTINFO (§6.8.22.1) and shall not appear in a
 * `wtatParamEnq` result. ECMA-306 does not define what the `challLen` integer
 * represents.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
    "CONTEXT 4": [ "challLen", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
            const _value = $._decodeInteger(el);
            if ((typeof _value === "bigint" ? (_value < 1n || _value > 8n) : (_value < 1 || _value > 8))) {
                throw new ASN1OverflowError("WtatParamInfo_wtatParamInfoChoice.challLen violates INTEGER constraint");
            }
            return _value;
        }) ]
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
