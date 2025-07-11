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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';
/**
 * @summary ProofOfDeliveryAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfDeliveryAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type ProofOfDeliveryAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_ProofOfDeliveryAlgorithmIdentifier: $.ASN1Decoder<ProofOfDeliveryAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProofOfDeliveryAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProofOfDeliveryAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_ProofOfDeliveryAlgorithmIdentifier(el: _Element): ProofOfDeliveryAlgorithmIdentifier {
    if (!_cached_decoder_for_ProofOfDeliveryAlgorithmIdentifier) {
        _cached_decoder_for_ProofOfDeliveryAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ProofOfDeliveryAlgorithmIdentifier(el);
}

let _cached_encoder_for_ProofOfDeliveryAlgorithmIdentifier: $.ASN1Encoder<ProofOfDeliveryAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) ProofOfDeliveryAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProofOfDeliveryAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ProofOfDeliveryAlgorithmIdentifier(
    value: ProofOfDeliveryAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<ProofOfDeliveryAlgorithmIdentifier>
): _Element {
    if (!_cached_encoder_for_ProofOfDeliveryAlgorithmIdentifier) {
        _cached_encoder_for_ProofOfDeliveryAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ProofOfDeliveryAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
