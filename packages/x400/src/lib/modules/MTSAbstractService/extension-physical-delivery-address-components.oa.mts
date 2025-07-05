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
    ExtensionPhysicalDeliveryAddressComponents,
    _decode_ExtensionPhysicalDeliveryAddressComponents,
    _encode_ExtensionPhysicalDeliveryAddressComponents,
} from '../MTSAbstractService/ExtensionPhysicalDeliveryAddressComponents.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary extension_physical_delivery_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extension-physical-delivery-address-components EXTENSION-ATTRIBUTE ::= {ExtensionPhysicalDeliveryAddressComponents
 *  IDENTIFIED BY  15
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<ExtensionPhysicalDeliveryAddressComponents>}
 * @implements {EXTENSION_ATTRIBUTE<ExtensionPhysicalDeliveryAddressComponents>}
 */
export const extension_physical_delivery_address_components: EXTENSION_ATTRIBUTE<ExtensionPhysicalDeliveryAddressComponents> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ExtensionPhysicalDeliveryAddressComponents,
    },
    encoderFor: {
        '&Type': _encode_ExtensionPhysicalDeliveryAddressComponents,
    },
    '&id': 15 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
