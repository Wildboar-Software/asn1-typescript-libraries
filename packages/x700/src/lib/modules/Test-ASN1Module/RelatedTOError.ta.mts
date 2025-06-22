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
    RelatedTOError_Item,
    _decode_RelatedTOError_Item,
    _encode_RelatedTOError_Item,
} from '../Test-ASN1Module/RelatedTOError-Item.ta.mjs';
/**
 * @summary RelatedTOError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedTOError  ::=
 *   SEQUENCE OF CHOICE {ableToCreateTO    NULL,
 *                       unableToCreateTO  TONotCreated}
 * ```
 */
export type RelatedTOError = RelatedTOError_Item[]; // SequenceOfType

let _cached_decoder_for_RelatedTOError: $.ASN1Decoder<RelatedTOError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedTOError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedTOError} The decoded data structure.
 */
export function _decode_RelatedTOError(el: _Element) {
    if (!_cached_decoder_for_RelatedTOError) {
        _cached_decoder_for_RelatedTOError = $._decodeSequenceOf<RelatedTOError_Item>(
            () => _decode_RelatedTOError_Item
        );
    }
    return _cached_decoder_for_RelatedTOError(el);
}

let _cached_encoder_for_RelatedTOError: $.ASN1Encoder<RelatedTOError> | null = null;

/**
 * @summary Encodes a(n) RelatedTOError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedTOError, encoded as an ASN.1 Element.
 */
export function _encode_RelatedTOError(
    value: RelatedTOError,
    elGetter: $.ASN1Encoder<RelatedTOError>
) {
    if (!_cached_encoder_for_RelatedTOError) {
        _cached_encoder_for_RelatedTOError = $._encodeSequenceOf<RelatedTOError_Item>(
            () => _encode_RelatedTOError_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RelatedTOError(value, elGetter);
}


/* eslint-enable */
