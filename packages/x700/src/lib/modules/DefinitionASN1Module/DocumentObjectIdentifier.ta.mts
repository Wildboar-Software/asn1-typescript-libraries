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
    OptionallyRegisteredAs,
    _decode_OptionallyRegisteredAs,
    _encode_OptionallyRegisteredAs,
} from '../DefinitionASN1Module/OptionallyRegisteredAs.ta.mjs';

/**
 * @summary DocumentObjectIdentifier
 * @description
 *
 * Object identifier of the represented document, or `NULL` if none is
 * assigned. Example: `{2 9 3 2}` is X.721 | ISO/IEC 10165-2 (GDMO
 * registration tables in X.722). Naming attribute for name binding
 * `document-system`. ITU-T Rec. X.750 (10/96)
 * [§8.2.2.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentObjectIdentifier  ::=  OptionallyRegisteredAs
 * ```
 */
export type DocumentObjectIdentifier = OptionallyRegisteredAs; // DefinedType


let _cached_decoder_for_DocumentObjectIdentifier: $.ASN1Decoder<DocumentObjectIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DocumentObjectIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DocumentObjectIdentifier} The decoded data structure.
 */
export function _decode_DocumentObjectIdentifier(el: _Element): DocumentObjectIdentifier {
    if (!_cached_decoder_for_DocumentObjectIdentifier) {
        _cached_decoder_for_DocumentObjectIdentifier = _decode_OptionallyRegisteredAs;
    }
    return _cached_decoder_for_DocumentObjectIdentifier(el);
}


let _cached_encoder_for_DocumentObjectIdentifier: $.ASN1Encoder<DocumentObjectIdentifier> | null = null;


/**
 * @summary Encodes a(n) DocumentObjectIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentObjectIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_DocumentObjectIdentifier(
    value: DocumentObjectIdentifier,
    elGetter: $.ASN1Encoder<DocumentObjectIdentifier>
): _Element {
    if (!_cached_encoder_for_DocumentObjectIdentifier) {
        _cached_encoder_for_DocumentObjectIdentifier = _encode_OptionallyRegisteredAs;
    }
    return _cached_encoder_for_DocumentObjectIdentifier(value, elGetter);
}


/* eslint-enable */
