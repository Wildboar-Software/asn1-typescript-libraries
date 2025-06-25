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
    BodyPartReference,
    _decode_BodyPartReference,
    _encode_BodyPartReference,
} from '../IPMSInformationObjects/BodyPartReference.ta.mjs';
/**
 * @summary BodyPartReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartReferences  ::=  SEQUENCE OF BodyPartReference
 * ```
 */
export type BodyPartReferences = BodyPartReference[]; // SequenceOfType

let _cached_decoder_for_BodyPartReferences: $.ASN1Decoder<BodyPartReferences> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartReferences} The decoded data structure.
 */
export function _decode_BodyPartReferences(el: _Element): BodyPartReferences {
    if (!_cached_decoder_for_BodyPartReferences) {
        _cached_decoder_for_BodyPartReferences = $._decodeSequenceOf<BodyPartReference>(
            () => _decode_BodyPartReference
        );
    }
    return _cached_decoder_for_BodyPartReferences(el);
}

let _cached_encoder_for_BodyPartReferences: $.ASN1Encoder<BodyPartReferences> | null = null;

/**
 * @summary Encodes a(n) BodyPartReferences into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartReferences, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartReferences(
    value: BodyPartReferences,
    elGetter: $.ASN1Encoder<BodyPartReferences>
): _Element {
    if (!_cached_encoder_for_BodyPartReferences) {
        _cached_encoder_for_BodyPartReferences = $._encodeSequenceOf<BodyPartReference>(
            () => _encode_BodyPartReference,
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartReferences(value, elGetter);
}


/* eslint-enable */
