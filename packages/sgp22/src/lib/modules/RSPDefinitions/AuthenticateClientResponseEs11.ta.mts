/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthenticateClientOkEs11, _decode_AuthenticateClientOkEs11, _encode_AuthenticateClientOkEs11 } from "../RSPDefinitions/AuthenticateClientOkEs11.ta.mjs";
import { AuthenticateClientResponseEs11_authenticateClientError, _decode_AuthenticateClientResponseEs11_authenticateClientError, _encode_AuthenticateClientResponseEs11_authenticateClientError } from "../RSPDefinitions/AuthenticateClientResponseEs11-authenticateClientError.ta.mjs";


/**
 * @summary AuthenticateClientResponseEs11
 * @description
 * 
 * ES11.AuthenticateClient response from an SM-DS. Success is a list of event
 * records. `eventIdUnknown` means the MatchingID is not an event this SM-DS
 * holds. SGP.22 v3.1 §5.8.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientResponseEs11  ::=  [64] CHOICE {  -- Tag 'BF40'
 *     authenticateClientOk AuthenticateClientOkEs11,
 *     authenticateClientError INTEGER {
 *         eumCertificateInvalid(1),
 *         eumCertificateExpired(2),
 *         euiccCertificateInvalid(3),
 *         euiccCertificateExpired(4),
 *         euiccSignatureInvalid(5),
 *         eventIdUnknown(6),
 *         invalidTransactionId(7),
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type AuthenticateClientResponseEs11 =
    { authenticateClientOk: AuthenticateClientOkEs11 } /* CHOICE_ALT_ROOT */
    | { authenticateClientError: AuthenticateClientResponseEs11_authenticateClientError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AuthenticateClientResponseEs11: $.ASN1Decoder<AuthenticateClientResponseEs11> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientResponseEs11
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientResponseEs11 (el: _Element): AuthenticateClientResponseEs11 {
    if (!_cached_decoder_for_AuthenticateClientResponseEs11) { _cached_decoder_for_AuthenticateClientResponseEs11 = $._decode_explicit<AuthenticateClientResponseEs11>(() => $._decode_inextensible_choice<AuthenticateClientResponseEs11>({
    "CONTEXT 0": [ "authenticateClientOk", _decode_AuthenticateClientOkEs11 ],
    "CONTEXT 1": [ "authenticateClientError", _decode_AuthenticateClientResponseEs11_authenticateClientError ]
})); }
    return _cached_decoder_for_AuthenticateClientResponseEs11(el);
}

let _cached_encoder_for_AuthenticateClientResponseEs11: $.ASN1Encoder<AuthenticateClientResponseEs11> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientResponseEs11 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientResponseEs11, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientResponseEs11 (value: AuthenticateClientResponseEs11, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientResponseEs11) { _cached_encoder_for_AuthenticateClientResponseEs11 = $._encode_explicit(_TagClass.context, 64, () => $._encode_choice<AuthenticateClientResponseEs11>({
    "authenticateClientOk": _encode_AuthenticateClientOkEs11,
    "authenticateClientError": _encode_AuthenticateClientResponseEs11_authenticateClientError,
}, $.BER), $.BER); }
    return _cached_encoder_for_AuthenticateClientResponseEs11(value, elGetter);
}


/* eslint-enable */
