/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthenticateResponseOk, _decode_AuthenticateResponseOk, _encode_AuthenticateResponseOk } from "../SGP32Definitions/AuthenticateResponseOk.ta.mjs";
import { AuthenticateResponseError, _decode_AuthenticateResponseError, _encode_AuthenticateResponseError } from "@wildboar/sgp22/RSPDefinitions";
import { CompactAuthenticateResponseOk, _decode_CompactAuthenticateResponseOk, _encode_CompactAuthenticateResponseOk } from "../SGP32Definitions/CompactAuthenticateResponseOk.ta.mjs";


/**
 * @summary AuthenticateServerResponse
 * @description
 *
 * ES10b.AuthenticateServer response, extended with a compact success
 * alternative for ESipa. The function matches SGP.22 section 5.7.13, with the
 * IPA in the LPA role, and EUICCInfo2 follows section 5.9.2.
 *
 * After the received RSP Server Certificate is attached to the RSP session, if
 * immediate Profile enabling is activated and MatchingID is missing from
 * CtxParams1, the eUICC checks that the OID in that certificate and the FQDN
 * in serverSigned1 match the stored default SM-DP+ OID and FQDN. A match
 * grants immediate enabling of the Profile. The eUICC then generates
 * euiccSigned1 whether or not that match succeeds.
 *
 * Select authenticateResponseOk for the full success form,
 * authenticateResponseError for an error as defined in SGP.22, and
 * compactAuthenticateResponseOk when an IPA with minimizeEsipaBytes sends the
 * success toward the eIM.
 *
 * SGP.32 v1.2, sections 5.9.6 and 5.14.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateServerResponse  ::=  [56] CHOICE { -- Tag 'BF38'
 *     authenticateResponseOk AuthenticateResponseOk,
 *     authenticateResponseError AuthenticateResponseError,
 *     compactAuthenticateResponseOk CompactAuthenticateResponseOk
 * }
 * ```
 */
export
type AuthenticateServerResponse =
    { authenticateResponseOk: AuthenticateResponseOk } /* CHOICE_ALT_ROOT */
    | { authenticateResponseError: AuthenticateResponseError } /* CHOICE_ALT_ROOT */
    | { compactAuthenticateResponseOk: CompactAuthenticateResponseOk } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AuthenticateServerResponse: $.ASN1Decoder<AuthenticateServerResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateServerResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateServerResponse (el: _Element): AuthenticateServerResponse {
    if (!_cached_decoder_for_AuthenticateServerResponse) { _cached_decoder_for_AuthenticateServerResponse = $._decode_explicit<AuthenticateServerResponse>(() => $._decode_inextensible_choice<AuthenticateServerResponse>({
    "CONTEXT 0": [ "authenticateResponseOk", _decode_AuthenticateResponseOk ],
    "CONTEXT 1": [ "authenticateResponseError", _decode_AuthenticateResponseError ],
    "CONTEXT 2": [ "compactAuthenticateResponseOk", _decode_CompactAuthenticateResponseOk ]
})); }
    return _cached_decoder_for_AuthenticateServerResponse(el);
}

let _cached_encoder_for_AuthenticateServerResponse: $.ASN1Encoder<AuthenticateServerResponse> | null = null;

/**
 * @summary Encodes a(n) AuthenticateServerResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateServerResponse, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateServerResponse (value: AuthenticateServerResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateServerResponse) { _cached_encoder_for_AuthenticateServerResponse = $._encode_explicit(_TagClass.context, 56, () => $._encode_choice<AuthenticateServerResponse>({
    "authenticateResponseOk": _encode_AuthenticateResponseOk,
    "authenticateResponseError": _encode_AuthenticateResponseError,
    "compactAuthenticateResponseOk": _encode_CompactAuthenticateResponseOk,
}, $.BER), $.BER); }
    return _cached_encoder_for_AuthenticateServerResponse(value, elGetter);
}


/* eslint-enable */
