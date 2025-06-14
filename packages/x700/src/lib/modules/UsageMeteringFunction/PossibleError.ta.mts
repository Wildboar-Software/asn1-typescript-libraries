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

/* START_OF_SYMBOL_DEFINITION PossibleError */
/**
 * @summary PossibleError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PossibleError  ::=  OBJECT IDENTIFIER
 * ```
 */
export type PossibleError = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION PossibleError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PossibleError */
let _cached_decoder_for_PossibleError: $.ASN1Decoder<PossibleError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PossibleError */

/* START_OF_SYMBOL_DEFINITION _decode_PossibleError */
/**
 * @summary Decodes an ASN.1 element into a(n) PossibleError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PossibleError} The decoded data structure.
 */
export function _decode_PossibleError(el: _Element) {
    if (!_cached_decoder_for_PossibleError) {
        _cached_decoder_for_PossibleError = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_PossibleError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PossibleError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PossibleError */
let _cached_encoder_for_PossibleError: $.ASN1Encoder<PossibleError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PossibleError */

/* START_OF_SYMBOL_DEFINITION _encode_PossibleError */
/**
 * @summary Encodes a(n) PossibleError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PossibleError, encoded as an ASN.1 Element.
 */
export function _encode_PossibleError(
    value: PossibleError,
    elGetter: $.ASN1Encoder<PossibleError>
) {
    if (!_cached_encoder_for_PossibleError) {
        _cached_encoder_for_PossibleError = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_PossibleError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PossibleError */

/* eslint-enable */
