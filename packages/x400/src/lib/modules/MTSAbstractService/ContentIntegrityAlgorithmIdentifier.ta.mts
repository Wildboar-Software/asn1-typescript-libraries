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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ContentIntegrityAlgorithmIdentifier */
/**
 * @summary ContentIntegrityAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentIntegrityAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type ContentIntegrityAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ContentIntegrityAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentIntegrityAlgorithmIdentifier */
let _cached_decoder_for_ContentIntegrityAlgorithmIdentifier: $.ASN1Decoder<ContentIntegrityAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentIntegrityAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ContentIntegrityAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentIntegrityAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentIntegrityAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_ContentIntegrityAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_ContentIntegrityAlgorithmIdentifier) {
        _cached_decoder_for_ContentIntegrityAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ContentIntegrityAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentIntegrityAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentIntegrityAlgorithmIdentifier */
let _cached_encoder_for_ContentIntegrityAlgorithmIdentifier: $.ASN1Encoder<ContentIntegrityAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentIntegrityAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ContentIntegrityAlgorithmIdentifier */
/**
 * @summary Encodes a(n) ContentIntegrityAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentIntegrityAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ContentIntegrityAlgorithmIdentifier(
    value: ContentIntegrityAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<ContentIntegrityAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_ContentIntegrityAlgorithmIdentifier) {
        _cached_encoder_for_ContentIntegrityAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ContentIntegrityAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentIntegrityAlgorithmIdentifier */

/* eslint-enable */
