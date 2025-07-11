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
 * @summary CirculationSignatureAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationSignatureAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type CirculationSignatureAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_CirculationSignatureAlgorithmIdentifier: $.ASN1Decoder<CirculationSignatureAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CirculationSignatureAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationSignatureAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_CirculationSignatureAlgorithmIdentifier(el: _Element): CirculationSignatureAlgorithmIdentifier {
    if (!_cached_decoder_for_CirculationSignatureAlgorithmIdentifier) {
        _cached_decoder_for_CirculationSignatureAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_CirculationSignatureAlgorithmIdentifier(el);
}

let _cached_encoder_for_CirculationSignatureAlgorithmIdentifier: $.ASN1Encoder<CirculationSignatureAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) CirculationSignatureAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationSignatureAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_CirculationSignatureAlgorithmIdentifier(
    value: CirculationSignatureAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<CirculationSignatureAlgorithmIdentifier>
): _Element {
    if (!_cached_encoder_for_CirculationSignatureAlgorithmIdentifier) {
        _cached_encoder_for_CirculationSignatureAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_CirculationSignatureAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
