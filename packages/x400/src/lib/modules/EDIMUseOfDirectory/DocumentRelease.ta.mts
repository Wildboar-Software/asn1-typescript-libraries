/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION DocumentRelease */
/**
 * @summary DocumentRelease
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentRelease  ::=  TeletexString(SIZE (1..ub-edi-document-release))
 * ```
 */
export type DocumentRelease = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION DocumentRelease */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentRelease */
let _cached_decoder_for_DocumentRelease: $.ASN1Decoder<DocumentRelease> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentRelease */

/* START_OF_SYMBOL_DEFINITION _decode_DocumentRelease */
/**
 * @summary Decodes an ASN.1 element into a(n) DocumentRelease
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DocumentRelease} The decoded data structure.
 */
export function _decode_DocumentRelease(el: _Element) {
    if (!_cached_decoder_for_DocumentRelease) {
        _cached_decoder_for_DocumentRelease = $._decodeTeletexString;
    }
    return _cached_decoder_for_DocumentRelease(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DocumentRelease */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentRelease */
let _cached_encoder_for_DocumentRelease: $.ASN1Encoder<DocumentRelease> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentRelease */

/* START_OF_SYMBOL_DEFINITION _encode_DocumentRelease */
/**
 * @summary Encodes a(n) DocumentRelease into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentRelease, encoded as an ASN.1 Element.
 */
export function _encode_DocumentRelease(
    value: DocumentRelease,
    elGetter: $.ASN1Encoder<DocumentRelease>
) {
    if (!_cached_encoder_for_DocumentRelease) {
        _cached_encoder_for_DocumentRelease = $._encodeTeletexString;
    }
    return _cached_encoder_for_DocumentRelease(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DocumentRelease */

/* eslint-enable */
