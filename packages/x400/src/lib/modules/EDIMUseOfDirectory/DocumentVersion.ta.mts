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

/* START_OF_SYMBOL_DEFINITION DocumentVersion */
/**
 * @summary DocumentVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentVersion  ::=  TeletexString(SIZE (1..ub-edi-document-version))
 * ```
 */
export type DocumentVersion = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION DocumentVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentVersion */
let _cached_decoder_for_DocumentVersion: $.ASN1Decoder<DocumentVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentVersion */

/* START_OF_SYMBOL_DEFINITION _decode_DocumentVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) DocumentVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DocumentVersion} The decoded data structure.
 */
export function _decode_DocumentVersion(el: _Element) {
    if (!_cached_decoder_for_DocumentVersion) {
        _cached_decoder_for_DocumentVersion = $._decodeTeletexString;
    }
    return _cached_decoder_for_DocumentVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DocumentVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentVersion */
let _cached_encoder_for_DocumentVersion: $.ASN1Encoder<DocumentVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentVersion */

/* START_OF_SYMBOL_DEFINITION _encode_DocumentVersion */
/**
 * @summary Encodes a(n) DocumentVersion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentVersion, encoded as an ASN.1 Element.
 */
export function _encode_DocumentVersion(
    value: DocumentVersion,
    elGetter: $.ASN1Encoder<DocumentVersion>
) {
    if (!_cached_encoder_for_DocumentVersion) {
        _cached_encoder_for_DocumentVersion = $._encodeTeletexString;
    }
    return _cached_encoder_for_DocumentVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DocumentVersion */

/* eslint-enable */
