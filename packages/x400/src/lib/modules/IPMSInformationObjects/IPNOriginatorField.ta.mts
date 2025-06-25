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
 * @summary IPNOriginatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPNOriginatorField  ::=  ORDescriptor
 * ```
 */
export type IPNOriginatorField = ORDescriptor; // DefinedType

let _cached_decoder_for_IPNOriginatorField: $.ASN1Decoder<IPNOriginatorField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPNOriginatorField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPNOriginatorField} The decoded data structure.
 */
export function _decode_IPNOriginatorField(el: _Element): IPNOriginatorField {
    if (!_cached_decoder_for_IPNOriginatorField) {
        _cached_decoder_for_IPNOriginatorField = _decode_ORDescriptor;
    }
    return _cached_decoder_for_IPNOriginatorField(el);
}

let _cached_encoder_for_IPNOriginatorField: $.ASN1Encoder<IPNOriginatorField> | null = null;

/**
 * @summary Encodes a(n) IPNOriginatorField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPNOriginatorField, encoded as an ASN.1 Element.
 */
export function _encode_IPNOriginatorField(
    value: IPNOriginatorField,
    elGetter: $.ASN1Encoder<IPNOriginatorField>
): _Element {
    if (!_cached_encoder_for_IPNOriginatorField) {
        _cached_encoder_for_IPNOriginatorField = _encode_ORDescriptor;
    }
    return _cached_encoder_for_IPNOriginatorField(value, elGetter);
}


/* eslint-enable */
