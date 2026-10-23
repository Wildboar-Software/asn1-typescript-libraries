/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthSessionKeyInfo, _decode_AuthSessionKeyInfo, _encode_AuthSessionKeyInfo } from "../CT-Authentication-Operations/AuthSessionKeyInfo.ta.mjs";
// export { AuthSessionKeyInfo, _decode_AuthSessionKeyInfo, _encode_AuthSessionKeyInfo } from "../CT-Authentication-Operations/AuthSessionKeyInfo.ta.mjs";
import { CalcCtatInfo, _decode_CalcCtatInfo, _encode_CalcCtatInfo } from "../CT-Authentication-Operations/CalcCtatInfo.ta.mjs";
// export { CalcCtatInfo, _decode_CalcCtatInfo, _encode_CalcCtatInfo } from "../CT-Authentication-Operations/CalcCtatInfo.ta.mjs";


/**
 * @summary CtatParamInfo_info
 * @description
 *
 * Choice inside `CtatParamInfo` (ECMA-243 §6.5.7.1). `authSessionKeyInfo` when
 * the Visitor PINX will compute the challenge and expected response.
 * `calcCtatInfo` when the Authentication Server PINX has already computed them.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtatParamInfo-info ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CtatParamInfo_info =
    { authSessionKeyInfo: AuthSessionKeyInfo } /* CHOICE_ALT_ROOT */
    | { calcCtatInfo: CalcCtatInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CtatParamInfo_info: $.ASN1Decoder<CtatParamInfo_info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtatParamInfo_info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtatParamInfo_info (el: _Element): CtatParamInfo_info {
    if (!_cached_decoder_for_CtatParamInfo_info) { _cached_decoder_for_CtatParamInfo_info = $._decode_inextensible_choice<CtatParamInfo_info>({
    "CONTEXT 1": [ "authSessionKeyInfo", $._decode_implicit<AuthSessionKeyInfo>(() => _decode_AuthSessionKeyInfo) ],
    "CONTEXT 2": [ "calcCtatInfo", $._decode_implicit<CalcCtatInfo>(() => _decode_CalcCtatInfo) ]
}); }
    return _cached_decoder_for_CtatParamInfo_info(el);
}

let _cached_encoder_for_CtatParamInfo_info: $.ASN1Encoder<CtatParamInfo_info> | null = null;

/**
 * @summary Encodes a(n) CtatParamInfo_info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtatParamInfo_info, encoded as an ASN.1 Element.
 */
export
function _encode_CtatParamInfo_info (value: CtatParamInfo_info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtatParamInfo_info) { _cached_encoder_for_CtatParamInfo_info = $._encode_choice<CtatParamInfo_info>({
    "authSessionKeyInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_AuthSessionKeyInfo, $.BER),
    "calcCtatInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_CalcCtatInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_CtatParamInfo_info(value, elGetter);
}


/* eslint-enable */
