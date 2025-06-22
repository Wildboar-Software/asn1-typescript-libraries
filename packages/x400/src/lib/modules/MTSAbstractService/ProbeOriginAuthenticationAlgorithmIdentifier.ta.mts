/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
/**
 * @summary ProbeOriginAuthenticationAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeOriginAuthenticationAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type ProbeOriginAuthenticationAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_ProbeOriginAuthenticationAlgorithmIdentifier: $.ASN1Decoder<ProbeOriginAuthenticationAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProbeOriginAuthenticationAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeOriginAuthenticationAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_ProbeOriginAuthenticationAlgorithmIdentifier(
    el: _Element
) {
    if (!_cached_decoder_for_ProbeOriginAuthenticationAlgorithmIdentifier) {
        _cached_decoder_for_ProbeOriginAuthenticationAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ProbeOriginAuthenticationAlgorithmIdentifier(el);
}

let _cached_encoder_for_ProbeOriginAuthenticationAlgorithmIdentifier: $.ASN1Encoder<ProbeOriginAuthenticationAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) ProbeOriginAuthenticationAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeOriginAuthenticationAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ProbeOriginAuthenticationAlgorithmIdentifier(
    value: ProbeOriginAuthenticationAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<ProbeOriginAuthenticationAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_ProbeOriginAuthenticationAlgorithmIdentifier) {
        _cached_encoder_for_ProbeOriginAuthenticationAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ProbeOriginAuthenticationAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
