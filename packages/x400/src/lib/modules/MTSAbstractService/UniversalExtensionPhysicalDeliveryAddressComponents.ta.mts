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
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.mjs';
/**
 * @summary UniversalExtensionPhysicalDeliveryAddressComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalExtensionPhysicalDeliveryAddressComponents  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalExtensionPhysicalDeliveryAddressComponents = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents: $.ASN1Decoder<UniversalExtensionPhysicalDeliveryAddressComponents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalExtensionPhysicalDeliveryAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalExtensionPhysicalDeliveryAddressComponents} The decoded data structure.
 */
export function _decode_UniversalExtensionPhysicalDeliveryAddressComponents(
    el: _Element
): UniversalExtensionPhysicalDeliveryAddressComponents {
    if (
        !_cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents
    ) {
        _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents(
        el
    );
}

let _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents: $.ASN1Encoder<UniversalExtensionPhysicalDeliveryAddressComponents> | null = null;

/**
 * @summary Encodes a(n) UniversalExtensionPhysicalDeliveryAddressComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalExtensionPhysicalDeliveryAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_UniversalExtensionPhysicalDeliveryAddressComponents(
    value: UniversalExtensionPhysicalDeliveryAddressComponents,
    elGetter: $.ASN1Encoder<UniversalExtensionPhysicalDeliveryAddressComponents>
): _Element {
    if (
        !_cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents
    ) {
        _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents(
        value,
        elGetter
    );
}


/* eslint-enable */
