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
    ASN1Element,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary MixedModeBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MixedModeBodyPart  ::=  SEQUENCE OF Interchange-Data-Element
 * ```
 */
export type MixedModeBodyPart = ASN1Element[]; // SequenceOfType

let _cached_decoder_for_MixedModeBodyPart: $.ASN1Decoder<MixedModeBodyPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MixedModeBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MixedModeBodyPart} The decoded data structure.
 */
export function _decode_MixedModeBodyPart(el: _Element) {
    if (!_cached_decoder_for_MixedModeBodyPart) {
        _cached_decoder_for_MixedModeBodyPart = $._decodeSequenceOf<ASN1Element>(
            () => $._decodeAny
        );
    }
    return _cached_decoder_for_MixedModeBodyPart(el);
}

let _cached_encoder_for_MixedModeBodyPart: $.ASN1Encoder<MixedModeBodyPart> | null = null;

/**
 * @summary Encodes a(n) MixedModeBodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MixedModeBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_MixedModeBodyPart(
    value: MixedModeBodyPart,
    elGetter: $.ASN1Encoder<MixedModeBodyPart>
) {
    if (!_cached_encoder_for_MixedModeBodyPart) {
        _cached_encoder_for_MixedModeBodyPart = $._encodeSequenceOf<ASN1Element>(
            () => $._encodeAny,
            $.BER
        );
    }
    return _cached_encoder_for_MixedModeBodyPart(value, elGetter);
}


/* eslint-enable */
