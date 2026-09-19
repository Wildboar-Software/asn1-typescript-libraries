/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PINClientID, _decode_PINClientID, _encode_PINClientID } from "../TS33128Payloads/PINClientID.ta.mjs";
// export { PINClientID, _decode_PINClientID, _encode_PINClientID } from "../TS33128Payloads/PINClientID.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { IdentityToken, _decode_IdentityToken, _encode_IdentityToken } from "../TS33128Payloads/IdentityToken.ta.mjs";
// export { IdentityToken, _decode_IdentityToken, _encode_IdentityToken } from "../TS33128Payloads/IdentityToken.ta.mjs";


/**
 * @summary PINEIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINEIdentity  ::=  CHOICE
 * {
 *     pINClientID   [1] PINClientID,
 *     gPSI          [2] GPSI,
 *     identityToken [3] IdentityToken
 * }
 * ```
 */
export
type PINEIdentity =
    { pINClientID: PINClientID } /* CHOICE_ALT_ROOT */
    | { gPSI: GPSI } /* CHOICE_ALT_ROOT */
    | { identityToken: IdentityToken } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PINEIdentity: $.ASN1Decoder<PINEIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PINEIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PINEIdentity (el: _Element): PINEIdentity {
    if (!_cached_decoder_for_PINEIdentity) { _cached_decoder_for_PINEIdentity = $._decode_inextensible_choice<PINEIdentity>({
    "CONTEXT 1": [ "pINClientID", $._decode_implicit<PINClientID>(() => _decode_PINClientID) ],
    "CONTEXT 2": [ "gPSI", $._decode_explicit<GPSI>(() => _decode_GPSI) ],
    "CONTEXT 3": [ "identityToken", $._decode_implicit<IdentityToken>(() => _decode_IdentityToken) ]
}); }
    return _cached_decoder_for_PINEIdentity(el);
}

let _cached_encoder_for_PINEIdentity: $.ASN1Encoder<PINEIdentity> | null = null;

/**
 * @summary Encodes a(n) PINEIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINEIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_PINEIdentity (value: PINEIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PINEIdentity) { _cached_encoder_for_PINEIdentity = $._encode_choice<PINEIdentity>({
    "pINClientID": $._encode_implicit(_TagClass.context, 1, () => _encode_PINClientID, $.BER),
    "gPSI": $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER),
    "identityToken": $._encode_implicit(_TagClass.context, 3, () => _encode_IdentityToken, $.BER),
}, $.BER); }
    return _cached_encoder_for_PINEIdentity(value, elGetter);
}


/* eslint-enable */
