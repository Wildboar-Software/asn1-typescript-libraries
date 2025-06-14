/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION AlgorithmIdentifier */
/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmIdentifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AlgorithmIdentifier = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmIdentifier */
let _cached_decoder_for_AlgorithmIdentifier: $.ASN1Decoder<AlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_AlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmIdentifier} The decoded data structure.
 */
export function _decode_AlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_AlgorithmIdentifier) {
        _cached_decoder_for_AlgorithmIdentifier = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_AlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmIdentifier */
let _cached_encoder_for_AlgorithmIdentifier: $.ASN1Encoder<AlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_AlgorithmIdentifier */
/**
 * @summary Encodes a(n) AlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmIdentifier(
    value: AlgorithmIdentifier,
    elGetter: $.ASN1Encoder<AlgorithmIdentifier>
) {
    if (!_cached_encoder_for_AlgorithmIdentifier) {
        _cached_encoder_for_AlgorithmIdentifier = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_AlgorithmIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlgorithmIdentifier */

/* eslint-enable */
