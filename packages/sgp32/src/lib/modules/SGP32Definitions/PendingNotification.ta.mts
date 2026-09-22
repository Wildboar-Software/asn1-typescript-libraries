/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfileInstallationResult, _decode_ProfileInstallationResult, _encode_ProfileInstallationResult } from "../SGP32Definitions/ProfileInstallationResult.ta.mjs";
// export { ProfileInstallationResult, _decode_ProfileInstallationResult, _encode_ProfileInstallationResult } from "../SGP32Definitions/ProfileInstallationResult.ta.mjs";
import { OtherSignedNotification, _decode_OtherSignedNotification, _encode_OtherSignedNotification } from "../RSPDefinitions/OtherSignedNotification.ta.mjs";
// export { OtherSignedNotification, _decode_OtherSignedNotification, _encode_OtherSignedNotification } from "../RSPDefinitions/OtherSignedNotification.ta.mjs";
import { CompactProfileInstallationResult, _decode_CompactProfileInstallationResult, _encode_CompactProfileInstallationResult } from "../SGP32Definitions/CompactProfileInstallationResult.ta.mjs";
// export { CompactProfileInstallationResult, _decode_CompactProfileInstallationResult, _encode_CompactProfileInstallationResult } from "../SGP32Definitions/CompactProfileInstallationResult.ta.mjs";
import { CompactOtherSignedNotification, _decode_CompactOtherSignedNotification, _encode_CompactOtherSignedNotification } from "../SGP32Definitions/CompactOtherSignedNotification.ta.mjs";
// export { CompactOtherSignedNotification, _decode_CompactOtherSignedNotification, _encode_CompactOtherSignedNotification } from "../SGP32Definitions/CompactOtherSignedNotification.ta.mjs";


/**
 * @summary PendingNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PendingNotification  ::=  CHOICE {
 *     profileInstallationResult [55] ProfileInstallationResult, -- tag 'BF37'
 *     otherSignedNotification OtherSignedNotification,
 *     compactProfileInstallationResult [0] CompactProfileInstallationResult,
 *     compactOtherSignedNotification [1] CompactOtherSignedNotification
 * }
 * ```
 */
export
type PendingNotification =
    { profileInstallationResult: ProfileInstallationResult } /* CHOICE_ALT_ROOT */
    | { otherSignedNotification: OtherSignedNotification } /* CHOICE_ALT_ROOT */
    | { compactProfileInstallationResult: CompactProfileInstallationResult } /* CHOICE_ALT_ROOT */
    | { compactOtherSignedNotification: CompactOtherSignedNotification } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PendingNotification: $.ASN1Decoder<PendingNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PendingNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PendingNotification (el: _Element): PendingNotification {
    if (!_cached_decoder_for_PendingNotification) { _cached_decoder_for_PendingNotification = $._decode_inextensible_choice<PendingNotification>({
    "CONTEXT 55": [ "profileInstallationResult", $._decode_implicit<ProfileInstallationResult>(() => _decode_ProfileInstallationResult) ],
    "UNIVERSAL 16": [ "otherSignedNotification", _decode_OtherSignedNotification ],
    "CONTEXT 0": [ "compactProfileInstallationResult", $._decode_implicit<CompactProfileInstallationResult>(() => _decode_CompactProfileInstallationResult) ],
    "CONTEXT 1": [ "compactOtherSignedNotification", $._decode_implicit<CompactOtherSignedNotification>(() => _decode_CompactOtherSignedNotification) ]
}); }
    return _cached_decoder_for_PendingNotification(el);
}

let _cached_encoder_for_PendingNotification: $.ASN1Encoder<PendingNotification> | null = null;

/**
 * @summary Encodes a(n) PendingNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PendingNotification, encoded as an ASN.1 Element.
 */
export
function _encode_PendingNotification (value: PendingNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PendingNotification) { _cached_encoder_for_PendingNotification = $._encode_choice<PendingNotification>({
    "profileInstallationResult": $._encode_implicit(_TagClass.context, 55, () => _encode_ProfileInstallationResult, $.BER),
    "otherSignedNotification": _encode_OtherSignedNotification,
    "compactProfileInstallationResult": $._encode_implicit(_TagClass.context, 0, () => _encode_CompactProfileInstallationResult, $.BER),
    "compactOtherSignedNotification": $._encode_implicit(_TagClass.context, 1, () => _encode_CompactOtherSignedNotification, $.BER),
}, $.BER); }
    return _cached_encoder_for_PendingNotification(value, elGetter);
}


/* eslint-enable */
