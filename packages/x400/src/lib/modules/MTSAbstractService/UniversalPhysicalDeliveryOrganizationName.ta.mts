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
 * @summary UniversalPhysicalDeliveryOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryOrganizationName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryOrganizationName = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName: $.ASN1Decoder<UniversalPhysicalDeliveryOrganizationName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOrganizationName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryOrganizationName(
    el: _Element
): UniversalPhysicalDeliveryOrganizationName {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOrganizationName) {
        _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName(el);
}

let _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName: $.ASN1Encoder<UniversalPhysicalDeliveryOrganizationName> | null = null;

/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOrganizationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryOrganizationName(
    value: UniversalPhysicalDeliveryOrganizationName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryOrganizationName>
): _Element {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOrganizationName) {
        _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName(
        value,
        elGetter
    );
}


/* eslint-enable */
