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
import {
    UniversalExtensionPhysicalDeliveryAddressComponents,
    _decode_UniversalExtensionPhysicalDeliveryAddressComponents,
    _encode_UniversalExtensionPhysicalDeliveryAddressComponents,
} from '../MTSAbstractService/UniversalExtensionPhysicalDeliveryAddressComponents.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_extension_physical_delivery_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-extension-physical-delivery-address-components EXTENSION-ATTRIBUTE ::= {UniversalExtensionPhysicalDeliveryAddressComponents
 *        IDENTIFIED BY  34
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalExtensionPhysicalDeliveryAddressComponents>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalExtensionPhysicalDeliveryAddressComponents>}
 */
export const universal_extension_physical_delivery_address_components: EXTENSION_ATTRIBUTE<UniversalExtensionPhysicalDeliveryAddressComponents> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalExtensionPhysicalDeliveryAddressComponents,
    },
    encoderFor: {
        '&Type': _encode_UniversalExtensionPhysicalDeliveryAddressComponents,
    },
    '&id': 34 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
