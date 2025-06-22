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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    EncodedInformationTypesConstraints,
    _decode_EncodedInformationTypesConstraints,
    _encode_EncodedInformationTypesConstraints,
} from '../MTSAbstractService/EncodedInformationTypesConstraints.ta.mjs';
/**
 * @summary PermissibleEncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PermissibleEncodedInformationTypes  ::=
 *   EncodedInformationTypesConstraints
 * ```
 */
export type PermissibleEncodedInformationTypes = EncodedInformationTypesConstraints; // DefinedType

let _cached_decoder_for_PermissibleEncodedInformationTypes: $.ASN1Decoder<PermissibleEncodedInformationTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PermissibleEncodedInformationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PermissibleEncodedInformationTypes} The decoded data structure.
 */
export function _decode_PermissibleEncodedInformationTypes(el: _Element) {
    if (!_cached_decoder_for_PermissibleEncodedInformationTypes) {
        _cached_decoder_for_PermissibleEncodedInformationTypes = _decode_EncodedInformationTypesConstraints;
    }
    return _cached_decoder_for_PermissibleEncodedInformationTypes(el);
}

let _cached_encoder_for_PermissibleEncodedInformationTypes: $.ASN1Encoder<PermissibleEncodedInformationTypes> | null = null;

/**
 * @summary Encodes a(n) PermissibleEncodedInformationTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PermissibleEncodedInformationTypes, encoded as an ASN.1 Element.
 */
export function _encode_PermissibleEncodedInformationTypes(
    value: PermissibleEncodedInformationTypes,
    elGetter: $.ASN1Encoder<PermissibleEncodedInformationTypes>
) {
    if (!_cached_encoder_for_PermissibleEncodedInformationTypes) {
        _cached_encoder_for_PermissibleEncodedInformationTypes = _encode_EncodedInformationTypesConstraints;
    }
    return _cached_encoder_for_PermissibleEncodedInformationTypes(
        value,
        elGetter
    );
}


/* eslint-enable */
