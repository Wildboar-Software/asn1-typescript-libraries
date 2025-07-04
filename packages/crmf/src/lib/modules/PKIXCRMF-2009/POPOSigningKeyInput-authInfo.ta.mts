/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "@wildboar/x500/CertificateExtensions";
import {
    PKMACValue,
    _decode_PKMACValue,
    _encode_PKMACValue,
} from "../PKIXCRMF-2009/PKMACValue.ta.mjs";


/**
 * @summary POPOSigningKeyInput_authInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POPOSigningKeyInput-authInfo ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type POPOSigningKeyInput_authInfo =
    | { sender: GeneralName } /* CHOICE_ALT_ROOT */
    | { publicKeyMAC: PKMACValue } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_POPOSigningKeyInput_authInfo: $.ASN1Decoder<POPOSigningKeyInput_authInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) POPOSigningKeyInput_authInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {POPOSigningKeyInput_authInfo} The decoded data structure.
 */
export function _decode_POPOSigningKeyInput_authInfo(el: _Element): POPOSigningKeyInput_authInfo {
    if (!_cached_decoder_for_POPOSigningKeyInput_authInfo) {
        _cached_decoder_for_POPOSigningKeyInput_authInfo = $._decode_inextensible_choice<POPOSigningKeyInput_authInfo>(
            {
                "CONTEXT 0": [
                    "sender",
                    $._decode_explicit<GeneralName>(() => _decode_GeneralName),
                ],
                "UNIVERSAL 16": ["publicKeyMAC", _decode_PKMACValue],
            }
        );
    }
    return _cached_decoder_for_POPOSigningKeyInput_authInfo(el);
}


let _cached_encoder_for_POPOSigningKeyInput_authInfo: $.ASN1Encoder<POPOSigningKeyInput_authInfo> | null = null;


/**
 * @summary Encodes a(n) POPOSigningKeyInput_authInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POPOSigningKeyInput_authInfo, encoded as an ASN.1 Element.
 */
export function _encode_POPOSigningKeyInput_authInfo(
    value: POPOSigningKeyInput_authInfo,
    elGetter: $.ASN1Encoder<POPOSigningKeyInput_authInfo>
): _Element {
    if (!_cached_encoder_for_POPOSigningKeyInput_authInfo) {
        _cached_encoder_for_POPOSigningKeyInput_authInfo = $._encode_choice<POPOSigningKeyInput_authInfo>(
            {
                sender: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_GeneralName,
                    $.DER
                ),
                publicKeyMAC: _encode_PKMACValue,
            },
            $.DER
        );
    }
    return _cached_encoder_for_POPOSigningKeyInput_authInfo(value, elGetter);
}


/* eslint-enable */
