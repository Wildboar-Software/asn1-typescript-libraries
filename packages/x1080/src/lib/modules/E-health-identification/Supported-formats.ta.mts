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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Supported_formats
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Supported-formats  ::=  CHOICE {
 *   oids  SEQUENCE OF OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type Supported_formats =
    | { oids: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_Supported_formats: $.ASN1Decoder<Supported_formats> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Supported_formats
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Supported_formats} The decoded data structure.
 */
export function _decode_Supported_formats(el: _Element) {
    if (!_cached_decoder_for_Supported_formats) {
        _cached_decoder_for_Supported_formats = $._decode_extensible_choice<Supported_formats>(
            {
                'CONTEXT 0': [
                    'oids',
                    $._decodeSequenceOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Supported_formats(el);
}


let _cached_encoder_for_Supported_formats: $.ASN1Encoder<Supported_formats> | null = null;


/**
 * @summary Encodes a(n) Supported_formats into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Supported_formats, encoded as an ASN.1 Element.
 */
export function _encode_Supported_formats(
    value: Supported_formats,
    elGetter: $.ASN1Encoder<Supported_formats>
) {
    if (!_cached_encoder_for_Supported_formats) {
        _cached_encoder_for_Supported_formats = $._encode_choice<Supported_formats>(
            {
                oids: $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Supported_formats(value, elGetter);
}


/* eslint-enable */
