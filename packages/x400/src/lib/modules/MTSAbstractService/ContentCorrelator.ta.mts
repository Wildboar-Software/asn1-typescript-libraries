/* eslint-disable */
import {
    OCTET_STRING,
    IA5String,
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

/**
 * @summary ContentCorrelator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentCorrelator  ::=  CHOICE {ia5text  IA5String,
 *                               octets   OCTET STRING
 * }
 * ```
 */
export type ContentCorrelator =
    | { ia5text: IA5String } /* CHOICE_ALT_ROOT */
    | { octets: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ContentCorrelator: $.ASN1Decoder<ContentCorrelator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentCorrelator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentCorrelator} The decoded data structure.
 */
export function _decode_ContentCorrelator(el: _Element) {
    if (!_cached_decoder_for_ContentCorrelator) {
        _cached_decoder_for_ContentCorrelator = $._decode_inextensible_choice<ContentCorrelator>(
            {
                'UNIVERSAL 22': ['ia5text', $._decodeIA5String],
                'UNIVERSAL 4': ['octets', $._decodeOctetString],
            }
        );
    }
    return _cached_decoder_for_ContentCorrelator(el);
}

let _cached_encoder_for_ContentCorrelator: $.ASN1Encoder<ContentCorrelator> | null = null;

/**
 * @summary Encodes a(n) ContentCorrelator into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentCorrelator, encoded as an ASN.1 Element.
 */
export function _encode_ContentCorrelator(
    value: ContentCorrelator,
    elGetter: $.ASN1Encoder<ContentCorrelator>
) {
    if (!_cached_encoder_for_ContentCorrelator) {
        _cached_encoder_for_ContentCorrelator = $._encode_choice<ContentCorrelator>(
            {
                ia5text: $._encodeIA5String,
                octets: $._encodeOctetString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContentCorrelator(value, elGetter);
}


/* eslint-enable */
