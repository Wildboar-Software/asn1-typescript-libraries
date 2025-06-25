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
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
/**
 * @summary ContentConfidentialityAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentConfidentialityAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type ContentConfidentialityAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_ContentConfidentialityAlgorithmIdentifier: $.ASN1Decoder<ContentConfidentialityAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentConfidentialityAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentConfidentialityAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_ContentConfidentialityAlgorithmIdentifier(
    el: _Element
): ContentConfidentialityAlgorithmIdentifier {
    if (!_cached_decoder_for_ContentConfidentialityAlgorithmIdentifier) {
        _cached_decoder_for_ContentConfidentialityAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ContentConfidentialityAlgorithmIdentifier(el);
}

let _cached_encoder_for_ContentConfidentialityAlgorithmIdentifier: $.ASN1Encoder<ContentConfidentialityAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) ContentConfidentialityAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentConfidentialityAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ContentConfidentialityAlgorithmIdentifier(
    value: ContentConfidentialityAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<ContentConfidentialityAlgorithmIdentifier>
): _Element {
    if (!_cached_encoder_for_ContentConfidentialityAlgorithmIdentifier) {
        _cached_encoder_for_ContentConfidentialityAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ContentConfidentialityAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
