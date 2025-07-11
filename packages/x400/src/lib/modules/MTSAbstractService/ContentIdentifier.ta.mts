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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ContentIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentIdentifier  ::=
 *   [APPLICATION 10]  PrintableString(SIZE (1..ub-content-id-length))
 * ```
 */
export type ContentIdentifier = PrintableString; // PrintableString

let _cached_decoder_for_ContentIdentifier: $.ASN1Decoder<ContentIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentIdentifier} The decoded data structure.
 */
export function _decode_ContentIdentifier(el: _Element): ContentIdentifier {
    if (!_cached_decoder_for_ContentIdentifier) {
        _cached_decoder_for_ContentIdentifier = $._decode_implicit<ContentIdentifier>(
            () => $._decodePrintableString
        );
    }
    return _cached_decoder_for_ContentIdentifier(el);
}

let _cached_encoder_for_ContentIdentifier: $.ASN1Encoder<ContentIdentifier> | null = null;

/**
 * @summary Encodes a(n) ContentIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ContentIdentifier(
    value: ContentIdentifier,
    elGetter: $.ASN1Encoder<ContentIdentifier>
): _Element {
    if (!_cached_encoder_for_ContentIdentifier) {
        _cached_encoder_for_ContentIdentifier = $._encode_implicit(
            _TagClass.application,
            10,
            () => $._encodePrintableString,
            $.BER
        );
    }
    return _cached_encoder_for_ContentIdentifier(value, elGetter);
}


/* eslint-enable */
