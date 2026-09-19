/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthenticateClientOkDPEsipa, _decode_AuthenticateClientOkDPEsipa, _encode_AuthenticateClientOkDPEsipa } from "../SGP32Definitions/AuthenticateClientOkDPEsipa.ta.mjs";
// export { AuthenticateClientOkDPEsipa, _decode_AuthenticateClientOkDPEsipa, _encode_AuthenticateClientOkDPEsipa } from "../SGP32Definitions/AuthenticateClientOkDPEsipa.ta.mjs";
import { AuthenticateClientOkDSEsipa, _decode_AuthenticateClientOkDSEsipa, _encode_AuthenticateClientOkDSEsipa } from "../SGP32Definitions/AuthenticateClientOkDSEsipa.ta.mjs";
// export { AuthenticateClientOkDSEsipa, _decode_AuthenticateClientOkDSEsipa, _encode_AuthenticateClientOkDSEsipa } from "../SGP32Definitions/AuthenticateClientOkDSEsipa.ta.mjs";
import { AuthenticateClientResponseEsipa_authenticateClientErrorEsipa, _decode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa, _encode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa } from "../SGP32Definitions/AuthenticateClientResponseEsipa-authenticateClientErrorEsipa.ta.mjs";
// export { AuthenticateClientResponseEsipa_authenticateClientErrorEsipa, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_matchingIdRefused /* IMPORTED_LONG_NAMED_INTEGER */, matchingIdRefused /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eidMismatch /* IMPORTED_LONG_NAMED_INTEGER */, eidMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_noEligibleProfile /* IMPORTED_LONG_NAMED_INTEGER */, noEligibleProfile /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_ciPKUnknown /* IMPORTED_LONG_NAMED_INTEGER */, ciPKUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_insufficientMemory /* IMPORTED_LONG_NAMED_INTEGER */, insufficientMemory /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_downloadOrderExpired /* IMPORTED_LONG_NAMED_INTEGER */, downloadOrderExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_pprNotAllowed /* IMPORTED_LONG_NAMED_INTEGER */, pprNotAllowed /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eventIdUnknown /* IMPORTED_LONG_NAMED_INTEGER */, eventIdUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa, _encode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa } from "../SGP32Definitions/AuthenticateClientResponseEsipa-authenticateClientErrorEsipa.ta.mjs";


/**
 * @summary AuthenticateClientResponseEsipa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientResponseEsipa  ::=  [59] CHOICE { -- Tag 'BF3B'
 *     authenticateClientOkDPEsipa AuthenticateClientOkDPEsipa,
 *     authenticateClientOkDSEsipa AuthenticateClientOkDSEsipa,
 *     authenticateClientErrorEsipa INTEGER {
 *         eumCertificateInvalid(1),
 *         eumCertificateExpired(2),
 *         euiccCertificateInvalid(3),
 *         euiccCertificateExpired(4),
 *         euiccSignatureInvalid(5),
 *         matchingIdRefused(6),
 *         eidMismatch(7),
 *         noEligibleProfile(8),
 *         ciPKUnknown(9),
 *         invalidTransactionId(10),
 *         insufficientMemory(11), -- Note: values 12-17 are reserved
 *         downloadOrderExpired(18),
 *         pprNotAllowed(50),
 *         eventIdUnknown(56),
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type AuthenticateClientResponseEsipa =
    { authenticateClientOkDPEsipa: AuthenticateClientOkDPEsipa } /* CHOICE_ALT_ROOT */
    | { authenticateClientOkDSEsipa: AuthenticateClientOkDSEsipa } /* CHOICE_ALT_ROOT */
    | { authenticateClientErrorEsipa: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AuthenticateClientResponseEsipa: $.ASN1Decoder<AuthenticateClientResponseEsipa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientResponseEsipa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientResponseEsipa (el: _Element): AuthenticateClientResponseEsipa {
    if (!_cached_decoder_for_AuthenticateClientResponseEsipa) { _cached_decoder_for_AuthenticateClientResponseEsipa = $._decode_explicit<AuthenticateClientResponseEsipa>(() => $._decode_inextensible_choice<AuthenticateClientResponseEsipa>({
    "CONTEXT 0": [ "authenticateClientOkDPEsipa", _decode_AuthenticateClientOkDPEsipa ],
    "CONTEXT 1": [ "authenticateClientOkDSEsipa", _decode_AuthenticateClientOkDSEsipa ],
    "CONTEXT 2": [ "authenticateClientErrorEsipa", _decode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa ]
})); }
    return _cached_decoder_for_AuthenticateClientResponseEsipa(el);
}

let _cached_encoder_for_AuthenticateClientResponseEsipa: $.ASN1Encoder<AuthenticateClientResponseEsipa> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientResponseEsipa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientResponseEsipa, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientResponseEsipa (value: AuthenticateClientResponseEsipa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientResponseEsipa) { _cached_encoder_for_AuthenticateClientResponseEsipa = $._encode_explicit(_TagClass.context, 59, () => $._encode_choice<AuthenticateClientResponseEsipa>({
    "authenticateClientOkDPEsipa": _encode_AuthenticateClientOkDPEsipa,
    "authenticateClientOkDSEsipa": _encode_AuthenticateClientOkDSEsipa,
    "authenticateClientErrorEsipa": _encode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa,
}, $.BER), $.BER); }
    return _cached_encoder_for_AuthenticateClientResponseEsipa(value, elGetter);
}


/* eslint-enable */
