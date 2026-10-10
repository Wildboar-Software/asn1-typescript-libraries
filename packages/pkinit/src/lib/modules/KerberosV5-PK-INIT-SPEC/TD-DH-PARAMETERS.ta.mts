/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/pki-stub";


/**
 * @summary TD_DH_PARAMETERS
 * @description
 *
 * Typed-data value for `data-type` {@link td_dh_parameters}, in
 * the e-data of `KDC_ERR_DH_KEY_PARAMETERS_NOT_ACCEPTED` (65).
 * Each `AlgorithmIdentifier` is a Diffie-Hellman domain
 * parameter set the KDC supports, most preferred first. For
 * MODP, fill the identifier as in
 * [RFC 3279, section 2.3.3](https://www.rfc-editor.org/rfc/rfc3279#section-2.3.3).
 * The client should pick one set and retry.
 *
 * Kerberos errors are not integrity protected, so an attacker
 * can change this list. Local policy can restrict the acceptable
 * parameters, or refuse to negotiate them.
 *
 * [RFC 4556, section 3.2.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.2)
 * and
 * [section 4](https://www.rfc-editor.org/rfc/rfc4556#section-4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TD-DH-PARAMETERS  ::=  SEQUENCE OF AlgorithmIdentifier
 * ```
 */
export
type TD_DH_PARAMETERS = AlgorithmIdentifier[]; // SequenceOfType

let _cached_decoder_for_TD_DH_PARAMETERS: $.ASN1Decoder<TD_DH_PARAMETERS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TD_DH_PARAMETERS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TD_DH_PARAMETERS (el: _Element): TD_DH_PARAMETERS {
    if (!_cached_decoder_for_TD_DH_PARAMETERS) { _cached_decoder_for_TD_DH_PARAMETERS = $._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier); }
    return _cached_decoder_for_TD_DH_PARAMETERS(el);
}

let _cached_encoder_for_TD_DH_PARAMETERS: $.ASN1Encoder<TD_DH_PARAMETERS> | null = null;

/**
 * @summary Encodes a(n) TD_DH_PARAMETERS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TD_DH_PARAMETERS, encoded as an ASN.1 Element.
 */
export
function _encode_TD_DH_PARAMETERS (value: TD_DH_PARAMETERS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TD_DH_PARAMETERS) { _cached_encoder_for_TD_DH_PARAMETERS = $._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, $.BER); }
    return _cached_encoder_for_TD_DH_PARAMETERS(value, elGetter);
}


/* eslint-enable */
