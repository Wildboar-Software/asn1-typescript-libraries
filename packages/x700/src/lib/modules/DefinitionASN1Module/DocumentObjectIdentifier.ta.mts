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
    OptionallyRegisteredAs,
    _decode_OptionallyRegisteredAs,
    _encode_OptionallyRegisteredAs,
} from '../DefinitionASN1Module/OptionallyRegisteredAs.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DocumentObjectIdentifier */
/**
 * @summary DocumentObjectIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentObjectIdentifier  ::=  OptionallyRegisteredAs
 * ```
 */
export type DocumentObjectIdentifier = OptionallyRegisteredAs; // DefinedType
/* END_OF_SYMBOL_DEFINITION DocumentObjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentObjectIdentifier */
let _cached_decoder_for_DocumentObjectIdentifier: $.ASN1Decoder<DocumentObjectIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentObjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_DocumentObjectIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) DocumentObjectIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DocumentObjectIdentifier} The decoded data structure.
 */
export function _decode_DocumentObjectIdentifier(el: _Element) {
    if (!_cached_decoder_for_DocumentObjectIdentifier) {
        _cached_decoder_for_DocumentObjectIdentifier = _decode_OptionallyRegisteredAs;
    }
    return _cached_decoder_for_DocumentObjectIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DocumentObjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentObjectIdentifier */
let _cached_encoder_for_DocumentObjectIdentifier: $.ASN1Encoder<DocumentObjectIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentObjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_DocumentObjectIdentifier */
/**
 * @summary Encodes a(n) DocumentObjectIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentObjectIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_DocumentObjectIdentifier(
    value: DocumentObjectIdentifier,
    elGetter: $.ASN1Encoder<DocumentObjectIdentifier>
) {
    if (!_cached_encoder_for_DocumentObjectIdentifier) {
        _cached_encoder_for_DocumentObjectIdentifier = _encode_OptionallyRegisteredAs;
    }
    return _cached_encoder_for_DocumentObjectIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DocumentObjectIdentifier */

/* eslint-enable */
