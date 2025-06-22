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
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.mjs';
/**
 * @summary UniversalExtensionORAddressComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalExtensionORAddressComponents  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalExtensionORAddressComponents = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalExtensionORAddressComponents: $.ASN1Decoder<UniversalExtensionORAddressComponents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalExtensionORAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalExtensionORAddressComponents} The decoded data structure.
 */
export function _decode_UniversalExtensionORAddressComponents(el: _Element) {
    if (!_cached_decoder_for_UniversalExtensionORAddressComponents) {
        _cached_decoder_for_UniversalExtensionORAddressComponents = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalExtensionORAddressComponents(el);
}

let _cached_encoder_for_UniversalExtensionORAddressComponents: $.ASN1Encoder<UniversalExtensionORAddressComponents> | null = null;

/**
 * @summary Encodes a(n) UniversalExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_UniversalExtensionORAddressComponents(
    value: UniversalExtensionORAddressComponents,
    elGetter: $.ASN1Encoder<UniversalExtensionORAddressComponents>
) {
    if (!_cached_encoder_for_UniversalExtensionORAddressComponents) {
        _cached_encoder_for_UniversalExtensionORAddressComponents = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalExtensionORAddressComponents(
        value,
        elGetter
    );
}


/* eslint-enable */
