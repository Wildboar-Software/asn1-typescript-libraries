/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalPrincipalIdentifier, _decode_ExternalPrincipalIdentifier, _encode_ExternalPrincipalIdentifier } from "../KerberosV5-PK-INIT-SPEC/ExternalPrincipalIdentifier.ta.mjs";
// export { ExternalPrincipalIdentifier, _decode_ExternalPrincipalIdentifier, _encode_ExternalPrincipalIdentifier } from "../KerberosV5-PK-INIT-SPEC/ExternalPrincipalIdentifier.ta.mjs";


/**
 * @summary AD_INITIAL_VERIFIED_CAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AD-INITIAL-VERIFIED-CAS  ::=  SEQUENCE OF
 *                 ExternalPrincipalIdentifier
 * ```
 */
export
type AD_INITIAL_VERIFIED_CAS = ExternalPrincipalIdentifier[]; // SequenceOfType

let _cached_decoder_for_AD_INITIAL_VERIFIED_CAS: $.ASN1Decoder<AD_INITIAL_VERIFIED_CAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AD_INITIAL_VERIFIED_CAS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AD_INITIAL_VERIFIED_CAS (el: _Element): AD_INITIAL_VERIFIED_CAS {
    if (!_cached_decoder_for_AD_INITIAL_VERIFIED_CAS) { _cached_decoder_for_AD_INITIAL_VERIFIED_CAS = $._decodeSequenceOf<ExternalPrincipalIdentifier>(() => _decode_ExternalPrincipalIdentifier); }
    return _cached_decoder_for_AD_INITIAL_VERIFIED_CAS(el);
}

let _cached_encoder_for_AD_INITIAL_VERIFIED_CAS: $.ASN1Encoder<AD_INITIAL_VERIFIED_CAS> | null = null;

/**
 * @summary Encodes a(n) AD_INITIAL_VERIFIED_CAS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_INITIAL_VERIFIED_CAS, encoded as an ASN.1 Element.
 */
export
function _encode_AD_INITIAL_VERIFIED_CAS (value: AD_INITIAL_VERIFIED_CAS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AD_INITIAL_VERIFIED_CAS) { _cached_encoder_for_AD_INITIAL_VERIFIED_CAS = $._encodeSequenceOf<ExternalPrincipalIdentifier>(() => _encode_ExternalPrincipalIdentifier, $.BER); }
    return _cached_encoder_for_AD_INITIAL_VERIFIED_CAS(value, elGetter);
}


/* eslint-enable */
