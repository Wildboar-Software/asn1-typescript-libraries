/* eslint-disable */
import {
    PrintableString,
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

/* START_OF_SYMBOL_DEFINITION LocalReference */
/**
 * @summary LocalReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalReference  ::=  PrintableString(SIZE (0..ub-local-reference))
 * ```
 */
export type LocalReference = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION LocalReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalReference */
let _cached_decoder_for_LocalReference: $.ASN1Decoder<LocalReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalReference */

/* START_OF_SYMBOL_DEFINITION _decode_LocalReference */
/**
 * @summary Decodes an ASN.1 element into a(n) LocalReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalReference} The decoded data structure.
 */
export function _decode_LocalReference(el: _Element) {
    if (!_cached_decoder_for_LocalReference) {
        _cached_decoder_for_LocalReference = $._decodePrintableString;
    }
    return _cached_decoder_for_LocalReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocalReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalReference */
let _cached_encoder_for_LocalReference: $.ASN1Encoder<LocalReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalReference */

/* START_OF_SYMBOL_DEFINITION _encode_LocalReference */
/**
 * @summary Encodes a(n) LocalReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalReference, encoded as an ASN.1 Element.
 */
export function _encode_LocalReference(
    value: LocalReference,
    elGetter: $.ASN1Encoder<LocalReference>
) {
    if (!_cached_encoder_for_LocalReference) {
        _cached_encoder_for_LocalReference = $._encodePrintableString;
    }
    return _cached_encoder_for_LocalReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocalReference */

/* eslint-enable */
