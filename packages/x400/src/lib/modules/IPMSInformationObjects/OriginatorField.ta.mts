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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
/**
 * @summary OriginatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorField  ::=  ORDescriptor
 * ```
 */
export type OriginatorField = ORDescriptor; // DefinedType

let _cached_decoder_for_OriginatorField: $.ASN1Decoder<OriginatorField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorField} The decoded data structure.
 */
export function _decode_OriginatorField(el: _Element): OriginatorField {
    if (!_cached_decoder_for_OriginatorField) {
        _cached_decoder_for_OriginatorField = _decode_ORDescriptor;
    }
    return _cached_decoder_for_OriginatorField(el);
}

let _cached_encoder_for_OriginatorField: $.ASN1Encoder<OriginatorField> | null = null;

/**
 * @summary Encodes a(n) OriginatorField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorField, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorField(
    value: OriginatorField,
    elGetter: $.ASN1Encoder<OriginatorField>
): _Element {
    if (!_cached_encoder_for_OriginatorField) {
        _cached_encoder_for_OriginatorField = _encode_ORDescriptor;
    }
    return _cached_encoder_for_OriginatorField(value, elGetter);
}


/* eslint-enable */
