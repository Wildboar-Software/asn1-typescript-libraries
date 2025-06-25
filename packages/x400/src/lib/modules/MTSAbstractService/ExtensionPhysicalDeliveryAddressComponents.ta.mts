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
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta.mjs';
/**
 * @summary ExtensionPhysicalDeliveryAddressComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionPhysicalDeliveryAddressComponents  ::=  PDSParameter
 * ```
 */
export type ExtensionPhysicalDeliveryAddressComponents = PDSParameter; // DefinedType

let _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents: $.ASN1Decoder<ExtensionPhysicalDeliveryAddressComponents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionPhysicalDeliveryAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionPhysicalDeliveryAddressComponents} The decoded data structure.
 */
export function _decode_ExtensionPhysicalDeliveryAddressComponents(
    el: _Element
): ExtensionPhysicalDeliveryAddressComponents {
    if (!_cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents) {
        _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents = _decode_PDSParameter;
    }
    return _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents(el);
}

let _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents: $.ASN1Encoder<ExtensionPhysicalDeliveryAddressComponents> | null = null;

/**
 * @summary Encodes a(n) ExtensionPhysicalDeliveryAddressComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionPhysicalDeliveryAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionPhysicalDeliveryAddressComponents(
    value: ExtensionPhysicalDeliveryAddressComponents,
    elGetter: $.ASN1Encoder<ExtensionPhysicalDeliveryAddressComponents>
): _Element {
    if (!_cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents) {
        _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents = _encode_PDSParameter;
    }
    return _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents(
        value,
        elGetter
    );
}


/* eslint-enable */
